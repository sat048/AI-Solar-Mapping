// pages/index.tsx
import { useEffect, useState } from 'react';
import {supabase}  from '../api/config/supabaseClient';

export default function Home() {
  const [solarData, setSolarData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch initial solar data
    const fetchSolarData = async () => {
      const { data, error } = await supabase
        .from('solar_data_storage')
        .select('*');

      if (error) {
        console.error('Error fetching solar data:', error);
      } else {
        setSolarData(data || []);
      }
    };

    fetchSolarData();

    // Subscribe to real-time changes in solar data storage table
    const subscription = supabase
      .channel('solar_data_channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'solar_data_storage' },
        (payload: { new: any; }) => {
          console.log('Change received!', payload);
          setSolarData((currentData) => [payload.new, ...currentData]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <div>
      <h1>Solar Data Storage</h1>
      <ul>
        {solarData.map((data) => (
          <li key={data.id}>
            Location: {data.location}, Solar Output: {data.solar_output}
          </li>
        ))}
      </ul>
    </div>
  );
}

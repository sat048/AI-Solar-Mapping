export async function POST(req: Request) {
    try {
      const { location } = await req.json();
  
      if (!location) {
        return Response.json({ error: 'Location not provided' }, { status: 400 });
      }
  
      // Make the fetch call to the Flask server
      const flaskRes = await fetch('https://mhacks-fr47.vercel.app/run-model', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location }),
      });
      const flaskData = await flaskRes.json();
  
      if (!flaskRes.ok) {
        return Response.json({ error: 'Error from Flask server', details: flaskData }, { status: 500 });
      }
  
      // Return the data from the Flask server
      return Response.json(flaskData, { status: 200 });
    } catch (error) {
      // Type guard to check if error is an instance of Error
      if (error instanceof Error) {
        return Response.json({ error: 'Error processing request', details: error.message }, { status: 500 });
      } else {
        return Response.json({ error: 'Unknown error occurred' }, { status: 500 });
      }
    }
  }
  

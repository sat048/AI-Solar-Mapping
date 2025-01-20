
// import Link from 'next/link';
// import './globals.css';




// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-[#0d0f12] text-white font-sans">
//         {/* Header */}
//         <header className="bg-[#001f3f] p-5 flex justify-between items-center">
//           <div className="logo">
//             <h2 className="text-2xl"></h2>
//             <img src = '/images/im.svg' alt = 'logo' width={120}  
//                 height={120} />
//           </div>
//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 <Link href="/" className="text-white text-lg hover:underline">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-white text-lg hover:underline">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/functionality" className="text-white text-lg hover:underline">
//                   Functionality
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </header>

//         {/* Main content */}
//         <main className="flex flex-col items-center text-center p-10">
//           {children}
//         </main>

//         {/* Footer */}
//         <footer className="bg-[#001f3f] p-5 text-center text-[#b0b3b8]">
//           <p>© 2024 SolarMap4Good - All Rights Reserved</p>
//         </footer>
//       </body>
//     </html>
//   );
// }

// import Link from 'next/link';
// import './globals.css';

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Add Google Fonts */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;600&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="bg-[#0d0f12] text-white font-sans">
//         {/* Header */}
//         <header className="bg-[#001f3f] p-5 flex justify-between items-center">
//           <div className="logo flex items-center">
//             {/* Logo */}
//             <img
//               src="/images/im.svg" // Path to your logo
//               alt="logo"
//               width={80}  // Adjust the width of the logo
//               height={80} // Adjust the height of the logo
//               className="mr-4" // Adds spacing to the right of the logo
//             />
//             <h2 className="text-2xl font-poppins font-bold">SolarVista</h2>
//           </div>

//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 <Link href="/" className="text-white text-lg hover:underline font-poppins">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-white text-lg hover:underline font-poppins">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/functionality" className="text-white text-lg hover:underline font-poppins">
//                   Functionality
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </header>

//         {/* Main content */}
//         <main className="relative w-full h-screen bg-cover bg-center bg-no-repeat" 
//               style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>

//           {/* Background Overlay */}
//           <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust opacity if needed */}

//           {/* Content on top of the background image */}
//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
//             {children}
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="bg-[#001f3f] p-5 text-center text-[#b0b3b8]">
//           <p>© 2024 SolarVista - All Rights Reserved</p>
//         </footer>
//       </body>
//     </html>
//   );
// }

// import Link from 'next/link';
// import './globals.css';

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Add Google Fonts */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;600&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="bg-[#0d0f12] text-white font-sans">
//         {/* Header */}
//         <header className="bg-[#001f3f] p-5 flex justify-between items-center">
//           <div className="logo flex items-center">
//             {/* Logo */}
//             <img
//               src="/images/im.svg" // Path to your logo
//               alt="logo"
//               width={80}  // Adjust the width of the logo
//               height={80} // Adjust the height of the logo
//               className="mr-4" // Adds spacing to the right of the logo
//             />
//             <h2 className="text-2xl font-poppins font-bold">SolarVista</h2>
//           </div>

//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 <Link href="/" className="text-white text-lg hover:underline font-poppins">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-white text-lg hover:underline font-poppins">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/functionality" className="text-white text-lg hover:underline font-poppins">
//                   Functionality
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </header>

//         {/* Main content */}
//         <main className="relative w-full h-screen bg-cover bg-center bg-no-repeat" 
//               style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
//           {/* Background Overlay */}
//           <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust opacity if needed */}

//           {/* Content on top of the background image */}
//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
//             {children}
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="bg-[#001f3f] p-5 text-center text-[#b0b3b8]">
//           <p>© 2024 SolarVista - All Rights Reserved</p>
//         </footer>
//       </body>
//     </html>
//   );
// }

// import Link from 'next/link';
// import './globals.css';

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Add Google Fonts */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;600&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="bg-[#0d0f12] text-white font-sans">
//         {/* Header */}
//         <header className="bg-[#001f3f] p-5 flex justify-between items-center">
//           <div className="logo flex items-center">
//             {/* Logo with Gradient Text Effect */}
//             <img
//               src="/images/im.svg" // Path to your logo
//               alt="logo"
//               width={80}  // Adjust the width of the logo
//               height={80} // Adjust the height of the logo
//               className="mr-4"
//             />
//             {/* Apply the gradient text effect to the SolarVista heading */}
//             <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#11c4d4] to-[#f1b128]">
//               SolarVista
//             </h2>
//           </div>

//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 {/* Navigation link with default yellow and hover/active blue */}
//                 <Link href="/" className="text-lg font-poppins text-[#f1b128] hover:text-[#007ba7] active:text-[#007ba7] transition-all">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-lg font-poppins text-[#f1b128] hover:text-[#007ba7] active:text-[#007ba7] transition-all">
//                   Vision
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/functionality" className="text-lg font-poppins text-[#f1b128] hover:text-[#007ba7] active:text-[#007ba7] transition-all">
//                   Our Solution
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </header>

//         {/* Main content */}
//         <main className="relative w-full h-screen bg-cover bg-center bg-no-repeat" 
//               style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
//           {/* Background Overlay */}
//           <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust opacity if needed */}

//           {/* Content on top of the background image */}
//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
//             {children}
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="bg-[#001f3f] p-5 text-center text-[#b0b3b8]">
//           <p>© 2024 SolarVista - All Rights Reserved</p>
//         </footer>
//       </body>
//     </html>
//   );
// }

// import Link from 'next/link';
// import './globals.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Add Google Fonts */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;600&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="bg-[#0d0f12] text-white font-sans">
//         {/* Header */}
//         <header className="bg-[#001f3f] p-5 flex justify-between items-center">
//           <div className="logo flex items-center">
//             {/* Logo with Gradient Text Effect */}
//             <img
//               src="/images/im.svg" // Path to your logo
//               alt="logo"
//               width={80}  // Adjust the width of the logo
//               height={80} // Adjust the height of the logo
//               className="mr-4"
//             />
//             {/* Apply the gradient text effect to the SolarVista heading */}
//             <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#11c4d4] to-[#f1b128]">
//               SolarVista
//             </h2>
//           </div>

//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 {/* Navigation link with default yellow and hover/active blue */}
//                 <Link href="/" className="text-lg font-poppins text-[#f1b128] hover:text-[#007ba7] active:text-[#007ba7] transition-all">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-lg font-poppins text-[#f1b128] hover:text-[#007ba7] active:text-[#007ba7] transition-all">
//                   Vision
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/functionality" className="text-lg font-poppins text-[#f1b128] hover:text-[#007ba7] active:text-[#007ba7] transition-all">
//                   Our Solution
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </header>

//         {/* Main content */}
//         <main className="relative w-full h-screen bg-cover bg-center bg-no-repeat" 
//               style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
//           {/* Background Overlay */}
//           <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust opacity if needed */}

//           {/* Content on top of the background image */}
//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
//             {children}
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="bg-[#001f3f] p-5 text-center text-[#b0b3b8]">
//           <h3 className="text-xl mb-4">Who to Reach Out To</h3>
//           <div className="flex justify-center space-x-6 mb-4">
//             {/* Facebook */}
//             <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-[#f1b128] hover:text-blue-500 transition-all">
//               <FontAwesomeIcon icon={faFacebook} size="2x" />
//             </a>
//             {/* Instagram */}
//             <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[#f1b128] hover:text-pink-500 transition-all">
//               <FontAwesomeIcon icon={faInstagram} size="2x" />
//             </a>
//             {/* Twitter */}
//             <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" className="text-[#f1b128] hover:text-blue-400 transition-all">
//               <FontAwesomeIcon icon={faTwitter} size="2x" />
//             </a>
//           </div>
//           <p>© 2024 SolarVista - All Rights Reserved</p>
//         </footer>
//       </body>
//     </html>
//   );
// }

import Link from 'next/link';
import './globals.css';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0d0f12] text-white font-sans">
        {/* Header */}
        <header className="bg-[#001f3f] p-5 flex justify-between items-center">
          <div className="logo flex items-center">
            {/* Logo with Gradient Text Effect */}
            <img
              src="/images/im.svg" // Path to your logo
              alt="logo"
              width={80}  // Adjust the width of the logo
              height={80} // Adjust the height of the logo
              className="mr-4"
            />
            {/* Apply the gradient text effect to the SolarVista heading */}
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#11c4d4] to-[#f1b128]">
              SolarVista
            </h2>
          </div>

          <nav>
            <ul className="flex space-x-6">
              <li>
                {/* Navigation link with default yellow and hover/active blue */}
                <Link href="/functionality" className="text-lg font-poppins text-[#f1b128] hover:text-[#007ba7] active:text-[#007ba7] transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lg font-poppins text-[#f1b128] hover:text-[#007ba7] active:text-[#007ba7] transition-all">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-poppins text-[#f1b128] hover:text-[#007ba7] active:text-[#007ba7] transition-all">
                  Our Solution
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main className="relative w-full h-screen bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust opacity if needed */}

          {/* Content on top of the background image */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#001f3f] p-5 text-center text-[#b0b3b8]">
          <h3 className="text-xl mb-4">Contact Us</h3>
          <div className="flex justify-center space-x-6 mb-4">
            {/* Facebook */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-[#f1b128] hover:text-blue-500 transition-all">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[#f1b128] hover:text-pink-500 transition-all">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            {/* Twitter */}
            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" className="text-[#f1b128] hover:text-blue-400 transition-all">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
          <p>© 2024 SolarVista - All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}

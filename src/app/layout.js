// src/app/layout.js

import Image from 'next/image';
import '/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

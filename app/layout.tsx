import type { Metadata } from "next";
// import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/

const ibmPlexSans = IBM_Plex_Sans({ 
  display: 'swap', 
  subsets: ["latin"], 
  weight: ['500', '600', '700'], 
});

export const metadata: Metadata = {
  title: 'Coffee Connoisseur',
  description: 'Discover your local coffee shops',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}
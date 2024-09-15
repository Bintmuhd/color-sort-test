import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ColorProvider } from "./context/color_context";
import SiteLayout from "./components/site_layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Color Sort Test",
  description: "Interview test for color sort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ColorProvider>
          <div className="container">
            <SiteLayout>{children}</SiteLayout>
          </div>
        </ColorProvider>
      </body>
    </html>
  );
}

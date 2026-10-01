
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";
import { Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";


const GA_ID = process.env.GA_ID;
const environment = process.env.NEXT_PUBLIC_ENV;


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto(
  {
    variable: "--Roboto",
    subsets: ["latin"],
  }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
      <BootstrapClient />
      <head>
        {environment === "production" && GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {environment !== "production" && (
          <meta name="robots" content="noindex, nofollow"></meta>
        )}
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

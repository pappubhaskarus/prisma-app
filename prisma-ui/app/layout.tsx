import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import InitServerComponent from "../components/InitServerComponent";
import { getServerSession } from "next-auth";
import ToastProvider from "@/provider/ToastProvider";
import AuthProvider from "@/provider/SessionProvider";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { DomainProvider } from "../provider/DomainProvider";
import Header from "@/components/auth/layout/Header";
import Footer from "@/components/auth/layout/Footer";

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
  title: process.env.NEXT_PUBLIC_BRAND_NAME,
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DomainProvider>
          <ThemeProvider>
            <InitServerComponent />
            <AuthProvider session={session}>
              <ToastProvider>
                <Header />
                {children}
                <Footer />
              </ToastProvider>
            </AuthProvider>
          </ThemeProvider>
        </DomainProvider>
      </body>
    </html>
  );
}

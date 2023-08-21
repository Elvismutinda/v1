import ActiveSectionContextProvider from "@/context/active-section-context";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elvis Mutinda",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-950 text-gray-50 text-opacity-90 relative pt-28 sm:pt-36`}
      >
        <ActiveSectionContextProvider>
          {children}

          <Toaster position="bottom-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

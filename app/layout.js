import { Inter } from "next/font/google";
import "./globals.css";
import { SkeletonTheme } from "react-loading-skeleton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Geegpay FE Challenge",
  description: "A coding challenge organized by Davey Hert and Geegpay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SkeletonTheme>
          {children}
        </SkeletonTheme>
      </body>
    </html>
  );
}

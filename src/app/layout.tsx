import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "animate.css";
import App from "./App";

const DM_Serif = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title:
    "CNVMONEY : Invest In Mutual Funds, Insurance, Fixed Deposit , Holidays, Properties, Stock Broking, PMS and Loans",
  description:
    "Experience 12%+ CAGR returns in portfolios with CNVMONEY FinTech Pvt. Ltd.. Your trusted financial solution for growth and investment opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={DM_Serif.className}
        data-cz-shortcut-listen="ignore"
        suppressHydrationWarning={true}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}

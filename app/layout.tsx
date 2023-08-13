import "./globals.css";
import { Kanit } from "next/font/google";
import Header from "../components/Header";
import { MyThemeContextProvider } from "@/context/ThemeContext";
import Providers from "./providers";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Toqyzqumalaq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Providers>
          <MyThemeContextProvider>
            <Header />
            <main>{children}</main>
          </MyThemeContextProvider>
        </Providers>
      </body>
    </html>
  );
}

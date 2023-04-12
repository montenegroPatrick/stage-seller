import { inter, roboto, chivo, jetBrains, lobster } from "@/src/assets/font";
import "../src/assets/globals.css";

import Footer from "@/src/components/Footer/Footer";
import NavBar from "@/src/components/Header/NavBar";
import getUser from "@/FetchFunctions/GET/getUser";

export const metadata = {
  title: "StageSeller",
  description: "Generated by student for the students",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${chivo.variable} ${jetBrains.variable} ${lobster.variable}`}
    >
      <body className="bg-black1 font-chivo">
        <NavBar />
        <main className="mt-[10vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

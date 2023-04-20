import {
  inter,
  roboto,
  chivo,
  jetBrains,
  lobster,
  baskerville,
  bebasNeue,
  abril,
  pt,
  raleWay
} from "@/assets/font";
import "@/assets/globals.css";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

import ReactQueryWrapper from "./reactQuerryWrapper";

export const metadata = {
  title: "StageSeller",
  description: "Generated by student for the students",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${inter.variable} ${roboto.variable} ${chivo.variable} ${jetBrains.variable} ${lobster.variable} ${baskerville.variable} ${bebasNeue.variable} ${abril.variable} ${pt.variable} ${raleWay.variable}`}
    >
      <body className="font-raleWay uppercase tracking-tighter gradient bg-white ">
        <ReactQueryWrapper>
          <NavBar />
          {children}
          <Footer />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}

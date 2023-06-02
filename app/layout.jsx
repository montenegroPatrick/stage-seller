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
  raleWay,
} from "@/assets/font";
import "@/assets/globals.css";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

export const metadata = {
  title: "StageSeller",
  description: "Generated by student for the students",
  icon: "@/public/logo_transparent.png",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={` ${inter.variable} ${roboto.variable} ${chivo.variable} ${jetBrains.variable} ${lobster.variable} ${baskerville.variable} ${bebasNeue.variable} ${abril.variable} ${pt.variable} ${raleWay.variable}`}
    >
      <body className="font-raleWay font-light text-sm md:text-md lg:text-lg xl:text-xl">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { inter, roboto, chivo, jetBrains } from "@/src/assets/font";
import "../src/assets/globals.css";

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import Container from "@/src/components/Container";
import NavBar from "@/src/components/Header/NavBar";

export const metadata = {
  title: "StageSeller",
  description: "Generated by student for the students",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${chivo.variable} ${jetBrains.variable}`}
    >
      <body className="bg-whiteBody font-chivo">
        <NavBar />
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}

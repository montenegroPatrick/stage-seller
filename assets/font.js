import {
  Inter,
  Roboto,
  Chivo,
  JetBrains_Mono,
  Lobster,
  Libre_Baskerville
} from "next/font/google";

//Roboto
export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

//Inter
export const inter = Inter({ subsets: ["latin"] });

//Chivo
export const chivo = Chivo({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo",
});

//JetBrains Mono
export const jetBrains = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

//Lobster
export const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lobster",
});


//Libre Baskerville
export const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskerville",
});

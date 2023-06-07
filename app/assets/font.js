import {
  Inter,
  Roboto,
  Chivo,
  JetBrains_Mono,
  Lobster,
  Libre_Baskerville,
  Bebas_Neue,
  Abril_Fatface,
  PT_Mono,
  Quicksand,
  Raleway,
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

//Libre Bebas Neue
export const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebasNeue",
});

//Libre Bebas Neue
export const abril = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abril",
});

//Libre PT
export const pt = PT_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt",
});

//Libre QuickSand
export const quickSand = Quicksand({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quickSand",
});

//Libre Raleway
export const raleWay = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleWay",
});

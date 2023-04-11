import {
  Inter,
  Roboto,
  Chivo,
  JetBrains_Mono,
  Lobster,
} from "next/font/google";

//Roboto
export const roboto = Roboto({
  weight: "300",
  weight: "400",
  weight: "500",
  weight: "700",
  weight: "900",
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
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lobster",
});

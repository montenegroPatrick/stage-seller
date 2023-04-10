import { Inter, Roboto, Chivo, JetBrains_Mono } from "next/font/google";

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


export const inter = Inter({ subsets: ["latin"] });


export const chivo = Chivo({
  weight: "200",
  weight: "300",
  weight: "400",
  weight: "500",
  weight: "600",
  weight: "700",
  weight: "800",
  style: ['normal'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo",
})

export const jetBrains = JetBrains_Mono({
  weight: "200",
  weight: "300",
  weight: "400",
  weight: "500",
  weight: "600",
  weight: "700",
  weight: "800",
  style: ['normal'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
})
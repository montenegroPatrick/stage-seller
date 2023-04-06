import { Inter, Roboto } from "next/font/google";

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
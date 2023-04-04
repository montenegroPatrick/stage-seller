import { Inter, Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
export const inter = Inter({ subsets: ["latin"] });
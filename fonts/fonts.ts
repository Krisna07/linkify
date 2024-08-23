import { Inter, Roboto, Jersey_10 } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const jersey = Jersey_10({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

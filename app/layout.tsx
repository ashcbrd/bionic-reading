import type { Metadata } from "next";
import Image from "next/image";

import Nav from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Bioreader",
  description:
    "Welcome to [Application Name], a revolutionary Bionic Reading app that harmonizes cutting-edge technology with your cognitive processes, optimizing reading flow and enhancing comprehension. Experience effortless and personalized reading, tailored to your comfort.",
  keywords: [
    "Bionic Reading",
    "Reading",
    "Efficient Reading",
    "Speed Reading",
    "Chunking",
    "Scanning",
    "Reading Techniques",
  ],
  openGraph: {
    images: "/og_image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

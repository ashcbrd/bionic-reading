import type { Metadata } from "next";

import Nav from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

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
      <body className="hidden md:flex flex-col relative overflow-x-hidden">
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
      {/* <div className="flex flex-col gap-y-10 md:hidden px-14 justify-center items-center w-screen h-screen">
        <Image src="/logo.png" width={200} height={200} alt="logo" />

        <p className="font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500">
          Apologies, our website isn&apos;t fully mobile-friendly yet. For the
          best experience, try it on desktop or laptop.
        </p>
      </div> */}
    </html>
  );
}


// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import CustomCursor from "@/components/Customcursor";
// import ThreeBackground from "@/components/ThreeBackground";
// import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "ProjectForge — Engineering Projects",
//   description: "Ready-made and custom engineering projects for students",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <ThreeBackground />
//         <CustomCursor />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
export const dynamic = "force-dynamic"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import dynamic from "next/dynamic";
import FluidCursor from "@/components/FluidCursor";
import Background from "@/components/Background";
import Footer from "@/components/Footer";



const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Projixio — Engineering Projects",
//   description: "Ready-made and custom engineering projects for students",
// };

// export const metadata: Metadata = {
//   title: "Projixio | Engineering Projects for CSE, ECE, AI, IoT & Robotics",
//   description:
//     "Projixio provides ready-made and custom engineering projects for CSE, ECE, AI/ML, IoT, Robotics and Data Science students with code, report and setup support.",

//   keywords: [
//     "engineering projects",
//     "cse projects",
//     "ece projects",
//     "iot projects",
//     "aiml projects",
//     "robotics projects",
//     "final year projects",
//     "mini projects",
//     "IEEE projects",
//     "Projixio",
//   ],

//   authors: [{ name: "Projixio" }],

//   openGraph: {
//     title: "Projixio",
//     description:
//       "Engineering projects for students with code, PPT, documentation and support.",
//     url: "https://projixio.in",
//     siteName: "Projixio",
//     images: [
//       {
//         url: "/logo.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     type: "website",
//   },
// };

export const metadata: Metadata = {
  title: "Projixio | Engineering Projects for CSE, ECE, AI, IoT & Robotics",

  description:
    "Projixio provides ready-made and custom engineering projects for CSE, ECE, AI/ML, IoT, Robotics and Data Science students with code, report and setup support.",

  keywords: [
    "engineering projects",
    "cse projects",
    "ece projects",
    "iot projects",
    "aiml projects",
    "robotics projects",
    "final year projects",
    "mini projects",
    "IEEE projects",
    "Projixio",
  ],

  authors: [{ name: "Projixio" }],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Projixio",
    description:
      "Engineering projects for students with code, PPT, documentation and support.",
    url: "https://projixio.in",
    siteName: "Projixio",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* z-index 0 — pure CSS/canvas background, no Three.js */}
        <Background />

        {/* z-index 1 — WebGL fluid simulation, pointer-events:none */}
        <FluidCursor />

        {/* z-index 10+ — all UI content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
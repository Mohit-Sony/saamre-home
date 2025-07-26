import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Saanre | Jewellery Manufacturing",
  description: "Saanre is a premium jewelry manufacturing studio based in Jaipur & Bikaner, blending traditional Indian artistry with modern design and CAD-led precision. Trusted by global brands for end-to-end, confidential, and scalable production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

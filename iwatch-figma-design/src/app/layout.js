import "./globals.css";
import Header from "@/components/header/Header";

export const metadata = {
  title: "iWatch Figma Design",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

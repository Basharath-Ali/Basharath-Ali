export const metadata = {
  title: "Mohammed Basharath Ali | Portfolio",
  description: "Global Talent & Revenue Growth Strategist",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}

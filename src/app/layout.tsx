import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Button } from "~/components/ui/button";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="dark overscroll-y-none">
        <header className="sticky top-0 flex h-[5.5rem] items-center justify-between border-b border-border bg-background px-4">
          <p className="text-xl">Company logo</p>
          <Button>Connect wallet</Button>
        </header>
        {children}
      </body>
    </html>
  );
}

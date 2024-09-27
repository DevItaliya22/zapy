import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/providers/modal-provider";

export const metadata: Metadata = {
  title: "Zapy",
  description: "Automate your shits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  console.log(process.env.DATABASE_URL);
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
                {children}
            </ModalProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

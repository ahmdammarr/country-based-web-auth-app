import type { Metadata } from "next";
import "../globals.css";

import { IBaseParams } from "@core/types/base-params.type";
import { Locales } from "@core/enums/locales";

export const metadata: Metadata = {
  title: "Auth ap",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: IBaseParams["params"];
}>) {
  const appdirection = params.locale === Locales.AR ? "rtl" : "ltr";
  return (
    <html lang={params.locale} dir={appdirection}>
      <body className="font-brand">
        <div className={styles.mainContainer}>{children}</div>
      </body>
    </html>
  );
}

const styles = {
  mainContainer: "flex flex-col h-screen",
  footer: "sticky bottom-0 w-full z-[5]",
  header: "sticky top-0 w-full z-10",
};

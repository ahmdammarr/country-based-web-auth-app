"use client";
import { Button } from "@core/components/ui/base";

import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

import { COUNTRIES } from "@core/enums/countries";

import { Locales } from "@core/enums/locales";
import { getTranslations } from "@core/utils/getTranslations";

import { setCountry } from "@core/server/services/setCountry";

interface ISettingsInterface {
  locale: Locales;
}
export const Settings: FC<ISettingsInterface> = ({ locale }) => {
  const pathname = usePathname();
  const { replace, refresh } = useRouter();

  const changeLocale = (locale: Locales) => {
    const splittedPath = pathname.split("/");
    const pathWithoutLocale = pathname
      .split("/")
      .slice(2, splittedPath.length)
      .join("/");

    replace(`/${locale}/${pathWithoutLocale}`);
  };

  const changeCountry = (country: COUNTRIES) => {
    setCountry(country);
    refresh();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.label}>
        {getTranslations({
          locale,
          key: "change-lang",
        })}
      </h1>
      <div className={styles.buttonContainer}>
        <Button children={"AR"} onClick={() => changeLocale(Locales.AR)} />
        <Button children={"EN"} onClick={() => changeLocale(Locales.EN)} />
        <Button children={"IN"} onClick={() => changeLocale(Locales.HI)} />
      </div>
      <h1 className={styles.label}>
        {getTranslations({
          locale,
          key: "change-lang",
        })}
      </h1>
      <div className={styles.buttonContainer}>
        <Button
          children={COUNTRIES.AE}
          onClick={() => changeCountry(COUNTRIES.AE)}
        />
        <Button
          children={COUNTRIES.US}
          onClick={() => changeCountry(COUNTRIES.US)}
        />
        <Button
          children={COUNTRIES.EG}
          onClick={() => changeCountry(COUNTRIES.EG)}
        />
        <Button
          children={COUNTRIES.IN}
          onClick={() => changeCountry(COUNTRIES.IN)}
        />
      </div>
    </div>
  );
};

const styles = {
  container: "w-full flex flex-col justify-center p-10 bg-red ",
  label: "text-md",
  buttonContainer: "flex w-full items-center p-4 justify-evenly",
};

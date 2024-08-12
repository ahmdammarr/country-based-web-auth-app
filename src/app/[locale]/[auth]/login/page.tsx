import { IBaseParams } from "@core/types/base-params.type";
import { LoginForm } from "./components/login-form";
import { getCountry } from "@core/utils/getCountry";
import { Settings } from "@core/components/ui/settings/settings";

export default async function Login({ params: { locale } }: IBaseParams) {
  const country = getCountry();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <LoginForm country={country} locale={locale} />
      </div>
      <Settings locale={locale} />
    </div>
  );
}

const styles = {
  mainContainer:
    "flex flex-col  self-center rounded-30 w-450 h-full bg-white align-middle justify-around content-center px-10",
  innerContainer: "flex flex-col justify-center",
  content: "self-center",
  forgotPassword: "flex w-full justify-end hover:underline",
};

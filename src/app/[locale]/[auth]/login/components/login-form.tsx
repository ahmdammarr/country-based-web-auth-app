"use client";
import { Button, TextInput } from "@core/components/ui/base";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

import { signIn } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { COUNTRIES } from "@core/enums/countries";
import { getLoginvalidation } from "@core/utils/validations";
import { Locales } from "@core/enums/locales";
import { getTranslations } from "@core/utils/getTranslations";

interface LoginFormInput {
  username: string;
  password: string;
}
const invalidResposeErrorMessage = "Invalid email or password";
interface ILoginFormInterface {
  country: COUNTRIES;
  locale: Locales;
}
export const LoginForm: FC<ILoginFormInterface> = ({ country, locale }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: yupResolver(getLoginvalidation({ country, locale })),
  });
  const { replace } = useRouter();

  const [isLoading, setisLoading] = useState(false);
  const [apiError, setError] = useState("");
  const onSubmit: SubmitHandler<LoginFormInput> = async ({
    username,
    password,
  }) => {
    setisLoading(true);
    const response = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });
    if (response?.status === 401) {
      setError(
        getTranslations({
          locale,
          key: "invalid_user",
        })
      );
      return;
    }
    replace("/");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.titleContainer}>
          <h1 className="text-lg">
            {getTranslations({
              locale,
              key: "login",
            })}
          </h1>
        </div>
        <div>
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <TextInput
                  id="username"
                  value={value}
                  onChange={onChange}
                  type="text"
                  label={getTranslations({
                    locale,
                    key: "username",
                  })}
                  placeholder={getTranslations({
                    locale,
                    key: "username",
                  })}
                  error={errors.username?.message}
                />
              );
            }}
          />
        </div>

        <div className="pt-6">
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <TextInput
                  id="password"
                  value={value}
                  onChange={onChange}
                  type="text"
                  label={getTranslations({
                    locale,
                    key: "password",
                  })}
                  placeholder={getTranslations({
                    locale,
                    key: "password",
                  })}
                  error={errors.password?.message}
                />
              );
            }}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            children={getTranslations({
              locale,
              key: "login",
            })}
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          />
          {Boolean(isLoading) && (
            <div className={styles.loader}> Loading ... </div>
          )}
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: "pt-10",
  titleContainer: "flex justify-center",
  form: "flex flex-col px-5",
  content: "self-center",
  forgotPassword: "flex w-full justify-end hover:underline",
  buttonContainer: "flex flex-col items-center pt-10 self-center h-24",
  invalidResponse: "text-system-red text-sm mt-1",
  loader: "mt-7 w-16",
};

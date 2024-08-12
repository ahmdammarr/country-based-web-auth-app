import React from "react";

type BASE_BUTTON_PROPS = {
  title: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Component(props: BASE_BUTTON_PROPS) {
  const { title, ...rest } = props;
  // Note: this component should be a wrapper of a component from the
  // design system (if a warapper was needed)
  return <button {...rest}>{title}</button>;
}


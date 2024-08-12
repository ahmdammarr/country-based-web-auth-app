import React from "react";

export default function Loading() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>auth loading</div>
      </div>
    </div>
  );
}

const styles = {
  mainContainer:
    "flex flex-col  self-center rounded-30 w-400 h-450 bg-white align-middle justify-around content-center px-10",
  innerContainer: "flex flex-col  justify-center",
  content: "self-center w-full",
  forgotPassword: "flex w-full justify-end hover:underline",
};

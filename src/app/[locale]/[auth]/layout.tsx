import backgroundImage from "@root//public/assets/bg.jpg";

import "../../globals.css";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-black w-full bg-opacity-80 absolute top-0 bottom-0 right-0 left-0 z-10" />
      <div
        className="w-full h-screen bg-center bg-cover bg-no-repeat overflow-scroll overscroll-none"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        <div className="flex flex-col justify-center h-full relative z-20">
          <div className="flex w-full justify-evenly">{children}</div>
        </div>
      </div>
    </>
  );
}

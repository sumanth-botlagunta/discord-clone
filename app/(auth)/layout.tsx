import React from "react";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex h-screen min-h-screen w-full items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;

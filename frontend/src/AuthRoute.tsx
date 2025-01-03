import { FC, PropsWithChildren } from "react";
import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const authInfo = useAuth();

  if (!authInfo.checked) {
    return <div>Loading...</div>;
  }

  if (authInfo.isAuthenticated) {
    return <>{children}</>;
  }

  return <Navigate to={"/signin"} />;
};

export const GuestRoute: FC<PropsWithChildren> = ({ children }) => {
  const authInfo = useAuth();

  if (!authInfo.checked) {
    return <div>Loading...</div>;
  }

  if (authInfo.isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

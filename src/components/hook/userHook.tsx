"use client";

import { createContext, useContext, useState } from "react";
type User = {
  id: string;
  userName: string;
  displayName: string;
};

type UserContextType = {
  getUserId: User | null;
  setGetUserId: React.Dispatch<React.SetStateAction<User | null>>;
};
export const UserContext = createContext<UserContextType | null>(null);
type props = {
  [propName: string]: any;
};

export const UserContextProvider = (props: props) => {
  const [getUserId, setGetUserId] = useState<User | null>(null);

  const value = {
    getUserId,
    setGetUserId,
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const UserHook = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("lỗi");
  }
  return context;
};

export default UserContextProvider;

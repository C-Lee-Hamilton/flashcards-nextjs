"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type User = {
  email: string;
  username: string;
  pinnedSets: string[];
  lastViewed: string;
};

type UserContextProps = {
  user: User | null;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({
  children,
  initialUser,
}: {
  children: ReactNode;
  initialUser?: User; // server can pass initial user
}) => {
  const [user, setUser] = useState<User | null>(initialUser || null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used inside UserProvider");
  return context;
};

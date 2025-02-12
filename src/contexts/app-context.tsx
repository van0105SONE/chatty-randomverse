import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { supabase } from "../../supabase";

interface AppContextType {
  username: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  console.log("chatapp is about to start........ 🎉");
  let username: string = localStorage.getItem("usid");

  const createUser = async () => {
    if (username == null || username == "") {
      const newUsername = `user-${Date.now() + Math.random()}`;
      console.log("new user: ", newUsername);
      const { error } = await supabase.from("users").insert({ username: newUsername });
      console.log("error response : ", error);
      if (error == null || error == undefined) {
        username = newUsername;
        localStorage.setItem("usid", newUsername);
      }
    }
  };

  useEffect(() => {
    createUser();
  }, []);

  if (username == null || username == "") {
    createUser();
  }
  return <AppContext.Provider value={{ username }}>{children}</AppContext.Provider>;
};

export const App = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

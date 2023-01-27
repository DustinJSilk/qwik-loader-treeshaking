import { createContext, useContextProvider, useSignal } from "@builder.io/qwik";
import { getAuth } from "firebase-admin/auth";
import { initializeApp } from "firebase-admin/app";

export const USER_CONTEXT = createContext<{ user: string }>(
  "com.mycompany.user"
);

export const authenticateUser = async (): Promise<string> => {
  console.log("This should not run in the browser");

  console.log(getAuth, initializeApp);
  // ... Do some backend only logic

  return "my-data";
};

export function useAuth(userData: string) {
  const user = useSignal<{ user: string }>({ user: userData });

  useContextProvider(USER_CONTEXT, user.value);
}

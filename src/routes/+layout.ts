
import { initializeApp } from "firebase/app";

// Firebase の設定
const config = {
  databaseURL: (import.meta as any).env.VITE_DATABASE_URL,
};
initializeApp(config);

export const prerender = true;
export const ssr = false;

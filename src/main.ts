import { initializeApp } from "firebase/app";
import App from "@/App.svelte";

document.oncontextmenu = () => {
  alert("\t※※※注意※※※\n★★★右クリック禁止！★★★");
  return false;
};

// ServiceWorker の登録
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then((registration) => {
      if (typeof registration.update == "function") {
        registration.update();
      }
    })
    .catch((error) => {
      console.log("Error Log: " + error);
    });
}

// Firebase の設定
const config = {
  databaseURL: (import.meta as any).env.VITE_DATABASE_URL,
};
initializeApp(config);

const app = new App({
  target: document.getElementById("app")!,
});

export default app;

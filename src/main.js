import dotenv from "dotenv";
import firebase from "firebase/app";
import App from './App.svelte';

dotenv.config();

document.oncontextmenu = () => {
  alert("\t※※※注意※※※\n★★★右クリック禁止！★★★");
  return false;
};

// Firebase の設定
const config = {
  databaseURL: process.env.DATABASE_URL,
};
firebase.initializeApp(config);

const app = new App({
  target: document.body,
});

export default app;

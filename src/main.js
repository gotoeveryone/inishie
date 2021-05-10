import App from './App.svelte';

document.oncontextmenu = () => {
  alert("\t※※※注意※※※\n★★★右クリック禁止！★★★");
  return false;
};

const app = new App({
  target: document.body,
});

export default app;

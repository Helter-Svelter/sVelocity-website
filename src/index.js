import App from './components/App.svelte';
const entry = document.getElementById('app');
const app = new App({
  target: entry,
});

export default app;

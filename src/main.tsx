import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Reset scroll position on page load
window.history.scrollRestoration = 'manual';

// Ensure page starts from top on load/reload
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Force scroll to top immediately
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

// Immediate scroll to top
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<App />);

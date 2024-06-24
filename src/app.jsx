import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <main class="component">
          <div class="file-name">app.jsx</div>
          <div class="file-name-subtitle">The component in Router's `root` prop.</div>
          <nav>
            <a href="/">/index</a>
            <a href="/about">/about</a>
          </nav>
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
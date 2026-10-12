(() => {
  "use strict";
  const style = document.createElement("style");
  style.textContent = `
    :root { color-scheme: dark; font-family: system-ui, sans-serif; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #0d1117; color: #e6edf3; }
    main { width: min(90vw, 720px); padding: 3rem 1rem; text-align: center; }
    h1 { font-size: clamp(3rem, 9vw, 6rem); margin: 0 0 .5rem; }
    p { color: #8b949e; line-height: 1.6; }
    a { color: #58a6ff; }
  `;
  document.head.append(style);
  const main = document.createElement("main");
  const heading = document.createElement("h1");
  heading.textContent = "Karjaa";
  const description = document.createElement("p");
  description.textContent = "Daniel Aspelin · Project foundation";
  const link = document.createElement("a");
  link.href = "https://github.com/DanielAspelin/Karjaa";
  link.textContent = "View repository";
  main.append(heading, description, link);
  document.body.append(main);
})();

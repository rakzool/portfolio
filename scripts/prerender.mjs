import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

// Ship readable HTML, including every skill, to clients that do not execute JS.
// The existing React entry mounts the interactive application over this markup.
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const markup = renderToString(createElement(App));
  const outputPath = new URL('../dist/index.html', import.meta.url);
  const html = await readFile(outputPath, 'utf8');
  if (!html.includes('<div id="root"></div>')) throw new Error('Missing prerender root');
  await writeFile(outputPath, html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`));
  console.log('Prerendered portfolio HTML with all skill categories.');
} finally {
  await server.close();
}

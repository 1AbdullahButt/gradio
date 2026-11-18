---
"@gradio/client": patch
"gradio": patch
---

fix:Use explicit `.js` paths in `@gradio/client` relative imports so its type declarations resolve under `moduleResolution: node16` / `nodenext`

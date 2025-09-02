import { c as createComponent, a as createAstro, r as renderHead, b as renderTemplate } from '../chunks/astro/server_TE6O9r5i.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Test = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  return renderTemplate`<html> <head><title>Test Page</title>${renderHead()}</head> <body> <h1>Astro is working!</h1> <p>If you can see this, the server is running correctly.</p> </body></html>`;
}, "C:/Users/hpenvy/palletizr-shared-components/src/pages/test.astro", void 0);

const $$file = "C:/Users/hpenvy/palletizr-shared-components/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, a as createAstro, d as addAttribute, r as renderHead, e as renderSlot, b as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_TE6O9r5i.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Palletizr Shared Components - Now powered by Astro"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/hpenvy/palletizr-shared-components/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const {
    badgeText = "Professional Calculator",
    subtitleText = "",
    logoUrl = "/logo_bw_long.png",
    logoAlt = "Palletizr Logo",
    href = "/token",
    showBadge = true,
    variant = "default",
    className = ""
  } = Astro2.props;
  const currentUrl = Astro2.url.href;
  let dynamicBadgeText = badgeText;
  let dynamicSubtitleText = subtitleText;
  if (currentUrl.includes("app.palletizr.com")) {
    dynamicBadgeText = "Tutorial";
    dynamicSubtitleText = "";
  } else if (currentUrl.includes("palletizr.com")) {
    dynamicBadgeText = "Try Free";
    dynamicSubtitleText = "No signup required";
  }
  const variantClasses = {
    default: "",
    transparent: "glass-nav",
    glass: "glass-nav"
  };
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`palletizr-nav ${variantClasses[variant]} ${className}`, "class")} data-astro-cid-pux6a34n> <div class="container" data-astro-cid-pux6a34n> <div class="nav-row" data-astro-cid-pux6a34n> <div class="logo-group" data-astro-cid-pux6a34n> <a href="http://palletizr.com" class="logo-link" data-astro-cid-pux6a34n> <img${addAttribute(logoUrl, "src")}${addAttribute(logoAlt, "alt")} class="logo-image" data-astro-cid-pux6a34n> </a> </div> ${showBadge && renderTemplate`<div class="nav-badge" data-astro-cid-pux6a34n> <a class="nav-pill"${addAttribute(href, "href")} data-astro-cid-pux6a34n> ${dynamicBadgeText} </a> ${dynamicSubtitleText && renderTemplate`<p class="nav-subtitle" data-astro-cid-pux6a34n>${dynamicSubtitleText}</p>`} </div>`} </div> </div> </header> `;
}, "C:/Users/hpenvy/palletizr-shared-components/src/components/Navigation.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Palletizr Shared Components - Astro Powered", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Palletizr Shared Components</h1> <p class="subtitle" data-astro-cid-j7pv25f6>Now powered by Astro! 🚀</p> <div class="info-box" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>What's New?</h3> <p data-astro-cid-j7pv25f6>This repository has been upgraded from the old file-copying system to use modern Astro components. Same functionality, better technology!</p> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>✅ Same package name: <code data-astro-cid-j7pv25f6>@palletizr/shared-components</code></li> <li data-astro-cid-j7pv25f6>✅ Same repository: <code data-astro-cid-j7pv25f6>palletizr-shared-components</code></li> <li data-astro-cid-j7pv25f6>✅ Better technology: Now powered by Astro</li> <li data-astro-cid-j7pv25f6>✅ Same components: All your navigation components work the same way</li> </ul> </div> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Navigation Component</h2> <p data-astro-cid-j7pv25f6>Default navigation:</p> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-j7pv25f6": true })} <p data-astro-cid-j7pv25f6>Transparent navigation:</p> ${renderComponent($$result2, "Navigation", $$Navigation, { "variant": "transparent", "data-astro-cid-j7pv25f6": true })} <p data-astro-cid-j7pv25f6>Custom badge:</p> ${renderComponent($$result2, "Navigation", $$Navigation, { "badgeText": "Get Started", "subtitleText": "Join thousands of users", "href": "/signup", "data-astro-cid-j7pv25f6": true })} <p data-astro-cid-j7pv25f6>No badge:</p> ${renderComponent($$result2, "Navigation", $$Navigation, { "showBadge": false, "data-astro-cid-j7pv25f6": true })} </section> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Installation</h2> <p data-astro-cid-j7pv25f6>Install the same package as before:</p> <pre data-astro-cid-j7pv25f6><code data-astro-cid-j7pv25f6>npm install @palletizr/shared-components</code></pre> <p data-astro-cid-j7pv25f6>Use it the same way:</p> <pre data-astro-cid-j7pv25f6><code data-astro-cid-j7pv25f6>import ${$$Navigation} from '@palletizr/shared-components';</code></pre> </section> </main> ` })} `;
}, "C:/Users/hpenvy/palletizr-shared-components/src/pages/index.astro", void 0);

const $$file = "C:/Users/hpenvy/palletizr-shared-components/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

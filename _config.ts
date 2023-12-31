import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import feed from "lume/plugins/feed.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "./src",
  dest: "./dist",
});

site.use(code_highlight());
site.use(feed());
site.use(jsx_preact());
site.use(sitemap());
site.use(tailwindcss({
  extensions: [".html", ".tsx"],
}));
site.use(postcss());

export default site;

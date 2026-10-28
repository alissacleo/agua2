import vue from "@vitejs/plugin-vue";
import { join, parse, resolve } from "path";

// Vite serves folder/index.html at /folder/ and leaves /folder on the home page
// (https://github.com/vitejs/vite/issues/6596). weddings.html is served at /weddings.
const pagesWithoutTrailingSlash = ["weddings"];

export default {
  plugins: [
      vue(),
      {
        name: "serve-without-trailing-slash",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const raw = req.url ?? "/";
            const queryIndex = raw.indexOf("?");
            const path = queryIndex === -1 ? raw : raw.slice(0, queryIndex);
            const search = queryIndex === -1 ? "" : raw.slice(queryIndex);
            const bare = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
            const name = bare.startsWith("/") ? bare.slice(1) : bare;

            if (!pagesWithoutTrailingSlash.includes(name)) {
              next();
              return;
            }

            if (path.endsWith("/")) {
              res.statusCode = 301;
              res.setHeader("Location", bare + search);
              res.end();
              return;
            }

            req.url = `${bare}.html${search}`;
            next();
          });
        },
      },
  ],
  alias: {
    "~": __dirname,
  },
  build: {
    rollupOptions: {
      input: entryPoints(
        "index.html",
        "weddings.html",
      ),
    },
  },
};

function entryPoints(...paths) {
  const entries = paths.map(parse).map(entry => {
    const { dir, base, name, ext } = entry;
    const key = join(dir, name);
    const path = resolve(__dirname, dir, base);
    return [key, path];
  });
  
  const config = Object.fromEntries(entries);
  return config;
}

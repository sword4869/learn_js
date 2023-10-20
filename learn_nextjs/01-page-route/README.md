
# Pages

`/`(http://localhost:3000): `pages/index.js`. The page auto-updates as you edit the file.

`/posts/first-post`(http://localhost:3000/posts/first-post): `pages/posts/first-post`

`/api/hello`(http://localhost:3000/api/hello): This endpoint can be edited in `pages/api/hello.js`. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# CSS

`/components/layout.module.css`(css) → `/components/layout.js`(js component) → `/posts/first-post`(page)

`/styles/Home.module.css`(css) → `/pages/index.js` (page)

`/styles/globals.css`(css) → `/pages/_app.js`→ all pages

# What we do from the init project

1. create a page `/posts/first-post.js`, add its css `/components/layout.module.css` and `/components/layout.js`, link it to `index.js`
2. alter `<main><h1>` of `index.js`, link it to `first-post`.

We use `<Link href>` to replace `<a href>`.
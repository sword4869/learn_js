# What do we do

1. blogs
   create a top-level directory `blogs` which stores some blog documents. These documents have specially configurated in a way that they have a metadata section at the top containing `title` and `date`. That is YAML Front Matter and corresponding parse library `gray-matter`.

2. parse blogs
   create a top-level diretory `lib` and a file `posts.js` inside it. `posts.js` file is used to parse blogs in the `blogs` directory. Function returns a orderd array of objects (fileNameWithoutProfix, title, date).

3. index.js
   use `getStaticProps()` to fetch parsed blogs and pass the result to `Home({ allPostsData })`.
   
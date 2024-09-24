This site is built with [AppRun-Site](https://github.com/yysun/apprun-site) and [Shadcn/ui](https://ui.shadcn.com/). It has the following structure:

```
/_                  <- backend code
/components         <- shadcn/ui components
/lib                <- shadcn/ui library
/pages              <- fronet end code
  /index.html       <- main page, will load in the browser
  /main.tsx         <- start up code, renders the layout
  /main.css         <- main css (tailwind configured for shadcn/ui)
  /index.tsx        <- home page
  /about
    /index.tsx      <- about page
  /contact
    /index.tsx      <- contact page
/docs               <- generated site for github pages
/server.js          <- generated server
```

You can add pages under the `pages` directory by creating sub-directories. And then, add an index.tsx file.

Then, you can use:

* _npm start_ to run the server
* _npm dev_ to start the dev server in watch mode
* _npm run build_ to build for production
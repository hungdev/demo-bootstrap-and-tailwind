create styles.css file in `src`

paste these lines to `styles.css`:

```
@tailwind base;

@tailwind components;

@tailwind utilities;
```

run:

`npx tailwind build ./src/styles.css -o ./src/tailwindStyles.css`

after that import 

tailwindStyles.css to in index.js

> this guide is deprecated

updated: https://tailwindcss.com/docs/guides/create-react-app

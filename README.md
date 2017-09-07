# Brunch sketelon for Elixir-based traditional web apps

Bootstrap a new frontend for elixir apps in minutes.

It's strictly for traditional backend-frontend websites, 
without heavy javascript functionality.

Specifially, it's a starting point to create new template for elixir app.

### Features

- Brunch for fast development
- PostCSS with couple of plugins
- Babel for es6/es7 support
- Live reload
- ESLint and StyleLint for consistency

### How to start

1. Install brunch if you don't have it:
```
npm install -g brunch
```

2. Create new directory for the new project:
```
mkdir new_app && cd new_app
```

2. Fetch brunch skeleton:
```
brunch new --skeleton https://github.com/scarfacedeb/brunch-elixir-web
```

4. Run brunch watcher:
```
npm run watch
```

5. Open index.html:
```
open ./public/index.html
```

### Directory organization

`css/js/html` contain css/js/html assets respectively.  
To add new html page, create new file in `html/`.

`static/` contains images, fonts, and other static assets.

`public/` contains compiled assets that shouldn't be edited by hand.

`css` partials have to be prefixed with `_` and imported in `css/app.css`.
`js` files have to be imported using ES6 `import`.

### Included PostCSS plugins

1. [postcss-easy-import](https://github.com/trysound/postcss-easy-import) to support `@import` with prefixes (`_`)
2. [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) to add CSS4 variables.
3. [postcss-nested](https://github.com/postcss/postcss-nested) to enable nested rules.
4. [postcss-selector-matches](https://github.com/postcss/postcss-selector-matches) to add support of `p:matches(:first-child, .special) {`
5. [postcss-selector-not](https://github.com/postcss/postcss-selector-not) to add support of `p:not(:first-child, .special) {`
6. [postcss-discard-empty](https://github.com/ben-eb/postcss-discard-empty) to remove empty rules.
7. [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) to pack same CSS media query rules into one.
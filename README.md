Start by running:

```bash
npm start
```

-  Open Chrome DevTools or equivalent
-  Disable the cache of the browser.
-  Watch the network tab for broken images
-  Reload a couple of times

A couple of images should fail just about every time.

**To fix:**
````bash
in ./src/App.js
rename: import 'lazysizes/lazysizes.min';
to: import 'lazysizes/lazysizes';
````

The build script will minify it anyway during npm run build.
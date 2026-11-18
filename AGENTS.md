# userscripts

Public userscripts for Tampermonkey and other userscript managers.

- One script per file, named `<site>-<what>.user.js`; the `.user.js` suffix is what makes managers offer to install a raw URL.
- Every script's metadata carries `@namespace https://github.com/mokagio/userscripts` and `@downloadURL`/`@updateURL` pointing at its raw URL on `main`.
- Bump `@version` on every change, or installed copies won't update.
- List each script in the `README.md` table with its install link.

## Check

```
make check
```

Syntax-checks every script and verifies its metadata block.
Behaviour is checked by loading the script in the browser; there is no test runner.

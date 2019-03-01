#Wrong CROB blocking issue extension

How to run:
```
npm i;
npm run build;
```

Then enable developer mode on `chrome://extensions` page, click "Load unpacked" and point `build/chrome` directory.

Next go to https://mail.google.com
and open console. One of three requests will be failed with CORB.

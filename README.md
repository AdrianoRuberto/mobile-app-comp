Cordova vs Ionic 4 vs React Native vs. React Native + Expo
===============================================

Here is a (very) simplistic non-persistent TODO app for the sake of comparing frameworks.

Cordova
-------

The code:
- Javascript: [cordova/www/js/index.js](cordova/www/js/index.js)
- Template: [cordova/www/index.html](cordova/www/index.html)
- Style: [cordova/www/css/index.css](cordova/www/css/index.css)

To try:
```
cd cordova
npm install
cordova platform add android
cordova run android
```


Ionic
-----

The code: 

- Typescript: [ionic2/app/pages/home/home.page.ts](ionic2/app/pages/home/home.page.ts)
- Template: [ionic2/app/pages/home/home.page.html](ionic2/app/pages/home/home.page.html)
- Style: [ionic2/app/pages/home/home.page.scss](ionic2/app/pages/home/home.page.scss)

To try:

```
cd ionic
npm install
ionic serve
```

React Native
------------

The code is here: [rn/App.js](rn/App.js).

To try:

```
cd rn
npm install
react-native run-android
```

Expo
----

The code is here: [expo/App.js](expo/App.js).

To try:

```
cd expo
npm install
expo start
```

License
-------

Do whatever you want.
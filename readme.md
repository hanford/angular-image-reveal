## angular-image-reveal

[![NPM][notify-icon]][notify-url]

#### Installation  
Installation is super easy, simply add the dependencies to your angular module, and inject ```angular-image-reveal``` in your angular module.

```
# use npm
$ npm install angular-image-reveal --save
```

Add angular-image-reveal to your dependencies

```
// app.js
angular
  .module('yourApp', [
    require('angular-image-reveal')
  ])
```

```
// template.html
<img src="..." image-reveal err-image="path/to/fallback.jpg"
```


[notify-icon]: https://nodei.co/npm/angular-image-reveal.png?downloads=true
[notify-url]: https://npmjs.org/package/angular-notify

## angular-image-reveal
Simple angular directive, that binds to the image load event and fades the image in upon loading. Also has an optional fallback attribute if the image isn't able to load.

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
<img src="..." image-reveal fallback="path/to/fallback-image.jpg" duration=".15s">
```


[notify-icon]: https://nodei.co/npm/angular-image-reveal.png?downloads=true
[notify-url]: https://npmjs.org/package/angular-image-reveal

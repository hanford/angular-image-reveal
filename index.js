module.exports = require('angular')
  .module('angular-image-reveal', [])
  .directive('imageReveal', imageRevealDirective)
  .name

function imageRevealDirective () {
  return {
    restrict: 'A',
    scope: {
      errImage: '@'
    },
    link: function (scope, element, attrs) {
      element.bind('load', function () {
        reveal()
      })

      element.bind('error', function () {
        reveal()

        if (scope.errImage) {
          element.attr('src', scope.errImage)
        }
      })

      function reveal () {
        element.css('opacity', 1)
      }
    }
  }
}

module.exports = require('angular')
  .module('angular-image-reveal', [])
  .directive('imageReveal', imageRevealDirective)
  .name

function imageRevealDirective () {
  return {
    restrict: 'A',
    scope: {
      fallback: '@',
      duration: '@'
    },
    link: function (scope, element, attrs) {
      element.css('opacity', 0)
      element.css('transition', 'opacity linear ' + scope.duration)
      element.css('-webkit-transition', 'opacity linear ' + scope.duration)

      element.bind('load', function () {
        reveal()
      })

      element.bind('error', function () {
        reveal()
        if (scope.fallback) {
          element.attr('src', scope.fallback)
        }
      })

      function reveal () {
        element.css('opacity', 1)
      }
    }
  }
}

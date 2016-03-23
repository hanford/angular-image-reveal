module.exports = require('angular')
  .module('angular-image-reveal', [])
  .directive('imageReveal', imageRevealDirective)
  .name

function imageRevealDirective () {
  return {
    restrict: 'A',
    scope: {
      errImageUrl: '='
    },
    function link (scope, element, attrs) {
      element.bind('load', function () {
        reveal()
      })

      element.bind('error', function () {
        reveal()

        if (scope.errImageUrl) {
          element.attr('src', scope.errImageUrl)
        }
      })

      function reveal () {
        element.css('opacity', 1)
      }
    }
  }
}

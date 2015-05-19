angular.module('scriptInit',['angular-meteor']);

angular.module('scriptInit').directive('mainView', ['$meteor', function ($meteor) {
  return {
    restrict: 'EA',
    templateUrl: 'client/core/mainView.ng.html',
    link: function (scope, element, attrs) {
      scope.parties = $meteor.collection(Parties)
    }
  }
}])

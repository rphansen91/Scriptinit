angular.module('scriptInit', ['angular-meteor'])

.factory('subscribeUser', ['$meteor', function ($meteor) {
  var factory = {}

  factory.getUsers = function () {
    return $meteor.collection(Users)
  }

  factory.addUser = function (usersCollection, user) {
      if (user && user.name.length && user.email.indexOf('@') != -1) {
        usersCollection.push(user)
      }
  }

  return factory
}])

.directive('subscribe', ['subscribeUser', function (subscribeUser) {
  return {
    restrict: 'EA',
    templateUrl: 'client/core/subscribe.ng.html',
    link: function (scope, element, attrs) {
      scope.users = subscribeUser.getUsers()

      scope.newUser = {}
      scope.newUser.name = ""
      scope.newUser.email = ""

      scope.subscribe = function () {
        console.log(scope.users, scope.newUser);
        subscribeUser.addUser(scope.users, scope.newUser)
      }

    }
  }
}])

.directive('viewBlog', ['$window', function ($window) {
  return {
    restrict: 'EA',
    templateUrl: 'client/core/viewBlog.ng.html',
    link: function (scope, element, attrs) {
      scope.viewBlog = function () {
        $window.open('http://blog.scriptinit.com')
      }
    }
  }
}])

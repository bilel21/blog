var app = angular.module('MonApp', ['ngRoute', 'textAngular']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',{templateUrl : 'partials/home.html', controller:'PostsCtrl'} )
		.when('/api/posts/:id',{templateUrl:'partials/post.html', controller:'PostCtrl'} )
		.when('/addpost',{templateUrl:'partials/addpost.html', controller:'PostCtrl'} )
		.otherwise({redirectTo : '/'});
});
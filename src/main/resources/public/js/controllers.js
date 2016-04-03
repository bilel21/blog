app.controller('PostsCtrl', function($scope, PostFactory, $rootScope){
	$rootScope.loading = true;
	PostFactory.getPosts().then(function(posts){
		$rootScope.loading=false;
		$scope.posts = posts;
	}, function(msg){
		alert(msg);
	})
});

app.controller('PostCtrl', function($scope, PostFactory, $routeParams, $rootScope, $location){
	$rootScope.loading = true;
	$scope.newComment = {};
	$scope.newPost = {};
	
	var post = PostFactory.getPost($routeParams.id).then(function(post){
		$rootScope.loading=false;
		$scope.post = post;
	}, function(msg){
		alert(msg);
	});
	
	var postsByCategory = PostFactory.getPostsByCategory($routeParams.category).then(function(postsByCategory){
		$rootScope.loading=false;
		$scope.postsByCategory = postsByCategory;
	}, function(msg){
		alert(msg);
	});
	

	$scope.addComment = function(){
		if($scope.post.comments === null){
			$scope.post.comments = [];
		}
		$scope.post.comments.push($scope.newComment);
		//insertion du commentaire dans la base
		$scope.newComment.postId = $scope.post.id;
		PostFactory.addComment($scope.newComment).then(function(){
			
		}, function(){
			alert("Votre message ne peut pas être sauvegarder !!");
		});
		$scope.newComment = {};
	};
	
	$scope.delete = function(){
		PostFactory.delete($scope.post.id).then(function(){
			$location.path('/');
			$location.$apply();
		}, function(){
			alert("Votre Article ne peut pas être supprimer !!");
		});
	};

	$scope.addPost = function(){
		//insertion du commentaire dans la base
		PostFactory.addPost($scope.newPost).then(function(){
			 $location.path('/');
			 $location.$apply();
		}, function(){
			alert("Votre message ne peut pas être sauvegarder !!");
		});
		$scope.newPost = {};
	};
});

app.controller('PagerDemoCtrl', function($scope) {
	  $scope.totalItems = 64;
	  $scope.currentPage = 4;
	});

app.controller('PaginationDemoCtrl', function ($scope, $log) {
	  $scope.totalItems = 64;
	  $scope.currentPage = 4;

	  $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	  $scope.pageChanged = function() {
	    $log.log('Page changed to: ' + $scope.currentPage);
	  };

	  $scope.maxSize = 5;
	  $scope.bigTotalItems = 175;
	  $scope.bigCurrentPage = 1;
	});
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

	$scope.addPost = function(){
		//insertion du commentaire dans la base
		PostFactory.addPost($scope.newPost).then(function(){
			 $location.path('/');
			 $rootScope.$apply();
		}, function(){
			alert("Votre message ne peut pas être sauvegarder !!");
		});
		$scope.newPost = {};
	};
});
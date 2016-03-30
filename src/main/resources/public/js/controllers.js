app.controller('PostsCtrl', function($scope, PostFactory, $rootScope){
	$rootScope.loading = true;
	PostFactory.getPosts().then(function(posts){
		$rootScope.loading=false;
		$scope.posts = posts;
	}, function(msg){
		alert(msg);
	})
});

app.controller('PostCtrl', function($scope, PostFactory, $routeParams, $rootScope){
	$rootScope.loading = true;
	$scope.newComment = {};
	$scope.newPost = {};
	var post = PostFactory.getPost($routeParams.id).then(function(post){
		$rootScope.loading=false;
		$scope.post = post;
	}, function(msg){
		alert(msg);
	});
	

	$scope.addComment = function($scope, PostFactory){
		$scope.post.comments.push($scope.newComment);
		$scope.newComment = {};
		//insertion du commentaire dans la base
		factory.addComment($scope.newComment, $scope.post.id).then(function(){
			
		}, function(){
			alert("Votre message ne peut pas être sauvegarder !!");
		});

	};

	$scope.addPost = function($scope, PostFactory){
		console.info($scope.newPost);
		$scope.posts.push($scope.newPost);
		//insertion du commentaire dans la base
		PostFactory.addPost($scope.newPost).then(function(){

		}, function(){
			alert("Votre message ne peut pas être sauvegarder !!");
		});
	};
});
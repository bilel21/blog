app.factory('PostFactory', function($http, $q){
	var factory = {
		posts : false,
		getPosts : function(){
			var deffered = $q.defer();
			if(factory.posts !== false){
				deffered.resolve(factory.posts);
			}else{
				var url = 'http://localhost:9000/api/posts';
				$http.get(url)
				.success(function(data, status){
					factory.posts = data;
					deffered.resolve(factory.posts);
				})
				.error(function(data){
					deffered.reject('Impossible de récupérer les articles');
				});
			}
			return deffered.promise;
		},
		getPost : function(id){
			var deffered = $q.defer();
			var post = {};
			var posts = factory.getPosts().then(function(posts){
				angular.forEach(posts, function(value, key){
				  	if(value.id == id){
				  		post = value;
				  	}
				});
				deffered.resolve(post);
			}, function(msg){
					deffered.reject(msg);
			});
			
			return deffered.promise;
		},

		addComment : function(comment){
			var deffered = $q.defer();
			var url = 'http://localhost:9000/api/comments';
			$http.post(url, comment)
			.success(function(data, status){
				deffered.resolve(comment);
			})
			.error(function(data){
				deffered.reject('Impossible de récupérer les articles');
			});
			return deffered.promise;
		},
		
		addPost : function(post){
			var deffered = $q.defer();
				var url = 'http://localhost:9000/api/posts';
				$http.post(url)
				.success(function(data, status){
					factory.posts.push(data);
					deffered.resolve(data);
				})
				.error(function(data){
					deffered.reject('Impossible de sauvegarder un article');
				});
			
			return deffered.promise;
		}
	}
	return factory;
});

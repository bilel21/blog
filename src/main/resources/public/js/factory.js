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

		addComment : function(comment, idPost){
			//Ajout d'un commentaire à la base ....
			//var deffered = $q.defer();
			//deffered.resolve();
			//return deffered.promise;
			console.info(comment);
			console.info(idPost);
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

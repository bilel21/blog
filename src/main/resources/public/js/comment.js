app.directive('ngComment', function(){
	return {
		scope:{
			comment:'='
		},
		restrict:'E',
		templateUri:'partials/_comments.html'
	}
})
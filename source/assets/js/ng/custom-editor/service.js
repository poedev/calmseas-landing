angular.module('calmseas-landing')
	.service('updateContent', ['$http', function($http){
		var httpProcess = function(path, data){
			console.log(data);
			var stringData = JSON.stringify({block: data.content});

			console.log(stringData);
			var promise = $http.get(path + '?data=' + stringData).then(function(response){
				return response.data;
			});
			return promise;
		};
		var pageData = {
			landingContent: function(data){
				var promise = httpProcess('update-landing-content.php', data);
				return promise;
			}
		};
		return pageData;
	}]);
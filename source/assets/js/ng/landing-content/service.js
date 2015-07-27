angular.module('calmseas-landing')
	.service('pageData', ['$http', function($http){
		var httpProcess = function(path){
			var promise = $http.get(path).then(function(response){
				return response.data.block;
			});
			return promise;
		};
		var pageData = {
			aboutContent: function(){
				var promise = httpProcess('data/landing-data.json');
				return promise;
			}
		};
		return pageData;
	}]);
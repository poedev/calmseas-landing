angular.module('calmseas-landing')
	.controller('page-content', ['pageData', '$scope', function(pageData, $scope){

		var assignContentValues = function(data){
			console.log(data);
			$.each(data, function(ind, block){
				$scope.pageContent[ind] = block;	
			});
			
		};

		$scope.rawPageContent = pageData.aboutContent().then(function(response){
			assignContentValues(response);
			// $scope.pageContent = response;
			// console.log('HERE', response)
		});
	}]);
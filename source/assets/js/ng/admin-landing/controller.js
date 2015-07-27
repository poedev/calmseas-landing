angular.module('calmseas-landing')
  .controller('admin-landing', ['$scope', function($scope){
    $scope.content = {};
    $scope.pageContent = {};
    $scope.editorContent = {};
    $scope.editingBlock = {};
    console.log($scope.content);
  }]);

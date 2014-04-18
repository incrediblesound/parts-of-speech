
function IndexCtrl($scope,$http, $routeParams, services) {
  $scope.text = "";
	$scope.results = {};
	$scope.library = {};
	$scope.parts = services.partsOfSpeech().parts();
	$scope.pairs = services.partsOfSpeech().pairs();
	$http.get('/dictionary').success(function (data) {
			$scope.library = data.data;
      		return;
      	})

	$scope.searchPart = function(part){
    results = "";
		var tag = $scope.pairs[part];
		if($scope.text.length>0){
			var words = $scope.text.split(' ');
      forEach(words, function(word) {
        if($scope.library[tag].indexOf(word) !== -1) {
          results = results + word + ', ';
        }
      })
      return results;
    }
  }
}

function forEach(array, fn) {
	for(var i = 0; i<array.length;i++) {
		fn(array[i]);
	}
}
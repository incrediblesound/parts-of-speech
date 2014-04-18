
function IndexCtrl($scope,$http, $routeParams, services) {
  $scope.text = "";
	$scope.library = {};
	$scope.parts = services.partsOfSpeech().parts(); //get the parts of speech
	$scope.pairs = services.partsOfSpeech().pairs(); //get the p-o-s paired with their corresponding tags
	$http.get('/dictionary').success(function (data) {
			$scope.library = data.data; //this callback sets the library to the data object sent by the server
      		return;
      	})

	$scope.searchPart = function(part){ //this function is called inside a <p> for each part of speech
    results = "";
		var tag = $scope.pairs[part]; //get the tag for this part
		if($scope.text.length>0){
			var words = $scope.text.split(' ');
      forEach(words, function(word) {
        if($scope.library[tag].indexOf(word) !== -1) { //for each word in the text area check the array of this p-o-s
          results = results + word + ', '; //if the word is in the array, add it to the results string
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
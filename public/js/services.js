
angular.module('myApp.services',[]).factory('services',['$http', function ($http) {
  var factory = {};
  factory.partsOfSpeech = function() {
    var Parts = {
		"Noun": 'N',
		"Plural": 'p',
		"Noun Phrase": 'h',
		"Verb": 'V',
		"Verb Transitive": 't',
		"Verb Intransitive": 'i',
		"Adjective": 'A',
		"Adverb": 'v',
		"Conjunction": 'C',
		"Preposition": 'P',
		"Interjection": '!',
		"Pronoun": 'r',
		"Definite Article": 'D',
    };
    return {
		  parts: function() {
        var data = [];
        for(var x in Parts) {
				  data.push(x);
        }
        return data;
		  },
		  codes: function() {
        var data = [];
        for(var x in Parts) {
				data.push(Parts[x]);
        }
			 return data;
		  },
		  pairs: function() {
			return Parts;
		  }
    }
  };
return factory;
}]);


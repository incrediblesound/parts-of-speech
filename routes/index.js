
var fs = require('fs');

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function(req, res) {
	var name = req.params.name;
	res.render('partials/'+name);
};

exports.dictionary = function(req, res) {
  var library = {};
	fs.readFile('./routes/mobyposi.i','utf8', function(err, data) {
    if(err){console.log(err);} else {
    data = data.toString().split('\r'); //read the p-o-s catalog and divide it into word/p-o-s pairs
    forEach(data, function (set){
      if(set.length > 1) {
        set = set.split('+'); //separate word from p-o-s list
        var tags = set[1].split('');
        forEach(tags, function (tag) { //for each p-o-s in the list add the word to the array corresponding to the p-o-s
          if(!library[tag]) {
            library[tag] = [];
          }
          library[tag].push(set[0]);
        })  
      }
    })
    res.json({data: library})
    }
  })
}

function forEach(array, fn) {
  for(var i = 0;i<array.length;i++) {
    fn(array[i]);
  }
}
var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
  var name = req.query.name;
  var description = req.query.description;
  var newFriend = {
    "friends": [
      {
        "name": name,
        "description": description,
        "imageURL": "http://lorempixel.com/400/400/people"
      }
    ]
  };
  data["friends"].push(newFriend);
	res.render('add', newFriend);
}


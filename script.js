var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
function print(letter) {
var name1 = "Hello ";
var name2 = "Good Bye ";
for (var i = 0; i < names.length; i++) {
	  var firstletter = letter[i].charAt(0)
	  	if (firstletter == 'j' || firstletter == 'J') {
	  		console.log(name2,names[i]);
	  		} else{
	  			console.log(name1,names[i]);
	  		}
}
}
print(names);

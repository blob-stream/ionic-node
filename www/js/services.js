angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('BlobService', [function(){
	$scope.dummies = [
		{
			heading: "Feeling good",
			description: "This is a wonderful day. The weather is fine and I go swimming tonight. =)",
			image: "src/test.jpg",
			creator: "Doreen",
			position: 4
		},
		{
			heading: "Sleepy right now",
			description: "It is really cool when your alarm clock wears footy pyjamas.",
			creator: "Dary",
			position: 3
		},
		{
			heading: "Grass is always greener on the other side.",
			creator: "Dary",
			position: 2
		},
		{
			heading: "Yaay, marriage is coming soon.",
			creator: "Meli",
			image: "src/meli.jpg",
			position: 1

		}
	];
	function addABlob(){

	}
}]);


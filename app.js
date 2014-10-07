var app = angular.module('app', ['ngRoute'])

app.controller('testController', function($scope){

	$scope.resolve = "This is the template loaded only after the promise was resolved.";
})


app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			template: '<div> {{resolve}} <br/> Take a look at the code to see how it was done!</div>',
			controller: 'testController',
			resolve: {
				homeView: function($q, $timeout){
					
					var deferobj = $q.defer();

					$timeout(function(){
						deferobj.resolve();
					}, 3000);
			
					return deferobj.promise;

				}
			}


		});
});
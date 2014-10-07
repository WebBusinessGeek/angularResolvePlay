var app = angular.module('app', ['ngRoute'])

app.controller('testController', function($scope){

	$scope.controller = 'testController';
})


app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			template: '<div>This is the template from {{controller}}</div>',
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
(function(){

	'use strict';

	var app = angular.module('phraseApp', []);
	
	app.controller('phraseAppController', function($scope, $http) {		
		$http.get('js/sample.json')
       	.then(function(res) {       		
       		$scope.url = res.data.url;
         	$scope.count = res.data.count;
         	$scope.phrases = res.data.phrases;
         	$scope.toolkit = res.data.toolkit;
        });	
	});	

	function initApp() {
		console.log("Initializing GoTranslate Phrase App");
	}

	initApp();

})();
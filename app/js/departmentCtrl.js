// Department controller

//Gets the right courselists based on the department code (which is stored in $routeParams)

fightingApp.controller('DepartmentCtrl', function ($scope,$routeParams,Fight) {

	console.log($routeParams.code);
	
	if($routeParams.code === 'DA'){
		$scope.list = Fight.courselistDA;
	}
	if($routeParams.code === 'DH'){
		$scope.list = Fight.courselistDH;
	}
	if($routeParams.code === 'DM'){
		$scope.list = Fight.courselistDM;
	}
	else{
		$scope.list = Fight.courselistDD;
	}

});
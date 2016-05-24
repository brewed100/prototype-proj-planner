angular.module('app')
//test
.controller('testCtrl', function( $rootScope, $scope, TeamFactory ){

	function getCurrentUserGrp() {
		var teams = TeamFactory.getTeams();
		var t,x;
		for (t in teams) {
			if ( teams[t].indexOf( $rootScope.current_user ) > -1 ) return t;
		}
	}

	$scope.switchUser = function( usr ){
		$rootScope.current_user = usr;
		//console.log( $rootScope.current_user );
		$rootScope.current_user_grp = getCurrentUserGrp();
		//console.log( $rootScope.current_user_grp );
	};

	$scope.switchUser('mad.member@kensington.com');
})

//home
.controller('HomeCtrl',function( $scope, SkuFactory){	
	$scope.products = SkuFactory.getProducts();
})

//details
.controller('DetailsCtrl', function( $scope, $rootScope, $location, $routeParams, SkuFactory, TeamFactory ) {
	
	$scope.show_summary = false;

	$scope.go = function( p ) {
		$location.path(p);
	};

	//submit mad
	$scope.submitMAD = function() {
		var i, o, p, products = SkuFactory.getProducts();
		for ( i=0; i < products.length; i++ ) {
			p = products[i];

			if( p.sku == $routeParams.id ) {
				if ( p[$rootScope.current_user_grp].completed === '') {
					p[$rootScope.current_user_grp].completed_by = $rootScope.current_user;
					p[$rootScope.current_user_grp].completed = new Date();
					alert('An email would get sent to the next group here.');
					$scope.go('/');
				}
			}
		}
	};

	//submit nis
	$scope.submitNIS = function() {
		var i, o, p, products = SkuFactory.getProducts();
		for ( i=0; i < products.length; i++ ) {
			p = products[i];

			if( p.sku == $routeParams.id ) {
				if ( p[$rootScope.current_user_grp].completed === '') {
					p[$rootScope.current_user_grp].completed_by = $rootScope.current_user;
					p[$rootScope.current_user_grp].completed = new Date();
					alert('An email would get sent to the next group here.');
					$scope.go('/');
				}
			}
		}
	};

	//submit mar
	$scope.submitMAR = function() {
		var i, o, p, products = SkuFactory.getProducts();
		for ( i=0; i < products.length; i++ ) {
			p = products[i];

			if( p.sku == $routeParams.id ) {
				if ( p[$rootScope.current_user_grp].completed === '') {
					p[$rootScope.current_user_grp].completed_by = $rootScope.current_user;
					p[$rootScope.current_user_grp].completed = new Date();
					alert('An email would get sent to the next group here.');
					$scope.go('/');
				}
			}
		}
	};

	//submit nis
	$scope.submitGDM = function() {
		var i, o, p, products = SkuFactory.getProducts();
		for ( i=0; i < products.length; i++ ) {
			p = products[i];

			if( p.sku == $routeParams.id ) {
				if ( p[$rootScope.current_user_grp].completed === '') {
					p[$rootScope.current_user_grp].completed_by = $rootScope.current_user;
					p[$rootScope.current_user_grp].completed = new Date();
					p.liv.completed = new Date();
					alert('An email would get sent to the next group here.');
					$scope.go('/');
				}
			}
		}
	};

	//all time checker
	var current_sku = $routeParams.id;
	var skus = SkuFactory.getProducts();
	var p;
	for ( var i=0; i < skus.length; i++ ) {
		p = skus[i];
		if( p.sku == current_sku && p.liv.completed !== '' ) {
			$scope.sku = p.sku;
			$scope.name = p.name;
			$scope.mad_completed_by = p.mad.completed_by;
			$scope.mad_completed = p.mad.completed;
			$scope.nis_completed_by = p.nis.completed_by;
			$scope.nis_completed = p.nis.completed;
			$scope.mar_completed_by = p.mar.completed_by;
			$scope.mar_completed = p.mar.completed;
			$scope.gdm_completed_by = p.gdm.completed_by;
			$scope.gdm_completed = p.gdm.completed;
			$scope.liv_completed = p.liv.completed;
			$scope.show_summary = true;
			break;
		}

	}

}) 

;
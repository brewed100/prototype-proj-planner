//factory:products
angular.module('app').factory('SkuFactory', function(){
	var products = [
		{
			sku:'001',
			name:'docking station',
			mad:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			nis:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			mar:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			gdm:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			liv:{
				completed:''
			}
		},
		{
			sku:'002',
			name:'wireless mouse',
			mad:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			nis:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			mar:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			gdm:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			liv:{
				completed:''
			}
		},
		{
			sku:'003',
			name:'footrest',
			mad:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			nis:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			mar:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			gdm:{
				completed:'',
				completed_by:'',
				updated:'',
				updated_by:''
			},
			liv:{
				completed:''
			}
		}
	];

	function _get_products(){
		return products;
	}

	return {
		getProducts: _get_products
	};
})

//factory:team
.factory('TeamFactory', function(){
	function _get_teams(){
		var teams = {
			mad:'mad.member@kensington.com',
			nis:'nis.member@kensington.com',
			mar:'mar.member@kensington.com',
			gdm:'gdm.member@kensington.com'
		};
		return teams;
	}

	return {
		getTeams: _get_teams
	};
})
;
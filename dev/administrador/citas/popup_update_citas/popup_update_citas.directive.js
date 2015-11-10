(function() {

	angular.module('app.Administrador')
	.directive('popupUpdateCita', popupUpdateCita);

	function popupUpdateCita(){
		return{
				restrict: 'E',
				templateUrl: './administrador/citas/popup_update_citas/popup_update_citas.html',
				controller:'CitaController'
			}
	}

})();
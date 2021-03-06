(function(){
	angular.module('app.Helpers')
	.factory('HelpersFactory', HelpersFactory);

	HelpersFactory.$inject = ['$state']

	function HelpersFactory(){

		var helperFactory = {};

		helperFactory.popupClose = function () {
			var body = angular.element(document).find('body');
			body.removeClass('popup-on');
			var popup = angular.element(document.querySelectorAll("[popup-close]"));
			popup[0].remove();
		};

		helperFactory.mensajeClose = function () {
			var body = angular.element(document).find('body');
			body.removeClass('popup-on');
			var popup = angular.element(document.querySelectorAll("[mensaje-close]"));
			popup[0].remove();
		};

		helperFactory.dateYYYYMMDD = function(date){
			var date = new Date(date);
			var day = date.getDate();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();

			if(day < 10){
				day = '0' + day;
			}
			if(month < 10){
				month = '0' + month;
			}

			date = year + '-' + month + '-' + day;

			return date;
		}

		helperFactory.stringToDate = function(date){
			var date = date.split('-');
			date = date[0] + '/' + date[1] + '/' + date[2];

			return new Date(date);
		}
		return helperFactory;
	}
})();
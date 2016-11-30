'use strict';

var app = angular.module('Consolidary', []);

app.controller('coreCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$scope.change_category = function($event) {
			var elem = angular.element(event.target);

			if (!elem.hasClass('active'))
			{
				$('nav ul li.active').removeClass('active');
				elem.addClass('active');
				$scope.load_game();
			}
		};

		$scope.pick_question = function(questions) {
			var question = null;

			switch ($('nav ul li.active').attr('id')) {
					case 'web':
						question = questions.web
						[Math.floor(Math.random() * Object.keys(questions.web).length)];
						break ;
					case 'compilation':
						question = questions.compilation
						[Math.floor(Math.random() * Object.keys(questions.compilation).length)];
						break ;
					case 'securite':
						question = questions.securite
						[Math.floor(Math.random() * Object.keys(questions.securite).length)];
						break ;
					case 'reseau':
						question = questions.reseau
						[Math.floor(Math.random() * Object.keys(questions.reseau).length)];
						break ;
					case 'python':
						question = questions.python
						[Math.floor(Math.random() * Object.keys(questions.python).length)];
						break ;
					case 'c / c++':
						question = questions.candcpp
						[Math.floor(Math.random() * Object.keys(questions.candcpp).length)];
						break ;
					case 'assembleur':
						question = questions.assembleur
						[Math.floor(Math.random() * Object.keys(questions.assembleur).length)];
						break ;
				}

			// FILL FIELDS //
			$scope.question = question[0];
			$scope.first_proposition = question[1];
			$scope.second_proposition = question[2];
			$scope.third_proposition = question[3];
			$scope.answer = question[4];
		};

		$scope.load_game = function() {
			if ($scope.questions == null) {
				$http.get('ressources/game/questions.json')
				.then(function(res){
					$scope.questions = res.data;

					$scope.pick_question($scope.questions);
				});
			} else {
				$scope.pick_question($scope.questions);
			}
		};

		var display_success_screen = function() {
			$('#success_wrapper').css('display', 'flex').hide().fadeIn(200).delay(400).fadeOut(200);
		};

		var display_failed_screen = function() {
			$('#failed_wrapper').css('display', 'flex').hide().fadeIn(200).delay(400).fadeOut(200);
		};

		$scope.validate_answer = function() {
			if($('input[type=radio]:checked').val() == $scope.answer)
				display_success_screen();
			else
				display_failed_screen();
			$('input[type=radio]:checked').attr('checked', false);
			$scope.load_game();
		}

		$scope.load_game();
	}
]);
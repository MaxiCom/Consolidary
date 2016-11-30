<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include("views/head.html"); ?>
	</head>
	<body ng-app="Consolidary">
		<div id="loader_wrapper">
			<h1 class="hidden"><span class="hidden">Consolidary</span></h1>
		</div>
		<div id="success_wrapper" class="not_displayed">
			<h3>Success !</h1>
		</div>
		<div id="failed_wrapper" class="not_displayed">
			<h3>Failed !</h1>
		</div>
		<div id="container" ng-controller="coreCtrl">
			<nav>
				<div id="nav_wrapper">
					<ul class="no_select">
						<li class="active" ng-click="change_category($event)" id="web">Web</li>
						<li ng-click="change_category($event)" id="compilation">Compilation</li>
						<li ng-click="change_category($event)" id="securite">Sécurité</li>
						<li ng-click="change_category($event)" id="reseau">Réseau</li>
						<li ng-click="change_category($event)" id="python">Python</li>
						<li ng-click="change_category($event)" id="c / c++">C / C++</li>
						<li ng-click="change_category($event)" id="assembleur">Assembleur</li>
					</ul>
				</div>
			</nav>

			<div id="game">
				<h3 id="question">{{ question }}</h3>
				
				<div id="radio" class="no_select">
					<input type="radio" ng-click="validate_answer()" name="proposition" id="first_proposition" value="{{ first_proposition }}" required><label for="first_proposition">{{ first_proposition }}</label></br>
					<input type="radio" ng-click="validate_answer()" name="proposition" id="second_proposition" value="{{ second_proposition }}"><label for="second_proposition">{{ second_proposition }}</label></br>
					<input type="radio" ng-click="validate_answer()" name="proposition" id="third_proposition" value="{{ third_proposition }}"><label for="third_proposition">{{ third_proposition }}</label></br>
				</div>
			</div>			
		</div>

		<!-- Font and Libs -->
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet">

		<!-- Libs and Scipts -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<script src="//code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
		<script type="text/javascript" src="scripts/loader.js"></script>
		<script type="text/javascript" src="scripts/game.js"></script>
	</body>
</html>
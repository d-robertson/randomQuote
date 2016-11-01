angular.module('quoteApp', [])
  .controller('quoteCtrl', ['$scope', '$http', function($scope, $http){
    var req = {
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'TWOBX71fTbmshtrNOFECDRWhVJDAp18Rvf5jsnGdisu1eIzMpF' 
      }
    }


    $scope.allQuotes = [];
    $scope.colors = [
      '#40e0d0',
      '#ff7373',
      '#ffa500',
      '#800080',
      '#003366',
      '#666666',
      '#800000',
      '#088da5',
      '#660066',
      '#66cdaa',
      '#daa520',
      '#0e2f44',
      '#3399ff',
      '#cc0000',
      '#8a2be2'
    ];

    if($scope.allQuotes.length){
      var placeHolder = $scope.allQuotes.length - 1;
    }

    $scope.getQuote = function(){
      var num = Math.floor(Math.random() * 15);
      $scope.color = $scope.colors[num];     
      $http(req).then(function success(res){
        $scope.quote = res.data;
        $scope.allQuotes.push($scope.quote);
        if($scope.allQuotes.length){
          placeHolder = $scope.allQuotes.length - 1;
        } else {
          placeHolder = 0;
        } 
      }, function error(res){
      })
    }

    $scope.previousQuote = function(){
      var num = Math.floor(Math.random() * 15);
      $scope.color = $scope.colors[num]; 
      if(placeHolder >= 1){
        placeHolder = placeHolder - 1;
        $scope.quote = $scope.allQuotes[placeHolder];
      } else {
        placeHolder = 0;
        $scope.quote = $scope.allQuotes[0];
      }     
    }

    $scope.nextQuote = function(){
      var num = Math.floor(Math.random() * 15);
      $scope.color = $scope.colors[num]; 
      if(placeHolder <= $scope.allQuotes.length - 2){
        placeHolder = placeHolder + 1;
        $scope.quote = $scope.allQuotes[placeHolder];
      } else {
        placeHolder = $scope.allQuotes.length - 1;
        $scope.quote = $scope.allQuotes[placeHolder];
      }
    }

    $scope.tweet = function(){
      var currentQuote = $scope.allQuotes[placeHolder].quote;
      var currentAuthor = $scope.allQuotes[placeHolder].author;
      $scope.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
    }
    
    $scope.getQuote();
  }]);
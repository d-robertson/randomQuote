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

    if($scope.allQuotes.length){
      var placeHolder = $scope.allQuotes.length - 1;
    }

    $scope.getQuote = function(){     
      $http(req).then(function success(res){
        console.log('success', res);
        $scope.quote = res.data;
        $scope.allQuotes.push($scope.quote);
        console.log($scope.allQuotes);
        if($scope.allQuotes.length){
          placeHolder = $scope.allQuotes.length - 1;
        } else {
          placeHolder = 0;
        } 
      }, function error(res){
        console.log('error', res);
      })
    }

    $scope.previousQuote = function(){
      
      if(placeHolder >= 1){
        placeHolder = placeHolder - 1;
        $scope.quote = $scope.allQuotes[placeHolder];
        console.log('placeHolder', placeHolder);
      } else {
        placeHolder = 0;
        $scope.quote = $scope.allQuotes[0];
        console.log('placeHolder', placeHolder);
      }     
    }

    $scope.nextQuote = function(){
      
      if(placeHolder <= $scope.allQuotes.length - 2){
        placeHolder = placeHolder + 1;
        $scope.quote = $scope.allQuotes[placeHolder];
        console.log('placeHolder', placeHolder);
      } else {
        placeHolder = $scope.allQuotes.length - 1;
        $scope.quote = $scope.allQuotes[placeHolder];
        console.log('placeHolder', placeHolder);
      }
    }
  }]);
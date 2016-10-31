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
      if($scope.quote){
        placeHolder = $scope.allQuotes.length - 1;
        console.log($scope.allQuotes);
      }
      $http(req).then(function success(res){
        console.log('success', res);
        $scope.quote = res.data;
        $scope.allQuotes.push($scope.quote);
      }, function error(res){
        console.log('error', res);
      })
    }

    $scope.previousQuote = function(){
      console.log('placeHolder', placeHolder);
      if(placeHolder === 0){
        $scope.quote = $scope.allQuotes[0];
      }
      if($scope.allQuotes.length > 1){
        if(placeHolder >= 1){
          $scope.quote = $scope.allQuotes[placeHolder];
          placeHolder = placeHolder - 1;
        }
      } 
      
    }

    $scope.nextQuote = function(){

    }
  }]);
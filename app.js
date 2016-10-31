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

    $scope.getQuote = function(){
      if($scope.quote){
        $scope.allQuotes.push($scope.quote);
        console.log($scope.allQuotes);
      }
      $http(req).then(function success(res){
        console.log('success', res);
        $scope.quote = res.data;
      }, function error(res){
        console.log('error', res);
      })
    }
  }]);
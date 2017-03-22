var app = angular.module('data', [])

app.controller('sub', ['$scope', '$http', function ($scope, $http) {
  $scope.school = {};
  $scope.subjects = [{
    'name' : '',
    'teacher_id' : '',
    'teacher_name' : '',
    'subject_code' : '',
    'subject_type' : ''
  }]
  $scope.add_more_subs = function () {
    $scope.subjects.push({})
  }
  $scope.submit = function () {
    $scope.final_data = {
      'school_data' : $scope.school,
      'subject_data' : $scope.subjects
    }
    console.log($scope.$school);
    console.log($scope.final_data);
    $http({
  			method : 'POST',
         headers : {'Content-Type': 'application/x-www-form-urlencoded'} ,
  			data : $scope.school,
  			url : "https://api.staticman.net/v2/entry/SDC-USICT/data-portal/master/"
  }).then(function mySucces(response) {
     console.log('sucess')
     console.log(response);
  }, function myError(response) {
      console.log(response)
  });

  }

}])

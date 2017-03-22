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
    console.log($scope.final_data);
    $http({
  			method : 'POST',
  			data : JSON.stringify($scope.final_data),
  			url : ""
  }).then(function mySucces(response) {
     console.log('sucess')
     console.log(response);
  }, function myError(response) {
      console.log(response)
  });

  }

}])

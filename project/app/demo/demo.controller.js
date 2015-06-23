'use strict';

var app = require('../module');

app.controller('DemoCtrl', function($scope) {
  $scope.options = [
    {
      'key': 'one',
      'value': 'first'
    },
    {
      'key': 'two',
      'value': 'second'
    },
    {
      'key': 'three',
      'value': 'third'
    }
  ];

  $scope.withoutAvDropdown = $scope.options[0];
  $scope.withAvDropdown = $scope.options[0];

});

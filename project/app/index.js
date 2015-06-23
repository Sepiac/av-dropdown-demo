'use strict';

require('jquery');
require('angular');
require('availity-angular');

var app = require('./module');
var demoTemplate = require('./demo/demo.template.html');
require('./demo/demo.controller');

app.addModules([
  'ui.router',
  'availity',
  'availity.ui',
  'availity.ui.templates'
]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('demo', {
      url: '/demo',
      template: demoTemplate,
      controller: 'DemoCtrl'
    });

  $urlRouterProvider.otherwise('/demo');

});

module.exports = app;



var CSApp = angular.module("CSApp", ['ui.router', 'ngSanitize', 'ui.tinymce', 'updateMeta']);

CSApp.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);


CSApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
            .state('main', {
                url: "/",
                templateUrl: 'res/angular/view/index1.html',
                controller: 'homeCtrl'
            })
            .state('cat', {
                url: '/cat',
                templateUrl: 'res/angular/view/category.html',
                controller: 'abcCtrl'
            }).state('product', {
        url: '/product',
        templateUrl: 'res/angular/view/product.html',
        controller: 'abcCtrl'
    }).state('adminPost', {
        url: '/adminPost',
        templateUrl: 'res/angular/view/admin/adminPost.html',
        controller: 'tinyCtrl'
    }).state('post', {
        url: '/post',
        templateUrl: 'res/angular/view/blogPost.html',
        controller: 'abcCtrl'
    }).state('blog', {
        url: '/blog',
        templateUrl: 'res/angular/view/blog.html',
        controller: 'abcCtrl'
    })
            .state('parse', {
                url: '/{category:[a-zA-Z0-9-]*}/{url:[a-zA-Z0-9-]*}',
                controller: 'testCtrl'
            })
            .state('t', {
                url: '/test',
                templateUrl: function ($stateParams, templateRequest) {
                    console.log("ss " + $stateParams.data.page);
                    return 'res/angular/view/' + $stateParams.data.page + ".jsp";
                },
                controller: 'tCtrl',
                params: {
                    data: null
                }
            });

});
CSApp.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
CSApp.controller("homeCtrl", function ($scope, $http) {
//    $http.get("http://localhost:8084/CompareSmartly/homeserv")
//            .then(function (response) {
//                $scope.phones = response.data.phones;
//                $scope.phones = response.data.phones;
//                $scope.pbs = response.data.pbs;
//                $scope.tvs = response.data.tvs;
//                $scope.headphones = response.data.headphones;
//
//
//            });
});

CSApp.controller("tinyCtrl", function ($scope, $http) {
    $scope.tinymceModel = {};
    $scope.tinymceModel.desc = "Initial Content"
    $scope.tinymceModel.cat_id = 294;
    $scope.tinymceOptions = {
        onChange: function (e) {
            // put logic here for keypress and cut/paste changes
        },
        inline: false,
        plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons template paste textcolor colorpicker textpattern imagetools'],
        skin: 'lightgray',
        theme: 'modern',
        height: 400,
        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tinymce.com/css/codepen.min.css'
        ]
    };

    function getTagValue( xmlS,  tagName){
        return xmlS.split( ">")[1].split("</" + tagName + ">")[0];
    }

    
        
    $scope.onClick = function () {
        $http.post("http://localhost:8080/post", $scope.tinymceModel)
                .then(function (data) {
                    console.log("abc");
                });
    }

    $scope.meta = {
        author: "prasad",
        desc: "test desc",
        site: "test site",
        title: "test title",
        type: "test type",
        twitter: "test twitter"
    }
});


CSApp.controller("abcCtrl", function () {
    console.log('abcController');
});

CSApp.service('sharedProps', function () {
    var property;

    return {
        getProperty: function () {
            return property;
        },
        setProperty: function (value) {
            property = value;
        }
    };
});

CSApp.controller("testCtrl", function ($scope, $http, $stateParams, $location, sharedProps, $state) {
    console.log('testCtrl');
    var config = {
        params: {
            category: $stateParams.category,
            url: $stateParams.url
        }
    }
    $http.get("http://localhost:8084/CompareSmartly/AparseUrl", config)
            .then(function (response) {
                $state.go('t', {"data": response.data}, {'location': false});
            });
    //  $location.path('/test');

});



CSApp.controller("tCtrl", function ($scope, $http, $stateParams) {
    console.log('tCtrl');
    $scope.mbean = $stateParams.data.pBean.mbean;
    $scope.pBean = $stateParams.data.pBean;
    $scope.pList = $stateParams.data.pList;
    $scope.catList = $stateParams.data.catList;
    $scope.generateMap = $stateParams.data.generateMap;
    $scope.alternateList = $stateParams.data.alternateList;
    console.log($stateParams.data);
});

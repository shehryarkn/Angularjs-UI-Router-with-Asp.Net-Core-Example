var app = angular.module('InfiniteLearning', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched URL redirect to dashboard URL
    $urlRouterProvider.otherwise("Students");

    $stateProvider
    
        .state('Students', {
            url: "/Students",
            views: {
                'container-view': {
                    templateUrl:"Students/Index"
                },
                'right-view@Students' :{
                    templateUrl:"Students/AllStudents"
                }
            }
        })
        .state('Students.Result', {
            url: "/Result",
            views: {
                'container-view': {
                     templateUrl:"Students/Index"
                },
                'right-view@Students' :{
                    templateUrl: "Students/Result"
                }
            }
        })
        
        
        .state('Teachers', {
            url: "/Teachers",
            views: {
                'container-view': {
                    templateUrl:"Teachers/Index"
                },
                'right-view@Teachers' :{
                    templateUrl:"Teachers/AllTeachers"
                }
            }
        })
        .state('Teachers.Courses', {
            url: "/Courses",
            views: {
                'container-view': {
                     templateUrl:"Teachers/Index"
                },
                'right-view@Teachers' :{
                    templateUrl: "Teachers/Courses"
                }
            }
        });
});



const studentsList = angular.module('studentsList', ['ui.router']);

studentsList.service('studentsService', function () {
    this.students = [
            {
                name: 'Dead',
                surname: 'Pool',
                photo: './images/deadpool.jpg',
                birthDay: '15 October 1998',
                phone: '+5966221532'
    },
            {
                name: 'Cyclop',
                surname: 'X-man',
                photo: './images/cyclop.jpg',
                birthDay: '01 July 1995',
                phone: '+69546242354'
    },
            {
                name: 'Gambit',
                surname: 'X-man',
                photo: './images/gambit.jpg',
                birthDay: '05 June 2002',
                phone: '+12135534534'
    },
            {
                name: 'Hulk',
                surname: 'incredible',
                photo: './images/hulk.jpg',
                birthDay: '26 August 1992',
                phone: '+021354345'
    },
            {
                name: 'Professor',
                surname: 'X-man',
                photo: './images/professor.jpg',
                birthDay: '07 September 1994',
                phone: '+021345345'
    },
            {
                name: 'Spiderman',
                surname: 'Superhero',
                photo: './images/spider-man.jpg',
                birthDay: '17 December 1991',
                phone: '+546877978978'
    },
            {
                name: 'Tony',
                surname: 'Stark',
                photo: './images/tony.jpg',
                birthDay: '21 March 1997',
                phone: '+0121364568'
    },
            {
                name: 'Wolverine',
                surname: 'X-man',
                photo: './images/wolverine.jpg',
                birthDay: '09 December 2001',
                phone: '+455468184'
    }

],

        this.getStudents = function () {
            return this.students;
        },

        this.getStudent = function (name) {
            return this.students.find((item) => item.name === name);
        }


})

studentsList.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider


        .state('home', {
        url: '/home',
        templateUrl: 'directives/students-list/students_list.html',
        controller: 'controllerStudentsList'

    })


    .state('detail', {
        url: '/student/{student}',
        templateUrl: `directives/student-info/student_info.html`,
        controller: 'controllerStudentsList'
    })


});

studentsList.controller('controllerStudentsList', function ($scope, studentsService, $stateParams) {
    $scope.students = studentsService.getStudents();
    $scope.student = studentsService.getStudent($stateParams.student);
})


studentsList.directive('directiveStudent', function factory() {
    return directiveStudent = {
        priority: 0,
        templateUrl: 'directives/student/student.html',
        transclude: false,
        restrict: 'E',
        scope: {
            name: '=',
            surname: '=',
            photo: '=',
            onNameChanged: '&'
        },
        controller: function studentController($scope) {
            $scope.show = false;
        }
    }
});

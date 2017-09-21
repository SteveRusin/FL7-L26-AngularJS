studentsList.directive('directiveStudentInfo', function factory() {
    return directiveStudent = {
        priority: 0,
        templateUrl: 'directives/student-info/student_info.html',
        transclude: false,
        restrict: 'E',
        scope: {
            name: '=',
            surname: '=',
            photo: '=',
        },
    }
});

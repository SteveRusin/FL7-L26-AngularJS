studentsList.directive('directiveStudentsList', function factory() {
    return directiveStudent = {
        priority: 0,
        templateUrl: 'directives/students-list/students_list.html',
        transclude: false,
        restrict: 'E',
        scope: true
    }
});


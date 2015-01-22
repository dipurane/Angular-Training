angular.module("todoApp",[]).controller("MainCtrl",function($scope){
   /* $scope.todos=[
        {
            text:"Todo 1",
            completed:false
        } ,
        {
            text: "Todo 2",
            completed: false
        },
        {
            text: "Todo 3",
            completed: true
        }
    ]; */

    var globalindex=0;
    $scope.todos=[];
    $scope.add = function () {
        $scope.globalindex++;
        $scope.newTodo.completed=true;
        $scope.todos.push($scope.newTodo);
        $scope.newTodo={};
    };

    $scope.clearAll = function(){
        console.log("Inside Clear all");
      $scope.todos.forEach(function(todo){
          console.log("In for loop");
          if(todo.completed){
              $scope.delete(todo);

          }
      });


    };

    $scope.delete = function(item){
        var index = $scope.todos.indexOf(item);
        console.log(index);
        $scope.todos.splice(index,1);
    }


});
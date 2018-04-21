// adding the tasks
// Targetting btn class on "add task"
$(".btn").on("click", function(){
    var newTask = prompt("what is the next task?");
    console.log("new task: ", newTask);
// placing new task onto html
    var addedTask = "<li><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></li>"
// targetting "ul" with an id "tak-list" and appending the addedTask
    $("#task-list").append(addedTask)
});



//deleting the tadk 
//targetting hthe "fa" class on the trast
$(".fa").click(function(){
    console.log("trash")
    // targetting the parent element of the trash can and applying .remove() on it
    $(this).parent().remove();
});
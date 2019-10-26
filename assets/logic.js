var employeeName;
var employeeRole = "";
var startDate;
var monthsWorked;
var monthlyRate;
var totalBilled;

$("#submit").on("click", function(){
    event.preventDefault();
    employeeName = $("#employee").val();
    employeeRole = $("#employee").val();
    startDate = $("#employee").val();
    monthsWorked = $("#employee").val();
    monthlyRate = $("#employee").val();
    totalBilled = $("#employee").val();
    console.log(employeeName)
})



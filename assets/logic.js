var firebaseConfig = {
    apiKey: "AIzaSyDcT3AshUgaS3RHaC4oFy_qdcGmTyfbLQw",
    authDomain: "employee-data-management-aa7c2.firebaseapp.com",
    databaseURL: "https://employee-data-management-aa7c2.firebaseio.com",
    projectId: "employee-data-management-aa7c2",
    storageBucket: "employee-data-management-aa7c2.appspot.com",
    messagingSenderId: "181807286867",
    appId: "1:181807286867:web:4ff30ef1e9161990c994a6"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var employeeName;
var employeeRole;
var startDate;
var monthsWorked;
var monthlyRate;
var totalBilled;

$("#submit").on("click", function(){
    event.preventDefault();
    employeeName = $("#employee").val();
    employeeRole = $("#role").val();
    startDate = $("#start").val();
    monthlyRate = $("#monthly").val();
    console.log(employeeName)
    console.log(employeeRole)
    console.log(startDate)
    console.log(monthlyRate)

    database.ref().push({
        employeeName: employeeName,
        employeeRole: employeeRole,
        startDate: startDate,
        monthlyRate: monthlyRate
    });
})


database.ref().on("child_added", function(snapshot) {
    var newTableData = snapshot.val()
    var newTblRow = $("<tr>")
    var newTblDataName = $("<td>").html(newTableData.employeeName)
    var newTblDataRole = $("<td>").html(newTableData.employeeRole)
    var newTblDataStartDate = $("<td>").html(newTableData.startDate)
    var newTblDataMonthlyRate = $("<td>").html(newTableData.monthlyRate)

    newTblRow.append(newTblDataName)
    newTblRow.append(newTblDataRole)
    newTblRow.append(newTblDataStartDate)
    newTblRow.append(newTblDataMonthlyRate)

    $("tbody").append(newTblRow)
})




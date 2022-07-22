
      function addCode() {
var result="";
var userTab=parseInt(document.getElementById("MultNo").value);
var userTab1 = parseInt(document.getElementById("MultNo1").value);
    

        for (var i = 0; i < userTab1; i++){

        result = " " + (i+1)  + " * " + userTab + " = "  + (i+1)* userTab + "<br />";

        }

    



    document.getElementById("container").innerHTML += result}
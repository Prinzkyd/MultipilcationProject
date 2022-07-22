var d = new Date();
var year = document.getElementById("valid").value;
var i_pass = document.getElementById("pass").value;
var i_year = parseInt(year);
var f_year = d.getFullYear();

function validation(){
   

    if(i_year > f_year){
        alert("Enter a Valid year");
        return false;
    }

    function id_validate(){
        var i_id = parseInt(document.getElementById("id").value);
        
        var s_id = 1;
        if (i_id > s_id ) {
            alert("Student not Found");
            return false;
        }
    };

    id_validate();

    function pass_validate(){
        if(i_pass =! "admin"){
        return false ;}
    }

    function valid(){
        if(i_pass = "admin"){
            return true ;} 
    }
        
    }
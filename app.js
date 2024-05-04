// var birthdate= new Date ();
// var millisec= birthdate.getTime();
// var date = new Date("28 June,2005")
// var dateMillisec= date.getTime()
// var minus= millisec - dateMillisec;
// var findHour= Math.floor((minus / (1000 * 60 * 60)) % 24)
// var findMin= Math.floor((minus / (1000 * 60)) % 60)
// var findSec= Math.floor((minus / 1000) % 60)
// var findYear= date.getFullYear()
// var findsYear= birthdate.getFullYear()
// var difference= findsYear - findYear;

// // var findMonth= minus.getmonth()




// console.log(findHour, findMin, findSec, difference)

function ageCalculator() {  
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      
    //calculate month difference from current date in time  
    // var month_diff = Date.now() - dob.getTime();  
      
    // //convert the calculated difference in date format  
    // var age_dt = new Date(month_diff);   
      
    // //extract year from date      
    // var year = age_dt.getUTCFullYear();  
      
    // //now calculate the age of the user  
    // var age = Math.abs(year - 1970);  
      
    // //display the calculated age  
    // return document.getElementById("result").innerHTML =    
    //          "Your Age is: " + age + " years. ";  
    // }  
}  

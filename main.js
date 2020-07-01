const calcy = () =>{
  let wd = document.getElementById('wd').value;
  let maths = document.getElementById('maths').value;
  let comp = document.getElementById('comp').value;
  let phy = document.getElementById('phy').value;
  let grades = ""

//Total sum of all subjects
let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy); //We can add by using parsefloat otherwise it would only concatenate the values.
alert(totalGrades);
//Percentage
let perc = (totalGrades/400)*100;
alert(perc);

debugger;
 //Grade
 if(perc<=100 && perc>=80){
  grades ='A';
}else if (perc<=79 && perc>=60){
  grades= 'B';
} else if (perc<=59 && perc>=40){
  grades = 'C';
}else{
  grades = 'F';
}
//Combined data 

if(perc >= 39.5){
    document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
  }
  else{
    document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
  }
}


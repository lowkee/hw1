var formCntr = 0,
    sum = 0,
    total1 = [],
    //why is this total1 instead of total? 
    formAvg = 0;

function countBtn(){
    //count of the numbers entered using the Submit button
    formCntr++;
    document.getElementById("count").innerHTML = formCntr;
    //the count of all the numbers entered
    total1.push(parseFloat(document.numberForm.number.value));
    sum += parseFloat(document.numberForm.number.value);
    //don't understand how parseFloat works
    document.getElementById("sum").innerHTML = sum;
    //sum of all the number entered
    document.getElementById("average").innerHTML = sum / total1.length;
    //the average of all the numbers entered
}
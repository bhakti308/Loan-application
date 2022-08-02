
//Code To covert Loan Amount In Words...

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function ConvertWords (num) {
   if (num.toString().length > 9){
     return "Enter Upto 9 digit..";
    }
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

function myfun() {
    document.getElementById("words").innerText = ConvertWords(document.getElementById("number").value);
};

//Code to create Captcha...

 function createCaptcha() {  
    var num1 = Math.ceil(Math.random() * 10) + '';  
    var num2 = Math.ceil(Math.random() * 10) + '';  
    var num3 = Math.ceil(Math.random() * 10) + ''; 
    var num4 = Math.ceil(Math.random() * 10) + ''; 

    var captchaCode =  num1 + ' ' + num2 + ' ' + num3 + num4;  
    document.getElementById("CaptchaView").value = captchaCode  
}  

 // Code  To Check captcha....

 function CheckCaptcha() {  
    var str1 = removeSpaces(document.getElementById('CaptchaView').value);  
    var str2 = removeSpaces(document.getElementById('CaptchaEnter').value);  

    if (str1 == str2) return true;  
    return false;  
}  

// Code to Remove spaces from Captcha... 
function removeSpaces(string) {  
    return string.split(' ').join('');  
}  

// Code for wrong captcha
function wrongCaptcha(){
    if(!CheckCaptcha()){
    document.getElementById("err").innerText = "You have Entered a wrong captcha...";
    }else{
        document.getElementById("err").innerText = "";
    }
    
};



//Code to pass values to next page.....

function PassValue(){
    const name = document.getElementById("fname").value;
    const email = document.getElementById("mail").value; 

    sessionStorage.setItem("FName",name);
    sessionStorage.setItem("EMail",email);
  return;
};


// Code for submit page chaking capta is correct or not before submiting... 

function OnSubmitbtn(){
     if(!CheckCaptcha()){
        var r= confirm("You have Entered a wrong captcha...");
      if(r==true){
        document.getElementById('CaptchaEnter').value = ""; 
        return false;
      }else{
        document.getElementById('CaptchaEnter').value = ""; 
        return false;
      } 
     }
};


//Code for unable back button on webpage
window.history.forward();
        function noBack() {
            window.history.forward();
        }
setTimeout("preventBack()", 0);

window.onunload = function () { null };



function someFunctions() {
    PassValue();
    OnSubmitbtn();   
};
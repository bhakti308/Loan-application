

const name = sessionStorage.getItem('FName');
const mail = sessionStorage.getItem('EMail');


if(name == undefined){
    window.location.href="Error404.html";
}
        // Code to generate otp

var otp_code = 0;
//var otp = 0;
function generate_otp() {  
var num1 = Math.ceil(Math.random() * 10) + '';  
var num2 = Math.ceil(Math.random() * 10) + '';  
var num3 = Math.ceil(Math.random() * 10) + ''; 
var num4 = Math.ceil(Math.random() * 10) + ''; 

var otp_code =  num1  + num2 + num3 + num4;  
return otp_code;
}


//Code to display values from index page

function displayval(){
        const name = sessionStorage.getItem('FName');
        const mail = sessionStorage.getItem('EMail');
        const mailotp = sessionStorage.getItem('OTP')
        const Name_arr = name.split(" ");
       
        document.getElementById("nm").innerHTML = Name_arr[0];
        document.getElementById("ml").innerHTML = mail;
       
        }



// Code to send mail with otp


function send_Mail(){
  window.otp = generate_otp();
  Email.send({
  SecureToken :"0baec40c-2111-4087-988b-19b5e58591b1",
  To : mail, 
  From : "bbwcoding@gmail.com",
  Subject : "Test email",
  Body : "Hello, <br>"+ "<br>Your passcode for account verification is  "+ otp +
  "<br><br> Enter this passcode on the Email Verification page to verify your account."
}).then(
message => alert("Mail is sent to your Email \nIf you didn't got mail please check spam folder.. ")
);
}



  //Code To Chech OTP Entered is same or not...

//   

var btnClick = 0;

function btnClickCount(){
    btnClick+=1;
    return btnClick;
}

function Validate_OTP(){
          const Entered_OTP = document.getElementById("Enter_otp").value;
          if(Entered_OTP === window.otp){
            window.location.href="Thank.html";
          }else{
          btnClick>=3 ?(window.alert("You Have Crossed Maximum attepmts limit...")  (window.location.href="Error404.html") ): window.alert("You Have Entered Wrong OTP \nPlease Enter Valid OTP.... \nAttept To validate Email Id Number"    + ' '+   (btnClick));
          }
  }

  function ErrLbl(){
    const Entered_OTP = document.getElementById("Enter_otp").value;

    if(Entered_OTP !== window.otp){
        document.getElementById("err").innerHTML = "You Have Entered Wrong OTP...";
    }else{
        document.getElementById("err").innerHTML = " ";
    }
  }

  //Code for unable back button on webpage

  window.history.forward();
        function noBack() {
            window.history.forward();
        }
setTimeout("preventBack()", 0);
          
window.onunload = function () { null };
        

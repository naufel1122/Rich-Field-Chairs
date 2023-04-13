

function purchae(){
    var emailname=document.getElementById("emailname").value
    var Phonenumber=document.getElementById("Phonenumber").value
  var quanty=document.getElementById("quantity").value
    var Address=document.getElementById("Address").value
    var message=document.getElementById("message-text").value

    if(emailname.length >5){
      if(Phonenumber.length >10){
        if(quanty.length >0){
          if(Address.length >5){
            localStorage.setItem("email",emailname);
          localStorage.setItem("Phone",Phonenumber);
          localStorage.setItem("quantitynumber",quanty);
          localStorage.setItem("Address",Address);
          // document.getElementById("exampleModal3").classList.add("show");
          // document.getElementById("exampleModal");
          alert("Your order is done ");
          window.location.href="shop.html"
          }else{
            error.innerHTML="Addres Filed is Empty"
          }
        }else{
          error.innerHTML="Quantity Filed is Empty"
        }
      }else{
        error.innerHTML="Phonenumber Filed is Empty"
      }
    }else{
      error.innerHTML="Email Filed is Empty"
    }

  //   if(emailname.length >3){
  //     if(Phonenumber.length >10){
  //       if(quantity.length >0){
  //         if(Address.length >5){
          

  //         localStorage.setItem("email",emailname);
  //         localStorage.setItem("Phone",Phonenumber);
  //         localStorage.setItem("Address",Address);
  //         // document.getElementById("exampleModal3").classList.add("show");
  //         // document.getElementById("exampleModal");
  //         alert("Your order is done ");

  //       }else{
  //         error.innerHTML="Address feild is empty";

  //       }
  //     }else{
  //       error.innerHTML="Phone Number feild is empty";
  //     }
  //   }else{
  //     error.innerHTML="Email feild is empty";
  //   }
  // }

}


  function nn(){
    var error=document.getElementById("error");
    error.innerHTML="";
  }







  function sign(){
    var username=document.getElementById("username").value
    var useremail=document.getElementById("useremail").value
    var userpassowrd=document.getElementById("userpassword").value
    var cpassword=document.getElementById("cpassword").value

    if(username.length >2){
        if(useremail.length >5){
            if(userpassowrd.length >4){
                if(cpassword.length >4){
                    if(userpassowrd == cpassword){
                        localStorage.setItem("useername",username);
                        localStorage.setItem("useeremail",useremail);
                        localStorage.setItem("useerpassword",userpassowrd);
                        localStorage.setItem("cpassword",cpassword);
                        alert("Your account is create")
                        window.location.href="LOGIN.html"
                    }else{
                        error4.innerHTML= "Password and Confirm Password not matched"
                    }
                }else{
                    error3.innerHTML= "Cpassword is empty ⚠️"
                }
            }else{
                error2.innerHTML= "Password is empty ⚠️"
            }
        }else{
            error1.innerHTML= "Email is empty ⚠️"
        }
    }else{
        error.innerHTML= "Username is empty ⚠️"
    }
} 

function nnnn(){
    var error =document.getElementById("error");
error.innerHTML ="";
var error1 =document.getElementById("error1");
error1.innerHTML ="";
var error2 =document.getElementById("error2");
error2.innerHTML ="";
var error3 =document.getElementById("error3");
error3.innerHTML ="";
var error4 =document.getElementById("error4");
error4.innerHTML ="";
}

function login(){
    var useremail=document.getElementById("useremail").value;
    var userpassowrd=document.getElementById("userpassword").value;

    var localemail=localStorage.getItem("useeremail");
    var localpasswrd=localStorage.getItem("useerpassword");

    var error=document.getElementById("error");

    if(useremail == localemail && userpassowrd == localpasswrd){
        alert("Succes");
        window.location.href="index.html"
    }else{
        error.innerHTML="Credientials are not valid ⚠️"
    }
}

function run(){
 
  var useremail=localStorage.getItem("useeremail")

  var account=document.getElementById("account")
  account.innerHTML=useremail
  var createaccount = document.getElementById("createaccount");
  createaccount.classList.remove("d-none");
  if (useremail != null) {
    var accountli = document.getElementById("account-li");
    accountli.classList.remove("d-none");
    var createaccount = document.getElementById("createaccount");
    createaccount.classList.add("d-none");
  }
}
  
function logout(){
  localStorage.removeItem("useeremail")
  var accountli = document.getElementById("account-li");

  accountli.classList.add("d-none");
  var createaccount = document.getElementById("createaccount");
  createaccount.classList.remove("d-none");
  window.location.href = "index.html"
}



function membership(){
  var emailmember=document.getElementById("emailmember").value;
  var phonelmember=document.getElementById("phonelmember").value;
  var addressmember=document.getElementById("addressmember").value;
  var datemember=document.getElementById("datemember").value;

  if(emailmember.length >5){
    if(phonelmember.length >10){
      if(addressmember.length >5){

        localStorage.setItem("emailmember",emailmember)
        localStorage.setItem("phonelmember",phonelmember)
        localStorage.setItem("addressmember",addressmember)
        localStorage.setItem("datemember",datemember)
        alert("CONGRATES YOU ARE NOW MEMBER OF OUR ZOO ")
        alert("THANKS FOR JOINING OUR MEMEBERSHIP")
        window.location.href=("membership.html")
      }else{
        error.innerHTML= "Adress field is Empty "
      }
    }else{
      error.innerHTML= "Phonenumber field is Empty "
    }
  }else{
    error.innerHTML= "Email field is Empty "
  }
}
function nnnnnn(){
var error =document.getElementById("error");
error.innerHTML ="";
}
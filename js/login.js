let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submit_btn = document.querySelector("#submit");
let getUser= localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

submit_btn.addEventListener("click" , login);

//login function
function login(e){
      e.preventDefault();
      if(username.value === "" || password.value ===""){
            // alert("Please Fill Data")
            Swal.fire('Please Fill Data');
      }else{
            if(
                  getUser && getUser.trim()=== username.value.trim()  &&
                  getPassword && getPassword=== password.value 
            ){
                  setTimeout( () =>{
                        window.location="index.html";
                  } , 1500);
            }else{
                  // alert("Username or password is wrong !!");
                  Swal.fire('Username or password is wrong !!');
            }
      }
     }

let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submit_btn = document.querySelector("#submit");
let getUser= localStorage.getItem("username");
let getPassword = localStorage.getItem("password");
submit_btn.addEventListener("click" ,login);
function login(e){
      e.preventDefault();
      if(username.value === "" || password.value ===""){
            alert("Please Fill Data")
      }else{
            if(
                  getUser && getUser.trim()=== username.value.trim()  &&
                  getPassword && getPassword=== password.value 
            ){
                  setTimeout( () =>{
                        window.location="index.html";
                  } , 1500);
            }else{
                  alert("Username or password is wrong !!");
            }
      }
     }


// let userName = document.querySelector("#username");
// let password = document.querySelector("#password");
// let submit_btn = document.querySelector("#submit");

// let getUser = localStorage.getItem('username');
// let getPassword = localStorage.getItem('password');

// submit_btn.addEventListener('click' , function(e){
//       console.log('hhhh')
//       e.preventDefault();
//       if(userName.value===''|| password.value===''){
//             alert("Please Fill Data")
//       }else if (
//             getUser && getUser === userName.value && getPassword && getPassword === password.value
//       ){
//             setTimeout( () => {
//                   window.location= 'index.html'
//             }, 1500);
           
//       }
// });
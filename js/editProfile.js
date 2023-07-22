// Get data from localstorage
let get_user  = localStorage.getItem("username");
let get_email = localStorage.getItem("email");
let get_img = localStorage.getItem("profilePhoto");

let imgUrl;
//variables 
let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");
let inputFileImg = document.getElementById("upload-image-file");

//setting Values of Input
userInput.value = get_user;
userEmailInput.value = get_email;
 imgUrl = get_img ;


console.log(get_img);


//Events 
editForm.addEventListener("submit" , editProfileData);
inputFileImg.addEventListener("change" , uploadImage)

function editProfileData(e){
      e.preventDefault();

      localStorage.setItem("username" , userInput.value);
      localStorage.setItem("email" , userEmailInput.value);
      get_img = imgUrl;
      localStorage.setItem("profilePhoto" , get_img);
      console.log(get_img);

      setTimeout( () => {
            window.location = "profile.html";
      } , 500)
}

//uploadImage 
function uploadImage(){
      let file = this.files[0];
      let types = ["image/jpeg" , "image/png"];

      if(types.indexOf(file.type) == -1) {
            alert("Type not supported");
            return;
      }

      if(file.size > 2 * 1024 * 1024){
            alert("Image not excesd");
            return;
      }
      getImageBase64(file);
      // productImage = URL.createObjectURL(file);

 }

 function getImageBase64(file){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (){
            imgUrl = reader.result;
            console.log(imgUrl);

      };
      reader.onerror = function (){
            alert("Error !!");
      };
 }
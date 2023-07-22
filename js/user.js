let userInfo = document.querySelector('#user_info');
let user = document.querySelector('#user');
let links = document.querySelector('#links');
let logoutBtn = document.querySelector('#logout');

let getUser = localStorage.getItem('username');

if(getUser){
      links.remove()
      userInfo.style.display = 'flex';
      user.innerHTML = getUser;
}

logoutBtn.addEventListener( 'click' , function(e){
      localStorage.clear();
      setTimeout( ()=> {
            window.location = "register.html";
      } , 1500);
})

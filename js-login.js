
function getLoginStatus(){

  for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)))
}

}

//verificam daca input-ul din form-ul login este egal cu cel din form-ul register (localStorage)

function check() {

    var storedName = localStorage.getItem('name'); //user-ul din register form
    var storedPw = localStorage.getItem('pw'); //parola din register form

    var userName = document.getElementById('user'); //user-ul din login
    var userPw = document.getElementById('pass'); //parola din login

    
    if(userName.value !== storedName || userPw.value !== storedPw) {
      alert('ERROR');
  }else {
      alert('You are loged in.');
      localStorage.setItem('log', '1');
      console.log("Sunteti logat")

      for (var i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)))
    }
  }
};

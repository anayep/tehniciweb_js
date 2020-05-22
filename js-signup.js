//pt afisarea valorii din input-ul de tip slider

var slider = document.getElementById("vol")
var output = document.getElementById("value")
output.innerHTML = slider.value; // afiseaza valoarea default

// face update de fiecare data cand mutam slider-ul
slider.oninput = function() {
  output.innerHTML = this.value;

};


var regexPass = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"); //regex pt parola de minim 8 caractere, cu cel putin o litera mare,o litera mica,o cifra si un simbol

//functie pentru verificarea input-urilor din register form

function validate(){
    //verif user sa fie nenul si apoi afisam user-ul
    var user = document.getElementById("user").value;
    if(user.length==0) document.getElementById("textbox").innerHTML="Nu ati introdus nimic!";
    else document.getElementById("textbox").innerHTML="Ati introdus utilizatorul " + user;

    //verificare parola cu regex si spunem daca e acceptata sau nu
    var pass = document.getElementById("pass").value;
    if(regexPass.test(pass))
    document.getElementById("textbox1").innerHTML="Parola este acceptata";
    else 
    document.getElementById("textbox1").innerHTML="Parola NU este acceptata";

    //verificare email sa fie nenul si apoi afisam
    var email = document.getElementById("email").value;
    if(email.length==0) document.getElementById("textbox2").innerHTML = "Nu ati introdus nimic";
    else document.getElementById("textbox2").innerHTML = "Ati introdus emailul " + email;

    //alegem genul masculin feminin si apoi afisam ce am ales(radio)
    var radios = document.getElementsByName('gender');

    for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

        document.getElementById("textbox3").innerHTML = "Ati ales " + radios[i].value;
        break;
    }
}

    //bifam daca suntem de acord cu conditiile site-ului si apoi afisam daca am bifat sau nu(checkbox)
        if(document.getElementById("terms").checked== true) document.getElementById("textbox4").innerHTML = "Ati bifat";
       else document.getElementById("textbox4").innerHTML = "Nu ati bifat";
};



// memoram user si parola in localStorage
function store() {
    
    var name = document.getElementById('user').value;
var pw = document.getElementById('pass').value;
    localStorage.setItem('name', name);
    localStorage.setItem('pw', pw);
}

for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)))
}
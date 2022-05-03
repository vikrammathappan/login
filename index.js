document.getElementById("button").addEventListener("click", signup);

var arr = JSON.parse(localStorage.getItem("Register")) ||  [];


function signup(){

    var obj = {
        name : document.getElementById("sname").value,
        uname: document.getElementById("username").value,
        email : document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        password : document.getElementById("password").value,
    }

   arr.push(obj);
   localStorage.setItem("Register", JSON.stringify(arr))
}


document.getElementById("login").addEventListener("click", login);

function login(){
    
    var x = JSON.parse(localStorage.getItem("Register")) 
    var lname = document.getElementById("tname").value;
    var pwd = document.getElementById("epassword").value;

   x.map(function(e){
    if(e.uname != lname && e.password != pwd){
        document.getElementById("msg").innerText = "Wrong Credentials..!"
    }else if(e.uname == lname && e.password == pwd){
        window.location.href = "homepage.html"
    }
   })
}


// function login(){
//     showData()
// }

// function showData(el){
//     localStorage.setItem("Register", JSON.stringify(el));
// }
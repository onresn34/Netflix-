let ids = [
    {
        loginName: "neosyazilim@gmail.com", 
        phoneNumber: "02129124090",
        password: "yazilimakademi"
    },
    {
        loginName: "onuresin@gmail.com", 
        phoneNumber: "5543202204",
        password: "neosyazilim"
    }
]
console.log(ids.length)

let loginButton = document.querySelector(".login__sign-in")
let control;
loginButton.addEventListener("click",function(){
    let userLogin = document.querySelector(".loginName").value
    let userPassword = document.querySelector(".loginPassword").value
    control = false;
for(i = 0; i < ids.length; i++){    
        if (ids[i].loginName === userLogin || ids[i].phoneNumber === userLogin){
            control = true;
            if(ids[i].password === userPassword){
                control = true;
            }else {
                control = false;
            }
        }
    }
    if(control){
        alert ("Giriş Başarılı")
    }else {
        alert ("Hatali Giris")
    }
})

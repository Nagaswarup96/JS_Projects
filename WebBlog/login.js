const users = [
    {   
        email:"nagaswarupdp@gmail.com",
        password:"Naga1234",
        username: "nagaswarup"
    },
    {
        email:"naga123@gmail.com",
        password:"1234567",
        username:"Swarup"
    }
];

const inpE = document.querySelector(".login");
const inpP = document.querySelector(".pass");
const btn = document.querySelector(".loginB");
const frm = document.querySelector('.formS');
const box = document.querySelector(".box");
const msg =document.querySelector(".error");
const cont = document.querySelector(".contact");

console.log(inpE.value);

let usern = "";
let flag = 0;

function validation(){
    
    users.forEach((user)=>{
        if((inpE.value === user.email) && (inpP.value === user.password)){
            frm.setAttribute("action", "index.html");
            usern = user.username;
            flag = 1;
            localStorage.setItem("flags", flag);
            localStorage.setItem("usernam", usern);
        }
        else if ((inpE.value != user.email) || (inpP.value != user.password)){
           box.setAttribute("style", "display : block");
           msg.setAttribute("style", "color:red");
           btn.setAttribute("style", "margin-top:0")

            }
        
    })
   
}

btn.addEventListener('click', validation);
cont.addEventListener('click',()=>{
    cont.setAttribute("href", "#contact");
});
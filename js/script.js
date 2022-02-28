const mails= ["tool@mail.it", "storm@mail.com", "petrucci@mail.org"]
console.log(mails);

const userMail=document.getElementById("user-mail");

let  mailsRegistered= false; 

const mailControl=document.getElementById("control"); 
mailControl.addEventListener("click", function(){  
    for (let i = 0; i < mails.length; i++ ){
    if ( mails[i] == userMail.value){
        mailsRegistered= true;
    }
}; 

if (mailsRegistered == true){ 
    result.innerHTML=("Email presente, puoi giocare") 
    result.classList.add("text-success", "fs-1"); 
    document.getElementById('game').classList.remove('d-none');
    document.getElementById('game').classList.add('d-block');
    console.log("Email presente");
}else{
    result.innerHTML=("Email inesistente, non puoi giocare") 
    result.classList.add("text-danger", "fs-1");
    console.log("mail non presente");
}

}); 

const registerMail= document.getElementById("register"); 
registerMail.addEventListener("click", function(){
    mails.push(userMail.value); 
    console.log(mails);
})

const reset=document.getElementById("cancel"); 
reset.addEventListener("click", function(){
    document.getElementById("user-mail").value=""; 
    result.innerHTML="";
    console.log(result);

}) 












const startGame=document.getElementById("start-game");

startGame.addEventListener("click", function(){

    const userNumber= Math.floor(Math.random() *6 +1);
    document.getElementById("human-number").innerHTML= userNumber; 
    console.log(userNumber); 

    const pcNumber=innerHTML=Math.floor(Math.random() *6 +1); 
    document.getElementById("cybertron-number").innerHTML= pcNumber; 
    console.log(pcNumber); 

    const resultGame=document.getElementById("result-game");

    if ( userNumber > pcNumber ){
        resultGame.innerHTML="umano vince";
        resultGame.classList.add("fs-1");
        console.log("Umano vince ahahhahhahahahahahaha");
    }else if (userNumber < pcNumber){ 
        resultGame.innerHTML="umano perde"; 
        resultGame.classList.add("fs-1"); 
        console.log("CyberTron vince");
    }else{ 
        resultGame.innerHTML="nulla di fatto";
        resultGame.classList.add("fs-1");
        console.log("Pareggio");
    }
});
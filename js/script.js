const mails= ["tool@mail.it", "storm@mail.com", "petrucci@mail.org"]
console.log(mails);

const userMail= prompt("Inserisci la tua mail:");

let  mailsRegistered= false; 

for (let i = 0; i < mails.length; i++ ){
    if ( mails[i] == userMail){
        mailsRegistered= true;
    }
}; 

if (mailsRegistered == true){
    console.log("Email presente");
}else{
    console.log("mail non presente");
}











const startGame=document.getElementById("start-game");

startGame.addEventListener("click", function(){

    const userNumber= Math.floor(Math.random() *6 +1);
    document.getElementById("human-number").innerHTML= userNumber; 
    console.log(userNumber); 

    const pcNumber=innerHTML=Math.floor(Math.random() *6 +1); 
    document.getElementById("cybertron-number").innerHTML= pcNumber; 
    console.log(pcNumber); 

    const resut=document.getElementById("result");

    if ( userNumber > pcNumber ){
        result.innerHTML="umano vince";
        console.log("Umano vince ahahhahhahahahahahaha");
    }else if (userNumber < pcNumber){ 
        result.innerHTML="umano perde"; 
        console.log("CyberTron vince");
    }else{ 
        result.innerHTML="nulla di fatto"; 
        console.log("Pareggio");
    }
});
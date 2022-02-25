const mails= ["tool@mail.it", "storm@mail.com", "petrucci@mail.org"]
console.log(mails);
let found= document.getElementById("found");
found.innerHTML="";
const verifyButtom= document.getElementById("verify"); 

verifyButtom.addEventListener("click", function(){   
    const controlMail = document.getElementById("user-input").value; 
    console.log(mails.includes(controlMail)); 
    // console.log(controlMail); 
    
    for ( let i = 0 ; i < mails.length; i++) {
        if (controlMail === (mails[i]) )  {  
            found.append ("mail trovata");
            console.log("mail trovata");
        }
    }
}); 




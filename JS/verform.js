document.querySelector('#contact form button').addEventListener('click',function(event){
    event.preventDefault() //on empeche le clic de soumettre tout de suite le formulaire


    const regExInput=/^[\s]{1,50}$/
    let firstNameInput = document.getElementById('firstname');
    //console.log(firstNameInput)
    //console.log(firstNameInput.value.match(regExInput))

    if (firstNameInput.value.match(regExInput)==null){
        firstNameInput.classList.add('error')
        firstNameInput.previousElementSibling.classList.add('error')

    }

    let lastNameInput = document.getElementById('lastname');
    //console.log(firstNameInput)
    //console.log(firstNameInput.value.match(regExInput))

    if (lastNameInput.value.match(regExInput)==null){
        lastNameInput.classList.add('error')
        lastNameInput.previousElementSibling.classList.add('error')

    }

    regExInputMail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    
    let mailInput=document.getElementById('mail')
    //console.log(mailInput)
    //console.log(mailInput.value.match(regExInputMail)) vérificaion

    if (mailInput.value.match(regExInputMail)==null){
        mailInput.classList.add('error')
        mailInput.previousElementSibling.classList.add('error')

    }




    let messageTextarea = document.getElementById('msg')
    //si le message est soumis sans aucun caractère, une erreur 
    if (messageTextarea.value==''){
        lastNameInput.classList.add('error')
        lastNameInput.previousElementSibling.classList.add('error')
        
    }
    //console.log(messageTextarea) vérification




}
)

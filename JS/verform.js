document.querySelector('#contact form button').addEventListener('click', function (event) {


    let errone=true //variable booléenne pour la soumission du formulaire
    const regExInput = /^[a-zA-Z-]{1,50}$/
    //console.log(firstNameInput)
    //console.log(firstNameInput.value.match(regExInput))
    const inputVerif = function () {
        if (this.value.match(regExInput) == null) {
            this.classList.add('error')
            this.previousElementSibling.classList.add('error')
        }

        else {
            this.classList.remove('error')
            this.previousElementSibling.classList.remove('error')
            
            errone=false
        }
    }

    //prenom

    let firstNameInput = document.getElementById('firstname')
    if (firstNameInput.value.match(regExInput) == null) {
        firstNameInput.classList.add('error')
        firstNameInput.previousElementSibling.classList.add('error')

    }
    firstNameInput.addEventListener('input', inputVerif)


    //nom

    let lastNameInput = document.getElementById('lastname');
    //console.log(firstNameInput)
    //console.log(firstNameInput.value.match(regExInput))

    if (lastNameInput.value.match(regExInput) == null) {
        lastNameInput.classList.add('error')
        lastNameInput.previousElementSibling.classList.add('error')

    }
    lastNameInput.addEventListener('input', inputVerif)


    //mail

    regExInputMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let mailInput = document.getElementById('mail')
    //console.log(mailInput)
    //console.log(mailInput.value.match(regExInputMail)) vérificaion

    if (mailInput.value.match(regExInputMail) == null) {
        mailInput.classList.add('error')
        mailInput.previousElementSibling.classList.add('error')

    }
    mailInput.addEventListener('input', function () {
        if (mailInput.value.match(regExInputMail) == null) {
            mailInput.classList.add('error')
            mailInput.previousElementSibling.classList.add('error')

        }
        else {
            mailInput.classList.remove('error')
            mailInput.previousElementSibling.classList.remove('error')

            errone=false



        }

    })

    //message

    let messageTextarea = document.getElementById('msg')
    //si le message est soumis sans aucun caractère, une erreur 
    if (messageTextarea.value == '') {
        messageTextarea.classList.add('error')
        messageTextarea.previousElementSibling.classList.add('error')

    }
    //console.log(messageTextarea) vérification

    messageTextarea.addEventListener('input', function () {
        if (messageTextarea.value == '') {
            messageTextarea.classList.add('error')
            messageTextarea.previousElementSibling.classList.add('error')

        }
        else {
            messageTextarea.classList.remove('error')
            messageTextarea.previousElementSibling.classList.remove('error')
            errone=false



        }

    })

    if (!errone){
        document.querySelector('#contact form').submit()
    }

    if (zrrone){
        event.preventDefault()
    }


}
)

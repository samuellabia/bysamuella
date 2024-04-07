var form=document.querySelector("#contact form") //on séléctionne le formulaire 

form.addEventListener('submit',validation,false)

function validation(event){
    var errors = []
    
    var form=document.querySelector("#contact form") //on séléctionne le formulaire 

form.addEventListener('submit',validation,false)

function validation(event){
    var errors = []
    
    var firstname = document.getElementById("firstname")
    var lastname = document.getElementById("lastname")
    var email = document.getElementById("mail")
    var message = document.getElementById("msg")

//erreurs qui peuvent arriver à part celles rensignées par la navigateur
    if (firstname.value==""){
        errors.push("Veuillez me faire savoir votre prénom")
    }
    if (lastname.value==""){
        errors.push("Veuillez me faire savoir votre nom")
    }
    if (email.validity.valid === false) {
        errors.push("L'adresse email saisie ne semble pas valide.")
    }
    if (message.value === "") {
        errors.push("Veuillez entrer un message.")
    }


    //s'il y  au moins une erreur, on empeche la soumission du formulaire

    var errorDiv=form.querySelector('div.errors') //on sélectionne l'élément html crée pour afficher les erreurs
    if (errors.length>0){
        event.preventDefault()
        errorDiv.style.display = 'block'
        var html = '<ul>'
        for (var i = 0; i < errors.length; i++) {
            html += '<li>' + errors[i] + '</li>'
        }
        html += '</ul>'
        errorDiv.innerHTML = html

        return false
    }

    else {
        errorDiv.style.display = 'none'
    }

    return true
}

    var email = document.getElementById("mail")
    var message = document.getElementById("msg")

//erreurs qui peuvent arriver à part celles rensignées par la navigateur
    if (email.validity.valid === false) {
        errors.push("L'adresse email saisie ne semble pas valide.")
    }
    if (message.value === "") {
        errors.push("Veuillez entrer un message.")
    }


    //s'il y  au moins une erreur, on empeche la soumission du formulaire

    var errorDiv=form.querySelector('div.errors') //on sélectionne l'élément html crée pour afficher les erreurs
    if (errors.length>0){
        event.preventDefault()
        errorDiv.style.display = 'block'
        var html = '<ul>'
        for (var i = 0; i < errors.length; i++) {
            html += '<li>' + errors[i] + '</li>'
        }
        html += '</ul>'
        errorDiv.innerHTML = html

        return false
    }

    else {
        errorDiv.style.display = 'none'
    }

    return true
}
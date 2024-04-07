var form = document.querySelector("#contact form") //on séléctionne le formulaire 

form.addEventListener('submit', validation, false)



var errors = [] //yableau d'erreurs 
var fields = ["firstname", "lastname", "mail","msg"] //tableau de champs id

function validation(event) {
    fields.forEach(function (fieldId) {
        var field = document.getElementById(fieldId); //on obtient le champ
        var error = validateField(field); //on appelle la fonction validate
        if (error) {
            errors.push(error);
            field.classList.add('error');
            field.previousElementSibling.classList.add('error');
        } else {
            field.classList.remove('error');
            field.previousElementSibling.classList.remove('error');
        }
    }); //fin du forEach


    if (errors.length > 0) {
        event.preventDefault(); //on empeche la vaidation du formulaire
        displayErrors(errors); //on affiche les erreurs contenues dans le tableau 
    }
}

function validateField(field) {
    if (field.value === "") {
        return "Veuillez remplir le champ " + field.previousElementSibling.textContent;
    }
    if (field.id === "email" && !field.validity.valid) {
        return "L'adresse email saisie ne semble pas valide.";
    }
    return null;
}

function displayErrors() {
        var errorDiv = form.querySelector('div.errors') //on sélectionne l'élément html crée pour afficher les erreurs
        errorDiv.style.display = 'block'
        var html = '<ul>'
        for (var i = 0; i < errors.length; i++) {
            html += '<li>' + errors[i] + '</li>'
        }
        html += '</ul>'
        errorDiv.innerHTML = html
}
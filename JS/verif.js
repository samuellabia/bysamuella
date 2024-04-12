var form = document.querySelector("#contact form") //on séléctionne le formulaire 

form.addEventListener("submit", validation, false)

function validation(event) {
    var fields = ["firstname", "lastname", "mail", "msg"] //tableau de champs id 
    var errors = [] //tableau d'erreurs réinitialisé à 0 à chaque validation

    fields.forEach(function(fieldId) {
        var field = document.getElementById(fieldId) //on obtient le champ
        var errorMessage = null;

        if (field.value == "") {
            errorMessage = "Veuillez remplir le champ " + field.previousElementSibling.textContent;
        }
        if (field.id === "mail" && !field.validity.valid) {
            errorMessage = "L'adresse mail saisie ne semble pas valide.";
        }

        if (errorMessage) {
            errors.push(errorMessage)
            field.classList.add('error') //on ajoute la classe error à l'élement input.
            field.previousElementSibling.classList.add('error') //on ajoute la classe error au label
        } else {
            var index = errors.indexOf(errorMessage);
            if (index > -1) {
                errors.splice(index, 1); // Supprimer le message correspondant du tableau
            }
            field.classList.remove('error');
            field.previousElementSibling.classList.remove('error');
        }
    });

    var errorDiv = form.querySelector('div.errors') //on sélectionne l'élément html créé pour afficher les erreurs

    if (errors.length > 0) {
        event.preventDefault()

        errorDiv.style.display = 'block'
        var html = '<ul>' //élément ul
        for (var i = 0; i < errors.length; i++) {
            html += '<li>' + errors[i] + '</li>' //onn affiche le message
        }
        html += '</ul>'

        errorDiv.innerHTML = html
        return false
    } else {
        errorDiv.style.display = 'none'
    }

    return true
}

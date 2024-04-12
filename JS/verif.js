var form = document.querySelector("#contact form") //on séléctionne le formulaire 


form.addEventListener("submit",validation,false)


function validation(event){
    var fields = ["firstname", "lastname", "mail", "msg"] //tableau de champs id 
    var errors = [] //tableau d'erreurs réinitialisé à 0 à chaque validation

    fields.forEach(function (fieldId) {

        var field = document.getElementById(fieldId)//on obtient le champ

        if (field.validity.valid === false) {
            var errorMessage = "Le champ " + fieldId + " ne semble pas valide."
            errors.push(errorMessage)
            field.classList.add('error')//on ajoute la classe error à l'élement input.
            field.previousElementSibling.classList.add('error') //on ajoute la classe error au label
        }
        
        else{
            var index=errors.indexOf(errorMessage);
            if(index >-1){
                errors.splice(index, 1); // Supprimer le message correspondant du tableau
            }
            field.classList.remove('error');
            field.previousElementSibling.classList.remove('error');

        }


    })

    var errorDiv = form.querySelector('div.errors') //on sélectionne l'élément html créé pour afficher les erreurs

    if (errors.length > 0) {
        event.preventDefault()
       
        errorDiv.dis.display = 'block'
        var html = '<ul>' //élément ul
        for (var i = 0; i < errors.length; i++) {
            html += '<li>' + errors[i] + '</li>' //onn affiche le message
        }
        html += '</ul>'
        
        errorDiv.innerHTML = html
        return false
    }
    
    else{
        errorDiv.display.style='none'
    }

    return true


}



//boucle associant une erreur à un champ


    /*field.addEventListener('input', function () { //on ajoute l'écouteur input sur chaque élément
        var error = validateField(field) //on appelle la fonction validate
        if (error) {
            
            errors.push(error) //on ajote l'erreur correspondant au champ dans le tableauu d'erreurs
            field.classList.add('error')//on ajoute la classe error à l'élement input.
            field.previousElementSibling.classList.add('error') //on ajoute la classe error au label
        }
        else {
            var index = errors.indexOf(error);
            if (index > -1) {
                errors.splice(index, 1); // Supprimer l'élément du tableau
            }
            field.classList.remove('error')
            field.previousElementSibling.classList.remove('error')
            errorDiv.style.display = 'none'
        }
    });
});
*/

/*
form.addEventListener('submit',function(event){
    errors=[]; //à chaque soumission du formulaire le tableau d'erreur sera vide 

    //afficher les erreurs s'il y en a 
    if (errors.length > 0) {
        event.preventDefault(); //on empeche la vaidation du formulaire
        displayErrors(errors); //on affiche les erreurs contenues dans le tableau 
    }
    else if (errors.length == 0) {
        form.submit()
    }

});





function validateField(field) { //valider un champ de formulaire
    var errorMessage = null;
    if (field.value == "") {
        errorMessage="Veuillez remplir le champ " + field.previousElementSibling.textContent;
    }
    if (field.id === "mail" && !field.validity.valid) {
        errorMessage="L'adresse mail saisie ne semble pas valide.";
    }
    
    // Vérifier si le message d'erreur existe déjà
    if (errorMessage && !errors.includes(errorMessage)) {
        errors.push(errorMessage);
    }
    return errorMessage;

}



function displayErrors() { //afficher les messages d'erreurs
    
    errors=[]//on vide le tableau après 'affichage 
   
}*/
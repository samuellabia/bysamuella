document.addEventListener("readystatechange", function () {
    if (document.readyState === 'complete') {
        // Le DOM est prêt !

        // On récupère l'objet correspondant à notre formulaire de recherche :
        const form = document.querySelector("#search")

        // On se greffe sur l'événement "submit" déclenché par le formulaire.
        form.addEventListener("submit", chercher, false)

        function chercher(event) {
            // On récupère la saisie de l'utilisateur :
            let terms = form.querySelector("input").value.trim()
            let resultsContainer = document.querySelector(".results")

            if (terms.length >= 3) {
                // On appelle notre API de recherche côté serveur
                fetch(`/api/?action=search&q=${terms}`)
                    .then(response => response.json())
                    .then((data) => {
                        // Affiche les résultats
                        resultsContainer.innerHTML = preparerResultatsHTML(data.results)
                    })
            } else {
                resultsContainer.innerHTML = ''
            }

            // On ne veut pas que la page soit rechargée
            event.preventDefault()
            return false
        }

        document.addEventListener("readystatechange", function () {
            if (document.readyState === 'complete') {
                // Le DOM est prêt !
        
                // On récupère l'objet correspondant à notre formulaire de recherche :
                const form = document.querySelector("#search")
        
                // On se greffe sur l'événement "submit" déclenché par le formulaire.
                form.addEventListener("submit", chercher, false)
        
                function chercher(event) {
                    // On récupère la saisie de l'utilisateur :
                    let terms = form.querySelector("input").value.trim()
                    let resultsContainer = document.querySelector(".results")
        
                    if (terms.length >= 3) {
                        // On appelle notre API de recherche côté serveur
                        fetch(`/api/?action=search&q=${terms}`)
                            .then(response => response.json())
                            .then((data) => {
                                // Affiche les résultats
                                resultsContainer.innerHTML = preparerResultatsHTML(data.results)
                            })
                    } else {
                        resultsContainer.innerHTML = ''
                    }
        
                    // On ne veut pas que la page soit rechargée
                    event.preventDefault()
                    return false
                }
        
                function preparerResultatsHTML(results) {
                    if (results.length === 0) {
                        return `Désolé, je n'ai trouvé aucun résultat correspondant à votre recherche.`;
                    } else {
                        let html = '<ul>';
                        for (let result of results) {
                            html += `<li><a href="details.php?id=${result.id}">${result.titre}</a></li>`;
                        }
                        html += '</ul>';
                        return html;
                    
                }
            }
        }
        });
        
}
});

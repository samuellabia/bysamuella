document.getElementById('voir-plus').addEventListener('click', function() {
    // Comptage du nombre de projets déjà chargés
    var loadedProjects = document.querySelectorAll('.projets article').length;

    fetch('AJAX/loadProjects.php?loadedProjects=' + loadedProjects)
        .then(response => response.json())
        .then(data => {
            // Créatiion de nouveaux éléments HTML pour chaque projet
            data.forEach(project => {
                var article = document.createElement('article');
                var h3 = document.createElement('h3');
                h3.textContent = project.title;
                var img = document.createElement('img');
                img.src = project.image;
                img.alt = 'illustration du projet ' + project.title;
                var a = document.createElement('a');
                a.href = 'details.php?id=' + project.id;
                a.textContent = 'Lire plus';
                article.append(h3, img, a);
                document.querySelector('.projets nav').appendChild(article);
            });
        })
        .catch(error => console.error('Erreur fetch :', error));
});

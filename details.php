<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Document</title>
</head>

<body class="detail">
    <?php include "PHP/header.php" ?>
    <main>
        <article>
            <h1>
                Jeu Sokoban
            </h1>

            <h2>Description</h2>


            <p>
                Sokoban est un jeu de puzzle classique où le joueur contrôle un personnage qui
                doit pousser des boîtes vers des emplacements de stockage désignés. Le jeu se joue sur
                une carte basée sur une grille où le personnage peut se déplacer dans quatre directions
                (haut, bas, gauche, droite). Le personnage ne peut pousser qu’une seule boîte à la fois
                et il ne peut pas tirer les boîtes ou passer à travers les murs.

            </p>

            <h2>Technologies utilisées</h2>
            <p2> Jeu entièrement codé en langage C</p2>

            <h2>Challenges rencontrés</h2>
            <p>
                <ul>
                    <li>La gestion des mouvements</li>
                    <li>Les erreurs de segmentation</li>
                </ul>
            </p>

            <h2>Quelques images de notre jeu</h2>
            <img src="IMG/sokoban.png" alt="visualisation du jeu sokoban en console">





        </article>
    </main>
    <?php include  "PHP/footer.php"; ?>
</body>

</html>
<!doctype html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Portfolio de JELDI</title>
</head>


<body class="home">
    <?php include "PHP/header.php" ?>

    <main>

        <section>
            <div id="about">
                <h1>Qui suis-je?</h1>

                <img src="IMG/Moi.jpg" alt="Photo de mon bitmoji">
            </div>
            <p>
                Lorem ipsum dolor sit amet. Ea distinctio nisi sed quasi excepturi et dolorum tempora vel consequatur
                omnis. A quaerat odio ab consequatur voluptas in accusantium aspernatur ut aliquam expedita aut quaerat
                sunt qui explicabo ipsam. Et cupiditate nulla eos natus pariatur sed officiis quis.
                Et omnis tenetur ut perspiciatis cupiditate a cumque earum est assumenda facere qui consequatur commodi
                ut quos rerum. A aliquid repudiandae id consequatur velit id error itaque sit voluptate magnam est
                soluta alias vel nostrum deleniti. Et deserunt architecto vel dignissimos quos et ipsum tenetur in
                ratione quis.
            </p>

        </section>

        <section class="projets">
            <h1>Mes projets</h1>
            <nav>
                <article>
                    <h2> Jeu Sokoban</h2>
                    <img src="IMG/sokoban.png" alt="">
                    <p>Elaboration du jeu Sokoban en mode console</p>
                    <a href="details.php">Lire plus</a>
                </article>

                <article>
                    <h2>Jeu Space Invaders
                    </h2>
                    <img src="IMG/invaders.png" alt="">
                    <p>Projet2</p>
                    <a href="details.php">Lire plus</a>
                </article>

                <article>
                    <h2>
                        Jeu de puzzle
                    </h2>
                    <img src="IMG/puzzle.jpeg" alt="">
                    <p> projet</p>
                    <a href="details.php">Lire plus</a>
                </article>

                <article>
                    <h2>Analyseur de sentiment des tweets</h2>
                    <img src="IMG/analyseur.png" alt="">
                    <p> Un outil qui utilise l'apprentissage automatique pour analyser le sentiment des tweets</p>
                    <a href="details.php">Lire plus</a>
                </article>


                <article>
                    <h2>Application de suivi des dépenses</h2>
                    <img src="IMG/pexels-pixabay-207580.jpg" alt="">
                    <p> </p>
                    <a href="details.php">Lire plus</a>
                </article>

                <article>
                    <h2>Application de réservation de restaurant</h2>
                    <img src="IMG/pexels-pixabay-207580.jpg" alt="">
                    <p> projet</p>
                    <a href="details.php">Lire plus</a>
                    
                </article>
            </nav>
        </section>
        <section id="contact">
            <h1>Me contacter</h1>
            <form action="" method="post">
                <div class="errors"></div>
                <div>
                    <label for="firstname">Prénom</label>
                    <input type="text" id="firstname" name="user_firstname"  />
                </div>

                <div>
                    <label for="lastname">Nom</label>
                    <input type="text" id="lastname" name="user_name"  />
                </div>

                <div>
                    <label for="mail">Email</label>
                    <input type="email" id="mail" name="user_mail"  />
                </div>

                <div>
                    <label for="msg">Message</label>
                    <textarea id="msg" cols="40" rows="10" name="user_message"  ></textarea>
                </div>


                <button type="submit">Envoyer le message</button>

            </form>
        </section>

    </main>



    <?php include "PHP/footer.php" ?>


    <script src="JS/form.js"></script>


</body>

</html>
<?php include 'DB/database.php'; ?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Portfolio de JELDI</title>
</head>

<body>
    <?php include "PHP/header.php"; ?>
    <main>
        <section>
            <img src="IMG/Moi.jpg" alt="Photo de mon bitmoji">
            <p>
                Bienvenue sur mon site web ! Ici, vous trouverez une collection de projets qui m'inspirent et me passionnent.
            </p>

        </section>
        <?php
            $db = new Database();
            $project = new Project($db);
            $projects = $project->listeProjets(3); //3 projets au début
        ?>

        <section class="projets">
            <h2>Mes projets</h2>
            <nav>
                <?php foreach ($projects as $project) : ?>
                    <article>
                        <h3><?php echo $project['title']; ?></h3>
                        <img src="<?php echo $project['image']; ?>" alt="illustration du projet <?php echo $project['title']; ?>">
                        <a href="details.php?id=<?php echo $project['id']; ?>">Lire plus</a>
                    </article>
                <?php endforeach; ?>
            </nav>
            <button id="voir-plus">Charger plus de projets</button>
        </section>
        <section id="contact">
            <h2>Me contacter</h2>
            <form action="DB/database.php" method="post">
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
    <?php include "PHP/footer.php"; ?>
    <script src="JS/form.js"></script>
    <script src="AJAX/ajax.js"></script>
</body>
</html>
<?php include 'DB/database.php';
require_once "PHP/lang.php";?>

<!doctype html>
<html lang="<?php echo $lang;?>" >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Portfolio</title>
</head>

<body>
    <?php include "PHP/header.php"; ?>
    <main>
        <section>
            <img src="IMG/Moi.jpg" alt="Photo de mon bitmoji">
            
            <p>
                <?php echo $TRAD["bienvenue"]; ?>
            </p>

        </section>
        <?php
            $db = new Database();
            $project = new Project($db);
            $projects = $project->listeProjets(3); //3 projets au début
        ?>

        <section class="projets">

            <h2> <?php echo $TRAD["projets"]  ?> </h2>
            <nav>
                <?php foreach ($projects as $project) : ?>
                    <article>
                        <h3><?php echo $project['title']; ?></h3>
                        <img src="<?php echo $project['image']; ?>" alt="illustration du projet <?php echo $project['title']; ?>">
                        <a href="details.php?id=<?php echo $project['id']; ?>" > <?php echo $TRAD["lire"]  ?></a>
                    </article>
                <?php endforeach; ?>
            </nav>
            <button id="voir-plus"><?php echo $TRAD["charger"] ?></button>
        </section>
        <section id="contact">
            <h2><?php echo $TRAD["contacter"] ?></h2>
            <form action="DB/database.php" method="post">
                <div class="errors"></div>
                <div>
                    <label for="firstname"><?php echo $TRAD["prenom"] ?></label>
                    <input type="text" id="firstname" name="user_firstname"  />
                </div>

                <div>
                    <label for="lastname"><?php echo $TRAD["nom"]?></label>
                    <input type="text" id="lastname" name="user_name"  />
                </div>

                <div>
                    <label for="mail"><?php echo $TRAD["email"] ?></label>
                    <input type="email" id="mail" name="user_mail"  />
                </div>

                <div>
                    <label for="msg"><?php echo $TRAD["message"] ?></label>
                    <textarea id="msg" cols="40" rows="10" name="user_message"  ></textarea>
                </div>
                <button type="submit"><?php echo $TRAD["envoyer"] ?></button>
            </form>
        </section>
    </main>
    <?php include "PHP/footer.php"; ?>
    <script src="JS/form.js"></script>
    <script src="AJAX/ajax.js"></script>
</body>
</html>
<?php require_once "PHP/lang.php"; ?>
<header>
    <nav>
        <ul>
            <a href="index.php?lang=<?php echo $lang; ?>"> <?php echo $TRAD["accueil"] ?></a>
            <a href="index.php?lang=<?php echo $lang; ?>#about"><?php echo $TRAD["propos"] ?></a>
            <a href="index.php?lang=<?php echo $lang; ?>#contact"><?php echo $TRAD["contact"] ?></a>

            <li><a href="?lang=fr">FR</a></li>
            <li><a href="?lang=en">EN</a></li> 
        </ul>
    </nav>
    <form action="search.php" method="get" id="search">
        <label for="recherche"></label>
        <input type="text" name="recherche" id="recherche" placeholder="Rechercher...">
        <button type="submit"><?php echo $TRAD["chercher"] ?></button>
    </form>
    <div class="results"></div>
    <img src="IMG/fond.jpeg" alt="<?php echo $TRAD["fond"] ?>">
    <h1><?php echo $TRAD["portfolio"] ?></h1>
</header>
<script src="JS/search.js"></script>
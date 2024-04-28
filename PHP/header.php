<?php require_once "PHP/lang.php"; ?>
<header>
    <nav>
        <ul>
            <a href="index.php?lang=<?php echo $lang; ?>"> <?php echo $TRAD["accueil"] ?></a>
            <a href="index.php?lang=<?php echo $lang; ?>#about"><?php echo $TRAD["propos"] ?></a>
            <a href="index.php?lang=<?php echo $lang; ?>#contact"><?php echo $TRAD["contact"] ?></a>

            <form action="" method="get">
                <select name="lang" onchange="this.form.submit()">
                <option value="en"> Langue</option>
                <option value="en"> English</option>
                <option value="fr"> Français</option>
                </select>
            </form>
        </ul>
    </nav>
    <form action="search.php" method="get" id="search">
        <input type="text" name="recherche" id="recherche" placeholder="Rechercher...">
        <button type="submit"><?php echo $TRAD["chercher"] ?></button>
    </form>
    <img src="IMG/fond.jpeg" alt="<?php echo $TRAD["fond"] ?>">
    <h1><?php echo $TRAD["portfolio"] ?></h1>

</header>
<?php require_once "PHP/lang.php"; ?>
<header>
    <nav>
        <ul>
            <a href="index.php?lang=<?php echo $lang; ?>"> <?php echo $TRAD["accueil"] ?></a>
            <a href="#about"><?php echo $TRAD["propos"] ?></a>
            <a href="#contact"><?php echo $TRAD["contact"] ?></a>

            <form action="" method="get">
                <select name="lang" onchange="this.form.submit()">
                    <option value="en"> English</option>
                    <option value="fr"> Français</option>
                </select>
            </form>
            <form action="PHP/search.php" method="get">
                <input type="search" name="recherche" id="recherche" placeholder="Rechercher...">
                <button type="submit">Rechercher</button>
            </form>
        </ul>
    </nav> 
    <img src="IMG/fond.jpeg" alt="Image de fond">
    <h1><?php echo $TRAD["portfolio"] ?></h1>
</header>
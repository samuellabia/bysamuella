<header>
    <nav>
        <ul>
            <a href="index.php"> <?php echo $TRAD["accueil"] ?></a>
            <a href="#about"><?php echo $TRAD["propos"] ?></a>
            <a href="#contact"><?php echo $TRAD["contact"] ?></a>

            <form action="" method="get">
                <select name="lang" onchange="this.form.submit()">
                    <option value="langue">Langue</option>
                    <option value="en"> <?php if($lang == 'en') echo 'selected'; ?>English</option>
                    <option value="fr"> <?php if($lang == 'fr') echo 'selected'; ?>Français</option>
                </select>
            </form>
        </ul>
    </nav> 
    <img src="IMG/header.webp" alt="Image représentant le dévéloppement web">
    <h1><?php echo $TRAD["portfolio"] ?></h1>
</header>
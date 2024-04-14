<?php

class Database
{
    public $pdo;

    function __construct()
    {
        $dbFile = dirname(__FILE__) . "/base.sqlite";
        $this->pdo = new PDO("sqlite:$dbFile");
        $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //pour en dire un peu plus sur les erreurs
    }
}

class User
{
    private $db;

    function __construct($db)
    {
        $this->db = $db;
        $this->createTable();
    }

    function createTable()
    {
        $this->db->pdo->exec(
            'CREATE TABLE IF NOT EXISTS message(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name VARCHAR(255) NOT NULL,
                last_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message VARCHAR(255) NOT NULL
            )'
        );
    }

    function insertUser($firstName, $lastName, $email, $message)
    {

        if (
            is_string($firstName) && !empty($firstName) && strlen($firstName) <= 255 &&
            is_string($lastName) && !empty($lastName) && strlen($lastName) <= 255 &&
            is_string($email) && !empty($email) && strlen($email) <= 255 &&
            is_string($message) && !empty($message) && strlen($message) <= 255
        ) {



            try {


                $statement = $this->db->pdo->prepare(
                    'INSERT INTO message(first_name, last_name, email, message) VALUES(:first_name, :last_name, :email, :message)'
                );

                //conversion des valeurs en éléments html
                $firstName = htmlspecialchars($firstName);
                $lastName = htmlspecialchars($lastName);
                $email = htmlspecialchars($email);
                $message = htmlspecialchars($message);

                // Liaison des valeurs
                $statement->bindValue(':first_name', $firstName, PDO::PARAM_STR);
                $statement->bindValue(':last_name', $lastName, PDO::PARAM_STR);
                $statement->bindValue(':email', $email, PDO::PARAM_STR);
                $statement->bindValue(':message', $message, PDO::PARAM_STR);

                //exécution de la requete
                $statement->execute();
            } catch (PDOException $e) {
                echo "Erreur lors de l'insertion de l'utilisateur : " . $e->getMessage();
            }
        } else {
            echo "Les données du formulaire doivent être des chaînes de caractères non vides et ne pas dépasser 255 caractères.";
        }
    }
}

class Project
{
    private $db;
    function __construct($db)
    {
        $this->db = $db;
        $this->createTable();
    }
    function createTable()
    {
        try {
        $this->db->pdo->exec(
            'CREATE TABLE IF NOT EXISTS projets(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title VARCHAR(50) NOT NULL,
                image VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                details_link VARCHAR(255) NOT NULL
            )'
        );
    }
    catch (PDOException $e){
        echo ''. $e->getMessage();
    }
}
    function insertProject($title, $image_path,$description, $details_link)
    {
        try{
            $statement = $this->db->pdo->prepare(
                'INSERT INTO projets(title, image,description, details_link) VALUES(:title, :image,:description, :details_link)'
            );

            // Liaison des valeurs
            $statement->bindValue(':title', $title, PDO::PARAM_STR);
            $statement->bindValue(':image', $image_path, PDO::PARAM_STR);
            $statement->bindValue(':description', $description, PDO::PARAM_STR);
            $statement->bindValue(':details_link', $details_link, PDO::PARAM_STR);

            //exécution de la requete
            $statement->execute();

            //vérification 
            echo "Projet $title inséré avec succès.";
        } catch (PDOexception $e) {
            echo "Erreur lors de l'insertion du projet : " . $e->getMessage();

        }
    }
}

$db = new Database(); //
$user = new User($db);
// Vérification  si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtention des  données du formulaire

    $firstName = $_POST["user_firstname"];
    $lastName = $_POST["user_name"];
    $email =$_POST["user_mail"];
    $message =$_POST["user_message"];

    // Insértion de  l'utilisateur dans la base de données
    $user->insertUser($firstName, $lastName, $email, $message);
}


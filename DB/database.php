<?php

class Database {
    public $pdo;

    function __construct() {
        $dbFile = dirname(__FILE__) . "/base.sqlite";
        $this->pdo = new PDO("sqlite:$dbFile");
        $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //pour en dire un peu plus sur les erreurs
    }
}

class User {
    private $db;

    function __construct($db) {
        $this->db = $db;
        $this->createTable();
    }

    function createTable() {
        $this->db->pdo->exec(
            'CREATE TABLE IF NOT EXISTS message(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name VARCHAR(50) NOT NULL,
                last_name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL,
                message TEXT NOT NULL
            )'
        );
    }

    function insertUser($firstName, $lastName, $email, $message) {
        try{

        
        $statement = $this->db->pdo->prepare(
            'INSERT INTO message(first_name, last_name, email, message) VALUES(:first_name, :last_name, :email, :message)'
        );

        // Liaison des valeurs
        $statement->bindValue(':first_name', $firstName, PDO::PARAM_STR);
        $statement->bindValue(':last_name', $lastName, PDO::PARAM_STR);
        $statement->bindValue(':email', $email, PDO::PARAM_STR);
        $statement->bindValue(':message', $message, PDO::PARAM_STR);

        //exécution de la requete
        $statement->execute();
    }
    catch (PDOException $e) {
        echo "Erreur lors de l'insertion de l'utilisateur : " . $e->getMessage();
    }
    }
}

class Project {
    private $db;

    function __construct($db) {
        $this->db = $db;
        $this->createTable();
    }

    function createTable() {
        $this->db->pdo->exec(
            'CREATE TABLE IF NOT EXISTS projets(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title VARCHAR(50) NOT NULL,
                image VARCHAR(255) NOT NULL,
                technologie TEXT NOT NULL,
                description TEXT NOT NULL,
                details_link VARCHAR(255) NOT NULL
            )'
        );
    }

    try{function insertProject($title, $image_path, $technologies,$description, $details_link) {
        $statement = $this->db->pdo->prepare(
            'INSERT INTO projets(title, image,technologie,description, details_link) VALUES(:title, :image,:technologie,:description, :details_link)'
        );

        // Liaison des valeurs
        $statement->bindValue(':title', $title, PDO::PARAM_STR);
        $statement->bindValue(':image', $image_path, PDO::PARAM_STR);
        $statement->bindValue(':technologie', $technologies, PDO::PARAM_STR);
        $statement->bindValue(':description', $description, PDO::PARAM_STR);
        $statement->bindValue(':details_link', $details_link, PDO::PARAM_STR);

        //exécution de la requete
        $statement->execute();
    }
    catch(PDOexception e){
        echo "Erreur lors de l'insertion du projet : " . $e->getMessage();


    }
    }
}

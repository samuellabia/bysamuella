<?php

var_dump($_POST);
$firstName=htmlspecialchars($_POST['user_firstname']);
$lastName=htmlspecialchars($_POST['user_name']);
$email=htmlspecialchars($_POST['user_mail']);
$message=htmlspecialchars($_POST['user_message']);

if($firstName && $lastName && $email && $message){
    // Connexion à la base de données

    $pdo=new PDO('sqlite:'.dirname(__FILE__).'/base.db');
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC); 
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION); //pour en dire un peu plus sur les erreurs



    try{
        //création de la table message si elle n'existe pas déjà
        $pdo->query(
            
            'CREATE TABLE IF NOT EXISTS message(
                id INTEGER  PRIMARY KEY AUTOINCREMENT,
                first_name VARCHAR(50) NOT NULL,
                last_name VARCHAR(50) NOT NULL,
                email VARCHAR(50)NOT NULL,
                message TEXT NOT NULL
    
        )'
        );

        //// Préparation de la requête d'insertion
        $statement=$pdo->prepare(
            'INSERT INTO message(first_name, last_name,email,message) VALUES(:first_name,:last_name,:email,:message)'
        );

        $statement->bindValue(':first_name',$firstName,PDO::PARAM_STR);
        $statement->bindValue(':last_name',$lastName,PDO::PARAM_STR);
        $statement->bindValue(':email',$email,PDO::PARAM_STR);
        $statement->bindValue(':message',$message,PDO::PARAM_STR);


        //exécution de la requete
        $statement->execute();
    }
    catch(PDOException $e) {
        echo "Erreur : " . $e->getMessage(); //afficher le message d'erreur au cas ou
    }
    

}
<?php
var_dump($_POST);

$firstName=$_POST['user_firstname'];
$lastName=$_POST['user_name'];
$email=$_POST['user_mail'];
$message=$_POST['user_message'];

if($firstName && $lastName && $email && $message){
    //on se connecte à la base de données pour ajouter les données remplies du formulaire
    $pdo=new PDO('sqlite:'.dirname(__FILE__).'/DB/base.db');
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC); 
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);



    //faire le lien entre le serveur et la base de données

    try{
        $pdo->query(
            //création de la table message
            'CREATE TABLE IF NOT EXISTS message(
                id INTEGER  PRIMARY KEY AUTOINCREMENT,
                first_name VARCHAR(50) NOT NULL,
                last_name VARCHAR(50) NOT NULL,
                email VARCHAR(50)NOT NULL,
                message TEXT NOT NULL
    
        )'
        );

    }catch(PDOException $e) {
        echo "Erreur : " . $e->getMessage(); //afficher le message d'erreur au cas ou
    }
    

}
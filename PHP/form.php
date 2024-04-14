<?php
var_dump($_POST);

$firstName=$_POST['firstname'];
$lasName=$_POST['lastname'];
$email=$_POST['mail'];
$message=$_POST['msg'];

if($firstname && $lastName && $email && $message){
    //on se connecte à la base de données pour ajouter les données remplies du formulaire
    $pdo=new PDO('sqlite:'.dirname(__FILE__).'DB/base.db');
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC); 
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);



    //faire le lien entre le serveur et la base de données

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

}
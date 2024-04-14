<?php

include 'database.php';

//nouvelle instance de Database
$db = new Database();

//nouvelle instance de Project
$project = new Project($db);

$description1=file_get_contents('../CONTENU/un.txt');
$description2=file_get_contents('../CONTENU/deux.txt');
$description3=file_get_contents('../CONTENU/trois.txt');
$description4=file_get_contents('../CONTENU/quatre.txt');
$description5=file_get_contents('../CONTENU/cinq.txt');
$description6=file_get_contents('../CONTENU/six.txt');



//projets dans la base de données
$project->insertProject('Jeu Sokoban','../IMG/sokoban.png',$description1, '../details.php');
$project->insertProject('Jeu Space Invaders','../IMG/invaders.png',$description2,'../details.php');
$project->insertProject('Jeu de puzzle','../IMG/puzzle.jpeg',$description3,'/details.php');
$project->insertProject('Analyseur de sentiment des tweets','../IMG/analyseur.png',$description4,'../details.php');
$project->insertProject('Application de suivi des dépenses','../IMG/depenses.jpg',$description5,'../details.php');
$project->insertProject('Application de suivi de la météo','../IMG/meteo.jpg',$description6,'../details.php');



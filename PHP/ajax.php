<?php
include '../DB/database.php';

$db = new Database();
$project = new Project($db);

// Obtention du numéro du projet à partir de la requête AJAX
$projectNumber = isset($_GET['projectNumber']) ? $_GET['projectNumber'] : 1;

// Obtention du projet de la base de données
$projectDetails = $project->getProjectById($projectNumber);

// Encodage du projet en JSON et impression du résultat
echo json_encode($projectDetails);

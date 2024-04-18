<?php
include '../DB/database.php';

$db = new Database();
$project = new Project($db);

// Récupérer le nombre de projets déjà chargés à partir de la requête AJAX
$loadedProjects = isset($_GET['loadedProjects']) ? intval($_GET['loadedProjects']) : 0;

// Charger plus de projets à partir de la base de données
$projects = $project->listeProjets(3, $loadedProjects); // Charger 3 projets supplémentaires

// Transformer les données en JSON
echo json_encode($projects);
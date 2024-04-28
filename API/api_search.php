<?
require_once dirname(__FILE__) . "/../DB/database.php";
$database = new Database();
$project = new Project($database);

die(json_encode(array("results" => $project->chercher($_GET["q"]))));

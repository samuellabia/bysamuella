<?php 

if (isset($_GET["lang"])) {
  $lang = $_GET["lang"];
} else {
  $lang = "fr"; // langue par défaut ici 
}


require_once ($lang. '.php');
<?php 

if (isset($_GET["lang"])) {
  setcookie("lang", $_GET["lang"], time() + 3600 * 24 * 365,"/", "Strict", false, true);
  $lang = $_GET["lang"];
} else if (isset($_COOKIE["lang"])) { 
  $lang = $_COOKIE["lang"];
} else {
  $lang = "fr";
}
require_once $lang. '.php';
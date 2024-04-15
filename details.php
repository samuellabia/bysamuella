<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Document</title>
</head>

<?php include ("DB/database.php");

$db = new Database();
$project = new Project($db);

if (isset($_GET['id'])) {
    $projectId = $_GET['id'];
    $projectDetails = $project->getProjectById($projectId);
}
?>


<body class="detail">
    <?php include "PHP/header.php"; ?>

    <main>
        <article>
            <h1>
                <?php echo $projectDetails['title']; ?>
            </h1>

            <h2>Description</h2>
            <p>
                <?php echo $projectDetails['description']; ?>
            </p>
            <h2>Illustration</h2>
            <img src="<?php echo $projectDetails['image']; ?>" alt="visualisation du jeu sokoban en console">
        </article>
    </main>
    <?php include  "PHP/footer.php"; ?>
</body>

</html>
<?php
$servername = "localhost";
$username = "xttczuqj_surveyjsdb";
$password = "surveyjs";
$database = "xttczuqj_surveyjsdb";
// Create connection

$mysqli = new mysqli($servername, $username, $password, $database);
echo mysqli_character_set_name($mysqli);
// Check connection
if ($mysqli->connect_errno) {
    $mysqli->set_charset("utf8");
    //$mysqli("SET NAMES `utf8` COLLATE `utf8_polish_ci`");
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}

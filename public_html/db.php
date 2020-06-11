<?php
$servername = "localhost";
$username = "xttczuqj_surveyjsdb";
$password = "surveyjs";
$database = "xttczuqj_surveyjsdb";
// Create connection

$mysqli = new mysqli($servername, $username, $password, $database);
// Check connection
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}

<?php
$servername = "localhost";
$username = "xttczuqj_surveyjsdb";
$password = "surveyjs";
$database = "xttczuqj_surveyjsdb";
// Create connection
echo `Connecting to {$servername}:{$database} database`;
echo '/n';

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
<br>
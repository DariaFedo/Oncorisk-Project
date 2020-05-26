<?php
$servername = "localhost";
$username = "xttczuqj_surveyjsdb";
$password = "surveyjs";
$database = "xttczuqj_surveyjsdb";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
</br>
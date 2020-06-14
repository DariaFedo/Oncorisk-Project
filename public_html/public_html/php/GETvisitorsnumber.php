<?php

include_once '.././../db.php';

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}
$visitors_query = "SELECT id FROM visitors";
$visitors = $mysqli->query($visitors_query);
$visitors_number = mysqli_num_rows($visitors);
echo $visitors_number;
mysqli_close($mysqli);

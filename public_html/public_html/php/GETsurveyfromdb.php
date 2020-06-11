<?php

include_once '.././../db.php';
if (!empty($_GET['survey_name'])) {
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli->connect_error;
        exit();
    }
    $sql = "SELECT * FROM surveys Where name ='" . $_GET['survey_name'] . "'";
    $result = $mysqli->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            echo json_encode($row);
        }
    } else {
        echo "0 results";
    }

}
mysqli_close($mysqli);

<?php
include_once '.././../db.php';

if (!empty($_POST['surveyresults'])) {
    $jsdata = $_POST['surveyresults'];

    $input = "INSERT INTO `surveys_result` (`res_id`, `sur_id`, `json`, `date_time`) VALUES (NULL, '1','$jsdata', CURRENT_TIMESTAMP)";
    if ($mysqli->query($input) === true) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $input . "<br>" . $conn->error;
    }
} else {
    echo "JSON data not set";
}

$mysqli->close();

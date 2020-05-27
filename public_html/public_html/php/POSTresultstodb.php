<?php
include_once '../db.php';
if (!empty($_POST)) {
$jsdata = $_POST['surveyresults'];

$input = "INSERT INTO `surveys_result` (`res_id`, `sur_id`, `json`, `date_time`) VALUES (NULL, '1','$jsdata', CURRENT_TIMESTAMP)";
if ($conn->query($input) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $input . "<br>" . $conn->error;
}
}else
echo "JSON data not set";

$conn->close();


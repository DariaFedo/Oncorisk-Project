<?php 

include '../../db.php';

$jsdata = $_POST['name'];
$input = "INSERT INTO `surveys_result` (`res_id`, `sur_id`, `json`, `date_time`) VALUES (NULL, '3','$jsdata', CURRENT_TIMESTAMP)";
if ($conn->query($input) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $input . "<br>" . $conn->error;
}

?>
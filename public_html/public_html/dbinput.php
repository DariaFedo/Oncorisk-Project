<?php 
include '../db.php';
$datajs = $_POST['name'];
$inputy = "INSERT INTO `surveys_result` (`res_id`, `sur_id`, `json`, `date_time`) VALUES (NULL, '3','$datajs', CURRENT_TIMESTAMP)";
if ($conn->query($inputy) === TRUE) 
  {
  echo "New record created successfully";
  } 
else 
  {
  echo "Error: " . $inputy . "<br>" . $conn->error;
  }

?>
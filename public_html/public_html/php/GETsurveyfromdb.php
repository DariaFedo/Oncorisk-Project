<?php 

include_once '../db.php';
$sql="SELECT * FROM surveys WHERE sur_Id=1";
$rows = array();

if($result = mysqli_query($conn, $sql)){
  
  if(mysqli_num_rows($result) > 0){
     // echo "<table>";
        //  echo "<tr>";
         //     echo "<th>id</th>";
         //     echo "<th>Survey name</th>";
        //  echo "</tr>";
      while($row = mysqli_fetch_array($result)){
        $rows[] = $row;
        print json_encode ($rows);
        //  echo "<tr>";
          //    echo "<td>" . $row['sur_Id'] . "</td>";
          //    echo "<td>" . $row['name'] . "</td>";

         // echo "</tr>";
      }
      //echo "</table>";
      // Free result set
      mysqli_free_result($result);
  } else{
      echo "No records matching your query were found.";
  }
} else{
  echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
mysqli_close($conn);
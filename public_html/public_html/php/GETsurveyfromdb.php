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
            echo utf8ize($row['json']);
        }
    } else {
        echo "0 results";
    }

}
mysqli_close($mysqli);

function utf8ize($d)
{
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_object($d)) {
        foreach ($d as $k => $v) {
            $d->$k = utf8ize($v);
        }
    } else {
        return utf8_encode($d);
    }

    return $d;
}

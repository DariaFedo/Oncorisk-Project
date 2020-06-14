<?php
include_once '.././../db.php';
session_start();

$_SESSION['session'] = session_id();

if (isset($_POST['get_online_visitor']) && isset($_POST['page'])) {
    add_visitor($mysqli);
    add_page_visit($mysqli);
    echo get_unique_visitors($mysqli);
    mysqli_close($mysqli);
    exit();
}

function add_visitor($mysqli)
{
    $current_time = time();
    $timeout = $current_time - (5);
    $session_exist_query = "SELECT * FROM visitors WHERE session='" . $_SESSION['session'] . "' AND time<$timeout";

    $session_exist = $mysqli->query($session_exist_query);
    $session_check = mysqli_num_rows($session_exist);

    if ($session_check == 0 && $_SESSION['session'] != "") {
        $query = "INSERT INTO visitors (session,time,ip) VALUES ('" . $_SESSION['session'] . "','" . $current_time . "','" . $_SERVER['REMOTE_ADDR'] . "')";
        $mysqli->query($query);
    } else {
        $sql = "UPDATE visitors SET time='" . time() . "' WHERE session='" . $_SESSION['session'] . "'";
        $mysqli->query($sql);
    }
}

function get_unique_visitors($mysqli)
{
    $total_visitors_query = "SELECT * FROM visitors";
    $total_visitors = $mysqli->query($total_visitors_query);
    $total_visitors = mysqli_num_rows($total_visitors);
    return $total_visitors;
}

function add_page_visit($mysqli)
{
    $user_ips = $_SERVER['REMOTE_ADDR'];
    $page = $_POST['page'];
    $query = "INSERT INTO pageviews(page,ip) VALUES ('$page','$user_ips')";
    $mysqli->query($query);
}

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Untitled Document</title>
  <link rel="stylesheet" href="trycss.css" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
   $(document).ready(function () {
    setInterval(function () {
     $.ajax({
      type: 'post',
      url: '',
      data: {
       get_online_visitor: 'online_visitor',
      },
      success: function (response) {
       if (response != '') {
        $('#online_visitor_val').html(response)
       }
      },
     })
    }, 10000)
   })
  </script>
 </head>

 <body>



  <?php
//connection to db
include_once '.././../db.php';
session_start();

$_SESSION['session'] = session_id();

if (isset($_POST['get_online_visitor'])) {
    $total_online = total_online($mysqli);

    exit();}

function total_online($mysqli)
{
    $current_time = time();
    $timeout = $current_time - (300);
    $session_exist_query = "SELECT session FROM visitors WHERE session='" . $_SESSION['session'] . "'";

    $session_exist = $mysqli->query($session_exist_query);
    $session_check = mysqli_num_rows($session_exist);

    if ($session_check == 0 && $_SESSION['session'] != "") {
        $query = "INSERT INTO visitors (id,session,time) VALUES (null, '" . $_SESSION['session'] . "','" . $current_time . "')";
        $mysqli->query($query);
    } else {
        $sql = "UPDATE visitors SET time='" . time() . "' WHERE session='" . $_SESSION['session'] . "'";
        $mysqli->query($sql);
    }

    $select_total_query = "SELECT * FROM visitors WHERE time>= $timeout";
    $select_total = $mysqli->query($select_total_query);
    $total_online_visitors = mysqli_num_rows($select_total);
    return $total_online_visitors;
}

//To get total online visitors
$total_online_visitors = total_online($mysqli);

//To get total visitors
$total_visitors_query = "Select * from visitors";
$total_visitors = $mysqli->query($total_visitors_query);
$total_visitors = mysqli_num_rows($total_visitors);

//To inset page view and select total pageview
$user_ips = $_SERVER['REMOTE_ADDR'];
$page = $_SERVER['PHP_SELF'];
$query = "INSERT INTO pageviews(id,page,ip) VALUES (null,'$page','$user_ips')";
$mysqli->query($query);

$pageviews_query = "Select * from pageviews";
$pageviews = $mysqli->query($pageviews_query);
$total_pageviews = mysqli_num_rows($pageviews);

?>

  <?php echo $total_visitors; ?>
  <br />
  <br />
  <?php echo $total_online_visitors; ?>
  <br />
  <br />
  <?php echo $total_pageviews; ?>
 </body>
</html>

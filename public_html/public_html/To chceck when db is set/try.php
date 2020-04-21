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
session_start();
$_SESSION['session']=session_id();

//connection to db
require_once('inc/db.php');

function total_online()
{
$current_time=time();
$timeout = $current_time - (60); 
$session_exist = "Select session from visitors WHERE session='".$_SESSION['session']."'";
$session_check = mysqli_num_rows($session_exist);
 if($session_exist==0 && $_SESSION['session']!="")
{
$query ="Insert into visitors(id,session,time) values('','".$_SESSION['session']."', '".$current_time."'"; 
}
else
{
$sql="UPDATE visitor SET time='".time()."' WHERE session='".$_SESSION['session']."'";
}

$select_total ="Select * from visitors WHERE time>= '$timeout'";
  $total_online_visitors = mysqli_num_rows($select_total); return
  $total_online_visitors; } if(isset($_POST['get_online_visitor'])) {
  $total_online = total_online(); echo $total_online; exit(); } ?>

  <?php
//To get total online visitors
$total_online_visitors = total_online();

//To get total visitors
$total_visitors = "Select * from visitors";
$total_visitors = mysqli_num_rows($total_visitors);

//To inset page view and select total pageview
$user_ips = $_SERVER['REMOVE_ADDR'];
$page =$_SERVER['PHP_SELF'];
$query = "INSERT into pageviews(id,page,ip) values(null,'$page','$user_ips'";
$pageviews = "Select * from pageviews";
$total_pageviews = mysqli_num_rows($pageviews);

?>

  <?php echo $total_visitors;  ?>
  <br />
  <br />
  <?php echo $total_online_visitors;  ?>
  <br />
  <br />
  <?php echo $total_pageviews;  ?>
 </body>
</html>

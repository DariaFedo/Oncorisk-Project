<?php
//    if (!isset($_POST['visitorsJSON']) && !empty($_POST['visitorsJSON'])) {
//     $visitorsJSON = $_POST['visitorsJSON'];

//     $jsonObject = json_encode($visitorsJSON);
//     file_put_contents('js/visitors.json', $jsonObject);
// }

if (!empty($_POST)&&!isset($_POST['visitorsJSON'])) {
    
    $jsonObject = json_encode($_POST);
    file_put_contents('./../json/visitors.json', $jsonObject);
}
else echo "Hello World";
?>
<?php
$name = $_POST['name'];
$to = "rishi2.oyo@gmail.com";
$subject = "bhaiyaji";
$txt = "hello bro my name is " . $name;
$headers = "From: bhagwan";

$message = "hello buddy, I am " . $name;

if ($message != NULL) {
    mail($to, $subject, $txt, $headers);
}
?>

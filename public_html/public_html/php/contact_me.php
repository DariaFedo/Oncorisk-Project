<?php
// Check for empty fields
if (empty($_POST['email']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided!";
    return false;
}

$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'xttczuqj@onkorisk.iqhs.pl'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $email_address";
$email_body = "You have received a new message from your website contact form.\n\n" . "Here are the details:\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "From: Contact Form <noreply@onkorisk.iqhs.com>" . "\r\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";

mail($to, $email_subject, $email_body, $headers);
return true;

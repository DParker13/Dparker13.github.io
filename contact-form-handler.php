<?php

	$to = "danielparker134@gmail.com";
	$name = $_POST['name'];
	$from = $_POST['email'];
	$message = $_POST['message'];
	
	$email_subject ="NEW MESSAGE FROM WEBSITE";
	$email_body = "Name: " . $name. "\n" . "Email: " . $from . "\n" . "Message: " . $message. "\n";
	
	$headers = "From: " . $email_from . "\r\n";
	
	$headers2 = "Reply-To: " . $user_email . "\r\n";
	
	mail($to, $email_subject, $email_body, $headers);

?>
<?php

	$name = $_POST['name'];
	$user_email = $_POST['email'];
	$message = $_POST['message'];
	
	$email_from = 'danielparker134@gmail.com';
	
	$email_subject ="NEW MESSAGE FROM WEBSITE";
	
	$email_body = "Name: $name.\n".
					"Email: $user_email.\n".
						"Message: $message.\n";
						
	$to = 'danielparker134@gmail.com';
	
	$headers = "From: $email_from \r\n";
	
	$headers .= "Reply-To: $user_email \r\n";
	
	mail($to, $email_subject, $email_body, $headers);
	
	header("Location: index.html");



?>
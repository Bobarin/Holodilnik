<?php
if(isset($_POST['name'])) $name = $_POST['name'];
if(isset($_POST['phone'])) $phone = $_POST['phone'];
if(isset($_POST['email'])) $email = $_POST['email'];

/* Сюда впишите свою эл. почту */
$admin_email = "bizinbox@mail.ru";


$subject='Заявка c landing page'; 
$email = isset($email)?$emsil:$admin_email; 


$message = "Тема: $subject\nИмя: $name\nТелефон: $phone";

$send = mail($admin_email, $subject, $message, "Content-type:text/plain; charset = utf-8\r\nFrom:$email");

?>
<!DOCTYPE html>
<html>
<head>
<title>С вами свяжутся</title>
<script type="text/javascript">
setTimeout('location.replace("/index.html")', 1000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body style="background:#1ca7d5;">
		<p style="color:#ffffff; font-size:24px; font-family:Arial, Helvetica, sans-serif;text-transform:uppercase;text-align:center;">Спасибо, Ваша заявка была принята!</p>
</body>
</html>
<?php
		$txtname = trim($_POST['txtname']);
		$txtс = trim($_POST['txtc']);
		$txtphone = trim($_POST['txtphone']);
		// от кого
		$fromMail = 'DostAvto';
		$fromName = 'Заявка DostAvto';
		// Сюда введите Ваш email
		$emailTo = 'alisa.umnova@gmail.com';
		$subject = 'Форма обратной связи';
		$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "Получено письмо с DostAvto\n\nТребуемая деталь: $txtname\nТелефон: $txtphone\nVIN код: $txtc\n";
		$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
		echo 'ok';
?>

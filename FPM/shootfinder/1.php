<?php
	if(isset($_POST['submit'])){
		$mes = "<table><th>Field</th><th>User Input</th>";
		foreach ($_POST as $key => $value) {
			$mes = $mes . "<tr><td> ".htmlspecialchars($key)." </td><td> ".htmlspecialchars($value)."</td></tr>";
		}
		$mes = $mes . "</table>";
	
	//||||||||||||||||||||||||||
	
		$to = "joelfullpackagemedia@gmail.com";
		$subject = "Shoot Finder Feedback";
		$message = $mes;

		// Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <joelfullpackagemedia@gmail.com>' . "\r\n";
	

		mail($to,$subject,$message,$headers);
	//	echo $mes;
	}
	else {
		header("Location: https://fpm-shootfinder.tumblr.com");
	}
///////////////////////////////////////////////////////////////////			
?>
<html>
<head>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script>
	$(document).ready(function(){
	
		setTimeout(function(){location.assign("https://fpm-shootfinder.tumblr.com");},300);
	
	});
</script>
</head>
<body>
	<h2>redirecting...</h2>
</body>
</html>
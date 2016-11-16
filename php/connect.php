<?php
$hostname="localhost"; //local server name default localhost
$username="root";  //mysql username default is root.
$password="pa$$768874";       //blank if no password is set for mysql.
$database="users";  //database name which you created
$con=mysql_connect($hostname,$username,$password);
if(! $con)
{
die('Connection Failed'.mysql_error());
}

mysql_select_db($database,$con);
?>

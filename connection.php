<?php
    session_start();

    $servername = "localhost";
    $username = "root";
    $password  = "Root@123";
    $dbname = "CHBS_db";
    //create connection 
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    //check connectionn
    if(!$conn)
    {
        die("connection failed:".mysqli_connect_error());
    }
?>

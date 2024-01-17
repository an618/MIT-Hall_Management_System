<?php    
    require 'connection.php';  
    $username = $_POST['user'];  
    $password = $_POST['password'];  
      
    //to prevent from mysqli injection  
    $username = stripcslashes($username);  
    $password = stripcslashes($password);  
    $username = mysqli_real_escape_string($conn, $username);  
    $password = mysqli_real_escape_string($conn, $password);  
    
    // $query = "SELECT 'consno' FROM `customer` WHERE `cname` = '$username' AND `pass` = '$password'";
    // $result = mysql_query($query);
    // $row = mysql_fetch_array($result);
    // $id = $row['id'];


    $sql = "SELECT * from `user_login` WHERE `login_username` = '$username' AND `pass` = '$password'";  
    $result = mysqli_query($conn, $sql);  
    $count = mysqli_num_rows($result);  

    if($count == 1)
    {
        $data = mysqli_fetch_assoc($result);
        $login_ID = $data['user_login_ID'];
        setcookie("user_login_ID",$data['user_login_ID']);
        $result = mysqli_query($conn,"SELECT * FROM user where `user_login_ID` = '$login_ID'");
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        setcookie("fullname",$row['full_name']);
        setcookie("user_ID",$data['user_ID']);
                
        echo"<script type=\"text/javascript\">".
        "alert('Registration successfull');"." window.location.href = 'index.html';".
        "</script>";  
    }  
    else{ 
        echo"<script type=\"text/javascript\">".
        "alert('Registration failed');".
        "</script>";;
    }     
?>

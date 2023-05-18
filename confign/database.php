<?php

// Kết nối đến cơ sở dữ liệu (thay thế thông tin kết nối thích hợp)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users_music";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

?>
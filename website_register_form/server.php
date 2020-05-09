<?php
session_start();

// initializing variables
$discordid = "";
$email    = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('dbhost:port', 'user', 'pass', 'dbname');


if (isset($_POST['reg_user'])) {

  $discordid = mysqli_real_escape_string($db, $_POST['discordid']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $api_type = mysqli_real_escape_string($db, $_POST['api_type']);
  $host = mysqli_real_escape_string($db, $_POST['host']);
  $api = mysqli_real_escape_string($db, $_POST['api']);
  $api_confirm = mysqli_real_escape_string($db, $_POST['api_confirm']);
  $password = mysqli_real_escape_string($db, $_POST['password']);

  if (empty($discordid)) { array_push($errors, "Discord ID is required"); }
  if (empty($email)) { array_push($errors, "Email is required"); }
  if (empty($api_type)) { array_push($errors, "API_Type is required, API Type should be Client or Application"); }
  if (empty($host)) { array_push($errors, "FQDN is required (Example: https://panel.ghosty.host) (Include http:// or https://)"); }
  if ($api != $api_confirm) {
  array_push($errors, "API's don't match");
  }
  if (empty($password)) { array_push($errors, "Password is required"); }
 
  $user_check_query = "SELECT * FROM users WHERE discordid='$discordid' OR email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user) { 
    if ($user['discordid'] === $discordid) {
      array_push($errors, "Discord ID already exists");
    }

    if ($user['email'] === $email) {
      array_push($errors, "email already exists");
    }
  }

  if (count($errors) == 0) {

    $query = "INSERT INTO users (discordid, email, api_type, host, api, password) 
          VALUES('$discordid', '$email', '$api_type', '$host', '$api', '$password')";
    mysqli_query($db, $query);
    array_push($errors, "You have successfully registered");
  }
}

if (isset($_POST['update'])) {
  // Registered Stuff
  $registereddiscordid = mysqli_real_escape_string($db, $_POST['registereddiscordid']);
  $registeredpassword = mysqli_real_escape_string($db, $_POST['registeredpassword']);
  // New Stuff
  $newapitype = mysqli_real_escape_string($db, $_POST['newapitype']); 
  $newhost = mysqli_real_escape_string($db, $_POST['newhost']); 
  $newapi = mysqli_real_escape_string($db, $_POST['newapi']); 
  $newapi_confirm = mysqli_real_escape_string($db, $_POST['newapi_confirm']); 

  if (empty($registereddiscordid)) { array_push($errors, "Discord ID is required");}
  if (empty($registeredpassword)) {array_push($errors, "Password is required");}
  if (empty($newapitype)) {array_push($errors, "New API_Type is required");}
  if (empty($newhost)) {array_push($errors, "New FQDN is required (Example: https://panel.ghosty.host) (Include http:// or https://)");}
  if (empty($newapi)) {array_push($errors, "New API is required");}
  if (empty($newapi_confirm)) {array_push($errors, "Retype your new API");}
  if ($newapi != $newapi_confirm) {
    array_push($errors, "API's don't match");
  }

  if (count($errors) == 0) {
    $query = "SELECT * FROM users WHERE discordid='$registereddiscordid' AND password='$registeredpassword'";
    $results = mysqli_query($db, $query);

    if(mysqli_num_rows($results)) {
      $newquery1 = "UPDATE users SET api_type='$newapitype' WHERE password='$registeredpassword' AND discordid='$registereddiscordid'";
      $newquery2 = "UPDATE users SET host='$newhost' WHERE password='$registeredpassword' AND discordid='$registereddiscordid'";
      $newquery3 = "UPDATE users SET api='$newapi' WHERE password='$registeredpassword' AND discordid='$registereddiscordid'";

          mysqli_query($db, $newquery1);
          mysqli_query($db, $newquery2);
          mysqli_query($db, $newquery3);
          array_push($errors, "Your API, FQDN, API_TYPE is updated!");
    }
    else{
      array_push($errors, "Password/Username is wrong");
    }
  }
}

?>

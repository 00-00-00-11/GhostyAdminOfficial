<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<div>
  <div>
    <div>
      <p>Register a new account</p>

      <form action="register.php" method="post">
        <?php include('errors.php') ?>
        <div>
          <input type="text" name="discordid" placeholder="Discord ID" value="<?php echo $discordid; ?>">
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" value="<?php echo $email; ?>">
          </div>
        </div>
        <div>
          <input type="text" name="host" placeholder="FQDN (Example: https://panel.ghosty.host)">
        </div>
        <div>
          <input type="text" name="api_type" placeholder="API Type (Client/Application)">
        </div>
        <div>
          <input type="password" name="api" placeholder="API Key">
        </div>
        <div>
          <input type="password" name="api_confirm" placeholder="Retype API Key" >
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" >
        </div>
          <div>
            <button type="submit" name="reg_user">Register</button>
          </div>
        </div>
      </form>
      <dir>
        <p>- OR -</p>
      <a href="update.php">Already a member? Want to update info? Click me</a>
    </dir>
  </div>
  </div>
</div>
</body>
</html>

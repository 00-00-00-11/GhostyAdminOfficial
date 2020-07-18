<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Ghosty | Update</title>
</head>

<body>
  <div >
    <div>
      <p>Update your account</p>

      <form action="update.php" method="post">
        <?php include('errors.php') ?>
        <div>
          <input type="text" name="registereddiscordid" placeholder="Registered Discord ID">
        </div>
        <div>
          <input type="password" name="registeredpassword" placeholder="Registered Password">
        </div>
        <div>
          <input type="text" name="newapitype" placeholder="New API Type (Client/Application)">
        </div>
        <div>
          <input type="text" name="newhost" placeholder="New FQDN (Example: https://panel.ghosty">
        </div>
        <div>
          <input type="password" name="newapi" placeholder="New API">
        </div>
        <div>
          <input type="password" name="newapi_confirm" placeholder="Retype the new API">
          
          </div>
        </div>
          <!-- /.col -->
          <div>
            <button type="submit"  name="update">Update Now!</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <div>
        <p>- OR -</p>
      <a href="register.php">Not registered yet? Click me</a>
    </div>
  </div>
</div>
</body>
</html>

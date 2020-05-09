<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Ghosty Admin | Registration</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition register-page">
<div class="register-box">
  <div class="register-logo">
    <a href="index.php"><b>Ghosty</b> Admin</a>
  </div>

  <div class="card">
    <div class="card-body register-card-body">
      <p class="login-box-msg">Register a new account</p>

      <form action="register.php" method="post">
        <?php include('errors.php') ?>
        <div class="input-group mb-3">
          <input type="text" name="discordid" class="form-control" placeholder="Discord ID" value="<?php echo $discordid; ?>">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="email" name="email" class="form-control" placeholder="Email" value="<?php echo $email; ?>">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="text" name="host" class="form-control" placeholder="FQDN (Example: https://panel.ghosty.host)">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-globe"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="text" name="api_type" class="form-control" placeholder="API Type (Client/Application)">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-robot"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="api" class="form-control" placeholder="API Key">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="api_confirm" class="form-control" placeholder="Retype API Key" >
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="password" class="form-control" placeholder="Password" >
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block" name="reg_user">Register</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- OR -</p>
      

      <a href="update.php" class="text-center">Already a member? Want to update info? Click me</a>
    </div>
    <!-- /.form-box -->
  </div><!-- /.card -->
</div>
<!-- /.register-box -->


</body>
</html>

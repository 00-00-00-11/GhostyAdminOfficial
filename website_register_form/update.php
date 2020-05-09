<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Ghosty | Update</title>
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
      <p class="login-box-msg">Update your account</p>

      <form action="update.php" method="post">
        <?php include('errors.php') ?>
        <div class="input-group mb-3">
          <input type="text" name="registereddiscordid" class="form-control" placeholder="Registered Discord ID">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="registeredpassword" class="form-control" placeholder="Registered Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="text" name="newapitype" class="form-control" placeholder="New API Type (Client/Application)">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-robot"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="text" name="newhost" class="form-control" placeholder="New FQDN (Example: https://panel.ghosty.host)">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-globe"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="newapi" class="form-control" placeholder="New API">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="newapi_confirm" class="form-control" placeholder="Retype the new API">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block" name="update">Update Now!</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- OR -</p>
      

      <a href="register.php" class="text-center">Not registered yet? Click me</a>
    </div>

    <!-- /.form-box -->
  </div><!-- /.card -->

</div>

<!-- /.register-box -->


</body>
</html>

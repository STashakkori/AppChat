<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="A simple signin page for bee keeping users">
    <meta name="author" content="Sina Tashakkori">
    <link href="./login.css" rel="stylesheet">
  </head>
  <div id="cover">
  <body>
    <?php include('db.php') ?>
    <div class="container" id="wrap">
      <form class="form-signin" role="form">
        <p id="header">Please Sign In<p>
            <div id="input1">
            <input type="username" type="text" class="form-control" placeholder="Username" >
            </div>
            <br>
            <div id="input2">
            <input type="password" type="text" class="form-control" placeholder="Password" >
            </div>
            <br>
            <div id="submit">
            <button class="btn btn-lg btn-primary btn-block" type="submit" id="submit">Submit</button>
            </div>
          </form>
    </div>
    </body>
    </div>
</html>


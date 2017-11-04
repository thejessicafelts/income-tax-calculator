<?php $server = $_SERVER['SERVER_NAME']; ?>
<?php $uri = $_SERVER['REQUEST_URI']; ?>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

<!-- Bootstrap -->
<script src="<?php echo "http://" . $server . $uri . "vendors/bootstrap/js/bootstrap.min.js"; ?>"></script>

<!-- Custom Scripts -->
<script src="<?php echo "http://" . $server . $uri . "assets/js/main.js"; ?>"></script>

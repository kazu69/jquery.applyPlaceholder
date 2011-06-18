<!DOCTYPE HTML>
<html lang="ja-JP">
    <head>
        <meta charset="UTF-8">
        <title>jquery.applyPlaceholder.js demo</title>
    </head>
    <body>
<?php
if (isset($_POST['state'])):
    foreach($_POST as $key => $val):
        echo 'key='.$key.'/ val='.$val.'<br>';
    endforeach;
?>

<?php
else:
?>
    <form action="/test/" method="POST">
        <input type="hidden" name="state" value="confirm" />
        <input type="text" placeholder="type of input" name="hoge" value=""/><br>
        <input type="text" placeholder="type of input2" name="moge" value=""/><br>
        <textarea name="textArea" id="" cols="30" rows="10" placeholder="fuga" value=""></textarea><br>
        <input type="submit" name="submit" value="‘—M">
    </form>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script src="jquery.applyPlaceholder.js"></script>
<?php
endif;
?>
    </body>
</html>
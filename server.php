<?php
/**
 * Created by PhpStorm.
 * User: thiagocampos
 * Date: 14/04/2016
 * Time: 13:34
 */
echo $_SERVER['REQUEST_METHOD'];
echo $_SERVER['REQUEST_URI'];
echo "<br>";

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        print_r(@$_POST);
        break;
    case 'GET':
        print_r(@$_GET);
        break;
    case 'PUT':
        parse_str(file_get_contents("php://input"), $_PUT);
        print_r($_PUT);
        break;
}

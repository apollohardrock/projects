<?php
define('DB_HOST'        , "localhost");
define('DB_USER'        , "lucas.apollo");
define('DB_PASSWORD'    , "%Laf152819%");
define('DB_NAME'        , "teste");
define('DB_DRIVER'      , "sqlsrv");

require_once "Conexao.php";

try{

    $Conexao    = Conexao::getConnection();
    $query      = $Conexao->query("SELECT nome, preco, quantidade FROM produto");
    $produtos   = $query->fetchAll();

 }catch(Exception $e){

    echo $e->getMessage();
    exit;

 }

?>
<!DOCTYPE html>
<html>
<head>
  <title>Conexão PDO SQL Server</title>
</head>
<body>
  <form>
        <table>
            <tr>
               <td>Nome</td>
               <td>Preço</td>
               <td>Quantidade</td>
            </tr>
            <?php
               foreach($produtos as $produto) {
            ?>
            <tr>
                <td><?php echo $produto['nome']; ?></td>
                <td>R$ <?php echo $produto['preco']; ?></td>
                <td><?php echo $produto['quantidade']; ?></td>
            </tr>
            <?php
               }
            ?>
        </table>
    </form>
</body>
</html>
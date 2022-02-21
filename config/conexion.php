<?php
class Conectar
{
    protected $dbh;

    protected function Conexion()
    {
        try {
            $conectar = $this->dbh = new PDO("mysql:local=localhost;dbname=crud", "root", "DBA#2021ug"); //contrasenia= DBA#2021ug
            //print_r("-CONEXION EXITOSA CLASE CONEXION- ");
            return $conectar;

        }
        catch (Exception $e) {
            print "¡Error BD!: " . $e->getMessage() . "<br/>";
            print_r("ERROR DE CONEXION");
            //console.log($e->getMessage());
            die();
        }
    }

    public function set_names()
    {
        return $this->dbh->query("SET NAMES 'utf8'");
    }

}

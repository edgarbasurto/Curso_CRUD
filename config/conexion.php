<?php
    class Conectar {
        protected $dbh;
      
        protected function Conexion(){
            try {
               $conectar = $this->dbh = new PDO("mysql:host=localhost;dbname=crud", "root", "DBA#2021ug");
               return $conectar;

            } catch (Exception $e) {
               print "¡Error BD!: " . $e->getMessage() . "<br/>";
               //console.log("ERRO DE CONEXION");
               //console.log($e->getMessage());
               die();
            }
        }

        public function set_names(){
            return $this->dbh->query("SET NAMES 'utf8'");
        }

    }
?>
<?php
include('../modelo/grupoorve.php');
//echo "<br>Estos son los metros del lote: $metros";
if ($planFinanciemiento==60 && $mensualidadEnganche == 0) {
    /*Funcion para obtener el precio del Lote segun el tamaño,
 etapa y privada que pertenece con las especificaciones de cada ficha tecnica*/
    function getPrecioLote($metros, $precioMetros, $planFinanciemiento, $etapa)
    {
        switch ($etapa) {
            case 'ETAPA 3':
                if ($planFinanciemiento <= 3) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        $precioLote = ($precioLote) - ($precioLote * .20);
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        $precioLote = ($precioLote) - ($precioLote * .20);
                        
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 3 && $planFinanciemiento <= 12) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        $precioLote = ($precioLote) - ($precioLote * .15);
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        $precioLote = ($precioLote) - ($precioLote * .15);
                        
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 12 && $planFinanciemiento <= 48) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        $precioLote = ($precioLote) - ($precioLote * .10);
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        $precioLote = ($precioLote) - ($precioLote * .10);
                        
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 48 && $planFinanciemiento <= 66) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        $precioLote = ($precioLote) - ($precioLote * .05);
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        $precioLote = ($precioLote) - ($precioLote * .05);
                        
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 66 && $planFinanciemiento <= 180) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        
                        return $precioLote;
                    }
                }
                break;
        }
    }
    //Funcion para obtener que mensualidad se usara en la cotizacion
    function getEnganche($precioLote)
    {
        $precioLote = 0;
        return $precioLote;
    }

    //Funcion para obtener Mensaualidades sin contar enganche
    function getMensualidad($precioLote, $planFinanciemiento, $enganche)
    {
        $precioLote = ($precioLote - $enganche) / ($planFinanciemiento);
        return $precioLote;
    }

    //Funcion para obtener el enganche diferido en el numero de mensualidades que se especifique $mensualidadEnganche
    function getEngancheMensual($enganche, $mensualidadEnganche, $repeticionEnganche)
    {
        if ($mensualidadEnganche == 0) {
            return 0;
        } else {
            if ($mensualidadEnganche > $repeticionEnganche) {
                $enganche = $enganche / $mensualidadEnganche;
                return $enganche;
            } else {
                return 0;
            }
        }
    }

    $precioLote = getPrecioLote($metros, $precioMetros, $planFinanciemiento, $etapa);
    $enganche = $apartadoTerreno;
    $mensualidad = getMensualidad($precioLote, $planFinanciemiento, $enganche);
    $saldoEnganche = $enganche-$apartadoTerreno;
    $engancheInicial = $enganche;
} else {
    /*Funcion para obtener el precio del Lote segun el tamaño,
 etapa y privada que pertenece con las especificaciones de cada ficha tecnica*/
    function getPrecioLote($metros, $precioMetros, $planFinanciemiento, $etapa)
    {
        switch ($etapa) {
            case 'ETAPA 3':
                if ($planFinanciemiento <= 3) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        $precioLote = ($precioLote) - ($precioLote * .20);
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        $precioLote = ($precioLote) - ($precioLote * .20);
                        
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 3 && $planFinanciemiento <= 12) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        $precioLote = ($precioLote) - ($precioLote * .15);
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        $precioLote = ($precioLote) - ($precioLote * .15);
                        
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 12 && $planFinanciemiento <= 48) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        $precioLote = ($precioLote) - ($precioLote * .10);
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        $precioLote = ($precioLote) - ($precioLote * .10);
                        
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 48 && $planFinanciemiento <= 66) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        $precioLote = ($precioLote) - ($precioLote * .05);
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        $precioLote = ($precioLote) - ($precioLote * .05);
                        
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 66 && $planFinanciemiento <= 180) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 2999;
                        
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 3049;
                        
                        return $precioLote;
                    }
                }
                break;
            case 'ETAPA 2':

                if ($planFinanciemiento <= 3) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 1999;
                        $precioLote = ($precioLote) - ($precioLote * .20);
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 2049;
                        $precioLote = ($precioLote) - ($precioLote * .20);
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 3 && $planFinanciemiento <= 12) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 1999;
                        $precioLote = ($precioLote) - ($precioLote * .15);
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 2049;
                        $precioLote = ($precioLote) - ($precioLote * .15);
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 12 && $planFinanciemiento <= 48) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 1999;
                        $precioLote = ($precioLote) - ($precioLote * .10);
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 2049;
                        $precioLote = ($precioLote) - ($precioLote * .10);
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 48 && $planFinanciemiento <= 66) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 1999;
                        $precioLote = ($precioLote) - ($precioLote * .05);
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 2049;
                        $precioLote = ($precioLote) - ($precioLote * .05);
                        return $precioLote;
                    }
                } else if ($planFinanciemiento > 66 && $planFinanciemiento <= 180) {
                    if ($precioMetros == 'R') {
                        $precioLote = $metros * 1999;
                        return $precioLote;
                    } else if ($precioMetros == 'E') {
                        $precioLote = $metros * 2049;
                        return $precioLote;
                    }
                }
                break;
        }
    }
    //Funcion para obtener que mensualidad se usara en la cotizacion
    function getEnganche($precioLote)
    {
        $precioLote = $precioLote * .12;
        return $precioLote;
    }

    //Funcion para obtener Mensaualidades sin contar enganche
    function getMensualidad($precioLote, $planFinanciemiento, $enganche)
    {
        if ($planFinanciemiento == 0) {
            $precioLote = $precioLote  / ($planFinanciemiento);
            return $precioLote;
        } else {
            $precioLote = ($precioLote - $enganche) / ($planFinanciemiento);
            return $precioLote;
        }
    }

    //Funcion para obtener el enganche diferido en el numero de mensualidades que se especifique $mensualidadEnganche
    function getEngancheMensual($enganche, $mensualidadEnganche, $repeticionEnganche)
    {
        if ($mensualidadEnganche == 0) {
            return 0;
        } else {
            if ($mensualidadEnganche > $repeticionEnganche) {
                $enganche = $enganche / $mensualidadEnganche;
                return $enganche;
            } else {
                return 0;
            }
        }
    }
  
    $precioLote = getPrecioLote($metros, $precioMetros, $planFinanciemiento, $etapa);
    $enganche = getEnganche($precioLote);
    $mensualidad = getMensualidad($precioLote, $planFinanciemiento, $enganche);
    $saldoEnganche = $enganche - 1000;
    if ($mensualidadEnganche == 0) {
        $engancheInicial = 0;
    } else {
        $engancheInicial = $saldoEnganche / $mensualidadEnganche;
    }
}

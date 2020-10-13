<?php
include_once '../modelo/sommet.php';
function getPrecioMetro($planFinanciemiento)
{
    switch ($planFinanciemiento) {
        case '1':
            return 250;
            break;
        case '3':
            return 250;
            break;
        case '6':
            return 265;
            break;
        case '12':
            return 280;
            break;
        case '18':
            return 280;
            break;
        case '24':
            return 310;
            break;
        case '30':
            return 325;
            break;
        case '36':
            return 340;
            break;
        case '42':
            return 355;
            break;
    }
}


function getPrecioLote($metros, $precioMetros)
{
    $precioTerreno = 0;
    $precioTerreno = $metros * $precioMetros;

    return $precioTerreno;
}

function getEnganche($planFinanciemiento)
{
    // $enganche = 0;
    // $enganche = $precioLote * .15;

    switch ($planFinanciemiento) {
        case '1':
            return 15000;
            break;
        case '3':
            return 15000;
            break;
        case '6':
            return 15800;
            break;
        case '12':
            return 16700;
            break;
        case '18':
            return 17600;
            break;
        case '24':
            return 18500;
            break;
        case '30':
            return 19400;
            break;
        case '36':
            return 20300;
            break;
        case '42':
            return 21200;
            break;
    }

}

function getMensualidad($planFinanciemiento,$precioLote,$enganche)
{
    $mensualidad = 0;
    $mensualidad = ($precioLote-$enganche)/$planFinanciemiento;
    return $mensualidad;
}


$precioLote = getPrecioLote($metros, getPrecioMetro($planFinanciemiento));
$enganche = getEnganche($planFinanciemiento);
$mensualidad = getMensualidad($planFinanciemiento,$precioLote,$enganche);
$totalAFinanciar = $precioLote-$enganche;

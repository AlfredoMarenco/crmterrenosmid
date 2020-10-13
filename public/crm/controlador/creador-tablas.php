<?php
switch ($desarrollo) {
    case 'CIUDAD CENTRAL':
        
        echo "
        <th scope='col'>1</th>
        <th scope='col'></th>
        <th scope='col'></th>
        <th scope='col' style='background:limegreen'>" . number_format($engancheInicial, 2);
        "</th>
        <th scope='col'></th>
        <th scope='col'></th>";
        $totalMensualidades = 0;
        $totalIntereses = 0;
        $engancheTotal = $enganche - $apartadoTerreno;
        $totalPagado = 0;
        $saldoCapital = $precioLote-$enganche;
        for ($i = 1; $i <= $planFinanciemiento; $i++) {
            //Obtenemos los datos que aplicaremos en la tabla
            //$mensualidad = getMensualidad($precioLote, $planFinanciemiento, $enganche);
            $enganche = getEngancheMensual($saldoEnganche, $mensualidadEnganche, $i);
            $totalAPagar = $mensualidad + $enganche;
            //echo "$mensualidad /";

            //echo "$totalAPagar /";
            //Le damos color de fondo si el enganche esta diferido y no es igual a 0
            if ($enganche == 0) {
                $color = '';
            } else {
                $color = 'limegreen';
            }
            /*Creamos un switch para poder crear las tablas de amorticacion segun la etapa a la que pertenece el Lote
    Se tuvo que crear asi provicionalmente por que estmos aun entendiendo como se comportan las actualizaciones 
    segun los meses sin intereses de cada etapa
    */
            switch ($etapa) {
                case 'ETAPA 3':
                    if ($i <= 58) {
                        echo "<tr>";
                        echo "<th scope='row'>$i</th>";
                        echo "<td>$" . number_format($mensualidad, 2);
                        "</td>";
                        echo "<td>$0.00</td>";
                        echo "<td style=background:" . $color . ">$" . number_format($enganche, 2);
                        "</td>";
                        echo "<td>$" . number_format($totalAPagar, 2);
                        "</td>";
                        echo "<td>$" . number_format($saldoCapital-$mensualidad, 2);
                        "</td>";
                        echo "</tr>";
                        $saldoCapital = $saldoCapital - $mensualidad;
                        $totalMensualidades += $mensualidad;
                        $totalPagado += $totalAPagar;
                    } else if ($i == 59) {
                        //Usar la formula (a*b)/(1-(b+1)^-n) para sacar cada una de las actualizaciones por etapa
                        $n = ($planFinanciemiento - $i) + (1);
                        $nuevoCapital = $saldoCapital;
                        //echo "$nuevoCapital";
                        $actualizacion1 = ($nuevoCapital) * .01;
                        $totalAPagar = ($actualizacion1) / (1 - (pow(1 + .01, -$n)));
                        $mensualidad = $totalAPagar - $actualizacion1;
                        $saldoCapital = ($nuevoCapital) - ($mensualidad);

                        echo "<tr>";
                        echo "<th scope='row'>$i</th>";
                        echo "<td>$" . number_format($mensualidad, 2);
                        "</td>";
                        echo "<td>$" . number_format($actualizacion1, 2);
                        "</td>";
                        echo "<td style=background:" . $color . ">$" . number_format($enganche, 2);
                        "</td>";
                        echo "<td>$" . number_format($totalAPagar, 2);
                        "</td>";
                        echo "<td>$" . number_format($saldoCapital, 2);
                        "</td>";
                        echo "</tr>";
                        $nuevoCapital = $saldoCapital;
                        $totalMensualidades += $mensualidad;
                        $totalIntereses += $actualizacion1;
                        $totalPagado += $totalAPagar;
                    } else if ($i > 59 && $i <= 120) {
                        //Usar la formula (a*b)/(1-(b+1)^-n) para sacar cada una de las actualizaciones por etapa
                        $n = ($planFinanciemiento - $i) + (1);
                        $nuevoCapital = $saldoCapital;
                        $actualizacion1 = ($nuevoCapital) * .01;
                        $totalAPagar = ($actualizacion1) / (1 - (pow(1 + .01, -$n)));
                        $mensualidad = $totalAPagar - $actualizacion1;
                        $saldoCapital = ($nuevoCapital) - ($mensualidad);

                        echo "<tr>";
                        echo "<th scope='row'>$i</th>";
                        echo "<td>$" . number_format($mensualidad, 2);
                        "</td>";
                        echo "<td>$" . number_format($actualizacion1, 2);
                        "</td>";
                        echo "<td style=background:" . $color . ">$" . number_format($enganche, 2);
                        "</td>";
                        echo "<td>$" . number_format($totalAPagar, 2);
                        "</td>";
                        echo "<td>$" . number_format($saldoCapital, 2);
                        "</td>";
                        echo "</tr>";
                        $totalMensualidades += $mensualidad;
                        $totalIntereses += $actualizacion1;
                        $totalPagado += $totalAPagar;
                        //$nuevoCapital = ($saldoCapital) + ($mensualidad);
                    } else if ($i > 120 && $i <= $planFinanciemiento) {
                        //Usar la formula (a*b)/(1-(b+1)^-n) para sacar cada una de las actualizaciones por etapa
                        $n = ($planFinanciemiento - $i) + (1);
                        $nuevoCapital = $saldoCapital;
                        $actualizacion1 = ($nuevoCapital) * .0125;
                        $totalAPagar = ($actualizacion1) / (1 - (pow(1 + .0125, -$n)));
                        $mensualidad = $totalAPagar - $actualizacion1;
                        $saldoCapital = ($nuevoCapital) - ($mensualidad);

                        echo "<tr>";
                        echo "<th scope='row'>$i</th>";
                        echo "<td>$" . number_format($mensualidad, 2);
                        "</td>";
                        echo "<td>$" . number_format($actualizacion1, 2);
                        "</td>";
                        echo "<td style=background:" . $color . ">$" . number_format($enganche, 2);
                        "</td>";
                        echo "<td>$" . number_format($totalAPagar, 2);
                        "</td>";
                        echo "<td>$" . number_format($saldoCapital, 2);
                        "</td>";
                        echo "</tr>";
                        //$nuevoCapital = ($saldoCapital) + ($mensualidad);
                        $totalMensualidades += $mensualidad;
                        $totalIntereses += $actualizacion1;
                        $totalPagado += $totalAPagar;
                    }
                    break;
                case 'ETAPA 2':
                    if ($i <= 53) {
                        echo "<tr>";
                        echo "<th scope='row'>$i</th>";
                        echo "<td>$" . number_format($mensualidad, 2);
                        "</td>";
                        echo "<td>$0.00</td>";
                        echo "<td style=background:" . $color . ">$" . number_format($enganche, 2);
                        "</td>";
                        echo "<td>$" . number_format($totalAPagar, 2);
                        "</td>";
                        echo "<td>$" . number_format($saldoCapital, 2);
                        "</td>";
                        echo "</tr>";
                        $saldoCapital = $saldoCapital - $mensualidad;
                        $totalMensualidades += $mensualidad;
                        $totalPagado += $totalAPagar;
                    } else if ($i == 54) {
                        //Usar la formula (a*b)/(1-(b+1)^-n) para sacar cada una de las actualizaciones por etapa
                        $n = ($planFinanciemiento - $i) + (1);
                        $nuevoCapital = $saldoCapital + $mensualidad;
                        $actualizacion1 = ($nuevoCapital) * .01;
                        $totalAPagar = ($actualizacion1) / (1 - (pow(1 + .01, -$n)));
                        $mensualidad = $totalAPagar - $actualizacion1;
                        $saldoCapital = ($nuevoCapital) - ($mensualidad);

                        echo "<tr>";
                        echo "<th scope='row'>$i</th>";
                        echo "<td>$" . number_format($mensualidad, 2);
                        "</td>";
                        echo "<td>$" . number_format($actualizacion1, 2);
                        "</td>";
                        echo "<td style=background:" . $color . ">$" . number_format($enganche, 2);
                        "</td>";
                        echo "<td>$" . number_format($totalAPagar, 2);
                        "</td>";
                        echo "<td>$" . number_format($saldoCapital, 2);
                        "</td>";
                        echo "</tr>";
                        $nuevoCapital = $saldoCapital;
                        $totalMensualidades += $mensualidad;
                        $totalIntereses += $actualizacion1;
                        $totalPagado += $totalAPagar;
                    } else if ($i > 54 && $i <= 120) {
                        //Usar la formula (a*b)/(1-(b+1)^-n) para sacar cada una de las actualizaciones por etapa
                        $n = ($planFinanciemiento - $i) + (1);
                        $nuevoCapital = $saldoCapital;
                        $actualizacion1 = ($nuevoCapital) * .01;
                        $totalAPagar = ($actualizacion1) / (1 - (pow(1 + .01, -$n)));
                        $mensualidad = $totalAPagar - $actualizacion1;
                        $saldoCapital = ($nuevoCapital) - ($mensualidad);

                        echo "<tr>";
                        echo "<th scope='row'>$i</th>";
                        echo "<td>$" . number_format($mensualidad, 2);
                        "</td>";
                        echo "<td>$" . number_format($actualizacion1, 2);
                        "</td>";
                        echo "<td style=background:" . $color . ">$" . number_format($enganche, 2);
                        "</td>";
                        echo "<td>$" . number_format($totalAPagar, 2);
                        "</td>";
                        echo "<td>$" . number_format($saldoCapital, 2);
                        "</td>";
                        echo "</tr>";
                        //$nuevoCapital = ($saldoCapital) + ($mensualidad);
                        $totalMensualidades += $mensualidad;
                        $totalIntereses += $actualizacion1;
                        $totalPagado += $totalAPagar;
                    } else if ($i > 120 && $i <= $planFinanciemiento) {
                        //Usar la formula (a*b)/(1-(b+1)^-n) para sacar cada una de las actualizaciones por etapa
                        $n = ($planFinanciemiento - $i) + (1);
                        $nuevoCapital = $saldoCapital;
                        $actualizacion1 = ($nuevoCapital) * .0125;
                        $totalAPagar = ($actualizacion1) / (1 - (pow(1 + .0125, -$n)));
                        $mensualidad = $totalAPagar - $actualizacion1;
                        $saldoCapital = ($nuevoCapital) - ($mensualidad);

                        echo "<tr>";
                        echo "<th scope='row'>$i</th>";
                        echo "<td>$" . number_format($mensualidad, 2);
                        "</td>";
                        echo "<td>$" . number_format($actualizacion1, 2);
                        "</td>";
                        echo "<td style=background:" . $color . ">$" . number_format($enganche, 2);
                        "</td>";
                        echo "<td>$" . number_format($totalAPagar, 2);
                        "</td>";
                        echo "<td>$" . number_format($saldoCapital, 2);
                        "</td>";
                        echo "</tr>";
                        //$nuevoCapital = ($saldoCapital) + ($mensualidad);
                        $totalMensualidades += $mensualidad;
                        $totalIntereses += $actualizacion1;
                        $totalPagado += $totalAPagar;
                    }
                    break;
            }
        }

        if ($totalesVisibles) {
            echo "<tr>";
            echo "<th scope='row'></th>";
            echo "<td class='font-weight-bold bg-secondary'>$" . number_format($totalMensualidades, 2);
            "</td>";
            echo "<td class='font-weight-bold bg-secondary'>$" . number_format($totalIntereses, 2);
            "</td>";
            echo "<td class='font-weight-bold bg-success'>$" . number_format($engancheTotal, 2);
            "</td>";
            echo "<td class='font-weight-bold bg-secondary'>$" . number_format($totalMensualidades + $totalIntereses + $engancheTotal, 2);
            "</td>";
            echo "<td class='font-weight-bold bg-secondary'>";
            "</td>";
            echo "</tr>";
        }
        break;

    case 'PALUMAR':
        echo "
        <th scope='col'>-</th>
        <th scope='col'></th>
        <th scope='col'></th>
        <th scope='col' style='background:limegreen'>" . number_format($enganche, 2) . " Enganche</th>";
        $totalMensualidades = 0;
        $totalIntereses = 0;
        $totalPagado = 0;
        $intereses = 0;
        $saldoCapital = $totalAFinanciar - $mensualidad;
        for ($i = 1; $i <= $planFinanciemiento; $i++) {
            $totalAPagar = $mensualidad + $intereses;

            echo "<tr>";
            echo "<th scope='row'>$i/$planFinanciemiento</th>";
            echo "<td>$" . number_format($mensualidad, 2) . "</td>";
            echo "<td>$" . number_format($intereses, 2) . "</td>";
            echo "<td>$" . number_format($totalAPagar, 2) . "</td>";
            echo "<td>$" . number_format($saldoCapital, 2) . "</td>";
            echo "</tr>";
            $saldoCapital = $saldoCapital - $totalAPagar;
            $totalMensualidades += $mensualidad;
            $totalIntereses += $intereses;
            $totalPagado += $totalAPagar;
        }
        if ($totalesVisibles) {
            echo "<tr>";
            echo "<th scope='row'></th>";
            echo "<td class='font-weight-bold bg-secondary'>$" . number_format($totalMensualidades, 2);
            "</td>";
            echo "<td class='font-weight-bold bg-secondary'>$" . number_format($totalIntereses, 2);
            "</td>";
            echo "<td class='font-weight-bold bg-secondary'>$" . number_format($totalPagado, 2);
            "</td>";
            echo "<td class='font-weight-bold bg-success'></td>";

            echo "</tr>";
        }
        break;
}

<?php
include('../includes/head.php');
?>
<div class="container mt-1">
    <a href="javascript: history.go(-1)" class="btn btn-dark ocultar">Regresar</a>
    <div class="row mt-1">
        <div class="col-md-10"></div>
        <div class="col-md-2"><a class="btn btn-success btn-block p-2" href="./form-agregar.php">Agregar Nuevo</a></div>
    </div>
    <div class="row mt-2">
        <?php
        include_once '../controlador/tabla-leads.php';
        ?>
        <!--    <div class="col-3">
            <div class="nav bg-dark flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active text-light border border-light" id="leads-tab" data-toggle="pill" href="#leads" role="tab" aria-controls="leads" aria-selected="true">Clientes</a>
                <a class="nav-link text-light border border-light" id="seguimientos-tab" data-toggle="pill" href="#seguimientos" role="tab" aria-controls="seguimientos" aria-selected="false">Seguimientos</a>
                <a class="nav-link text-light border border-light" id="cerrados-tab" data-toggle="pill" href="#cerrados" role="tab" aria-controls="cerrados" aria-selected="false">Cerrados</a>
                <a class="nav-link text-light border border-light" id="perdidos-tab" data-toggle="pill" href="#perdidos" role="tab" aria-controls="perdidos" aria-selected="false">Perdidos</a>
            </div>
        </div>
        <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="leads" role="tabpanel" aria-labelledby="leads-tab"><?php include_once '../controlador/tabla-leads.php'; ?></div>
                <div class="tab-pane fade" id="seguimientos" role="tabpanel" aria-labelledby="seguimientos-tab">...</div>
                <div class="tab-pane fade" id="cerrados" role="tabpanel" aria-labelledby="cerrados-tab">...</div>
                <div class="tab-pane fade" id="perdidos" role="tabpanel" aria-labelledby="perdidos-tab">...</div>
            </div>
        </div>-->
    </div>
</div>
<?php include_once '../includes/footer.php'; ?>
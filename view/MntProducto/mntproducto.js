var tabla;

function init() { 
  $("#producto_form").on("submit",function(e) {
    console.log("SUBMIT EN EL FORMULARIO");//verificacion
    guardaryeditar(e);
  });
}

$(document).ready(function () {
  tabla = $("#producto_data").dataTable({
      "aProcessing": true, //Activamos el procesamiento del datatables
      "aServerSide": true, //Paginación y filtrado realizados por el servidor
      dom: "Bfrtip", //Definimos los elementos del control de tabla
      buttons: [
        'copyHtml5', 
        'excelHtml5', 
        'csvHtml5', 
        'pdf'],
      "ajax": {
        url: '../../controller/producto.php?op=listar',
        type: "get",
        dataType: "json",
        error: function (e) {
                 console.log(e.responseText);
        }
      },
      "bDestroy": true,
      "responsive": true,
      "bInfo": true,
      "iDisplayLength": 10, //Por cada 10 registros hace una paginación
      "order": [[0, "asc"]], //Ordenar (columna,orden)
      "language": {
        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
          "sFirst": "Primero",
          "sLast": "Último",
          "sNext": "Siguiente",
          "sPrevious": "Anterior",
        },
        "oAria": {
          "sSortAscending":
            ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending":
            ": Activar para ordenar la columna de manera descendente",
        }
      }
    })//.DataTable();
});

function guardaryeditar(e) {
  e.preventDefault();
  console.log("SUBMIT EN EL FORMULARIO"); //verificacion
  var formData = new FormData($("#producto_form")[0]);

  $.ajax({
    url: "../../controller/producto.php?op=guardaryeditar",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: function(datos){
      console.log(datos);
      // $('#producto_form')[0].reset();
      // $('#modalmantenimiento').modal('hide');
      // $('#producto_data').DataTable().ajax.reload();

      // Swal.fire( 
      //   '¡Registrado!',
      //   'El registro se realizó correctamente.',
      //   'success'
      // )
    }
  });
  
}

function editar (prod_id){
  console.log(prod_id);
}

function eliminar(prod_id) {
  Swal.fire({
    title: 'Eliminar registro',
    text: "¿Está seguro de Eliminar el registro?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      $.post("../../controller/producto.php?op=eliminar",{prod_id:prod_id},function(data){

      });

      $("#producto_data").DataTable().ajax.reload();
      
      //console.log(prod_id),
      Swal.fire( 
        '¡Eliminado!',
        'El registro se eliminó correctamente.',
        'success'
      )
    }
  })  
}

$(document).on("click", "#btnnuevo", function () {
  $('#mdltitulo').html('Nuevo Registro');
  $('#modalmantenimiento').modal('show');
});


init()

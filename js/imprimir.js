let tipoGasto = document.getElementById("tipo-gasto");
let monto = document.getElementById("monto");

let campos = [];

function guardar(){
    if(monto.value != "" && tipoGasto.value != ""){
        campos.push(tipoGasto.value + ": " + monto.value);
        actualizarLista();
        limpiar();
    } else{
        presentAlert("No puedes guardar valores vacíos.");
    }
}

async function presentAlert(mensaje) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alerta';
    alert.message = mensaje;
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
  }

function limpiar(){
    monto.value = "";
    tipoGasto.value = "";
}

function actualizarLista(){
    var node = document.createElement('ion-item');
    node.innerHTML = "<ion-label>" + campos[campos.length -1] + "</ion-label>";
    document.getElementById("lista").appendChild(node);
}

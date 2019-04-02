// This is a JavaScript file

$(document).on('click','#n1',function(){
   navigator.notification.alert("Olá Mundo");
});

function retorno(){
    navigator.notification.alert("Ação após confimar");
}

$(document).on('click','#n2',function(){
  navigator.notification.alert("Segundo alerta",retorno,"Janela","Fechar");
});

function retorno2(buttonIndex){
    if(buttonIndex == 1){
        navigator.notification.alert("Digitou OK");
    }else{
      navigator.notification.alert("Digitou Sair");
    }
}

$(document).on('click','#n3',function(){
  navigator.notification.confirm("Terceiro alerta",retorno2,"Janela",["ok","Sair"]);
});

$(document).on('click','#beep',function(){
    navigator.notification.beep(6);
});

$(document).on('click','#vibrar',function(){
    navigator.vibrate(6000);
});

$(document).on('click','#local',function(){
  function geolocationSuccess(position) {
        
        navigator.notification.alert('Latitude: '+ position.coords.latitude + '\n' +
              'Longitude: '+ position.coords.longitude);
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess);
});

$(document).on('click','#conecta',function(){
    function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'Conectado na WI-FI';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Tipo de Conexão: ' + states[networkState]);
  }

  checkConnection();
});
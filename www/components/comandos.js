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
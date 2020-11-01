(function(window){
  document.addEventListener("DOMContentLoaded", function(event)
  {
    //função bolsonaro
    function bolsonaro(){
      x = Math.floor(Math.random() * 2);
      if(x==1){
        document.getElementById("resposta").innerHTML = "ééééééé";
      }
      else{
        document.getElementById("resposta").innerHTML = "NÃÃÃÃAÃO";
      }
      setTimeout(function(){ 
        document.getElementById("resposta").innerHTML = "";
      }, 1500);
    };
  
    //REQUEST XML
    document.querySelector("#botao").addEventListener("click", function(){
      $ajaxUtils
      .sendGetRequest("data/names.txt",function(request){
        var name = request;
        console.log("name: " +name);
        document.getElementById("content").innerHTML = name;
      }, false);
      bolsonaro();
    });
  
    //REQUEST JSON
    document.querySelector("#botao2").addEventListener("click", function(){
      $ajaxUtils
      .sendGetRequest("data/names.json",function(request){//res vai ser o objeto resposta
        var message = request;  
        document.getElementById("content2").innerHTML = message.asd;
      }, true);
      bolsonaro();
    });

    //REQUEST HTML pelo XML
    document.querySelector("#botao3").addEventListener("click", function(){
      $ajaxUtils
      .sendGetRequest("data/div.html", function(request){
        var html = request;
        document.getElementById("content3").innerHTML = html;
      }, false)
    });
  });
})(window);


//SE TODO HTML EXECUTADO, EXECUTAR ESSA FUNÇÃO


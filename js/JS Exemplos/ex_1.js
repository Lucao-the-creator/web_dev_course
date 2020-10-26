(function(window){
  var Lucao = {};
  Lucao.pito = "pito grande";
  Lucao.rainha = "paula";
  Lucao.oqtem = function(){
    console.log("o Lucao tem o " + Lucao.pito + " e é apaixonado pela " +Lucao.rainha);
  };
  window.Lucao = Lucao;
})(window);

Lucao.oqtem();
var x;
//SE TODO HTML EXECUTADO, EXECUTAR ESSA FUNÇÃO
document.addEventListener("DOMContentLoaded", function(event)
{
  document.querySelector("button").addEventListener("click", function(){
    $ajaxUtils
    .sendGetRequest("data/names.txt",function(request){
      var name = request.responseText;
      document.getElementById("content").innerHTML = name;
    });
    
    x = Math.floor(Math.random() * 2);
    if(x==1)
    {
      document.getElementById("resposta").innerHTML = "ééééééé";
    }
    else{
      document.getElementById("resposta").innerHTML = "NÃÃÃÃAÃO";
    }

    setTimeout(function(){ 
      document.getElementById("resposta").innerHTML = "";
    }, 1500);
  });
});

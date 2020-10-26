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

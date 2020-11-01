(function (global) {//IIFE (só as variáveis q eu quero saem daqui)

  // Set up a namespace for our utility
  var ajaxUtils = {};//Objeto, vou guardar as funções
  
  
  // Returns an HTTP request object (XMLHttpRequest)
  function getRequestObject() {
    if (global.XMLHttpRequest) {//SE o browser tem esse objeto
      return (new XMLHttpRequest());//retorna um novo objeto http desse
    }
    //SÓ PRA BROWSERS VELHOS
    else if (global.ActiveXObject) {
      // For very old IE browsers (optional)
      return (new ActiveXObject("Microsoft.XMLHTTP"));
    } 
    else {//AJAX NAO SUPORTADO
      global.alert("Ajax is not supported!");
      return(null); 
    }
  }
  
  
  // Makes an Ajax GET request PARA 'requestUrl'(SERVIDOR)
  ajaxUtils.sendGetRequest = //ESSA VAI PRA FORA DA IIFE
    function(requestUrl, responseHandler, isJsonResponse) {//RESPONSE HANDLER MANUZEIA A RESPOTA DO SERVIDOR
      var request = getRequestObject();//new XMLHttpRequest();
      request.open("GET", requestUrl, true);//abre o comando "GET", servidor, truePRA SER ASSINCRONO(se for falso vai ser assíncrono e o browser vai congelar até vir a resposta)
      request.send(null); // for POST only SE FOSSE POST OS PARAMETRO N IAM FAZER PARTE DA URL, E ENTÃO IRIAM ALI
      request.onreadystatechange = //XMLHttpRequest.onreadystatechange - VAO SER OS ESTAGIOS DA COMUNICAÇÃO ENTRE SERVER E NAVEGADOR
        function() { //executada qndo o servidor vem com a resposta PRA VERIFICAR SE PODE MANDAR PRO USER
          handleResponse(request, responseHandler, isJsonResponse); //XMLHttpRequest e Manipulador da resposta, PRECISA ESTAR AQUI PQ SE ESTIVER GLOBAL E FOREM FEITAS 2 REQUESTS AO MESMO TEMPO FUDEO, VAI TROCAR O VALOR GLOBALMENTE
        };
    };
  
  
  // Only calls user provided 'responseHandler'
  // function if response is ready
  // and not an error
  function handleResponse(request,
                          responseHandler, isJsonResponse){
    if ((request.readyState == 4) &&//TEM Q TER 4 ESTADOS NESSE REQUEST
    (request.status == 200)) {//TEM Q ESTAR (200) TD OK
      if (isJsonResponse == undefined)
      {
        isJsonResponse = true;
      }
  
      if(isJsonResponse == true)
      {
        responseHandler(JSON.parse(request.responseText));
      }
      else if(isJsonResponse == false){
        responseHandler(request.responseText);//SE TUDO OK LIBERA o request pra receber a resposta
        //responseHandler(request.responseText);
      } 

      
    }
  }
  
  
  // Expose utility to the global object
  global.$ajaxUtils = ajaxUtils;
  
  
})(window);
// This is a JavaScript file
    var result="";
    var resultadoFinal=0;
    var c=0;
    var valor=new Array();
    var operacao="";
    $(document).on("click", "#um", function(){
    result+="1";
    $("#result").val(result);
    });
    
    $(document).on("click", "#dois", function(){
    result+="2";
    $("#result").val(result);
    });
    
    $(document).on("click", "#tres", function(){
   result+="3";
    $("#result").val(result);
    });
    
    $(document).on("click", "#quatro", function(){
    result+="4";
    $("#result").val(result);
    });
    
    $(document).on("click", "#cinco", function(){
    result+="5";
    $("#result").val(result);
    });
    
    $(document).on("click", "#seis", function(){
    result+="6";
    $("#result").val(result);
    });
    
    $(document).on("click", "#sete", function(){
      result+="7";
    $("#result").val(result);
    });
    
    $(document).on("click", "#oito", function(){
    result+="8";
    $("#result").val(result);
    });
    
    $(document).on("click", "#nove", function(){
      result+="9";
    $("#result").val(result);
    });
    
    $(document).on("click", "#zero", function(){
      result+="0";
    $("#result").val(result);
    });

    $(document).on("click", "#ponto", function(){
      result+=".";
    $("#result").val(result);
    });

    $(document).on("click", "#somar", function(){
    operacao="+";  
    valor[c] = parseFloat(result);
    resultadoFinal+=valor[c];
    result="";
    $("#result").val(result);
    c++;
    });

     $(document).on("click", "#divd", function(){
    operacao="/";  
    valor[c] = parseFloat(result);
    resultadoFinal=valor[c];
    result="";
    $("#result").val(result);
    c++;
    });

    $(document).on("click", "#mult", function(){
    operacao="*";  
    valor[c] = parseFloat(result);
    if(resultadoFinal!=0){
    resultadoFinal*=valor[c];
    }
    else{
    resultadoFinal=1*valor[c];
    }
    result="";
    $("#result").val(result);
    c++;
    });

    $(document).on("click", "#sub", function(){
    operacao="-";
    valor[c] = parseFloat(result);
    result="";
    $("#result").val(result);
    c++;
    });

    $(document).on("click", "#igual", function(){
    if(operacao=="+"){
    valor[c] = parseFloat(result);
    resultadoFinal+=valor[c];
    result=resultadoFinal.toString();
    }
    if(operacao=="-"){
    valor[c] = parseFloat(result);
    resultadoFinal=valor[c-1]-valor[c];
    result=resultadoFinal.toString();
    }
    if(operacao=="*"){
    valor[c] = parseFloat(result);
    resultadoFinal*=valor[c];
    result=resultadoFinal.toString();
    }
    if(operacao=="/"){
    valor[c] = parseFloat(result);
    resultadoFinal/=valor[c];
    result=resultadoFinal.toString();
    }
    $("#result").val(result);
    result="";
    resultadoFinal=0;
    c=0;
    });


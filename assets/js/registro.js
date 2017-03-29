window.onload=function(){

	document.getElementById("form").onsubmit=function(e){
		e.preventDefault();
	}

	document.getElementById("registro").addEventListener("click",function(){
		
		var arrCoders = [];

	  var nombre     = document.getElementById("name").value;
		var apellido   = document.getElementById("lastname").value;
		var correo     = document.getElementById("email").value;
		var contraseña = document.getElementById("password").value;
	
	
		function Coders(nombreC, apellidoC, correoC , contraseñaC) {
			this.nombre     = nombreC ;
			this.apellido   = apellidoC ;
			this.correo     = correoC ;
			this.contraseña = contraseñaC ;
	    }

	if (nombre == "" || apellido == "" || email == "" || contraseña == "" ){
       var alerta = document.getElementById("alerta");
       alerta.innerText = "*Todos los campos son obligatorios";

     } else{
        
        console.log(new Coders(nombre,apellido,correo,contraseña));
        arrCoders.push(new Coders(nombre,apellido,correo,contraseña));
        document.getElementById("form").reset()

        localStorage.setItem("nuevoCoder",JSON.stringify(new Coders(nombre,apellido,correo,contraseña)));
        window.location = "iniciar.html";
    }
  })

  var nombre     = document.getElementById("name");
  var apellido   = document.getElementById("lastname");
  var correo     = document.getElementById("email").value;
  var contraseña = document.getElementById("password");

  var validLetras = function(e){
    var codigoTecla = e.keyCode;
    
    if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90) || codigoTecla == 39 || codigoTecla == 32){
      this.nextElementSibling.nextElementSibling.innerText="";
      return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerText="*Este campo solo permite letras";
      return false;
    }
  }


  var validNumeros = function(e){
    var codigoTecla = e.keyCode;
    var longitud = this.value.length;
   if(longitud==20){
     this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
    }
    if(codigoTecla>=48 && codigoTecla<=57){
      return true; 
    }else{
      this.nextElementSibling.nextElementSibling.innerText="*Este campo solo permite numeros ,caracteres  entre 6 a 20 digitos";
      return false;
    }
  }
  
  var validEmail = function(e){
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(e) ){
    	return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerText='debe de escribir el dominio zzz@sss.com';
      return false;}
  }


    nombre.onkeypress = validLetras;
    apellido.onkeypress = validLetras;
    contraseña.onkeypress=validNumeros;
    validEmail(correo);
    


  var inputs = document.getElementsByClassName("input-registro");

  var validacionInput = function(){
    if(this.value.trim().length == 0){
      this.value = "";
      this.nextElementSibling.nextElementSibling.innerText = "*Este campo es obligatorio";
    } else{
      this.nextElementSibling.nextElementSibling.innerText="";
    }

    var arreglo = this.value.split(" ");
    var arrMayus = "";

    console.log(this.tagName == "nana");

    if(this.getAttribute("type")=="text"){
    	for(var i=0; i<arreglo.length; i++){
      		arrMayus += arreglo[i].charAt(0).toUpperCase()+ arreglo[i].substring(1).toLowerCase() + " ";
    	}
    this.value= arrMayus.trim();
  	}
  }

  for(var i=0; i<inputs.length; i++){
    inputs[i].onblur=validacionInput;
  }
};



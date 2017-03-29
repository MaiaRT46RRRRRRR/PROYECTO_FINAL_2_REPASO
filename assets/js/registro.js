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
		//var texto = /[A-Z]{1,}[a-z]+/ ;
 	    //var correo =/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]$/ ;
	
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
        localStorage.setItem("nuevoCoder",JSON.stringify(new Coders(nombre,apellido,correo,contraseña)));
        window.location = "iniciar.html";
        document.getElementById("form").reset()
    }
  })

  var nombre = document.getElementById("name");
  var apellido = document.getElementById("lastname");
  var correo     = document.getElementById("email").value;
  var contraseña = document.getElementById("password").value;

  var validLetras = function(e){
    var codigoTecla = e.keyCode;
    console.log(codigoTecla);
    if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90) || codigoTecla == 39 || codigoTecla == 32){
      this.nextElementSibling.nextElementSibling.innerText="";
      return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerText="*Este campo solo permite letras";
      return false;
    }
  }


  var validNumeros =  function(n){
    var codigoTecla = n.keyCode;
    console.log(codigoTecla);
    var longitud = this.value.length;
    if (longitud >6 && longitud<20) {
     this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
    }

    if(codigoTecla >= 48 && codigoTecla <= 57 && longitud>6 && longitud<20){
      return true;
    } else {
      return false;
    }
  }

  var validEmail = function(e){
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(e) ){
    	return true;
    } else {
      alert('debe de escribir el dominio zzz@sss.com');
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



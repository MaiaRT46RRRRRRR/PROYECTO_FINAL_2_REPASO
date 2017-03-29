window.onload = function(){
  var nombre = document.getElementById("nombre-coder");
  var apellido = document.getElementById("apellido-coder");
  var correo = document.getElementById("correo-coder");
  var contraseña = document.getElementById("contraseña-coder");


  var objetoCoder = JSON.parse(localStorage.getItem("nuevoCoder"));

  nombre.innerText=objetoCoder.nombre;
  apellido.innerText=objetoCoder.apellido;
  correo.innerText=objetoCoder.correo;
  contraseña.innerText=objetoCoder.contraseña;


  function Coder(nombreC, apellidoC,correoC,contraseñaC) {
    this.nombre = nombreC;
    this.apellido = apellidoC;
    this.correo = correoC;
    this.contraseña = contraseñaC;
  };

  document.getElementsByTagName("button")[0].addEventListener("click",function(){
 	window.location="editar.html"
 	})
};

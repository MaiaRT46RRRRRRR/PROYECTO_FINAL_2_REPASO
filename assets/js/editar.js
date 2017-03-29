window.onload = function() {
  document.getElementsByTagName("form")[0].onsubmit=function(e){
    e.preventDefault();
  }
  var objetoCoder = JSON.parse(localStorage.getItem("nuevoCoder"));
  var inputsEditar=document.getElementsByClassName("input-editar");

  inputsEditar[0].value= objetoCoder.nombre;
  inputsEditar[1].value= objetoCoder.apellido;
  inputsEditar[2].value= objetoCoder.correo;
  inputsEditar[3].value= objetoCoder.contraseña;

  document.getElementsByTagName("button")[0].addEventListener("click", function(){
    if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0 ){
      objetoCoder.nombre = inputsEditar[0].value;
      objetoCoder.apellido = inputsEditar[1].value;
      objetoCoder.correo = inputsEditar[2].value;
      objetoCoder.contraseña = inputsEditar[3].value;
      localStorage.setItem("nuevoCoder", JSON.stringify(objetoCoder));
      window.location = "iniciar.html" ;
    } else{
      alert("Todos los campos son obligatorios");
    }
  })
};

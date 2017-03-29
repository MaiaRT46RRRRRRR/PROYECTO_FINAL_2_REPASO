window.onload=function(){

	document.getElementsByTagName("form")[0].onsubmit=function(e){
    e.preventDefault();
    }
	 
	document.getElementsByTagName("button")[0].addEventListener("click", function(){

      window.location = "iniciar.html" ;
  })

}
// coloca en una variable el boton
const btn = document.getElementById('btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  //le da lo contrario
  menu.hidden = !menu.hidden;

});

// coloca en una variable el boton
const btn3 = document.querySelector('#btn2');
btn3.addEventListener('click', enviar);

//llama a la funcion
function enviar(){
  alert("hola");

  // obtener los valores 
  let nombre = document.querySelector('#nombres').value;
  let correo = document.querySelector('#correos').value;
  let telefono = parseInt(document.querySelector('#telefonos').value);
  let solicitud = document.querySelector('input[name="solicitud"]:checked')?.value;
  let mensaje = document.querySelector('#mensajes').value;

  // crear un objeto 
  let datos = {
    nombre2: nombre,
    correo2: correo,
    telefono2: telefono,
    solicitud2: solicitud,
    mensaje2: mensaje
  };

  // convertir el objeto a formato json
  const datosJSON = JSON.stringify(datos);

  // guardar el json en el localStorage
  localStorage.setItem('datosFormulario', datosJSON);

  // mensaje de confirmación
  alert('¡Información guardada correctamente!');
};

/*
const btn = document.getElementById('buscarTipo');

const tipos = document.getElementById('tipos');

btn.addEventListener('click', () => {
  
  tipos.hidden = !tipos.hidden;
  
});
*/
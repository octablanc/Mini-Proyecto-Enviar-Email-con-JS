const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formulario = document.querySelector('#enviar-mail');
const botones = document.querySelector('#botones');
const btnEnviar = document.querySelector('#enviar');
const resetBtn = document.querySelector('#resetBtn');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const spinner = document.querySelector('#spinner');

const mail = {
  email: '',
  asunto: '',
  mensaje: ''
};

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    resetBtn.addEventListener('click', () => {
      btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
      btnEnviar.disabled = true;
    });
    formulario.addEventListener('submit', enviarFormulario);
}


function iniciarApp(){
  btnEnviar.disabled = true;
}

//Valida el formulario
function validarFormulario(e){
    if(e.target.value.length > 0){
        e.target.classList.remove('border', 'border-red-500');

        if(email.value.length > 0 && asunto.value.length > 0 && mensaje.value.length > 0){
          btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
          btnEnviar.disabled = false;
          if(document.querySelector('#mensajeError'))
            limpiarMensajeError();
        }
    }
    else{
        e.target.classList.add('border', 'border-red-500');
        if(!document.querySelector('#mensajeError'))
          mensajeError('Todos los campos son obligatorios');
    }

    if(e.target.id === 'email' && email.value.length > 0)
          validarEmail(e.target);
}

//Mesanje "Todos los campos son obligatorios"
function mensajeError(m){
    const mensaje = document.createElement('p');
    mensaje.textContent = m;
    mensaje.classList.add('bg-red-500', 'text-center', 'text-white', 'mt-5', 'p-2');
    mensaje.id = 'mensajeError';
    formulario.appendChild(mensaje);
}

function validarEmail(element) {
  if(!regularExpression.test(element.value)){
   alert("La dirección de email es invalida.");
   element.value = '';
  }
}

function limpiarMensajeError(){
  formulario.removeChild(document.querySelector('#mensajeError'));
}

function enviarFormulario(e){
  e.preventDefault();
  mail.email = email.value;
  mail.asunto = asunto.value;
  mail.mensaje = mensaje.value;
  console.log('Objeto mail: ' + mail.email + ' ' + mail.asunto + ' ' + mail.mensaje);

  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
  btnEnviar.disabled = true;
  document.querySelector('#divMensaje').classList.remove('mb-10');
  spinner.classList.add('pt-0');
  spinner.style.display = 'flex';

  setTimeout(()=>{
    spinner.style.display = 'none';
    const mensajeEnviado = document.createElement('p');

    mensajeEnviado.textContent = 'Enviado correctamente!';
    mensajeEnviado.classList.add('bg-green-500', 'text-white', 'text-center', 'my-5', 'p-3');
    formulario.insertBefore(mensajeEnviado, botones);

    setTimeout(()=>{
      mensajeEnviado.remove();
      formulario.reset();
      document.querySelector('#divMensaje').classList.add('mb-10');
    }, 5000);
  }, 3000);
}

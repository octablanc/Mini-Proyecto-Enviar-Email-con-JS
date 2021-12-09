function Mail(){
    return`<div class="container mx-auto mt-20 bg-white">     
    <header id="header" class="bg-pink-800 p-3 font-bold">
        Enviar Nuevo Mail
    </header>


    <form id="enviar-mail" class="py-10 px-5 max-w-lg mx-auto">
        <div class="mb-10">
            <label for="email">Para:</label>
            <input class="bg-gray-100 border shadow p-3 w-full"  id="email" type="email">
        </div>
        <div class="mb-10">
            <label for="asunto">Asunto</label>
            <input class="bg-gray-100 border shadow p-3 w-full"  id="asunto" type="text">
        </div>
        <div class="mb-10" id="divMensaje"> 
            <label for="mensaje">Mensaje</label>
            <textarea class="bg-gray-100 border shadow p-3 w-full" id="mensaje"></textarea>
        </div>

        <div  id="spinner">
            <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div>
        </div>
        
        <div class="flex justify-between" id="botones">
                <button 
                    id="enviar" class="w-full bg-blue-600 px-2 py-5 text-white items-center cursor-not-allowed opacity-50 mr-5 uppercase font-bold items-center flex justify-center" 
                    type="submit" 
                >Enviar
                    <i class="material-icons right text-white ml-3">send</i>
                </button>

                <button 
                    id="resetBtn" 
                    class="w-full bg-green-600 px-2 py-5 text-white items-center uppercase font-bold items-center flex justify-center"
                    type="reset" 
                >Resetear Form
                        <i class="material-icons right ml-3">delete</i>
                </button>
        </div>
    </form> 
</div>
    `;
}

document.querySelector('body').innerHTML += Mail();
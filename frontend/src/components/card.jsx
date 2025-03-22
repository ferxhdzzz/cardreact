const Card =({defaultc})=>{
    return(
        <>

<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div class="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
    <div class="relative">
      <img 
        src="https://i.pinimg.com/736x/21/c3/c5/21c3c54960e946ff155c078c6780f78e.jpg"
        alt="Product"
        class="w-full h-52 object-cover"
      />
      <span class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        Fer
      </span>
    </div>
    
    <div class="p-5 space-y-4">
      <div>
        <h3 class="text-xl font-bold text-gray-900">Fernanda Hernandez</h3>
        <p class="text-gray-500 mt-1">Nombre: Fernanda Mizel Hernandez Cruz <p>Edad: 18</p><p>Pasatiempos: Escuchar musica, jugar basquet, jugar en mi celular
          salir con amigos y familia</p><p>Se hacer: Se programas en varios idiomas, como java, kotlin, c#, etc, actualmete estoy
            aprendiendo a programar con el stack mern</p><p>Dato curioso: Me gusta mas que me digan Fer que Fernanda</p></p>
      </div>
      
     
    </div>
  </div>
</div>

</>
        );
}

export default Card;
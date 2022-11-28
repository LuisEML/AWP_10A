
 let contenido = document.querySelector(".contenido");
 function traerDatos() {
    fetch("json.json")
    .then(respuesta => respuesta.json())
    .then(datos=>{
        tabla(datos)
    })
 }

 function tabla(datos) {
    contenido.innerHTML = '';
    for(let i of datos.gatos) {
        console.log(i)
        contenido.innerHTML += `
        <div class="col">
        <div style="border-color:#E1E1EF;" class="card">
          <img src='${i.img}' class="card-img-top" width="450" height="450" alt="...">
          <div class="card-body">
            <p class="card-text text-end">${i.id}</p>
            <h5 class="card-title"><b>Nombre: </b>${i.nombre}</h5>
            <p class="card-text"><b>Descripción: </b>${i.descripcion}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Personalidad: </b>${i.personalidad}</li>
              <li class="list-group-item"><b>Salud: </b>${i.salud}</li>
              <li class="list-group-item"><b>País de Origen: </b>${i.origen}</li>
            </ul>
        </div>
      </div>
     `;
    }
 }

 let contenido2 = document.querySelector(".contenido2");

 function traerDogs() {
  fetch("json.json")
  .then(res => res.json())
  .then(dogs=>{
      tabla1(dogs)
  })
}

function tabla1(dogs) {
  contenido2.innerHTML = '';
  for(let i of dogs.perros) {
      console.log(i)
      contenido2.innerHTML += `
      <div class="col">
      <div style="border-color:#E1E1EF;" class="card">
        <img src='${i.img}' class="card-img-top" width="450" height="450" alt="...">
        <div class="card-body">
          <p class="card-text text-end">${i.id}</p>
          <h5 class="card-title"><b>Nombre: </b>${i.nombre}</h5>
          <p class="card-text"><b>Descripción: </b>${i.descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Personalidad: </b>${i.personalidad}</li>
            <li class="list-group-item"><b>Salud: </b>${i.salud}</li>
            <li class="list-group-item"><b>País de Origen: </b>${i.origen}</li>
          </ul>
      </div>
    </div>
   `;
  }
}


 

  
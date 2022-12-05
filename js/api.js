const input = document.querySelector('#searchInput')
const userList = document.querySelector('#users')

let users = []
window.addEventListener('DOMContentLoaded', async ()=>{
 const data = await loadUsers()
 let busqueda = document.getElementById("busqueda");
     busqueda.addEventListener("change", () => {
       let buscar = busqueda.value;
       users = data[buscar]
       renderUsers(users)    
    //    console.log(users)
     });
})
async function loadUsers() {
    const response = await fetch("json.json")
   return  await response.json()
 }

input.addEventListener('keyup',e =>{
    const newUsers = users.filter(user => user.nombre.toLowerCase().includes(input.value.toLowerCase()))
    renderUsers(newUsers);

    let error = document.querySelector('.err');
    error.innerHTML = '';
    if (newUsers.length === 0) {
        error.innerHTML += `
        <div class="error">
        <p>Mascota no encontrada | Verifique su busqueda</p>
        </div>`        
    }
 })
 const createUserItems = users => users.map(user => `
 <div class="col">
 <div style="border-color:#E1E1EF;" class="card">
   <img src='${user.img}' class="mover card-img-top" width="450px" height="450px">
   <div class="card-body">
     <p class="card-text text-end">${user.id}</p>
     <h5 class="card-title"><b>Nombre: </b>${user.nombre}</h5>
     <p class="card-text"><b>Descripción: </b>${user.descripcion}</p>
   </div>
   <ul class="list-group list-group-flush">
       <li class="list-group-item"><b>Personalidad: </b>${user.personalidad}</li>
       <li class="list-group-item"><b>Salud: </b>${user.salud}</li>
       <li class="list-group-item"><b>País de Origen: </b>${user.origen}</li>
     </ul>
 </div>
</div>
 `).join(' ');

 function renderUsers(users){
    const itemsString = createUserItems(users)
    userList.innerHTML = itemsString
 }

 

  
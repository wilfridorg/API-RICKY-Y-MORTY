let caracteres = document.querySelector("#caracteres")

fetch("https://rickandmortyapi.com/api/character/1,183,5,6,1,23,5")
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(data);
        caracteres.innerHTML += `<p>nombre del personaje: <p> ${data[i].name} </p> genero: <p>${data[i].gender}</p>  <img src=${data[i].image}> </img>`;
    }
})
.catch((error) => {
    console.error("Error al realizar la solicitud:", error);
  });


    //const element = array[i];    

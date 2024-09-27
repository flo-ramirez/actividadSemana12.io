const url = "https://nataliasotelo.github.io/act-estrellas/estrellas.json";

async function obtainData() {
  try {
    const answer = await fetch(url);

    if (!answer.ok) {
      throw new Error(`Error en la solicitud: ${answer.status}`);
    }

    const data = await answer.json();


    data.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<h3>${item.nombre}</h3>`;

    const starsDiv = document.createElement('div');
    starsDiv.className = 'estrellas';

    const starCalification = (numberrange) => {
        const maxStars = 5; // Total de estrellas
        const maxVote = 5; // Escala máxima de vote_average
        return (numberrange / maxVote) * 100; // Porcentaje
      };

    for (let i = 1; i <= 5; i++) {
        const stars = document.createElement('span');
        stars.className = i <= item.calificacion ? 'estrella' : 'estrella estrella-apagada';
        stars.textContent = '★'; // Código de estrella
        starsDiv.appendChild(stars);
    }

    itemDiv.appendChild(starsDiv);
    contenedor.appendChild(itemDiv);
    });


  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener los datos:", error);
  }
}

obtainData();

function obtainData(){
  
}


// Simulación de carga de datos (Decap CMS los guardará en /content/productos.json)
async function cargarProductos() {
    const catalogo = document.getElementById('catalogo');
    
    try {
        const response = await fetch('/content/productos.json'); 
        const productos = await response.json();

        productos.forEach(p => {
            const card = document.createElement('div');
            card.className = 'producto-card';
            card.innerHTML = `
                <img src="${p.imagen}" alt="${p.nombre}">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <a href="https://wa.me/584128962689?text=Hola, me interesa el producto: ${p.nombre}" class="btn-whatsapp">Pedir por WhatsApp</a>
            `;
            catalogo.appendChild(card);
        });
    } catch (error) {
        console.log("Esperando a que subas productos desde el CMS...");
    }
}

document.addEventListener('DOMContentLoaded', cargarProductos);

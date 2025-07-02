// Hooks de React
import { useEffect, useState } from 'react'

// Funciones de Firebase para consultar Firestore
import { collection, getDocs } from 'firebase/firestore'

// Instancia de Firestrore en credenciales.js
import { db } from '../firebase/credenciales'

// Componente funcional productos.
function Productos() {
    // Estado local para guardar lista de productos de Firestore
    const [productos, setProductos] = useState([]);

    // Hook useEffect: se ejecuta una vez cuando el componente se monta
    useEffect(() => {

        // Función asincrona para obtener los documentos.
        const fecthProductos = async() => {
            try {
                // Obtner todos los documentos de la colección "productos"
                const querySnapshot = await getDocs(collection(db, "productos"));

                // Mapear los documentos para convertirlos en objetos con paramétros de id y datos
                const lista = querySnapshot.docs.map(doc => ({
                    id: doc.id, // ID del documento (clave única)
                    ...doc.data() // Resto de los campos del documento (nombre, precio, imagen, etc.)
                }));

                // Actualizamos el estado con la lista de productos
                setProductos(lista);
            } catch(error) {
                console.error("Error al cargar productos.");
            }
        };
        // Llamamos a la función
        fecthProductos();
    }, []);  // [] indica que solo se ejecuta una vez (cuando se monta el componente)

    // Renderizar los productos por cuadricula.
    return (
        <div className="productos-grid">
            {/* Iterar sobre cada producto y mostrar su contenido */}
            {productos.map((p) => (
                <div className="producto" key={p.id}>
                    {/* Imagén producto*/}
                    <img src={p.imagen} alt={p.nombre} />

                    {/* Nombre producto*/}
                    <h3 className="nombre">{p.nombre}</h3>

                    {/* Decripción producto*/}
                    <p className="descripcion">{p.descripcion}</p>

                    {/* Precio producto*/}
                    <span className="precio">${p.precio}</span>
                </div>
            ))}
        </div>
    );
}

export default Productos
// =========================================================
// 1. DATOS INICIALES (ARREGLOS DE OBJETOS INSTANCIADOS)
// =========================================================
// Aquí almacenamos la información inicial de la aplicación.
// En lugar de textos simples, creamos instancias reales usando las clases que definimos en los otros archivos.
let ingresos = [
  new Ingreso("Salario", 20000), // Creamos un objeto Ingreso con descripción y valor
  new Ingreso("Venta auto", 50000),
];

const egresos = [
  new Egreso("Renta", 4000), // Creamos un objeto Egreso con descripción y valor
  new Egreso("Ropa", 800),
];

// =========================================================
// 2. FUNCIÓN DE INICIO (ARRANQUE DE LA APP)
// =========================================================
// Esta es la función principal que se ejecuta automáticamente cuando el HTML termina de cargar
// (gracias al evento onload="cargarApp()" que pusimos en la etiqueta <body>).
let cargarApp = () => {
  cargarCabecero(); // Calcula y pinta los totales en la parte de arriba
  cargarIngresos(); // Construye y pinta la lista de ingresos
  cargarEgresos(); // Construye y pinta la lista de egresos
};

// =========================================================
// 3. ACTUALIZACIÓN DEL CABECERO
// =========================================================
// Esta función actualiza los 4 números grandes que vemos al principio de la página.
const cargarCabecero = () => {
  // Presupuesto total = (Todo lo que ganamos) - (Todo lo que gastamos)
  let presupuesto = totalIngresos() - totalEgresos();

  // Porcentaje de gasto total = (Todo lo que gastamos) dividido entre (Todo lo que ganamos)
  let porcentajeEgreso = totalEgresos() / totalIngresos();

  // document.getElementById() busca las etiquetas en el HTML por su ID.
  // .innerHTML reemplaza el texto que está adentro de esa etiqueta por nuestros valores matemáticos ya formateados.
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML =
    formatoMoneda(totalIngresos());
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

// =========================================================
// 4. FUNCIONES MATEMÁTICAS (CÁLCULOS TOTALES)
// =========================================================
// Suma todos los valores dentro del arreglo 'ingresos'
const totalIngresos = () => {
  let totalIngreso = 0; // El contador empieza en cero
  for (let ingreso of ingresos) {
    // El ciclo for...of recorre cada objeto dentro del arreglo
    totalIngreso += ingreso.valor; // Extraemos la propiedad 'valor' y la vamos sumando al acumulado
  }
  return totalIngreso; // Devolvemos el gran total
};

// Suma todos los valores dentro del arreglo 'egresos'
const totalEgresos = () => {
  let totalEgreso = 0; // El contador empieza en cero
  for (let egreso of egresos) {
    // Recorremos cada objeto
    totalEgreso += egreso.valor; // Sumamos su valor al acumulado
  }
  return totalEgreso; // Devolvemos el total gastado
};

// =========================================================
// 5. FUNCIONES DE FORMATO (ESTILO VISUAL DE LOS NÚMEROS)
// =========================================================
// Le da formato de dinero a un número simple (ej: 1000 se vuelve $1,000.00)
const formatoMoneda = (valor) => {
  // toLocaleString adapta el número al idioma español de México (es-MX) y le pone símbolo de pesos.
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });
};

// Le da formato de porcentaje a un decimal (ej: 0.45 se vuelve 45.00%)
const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

// =========================================================
// 6. CREACIÓN Y DIBUJADO DE LA LISTA DE INGRESOS
// =========================================================
// Esta función junta el HTML generado de cada ingreso individual y lo inyecta completo en la página.
const cargarIngresos = () => {
  let ingresosHTML = ""; // Empezamos con un texto vacío
  for (let ingreso of ingresos) {
    // Por cada ingreso en el arreglo, creamos su pedazo de HTML y lo pegamos a la cadena de texto
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  // Buscamos el contenedor 'lista-ingresos' en el HTML y le metemos todo el bloque que acabamos de armar
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

// Construye la "plantilla" HTML dinámica para un solo elemento de ingreso.
const crearIngresoHTML = (ingreso) => {
  // Usamos template strings (las comillas invertidas ` `) para poder meter variables dinámicas adentro usando ${ }
  let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar_btn">
                    <!-- Al hacer clic en este icono, llamamos a la función eliminar pasándole el ID único de este objeto -->
                    <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
  return ingresoHTML; // Regresamos el pedazo de HTML listo
};

// Borra un ingreso específico cuando el usuario le da clic a su ícono de la "X".
const eliminarIngreso = (id) => {
  // findIndex busca en qué posición numérica (0, 1, 2...) está el elemento que tiene este ID específico
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);

  // splice() borra el elemento en esa posición. El número '1' indica que solo queremos borrar un elemento.
  ingresos.splice(indiceEliminar, 1);

  // Volvemos a calcular los totales y a dibujar la lista para que la pantalla refleje el elemento borrado
  cargarCabecero();
  cargarIngresos();
};

// =========================================================
// 7. CREACIÓN Y DIBUJADO DE LA LISTA DE EGRESOS
// =========================================================
// Hace exactamente lo mismo que cargarIngresos, pero recorriendo la lista de gastos.
const cargarEgresos = () => {
  let egresosHTML = "";
  for (let egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

// Construye la plantilla HTML para un gasto.
const crearEgresoHTML = (egreso) => {
  let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
            
            <!-- A diferencia del ingreso, el egreso lleva un cálculo extra para mostrar su porcentaje individual -->
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalIngresos())}</div>
            
            <div class="elemento_eliminar">
                <button class="elemento_eliminar_btn">
                    <!-- Evento para eliminar este gasto específico por su ID -->
                    <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
  return egresoHTML;
};

// Borra un egreso específico.
const eliminarEgreso = (id) => {
  let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
};

// =========================================================
// 8. FORMULARIO: FUNCIÓN PARA AGREGAR NUEVOS DATOS
// =========================================================
// Esta función se dispara cuando le damos clic al botón (palomita) en el formulario HTML.
const agregarDato = () => {
  // document.forms recupera todos los formularios de la página. Buscamos el que nombramos 'forma'.
  let forma = document.forms["forma"];

  // Sacamos los valores exactos que el usuario escribió o seleccionó en los inputs
  let tipo = forma["tipo"].value; // Lee si elegimos '+' (ingreso) o '-' (egreso)
  let descripcion = forma["descripcion"].value; // Lee el texto escrito (ej: "Despensa")
  let valor = forma["valor"].value; // Lee la cantidad escrita (ej: 1500)

  // Validamos que ninguno de los dos campos esté vacío antes de continuar (para no meter datos en blanco)
  if (descripcion !== "" && valor !== "") {
    if (tipo === "ingreso") {
      // Number(valor) convierte el texto del input a un número real para que podamos sumarlo.
      // Instanciamos un 'new Ingreso' y usamos .push() para meterlo al final del arreglo 'ingresos'.
      ingresos.push(new Ingreso(descripcion, Number(valor)));

      // Actualizamos la pantalla con la nueva información
      cargarCabecero();
      cargarIngresos();
    } else if (tipo === "egreso") {
      // Lo mismo, pero instanciando un 'new Egreso' y mandándolo al arreglo de egresos
      egresos.push(new Egreso(descripcion, Number(valor)));

      cargarCabecero();
      cargarEgresos();
    }
  }
};

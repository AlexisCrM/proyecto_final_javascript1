// 1. ARREGLOS DE OBJETOS INSTANCIADOS (Van al principio del archivo)
// Se instancia la clase Ingreso con los valores del texto
let ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
];

// Se instancia la clase Egreso con los valores del texto
const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];

// 2. FUNCIÓN PRINCIPAL
// Esta función calcula el presupuesto y los porcentajes, y luego los muestra.
const cargarCabecero = () => {
    // Calculamos el dinero que nos queda (ingresos totales menos gastos totales)
    let presupuesto = totalIngresos() - totalEgresos(); 
    
    // Calculamos qué porcentaje de nuestro dinero nos estamos gastando
    let porcentajeEgreso = totalEgresos() / totalIngresos(); 

    // Mostramos los resultados en la consola, aplicando los formatos de moneda y porcentaje
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
};

// 3. FUNCIONES DE CÁLCULO
// Esta función suma todos los valores de nuestros ingresos
const totalIngresos = () => {
    let totalIngreso = 0; // Iniciamos la cuenta en 0
    
    // Este ciclo 'for...of' recorre uno por uno los elementos del arreglo 'ingresos'
    for (let ingreso of ingresos) { 
        totalIngreso += ingreso.valor; // Extraemos la propiedad 'valor' y la sumamos al total
    }
    return totalIngreso; // Entregamos la suma final
};

// Esta función suma todos los valores de nuestros egresos (gastos)
const totalEgresos = () => {
    let totalEgreso = 0; // Iniciamos la cuenta en 0
    
    // Este ciclo 'for...of' recorre uno por uno los elementos del arreglo 'egresos'
    for (let egreso of egresos) { 
        totalEgreso += egreso.valor; // Extraemos la propiedad 'valor' y la sumamos al total
    }
    return totalEgreso; // Entregamos la suma final
};
// 4. FUNCIONES DE FORMATO
// Convierte un número normal a formato de dinero (ej. 1000 -> $1,000.00)
const formatoMoneda = (valor) => {
    // Usamos toLocaleString indicando que es moneda (currency) y pesos mexicanos (MXN)
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }); 
};

// Convierte un número decimal a formato de porcentaje (ej. 0.13 -> 13.00%)
const formatoPorcentaje = (valor) => {
    // Usamos toLocaleString indicando que es porcentaje (percent)
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 }); 
};
// 5. EJECUCIÓN
// Esta línea es la que "enciende" todo el proceso llamando a la función principal
cargarCabecero();
// Clase padre para el manejo de datos
class Dato {
    // Constructor que recibe descripción y valor al crear un nuevo objeto[cite: 23]
    constructor(descripcion, valor) {
        this._descripcion = descripcion; // El guion bajo (_) indica que el atributo es privado[cite: 23]
        this._valor = valor; // Asigna el parámetro recibido al atributo de la clase[cite: 23]
    }

    // Método get para retornar el valor del atributo descripcion[cite: 23]
    get descripcion() {
        return this._descripcion;
    }

    // Método set para recibir y modificar el atributo descripcion[cite: 23]
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    // Método get para retornar el valor del atributo valor[cite: 23]
    get valor() {
        return this._valor;
    }

    // Método set para recibir y modificar el atributo valor[cite: 23]
    set valor(valor) {
        this._valor = valor;
    }
}
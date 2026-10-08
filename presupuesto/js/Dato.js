// Clase padre para el manejo de datos
class Dato {
    // Constructor que recibe descripción y valor al crear un nuevo objeto
    constructor(descripcion, valor) {
        this._descripcion = descripcion; // El guion bajo (_) indica que el atributo es privado
        this._valor = valor; // Asigna el parámetro recibido al atributo de la clase
    }

    // Método get para retornar el valor del atributo descripcion
    get descripcion() {
        return this._descripcion;
    }

    // Método set para recibir y modificar el atributo descripcion
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    // Método get para retornar el valor del atributo valor
    get valor() {
        return this._valor;
    }

    // Método set para recibir y modificar el atributo valor
    set valor(valor) {
        this._valor = valor;
    }
}
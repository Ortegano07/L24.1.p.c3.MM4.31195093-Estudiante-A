//ESTUDIANTE-A
//Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
//Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que retorne los estudiantes de un semestre dado.
//La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14} Función: estudiantesSemestre.
//Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
//Retorno: array de objetos estudiante que pertenecen al semestre indicado.

let estudiantes = [
    {nombre: 'Luis', semestre: 5, nota: 14},
    {nombre: 'Ana', semestre: 4, nota: 17},
    {nombre: 'Pedro', semestre: 6, nota: 8},
    {nombre: 'Maria', semestre: 3, nota: 15},
    {nombre: 'Carlos', semestre: 5, nota: 12},
    {nombre: 'Luisa', semestre: 4, nota: 16},
    {nombre: 'Juan', semestre: 6, nota: 9},
    {nombre: 'Andrea', semestre: 3, nota: 18},
    {nombre: 'Diego', semestre: 5, nota: 11},
    {nombre: 'Sofia', semestre: 4, nota: 19}];

    let estudiantesSemestre = (estudiantes, semestre) => {
        let estudiantesSemestre = [];
        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].semestre === semestre) {
                estudiantesSemestre.push(estudiantes[i]);
            }
        }
        return estudiantesSemestre;
    }

    let salida = document.getElementById('salida');
    let estudiantes5 = estudiantesSemestre(estudiantes, 5);
    salida.innerHTML = 'Estudiantes del semestre 5:<br> ';
    estudiantes5.forEach(estudiantes => {
        salida.innerHTML += ` Nombre: ${estudiantes.nombre}  -  Nota: ${estudiantes.nota} <br>`;
        
    });
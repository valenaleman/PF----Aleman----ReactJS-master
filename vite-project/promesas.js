const promise = new Promise((resolve, reject) => {
    const operacionExitosa = true

    if (operacionExitosa) {
        resolve('Operación ecitosa');
    } else {
        reject('La operación no fue exitosa');
    }
})

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Se terminó la promesa');
    })

console.log('Fin del programa');


const productos = [
    { id: 1, name: 'Babysec - Ultrasec', price: 3200, content: 60 },
    { id: 2, name: 'Pampers - Premium care, piel delicada', price: 5900, content: 58},
    { id: 3, name: 'Pampers - Premium care, recién nacido hipoalergénico', price: 2420, content: 36},
];

const promise = new Promise((resolve, reject) => {
    const operacionExitosa = true

    if (operacionExitosa) {
        resolve({productos})
    } else {
        reject({error: 'La operación no fue exitosa'});
    }
})
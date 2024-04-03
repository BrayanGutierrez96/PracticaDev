class Card {
    constructor(image, title, description) {
        this.image = image
        this.title = title
        this.description = description
    }
}
let newCard = new Card('', 'Brazil','int occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
console.log(newCard)


/* class VehicleCard extends Card {
    constructor(image,title,description,marca,color,modelo){
        super(image, title, description)
        this.marca = marca
        this.color = color
        this.modelo = modelo
    }
}

let newCar = new VehicleCard ('', 'Mazda 3 2.0 GT','Se vende mazda 3 en muy buenas condiciones', 'Mazda', 'Blanco perlado','2022' )

console.log(newCar);
 */
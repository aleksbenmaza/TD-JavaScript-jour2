/* TD07 - Dynamic Point

Dans cet exercice, vous devez créer une classe Point pouvant contenir des coordonées en 2D et en 3D.

Pour ce faire vous stockerez les coordonées dans un tableau 'coordinates' de votre classe Point.

Dans le cas où l'on essaierait d'accéder à une coordonée z non définie, votre classe devra retourner null.

Par exemple :

    const p = new Point(4, 2)
    console.log(p.z) // null

    p.z = 6
    console.log(p.z) // 6

De plus vous devrez ajouter un attribut sum retournant la somme des coordonées de votre point

    console.log(p.sum) // 12

*/
/* TD Part */

class Point {    
    constructor(x, y, z=null) { // Vous pouvez modifier ce prototype TANT que les tests passent
        const coordinates = {
            x: x,
            y: y,
            z: z
        }

        this._coordinates = coordinates
    }

    get x() {
        return this._coordinates.x
    }

    set x(x) {
        this._coordinates.x = x
    }

    get y() {
        return this._coordinates.y
    }

    set y(y) {
        this._coordinates.y = y
    }

    get z() {
        return this._coordinates.z
    }

    set z(z) {
        this._coordinates.z = z
    }

    get sum() {
        return this.x + this.y + this.z
    }
}

/* Testing Part */
const p = new Point(4, 2)
const test = () => {
    if (p.z !== null) {
        return false
    } else if (p.sum !== 6) {
        return false
    }
    p.z = 3
    if (p.z !== 3) {
        return false
    } else if (p.sum !== 9) {
        return false
    }
    return true
}

console.log(test() === true ? 'TD07 :: Success' : 'TD07 :: Failed')

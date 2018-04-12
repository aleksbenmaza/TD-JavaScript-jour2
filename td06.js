/* TD06

Dans cet exercice, vous devez créer une classe 'Point3', héritant de Point2 et 
représentant un point dans un repère en 3D.

Votre classe point devra pouvoir être utilisée ainsi :

const [x, y, z] = [4, 2, 1]
const p1 = new Point3(x, y, z)
p1.x // x
p1.y // y
p1.z // z

const p2 = new Point3(3, 3, 3)
p1.add(p2) // Retourne un nouveau point ayant pour coordonées x : 4 + 3, y : 2 + 3, z : 1 + 3.

*/
/* TD Part */

Point2 = require('./td05.js')

class Point3 extends Point2 {

	constructor(x, y, z) {
		super(x, y)
		this.z = z
	}

	add(that) { 
		const that2 = super.add(that)
		return new Point3(that2.x, that2.y, this.z + that.z)
	}
}

/* Testing Part */
const p1 = new Point3(12, 41, -150)
const p2 = new Point3(-12, -41, 150)
const p3 = p1.add(p2)
if (p3.x === 0 && p3.y === 0 && p3.z === 0) {
    console.log('TD06 :: Success')
} else {
    console.log('TD06 :: Failed')
}

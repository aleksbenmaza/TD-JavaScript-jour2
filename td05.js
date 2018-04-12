/* TD05 

Dans cet exercice, vous devez créer une classe 'Point2' représentant un point 
dans un repère en 2D.

Votre classe point devra pouvoir être utilisée ainsi :

const [x, y] = [4, 2]
const p1 = new Point2(x, y)
p1.x // x
p1.y // y

const p2 = new Point(3, 3)
p1.add(p2) // Retourne un nouveau point ayant pour coordonées x = 3 + 4 et y = 2 + 3. Ne modifie pas p1
p1.sub(p2) // Retourne un nouveau point ayant pour coordonées x = 3 - 4 et y = 2 - 4. Ne modifie pas p1
*/
/* TD Part */

class Point2 {

	constructor(x, y) {
		this.x = x
		this.y = y
	}

	add(that) {
		return new Point2(this.x + that.x, this.y + that.y)
	}

	sub(that) {
		return new Point2(this.x - that.x, this.y - that.y)
	}
}

module.exports = Point2

/* Testing Part */
const p1 = new Point2(12, 41)
const p2 = new Point2(-12, -41)
const p3 = p1.add(p2)
const p4 = p1.sub(p2)
if (p3.x !== 0 || p3.y !== 0) {
    console.log('TD05 :: Failed step 0')
} else if (p4.x !== (p1.x - p2.x) || p4.y !== (p1.y - p2.y)) {
    console.log('TD05 :: Failed step 1')
} else {
    console.log('TD05 :: Success')
}

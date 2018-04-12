/* TD02 - Stockage2

Vous devez faire un système basique de stockage d'information nommé Storage.

Celui-ci doit permettre d'ajouter des éléments avec une méthode put, prenant en paramètre une clé, et une valeur.

Attention : la clé ET la valeur peuvent être tout type de primitive JavaScript !

Il doit également être possible de récupérer un élément dans votre Storage avec la méthode fetch,
celle-ci retournera la valeur correspondant à la clé (unique) passée en paramètre.

Enfin, il doit comporter un attribut length, retournant le nombre d'éléments contenus dans votre storage.

*/

let Storage = () => {
    return {
        _entries: {},
        length: 0,
        fetch(key) { 
            if(key instanceof Object)
                throw new Error
            return this._entries[key]
        },
        put(key, value) { 
            if(key instanceof Object)
                throw new Error
            if(typeof this._entries[key] === 'undefined')
                ++this.length
            this._entries[key] = value
        }
    }
}

/* Testing Part */
var storage = Storage()

function test() {
    storage.put('test', 42)
    storage.put(42, 'test')
    storage.put(12.01, 'ok')
    if (storage.length !== 3) {
        console.log(storage.length)
        return false
    } else if (storage.fetch(42) !== 'test') {
        return false
    } else if (storage.fetch(12.01) !== 'ok') {
        return false
    }
    return true
}

console.log(test() === true ? 'TD02 :: Success' : 'TD02 :: Failed')

/* TD01 - Stockage

Vous devez faire un système basique de stockage d'information nommé Storage.

Celui-ci doit permettre d'ajouter des éléments avec une méthode set, prenant en paramètre une clé, et une valeur.

Attention : la clé ET la valeur peuvent être tout type d'objet JavaScript !

Il doit également être possible de récupérer un élément dans votre Storage avec la méthode get, 
celle-ci retournera la valeur correspondant à la clé (unique) passée en paramètre.

Enfin, il doit comporter un attribut size, contenant le nombre d'éléments contenus dans votre storage.

! size n'est pas une méthode, c'est un attribut !!!

Exemple :

const obj = {test: 42} 
const s = Storage()
s.set(obj, 'foobar')
s.get(obj) // 'foobar'
s.size // 1
*/

let Storage = () => {
    return {
        _entries: [],
        size: 0,
        get(key) { 
            for(var entry of this._entries)
                if(entry.key == key)
                    return entry.value
            return null
        },
        set(key, value) { 
            for(var entry of this._entries)
                if(entry.key == key) {
                    entry.value = value
                    return;
                }
            this._entries.push({
                key: key,
                value: value
            })
            ++this.size
        }
    }
}

/* Testing Part */
var storage = Storage()

function test() {
    const obj = {}
    storage.set(obj, 'foobar')
    storage.set('test', 42)
    storage.set(42, 'test')
    storage.set(12.01, 'ok')
    if (storage.size !== 4) {
        return false
    } else if (storage.get(42) !== 'test') {
        return false
    } else if (storage.get(12.01) !== 'ok') {
        return false
    } else if (storage.get(obj) !== 'foobar') {
        return false
    }
    return true
}

console.log(test() === true ? 'TD01 :: Success' : 'TD01 :: Failed')

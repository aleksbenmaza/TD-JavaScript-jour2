/* TD08 - UsersBDD - Le désérialisation de l'enfer

Vous reçevez d'un serveur un fichier CSV contenant 1000 entrées utilisateurs, 
celui-ci vous est donné dans la constante rawData 
(celle-ci est une string, n'hésitez pas à la console.log pour la visualiser).

La classe User, visant à contenir les informations d'une entrée 
utilisateur vous est donnée à titre indicatif vous pouvez la modifier à votre 
convenance tant que les tests passent à la fin!

La classe UsersBDD devra à son instanciation prendre un paramètre rawData qui correspondra 
à la donnée brute que le serveur vous renvoie. Elle ne sera pas directement parsée, juste
stockée dans votre classe UsersBDD dans un premier temps.

Le processus de déserialisation (parsing des données CSV en objets JS) peut prendre du temps,
et doit donc être fait de manière ASYNCHRONE ! Vous l'effectuerez dans la Promise d'une méthode 
init de UsersBDD (à ajouter).

Attention ! Si le paramètre fourni à UsersBDD est invalide, vous devrez reject un message
d'erreur dans le .catch de la Promise d'init.

Une fois votre UsersBDD initialisée avec init, nous devons pouvoir utiliser les méthodes 
suivantes d'UsersBDD (à ajouter) :

- init() - Retourne une Promise qui parse votre CSV
- get(id) - Retourne l'objet User lié à un ID dans la base de données
- put(user) - Ajoute un utilisateur dans votre instance d'UsersBDD (il n'est pas nécessaire de modifier rawData)
- getByEmail(email) - Retourne l'utilisateur associé à l'email spécifié
- getByIP(ip) - Retourne l'utilisateur associé à l'adresse IP spécifiée
- getByFirstName(firstName) - Retourne LES utilisateurs ayant firstName pour prénom

*/

const rawData = require('./bdd.js')

function parseCSV(string) {
    var lines
    var attributes
    var data
    var object
    var i 
    var parsed

    lines = string.split('\n')
    
    parsed = []

    for(var data of lines.slice(1, lines.length)) {
        object = {}

        data = data.split(',')

        object.id = parseInt(data[0])
        object.firstName = data[1]
        object.lastName = data[2]
        object.email = data[3]
        object.gender = data[4]
        object.ip = data[5]

        parsed.push(object)
    }

    return parsed
}

class User {
    constructor(id, firstName, lastName, email, gender, ip) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.gender = gender
        this.ip = ip
    }
}

class UsersBDD {
    constructor(rawData) {
        this.raw = rawData
        this._users = []
    }

    init() {
        const self = this

        return new Promise((success, error) => {
            self._users = parseCSV(self.raw)
            success()
        }) 
    }

    get(id) { 
        return this._users.find(user => user.id == id) || null
    }

    put(user) {
        this._users.push(user)
    }

    getByEmail(email) {
        return this._users.find(user => user.email == email) || null
    }

    getByIP(ip) {
        return this._users.find(user => user.ip == ip) || null
    }

    getByFirstName(firstName) {
        return this._users.filter(user => user.firstName == firstName)
    }

    get length() {
        return this._users.length
    }
}

/* Testing Part */
const TD = 'TD :: 08 '
const usersBDD = new UsersBDD(rawData)

usersBDD
    .init()
    .then(() => {
        const test = () => {
            const user = new User(usersBDD.length + 1, 'Logan', 'Paul', 'lpaul-pro@gmail.com', 'Male', '127.0.0.1')
            const bddLength = usersBDD.length
            usersBDD.put(user)
            if (bddLength === usersBDD.length) {
                return TD + 'Failed 1'
            }
            if (usersBDD.get(100).id !== 100) {
                return TD + 'Failed 2'
            } else if (usersBDD.getByEmail('ldykesrn@businessinsider.com').id !== 996) {
                return TD + 'Failed 3'
            } else if (usersBDD.getByIP('101.135.3.254').id !== 1000) {
                return TD + 'Failed 4'
            } else if (usersBDD.getByFirstName('Eleonore').length !== 2) {
                return TD + 'Failed 5'
            }
            return  TD + 'Success \\o/'
        }
        console.log(test())
    })
    .catch((error) => console.error(error))

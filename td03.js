/* TD03 

Le but de cet exercice est de créer fonction retournant une Promise 
qui après trois secondes retournera le nombre 42 dans son 'then'.

*/

/* TD Part */

function waitThreeSecondsAndSend42InTheThen() {
	return new Promise((success, error) => setTimeout(success, 3000, 42))
}

/* Testing part */
var startTime = Number(new Date())

function callback(returnedValue) {
    var timeShift = parseInt((Number(new Date()) - startTime) / 1000)

    if (timeShift === 3 &&
        returnedValue === 42) {
        console.log('TD03 :: Passed')
    } else {
        console.log('TD03 :: Failed')
    }
}

waitThreeSecondsAndSend42InTheThen()
    .then(callback)
    .catch(error => console.error(error))

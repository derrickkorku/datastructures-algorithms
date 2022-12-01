/**
 * Create an object from array of objects
 * const ethnicities = [
  *  {id: 1, name: 'Asian'},
   * {id: 2, name: 'African'},
    *{id: 3, name: 'Caucasian'},
* ];
 */


//Method 1

let obj = ethnicities.reduce((prev, curr) => {
    return Object.assign({}, {
        [curr.id]: curr.name
    })
}, {});
function addTwoNum(a , b) {
    try{
        if (typeof a !== 'number') {
            throw new Error('the first argument is not a number.');
        } else if (typeof b !== 'number') {
            throw new Error('The second argument is not a number')
        } else {
            console.log(a + b)
        }
    }
    catch(err) {
        console.log('Error', err);
    }
}

addTwoNum(5,'5');
console.log('It still works');
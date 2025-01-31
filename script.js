// Lav dine funktioner her:

function assignmentA(a, b) {
    let testBool = false;
    console.log("Assignment A says:")

    if (a === b) {
        testBool = true;
        console.log("These values are the same")
    } else {
        console.log("These values are NOT the same")
    }
    return testBool
}

function assignmentB(str) {
    console.log("Assignment B says:")
    str = str.slice(-3)
    console.log(str);
    return str;
}

function assignmentC(num) {
    console.log("Assignment C says:")
    let isEven = num % 2 == 0 ? true : false;
    console.log(`Is ${num} even? ${isEven}`)
    return isEven;
}

function assignmentD(arr) {
    console.log("Assignment D says:")
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    let firstValueOverZero = arr.find((element) => element > 0);
    console.log(firstValueOverZero);
    return firstValueOverZero;
}

function assignmentE(arr) {
    console.log("Assignment E says:")
    let bArray = arr.filter(name => name.toUpperCase().startsWith("B"));

    if (!bArray.length) {
        bArray = false;
    }
    console.log(bArray)
    return bArray
}

function assignmentF(val) {
    console.log("Assignment F says:")
    let newVal;
    if (Array.isArray(val)) {
        newVal = val.filter(index => typeof index === 'number');
        newVal = newVal.reduce((a, b) => a + b, 0);
        newVal =  Math.sqrt(newVal);
        console.log(`Square root of numbers in array is: ${newVal}`)
        return newVal;
    }else if(typeof val === 'number'){
        newVal = Math.sqrt(val)
        console.log(`Square root of number input is: ${newVal}`)
        return newVal;
    }else{
        return false;
    }
}
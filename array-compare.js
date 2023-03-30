const compareArrays = (array1, array2) => {
    //The resultant array with elements not present in both initial arrays 
    let diff = []
    array1.forEach((element) => {
        if(array2.indexOf(element) === -1) {
            diff.push(element);
        }
    });
    array2.forEach((element) => {
        if(array1.indexOf(element) === -1) {
            diff.push(element);
        }
    });
    
    console.log(diff)
}

//Store your outputs from converter here
arr1 = ["dog", "fish", "rat"]
arr2 = ["goat", "rat", "dog", "chicken"]

compareArrays(arr1, arr2);
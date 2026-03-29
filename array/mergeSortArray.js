function mergeSortedArrays(arr1, arr2){
    if(!arr1) return arr2;
    if(!arr2) return arr1;
    const mergedArray = [];
    let i = 1;
    let j = 1;
    let arr1Items = arr1[0];
    let arr2Items = arr2[0];

    while(arr1Items || arr2Items){
        if(!arr2Items || arr1Items < arr2Items){
            mergedArray.push(arr1Items);
            arr1Items = arr1[i];
            i++;
        }
        else{
            mergedArray.push(arr2Items);
            arr2Items = arr2[j];
            j++;
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrays([0,3,31], [4,6,30]));
console.log(mergeSortedArrays([0,2,7], [4,6,9]));
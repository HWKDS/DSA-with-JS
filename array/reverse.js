function reverse(str){
    if(!str || str.length < 2 || typeof str !== "string"){
        return console.log("not a string");
    }
    const backwardArray = [];
    let totalItems = str.length -1;
    for(let i = totalItems; i>=0; i--){
        backwardArray.push(str[i]);
    }
    console.log(backwardArray.join(''));
}
// other ways
function rev2(str){
    return str.split('').reverse().join('');
}
// other way
const rev3 = str => str.split('').reverse().join('');

reverse("i am KDS");
console.log(rev2("test 2"));
console.log(rev3("test number 3"));
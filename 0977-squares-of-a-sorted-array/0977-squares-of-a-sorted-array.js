/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* Bruteforce : T(NlogN), S(N)
var sortedSquares = function (nums) {
    let newArray = [];
    for (let val of nums) {
        newArray.push((val * val));
    }
    return newArray.sort((a, b) => a - b);

};
*/
// Better approach
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length -1;
    let newArr = [];
    while(left <= right){
        let sqLeft = nums[left]*nums[left];
        let sqRight = nums[right]*nums[right];
        if(sqLeft> sqRight){
            newArr[index] = sqLeft;
            left++;
        }
        else{
            newArr[index] = sqRight;
            right--;
        }

        index--;
    }
    return newArr;
}

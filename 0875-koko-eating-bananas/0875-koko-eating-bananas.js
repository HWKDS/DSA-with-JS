/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let l = 0;
    let r = Math.max(...piles);
    let res = r;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let time = 0;
        for (const val of piles) {
            time += Math.ceil(val / m);
        }
        if (time <= h) {
            res = m;
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return res;

};
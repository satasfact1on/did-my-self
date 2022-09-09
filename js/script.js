function getMathResult(number, factor) {
    let sum;
    let str='';
    if (typeof(factor) === 'number' && factor > 0) {
        for (let i = 1; i <= factor; i++) {
            sum = number*i;
            if (i != factor) {
                str += sum + '---';
            } else {
                str += sum;
            }
        }
    } else {
        return number;
    }
    return (str);
}
const math = getMathResult(5, 3);
console.log(math);

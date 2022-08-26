const countSort = arr => {
    if(arr.length <= 1) { return arr }
    let hashTable = {}
    let maxValue = arr[0]
    let res = []
    for(let i=0; i<arr.length; i++) {
        if(Object.keys(hashTable).includes(arr[i].toString())) {
            hashTable[arr[i]] += 1
        } else{
            hashTable[arr[i]] = 1
        }
        if(arr[i] > maxValue) {
            maxValue = arr[i]
        }
    } 
    for(let i=0; i<=maxValue; i++) {
        if(hashTable[i]) {
            for(let k=0; k<hashTable[i]; k++) {
                res.push(i)
            }
        }
    }
    return res
}
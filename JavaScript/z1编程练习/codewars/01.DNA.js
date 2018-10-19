
// Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
// Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
// Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");

const dnaTable = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
}

// 1 使用 dnaTable 来进行转化
// function DNAStrand(dna) {
//     return dna.split('').map(function(item) {
//         return dnaTable[item]
//     }).join('');
// }

// console.log(DNAStrand('ATTGC'));



// 使用正则表达式：
function DNAStrand(dna) {
    return dna.replace(/./g, function(result) {
        return dnaTable[result];
    });
}

console.log(DNAStrand('ATTGC'));

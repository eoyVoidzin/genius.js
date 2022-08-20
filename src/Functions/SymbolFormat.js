async function SymbolFormat(num) {

    if(!num) return new Error('[ 🔧 ] - Defina qual será o valor.');

    const Symbol = [

        { value: 1e3, symbol: "k" }, // Mil
        { value: 1e6, symbol: "M" }, // Milhão
        { value: 1e9, symbol: "B" }, // Bilhão
        { value: 1e12, symbol: "T" }, // Trilhão
        { value: 1e15, symbol: "Qa" }, // Quatrilhão
        { value: 1e18, symbol: "Qi" }, // Quintilhão
        { value: 1e21, symbol: "Sx" }, // Sextilão
        { value: 1e24, symbol: "Sp" }, // Septilhão
        { value: 1e27, symbol: "Oc" }, // Octilhão
        { value: 1e30, symbol: "Nn" } // Nonilhão
        
    ];

    var Values = Symbol.slice().reverse().find(function(Values) {
        return num >= Values.value;

    });

    return Values ? (num / Values.value) + Values.symbol : num;

}

export { SymbolFormat };
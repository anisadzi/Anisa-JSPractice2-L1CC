const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function digitalDecipher(eMessage,key)
{
    key = String(key)

    var alphbt = 0
    while (key.length < eMessage.length){
        key += String(key.charAt(alphbt)) 
        alphbt += 1
    }
    
    
    var list = []
    alphbt = 0
    for (var i of eMessage){
        list.push(i - key.charAt(alphbt))
        alphbt += 1
    }
    
    
    var split = ""
    for (var i of list){
        split += alphabet[i-1]
    }
    return split
}

console.log(digitalDecipher([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939));
console.log(digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));
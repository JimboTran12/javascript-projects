function makeLine(size) {
    let str = "";
    for (let i = 0; i < size; i++) {
        str += "#";
    }
    return str;
}

function makeSquare(size) {
    let str = "";
    for (let i = 0; i < size; i++) {
        str += makeLine(size) + '\n';
    }    
    str = str.slice(0, str.length-1);
    return str;
}

function makeRectangle(width, height) {
    let str = "";
    for (let i = 0; i < height; i++) {
        str += makeLine(width) + '\n';
    }    
    str = str.slice(0, str.length-1);
    return str;
}

function makeDownwardStairs(height) {
    let str = "";
    for (let i = 0; i < height; i++) {
        for (let k = 0; k <= i; k++) {
            str += "#";
        }
        str += "\n";
    }
    str = str.slice(0, str.length-1);
    return str;
}
function makeSpaceLine(numSpace, numChars) {
    let str = "";
    let str2 = "";
    for (let i = 0; i < numSpace; i++) {
        str2 += "_";
    }
    for (let i = 0; i < numChars; i++) {
        str += "#";
    }

    str = str2 + str + str2;
    return str;
}
function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}
function makeIsoscelesTriangle(height) {
    let str = "";
    for (let i = 0; i < height; i++) {
        for(let k = 0; k < height - i - 1; k++) {
            str += " ";
        }
        for(let k = 0; k < 2 * i + 1; k++) {
            str += "#";
        }
        str += "\n";
    }
    str = str.slice(0, str.length-1);

    return str;
}

function makeDiamond(height){
    let str = "";
    let str2 = "";
    str2 += makeIsoscelesTriangle(height);
    for (let i = 0; i < height; i++) {
        for(let k = 0; k < 2 * i + 1; k++) {
            str += "#";
        }

        for(let k = 0; k < height - i - 1; k++) {
            str += " ";
        }
        str += "\n";        
    }

    str = reverse(str);
    str2 += str;
    return str2;

}
console.log(makeDiamond(5));

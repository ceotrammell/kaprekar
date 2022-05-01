let newNum;
let nemNumSorted;

function random4Digit(){
  return shuffle( "0123456789".split('') ).join('').substring(0,4);
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

newNum = random4Digit();                                
console.log('random => ', newNum);

var sortNumsReverse = function(num) {
    return num.split('').reverse().join('');
};

var sortNumsDesc = function(num) {
    return num.split('').sort().reverse().join('');
};

nemNumSorted = sortNumsReverse(newNum);                 
console.log('start =>', nemNumSorted, '\n');

function kaprekar() {
    if (newNum !== '6174') {                            
        console.log('newNum => ', newNum);

        nemNumSorted = sortNumsDesc(newNum);                
        console.log('sorted =>', nemNumSorted);

        newNum = (nemNumSorted - sortNumsReverse(nemNumSorted)).toString();
        console.log('\n final => ', newNum,'\n');

    kaprekar();
    };
}

// result will always forever be => 6174
kaprekar();

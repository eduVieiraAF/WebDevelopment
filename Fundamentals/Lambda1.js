{
    var sum = (a,b) => { console.log(a + b) };
    var sub = (a, b) => {
        if (a < b) console.log(`1st number is smaller → ${ a-b }`);
        else console.log(a-b);
    };
    var div = (a, b) => {
        if (b <=0 ) console.log("Cannot be divided by ZERO")
        else console.log(a / b)
    };
    var times = (a, b) => { console.log(a * b) }
}

sum(5, 6);
sub(4, 9);
div(15, 0);
times(8, 2);
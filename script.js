for (var i=1; i<21; i++) {
    if (i%2 !== 0) {
        console.log(i);
    }
}

for (var i=100; i>=0; i--) {
    if (i%3 == 0 && i%2 == 0) {
        console.log(i);
    }
}

for (var i=4.5; i>=-3.5; i--) {
    i-=0.5;
    console.log(i);
}

var sum = 0;
for (var i=1; i<101; i++) {
    sum += i;
}
console.log(sum);

var product = 1;
for (var i=1; i<13; i++) {
    product*=i;
}
console.log(product)



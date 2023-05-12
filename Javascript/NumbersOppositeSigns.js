function hasOppositeSigns(a, b) {
    return (a ^ b) < 0 ? "Opposite signs" : "Same sign";
}

const x = 100, y = -1;
console.log(`For inputs ${x}, ${y} :  ${hasOppositeSigns(x, y)}`);

const z = 100, p = 501;
console.log(`For inputs ${z}, ${p} :  ${hasOppositeSigns(z, p)}`);
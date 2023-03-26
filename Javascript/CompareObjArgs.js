function compareObjArgs(obj1, obj2) {
    for (x in obj1) {
        if (obj1[x] != obj2[x]) {
            return false;
        }
    }

    return true;
}

console.log(compareObjArgs({
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
}, {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
}));


console.log(compareObjArgs({
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
}, {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
}));
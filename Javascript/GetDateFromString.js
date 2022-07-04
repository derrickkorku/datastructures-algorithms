function getDateFromString(strDate){
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(strDate);
    return new Date(year, month - 1, day);
}


console.log(getDateFromString('1-30-2022'));
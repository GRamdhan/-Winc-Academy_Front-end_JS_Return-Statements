const check = function (number) {
    if (number > 100) {
        return "true";
    }
    else if (number < 100) {
        return "false";
    }
}
console.log(check(500));
//function above does something

const clubcheck = function (age, maxpeople) {

    if (age >= 18 && maxpeople <= 200) {
        return "come in";
    }
    else if (age < 18) {
        return ("this is a club for adults");
    }
    if (age >= 18 && maxpeople > 200) {
        return ("it's too busy now, come back later");
    }
}
console.log(clubcheck(18, 700));
//function above does something

const average = function (number1, number2, number3, number4, number5) {
    const division = (number1 + number2 + number3 + number4 + number5) / 5;
    return division;
}

console.log(average(3, 5, 3, 5, 9));
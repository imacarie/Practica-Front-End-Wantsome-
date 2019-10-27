// Am definit variabila sCNPfirstDigit ca fiind prima cifra din string-ul CNP.
// Am declarat variabila gender.
// Daca prima cifra este 1, setam variabila gender M
// Daca prima cifra este 2, setam variabila gender F
// In orice alt caz, returnam mesajul de eroare.
// Returnam mesajul compus cu variabila definita mai sus.
function getGender(CNP) {

    var sCNPfirstDigit = ("" + CNP)[0];
    var gender;
    if (sCNPfirstDigit == 1) {
        gender = "M";
    } else if (sCNPfirstDigit == 2) {
        gender = "F";
    } else {
        return sCNPfirstDigit + " is not a valid first digit of a CNP";
    }
    return "Persoana verificata este de sexul " + gender;
}
console.log(getGender(3034567890123))
    // Am definit o functie folosind o expresie.
    // Daca punctajul este intre 1 si 3, setam calificativul E
    // Daca punctajul este intre 3 si 6, setam calificativul D
    // Daca punctajul este intre 7 si 8, setam calificativul B
    //  Daca punctajul este 9, setam calificatul A
    // Daca punctajul este 10, setam calificativul 10
    // Am definit un for statement pentru a crea un lopp cu 3 expresii
var calificativ = function(punctaj) {
    if (punctaj >= 1 && punctaj < 3) {
        return "E"
    } else if (punctaj >= 3 && punctaj <= 6) {
        return "D"

    } else if (punctaj >= 7 && punctaj <= 8) {
        return "B"
    } else if (punctaj === 9) {
        return "A"
    } else if (punctaj === 10) {
        return "A+"
    }

}
for (i = 1; i < 11; i++) {
    console.log(i + ": " + calificativ(i))
}
// Am definit o functie anonima
// Am declarat variabila tara
// Daca modelul este Dacia, setam variabila tara Romania
// Daca modelul este Honda, setam variabia tara Japonia
// Daca modelul este Citroen, setam variabila Franta
// Daca modelul este Porsche, setam variabila Germania
// In orice alt caz returnam mesajul "Marca este necunoscuta"

var car = function(model) {
    var tara
    if (model == "Dacia") {
        tara = "Romania"
    } else if (model == "Honda") {
        tara = "Japonia"
    } else if (model == "Citroen") {
        tara = "Franta"
    } else if (model == "Porsche") {
        tara = "Germania"
    } else {
        return "Marca este necunoscuta"
    }
    return "Marca " + model + " se produce in " + tara
}
console.log(car("Dacia"))

var car1 = function(model) {
    var tara
    switch (model) {
        case "Dacia":
            tara = "Romania";
            break;
        case "Honda":
            tara = "Japonia";
            break;
        case "Citroen":
            tara = "Franta";
            break;
        case "Porsche":
            tara = "Germania";
            break;
        default:
            return "Marca este necunoscuta";
    }
    return "Marca " + model + " se produce in " + tara
}
console.log(car1("Citroen"))

var car2 = function(model) {
    var tara = {
        "Dacia": "Romania",
        "Honda": "Japonia",
        "Citroen": "Franta",
        "Porsche": "Germania"

    }
    if (tara[model]) {
        return "Marca " + model + " se produce in " + tara[model]
    } else {
        return "Marca este necunoscuta";
    }
}

mods = ["Dacia", "Honda", "Citroen", "Porsche", "Lada"];

for (m in mods) {
    console.log(car2(mods[m]));
}


(function() {
    var cars = [
        { name: "John", salary: 20000 },
        { name: "Danny", salary: 30500 },
        { name: "Bekker", salary: 15000 }
    ]
    cars.sort(function(a, b) {
        return a.salary - b.salary;
    })
    console.log(cars)
})();
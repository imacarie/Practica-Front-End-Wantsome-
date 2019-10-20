function myFirstString(one) {
    console.log(one)
    console.log(typeof one)
    return typeof one == "number";
}


console.log(myFirstString("aasfjlsjnf"))
console.log(myFirstString(1))

console.log(5 === "5")


function is_Blank(one) {
    return one == ""
}
console.log(is_Blank(""))
console.log(is_Blank("124"))

function string_to_array(s) {
    return s.split(" ")
}
console.log(string_to_array("Ioana are mere"))

function abbrev_name(x) {
    var temp = x.split(" ");
    return temp[0] + " " + temp[1][0] + "."
}
console.log(abbrev_name("Ioana Macarie"))

function capitalize(z) {
    var toUpperCase = z[0].toUpperCase();
    var io = z[0].toUpperCase() + z.slice(1);
    return io


}
console.log(capitalize("ioana"))

function truncate_string(v, z) {
    var me = v.slice(0, z)
    return me
}
console.log(truncate_string("Ioana are mere", 3))

function isUpperCaseAt(banana, i) {
    //0 => I === I.toUpper
    //2 => a === a.toUpper (A)
    return banana[i] === banana[i].toUpperCase()
}
console.log(isUpperCaseAt("Ioana", 0))
isUpperCaseAt("Ioana", 2)

function insert(x, y, z) {
    return x.slice(0, y) + " " + z + " " + x.slice(y)

}
console.log(insert("Ioana", 3, "banana"))

function eliminate(text, todelete) {
    return text.replace(todelete, "")
}
console.log(eliminate("The quick brown fox jumps over lazy dog", "the"))

function compare(a, b) {
    return a.toUpperCase() == b.toUpperCase()
}
console.log(compare("abCd", "aBcD"))

function uncapitalize(z) {
    var toUpperCase = z[0].toUpperCase();
    var io = z[0].toLowerCase() + z.slice(1);
    return io

}
console.log(uncapitalize("IOANA"))
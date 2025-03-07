// Dokumentation über die wichtigsten Methoden in Javascript

const myArray = [1,2,3,4,5,6];
const secArray= [7,8,9,10];

// .concat() Fügt das zweite Array in das erste ein, sodass sie verschmelzen.
const fullArray = myArray.concat(secArray);
console.log(fullArray);

// .filter() Filtert einzelne Elemente heraus, die einem bestimmten Wert entsprechen
const ages = [32,33,16,40];
const adult = ages.filter(checkAdult);
function checkAdult(age) {
    return age>=18;
} 
console.log(adult);

// Gibt die Position des ersten Elements eines Arrays zurück, das die Bedingung erfüllt.
const ashes=[3,10,18,20];
const oldEnough=ashes.findIndex(checkAge);
function checkAge(ash) {
    return ash >=18;
}
console.log(oldEnough+1);

// .findLast() anstatt findIndex() gibt das letzte Element zurück, das die Bedingung erfüllt.

// .findLastIndex() gibt die Position des letzten Elements des Arrays an, das die Bedinugng erfüllt.

// .flat() nimmt eine Ebene bei untergeordneten Arrays raus.
const myArr=[[1,2],[3,4],[5,6]];
const newArr=myArr.flat();
console.log(newArr);

// .forEach() führt eine Funktion für jedes einzelne Element in einem Array aus.
const fruits = ["apple", "orange", "cherry","raspberry"];
fruits.forEach(myFunction);

// .includes() gibt true aus, wenn ein bestimmtes Element im Array enthalten ist und false, falls nicht.
const veggies=["Gurke","Tomate","Zucchini"];
const sample=veggies.includes("Tomate");
console.log(sample);

// .indexOf() funktioniert ähnlich wie include, nur dass die Position des gesuchten Eintrags ausgegeben wird.
// sollte er nicht enthalten sein, dann kommt -1 raus.
let index=veggies.indexOf("Zucchini");
console.log(index);

// .join() gibt den Inhalt des Arrays als String zurück.
let text = ages.join();
console.log(text);

// .length gibt die Menge der Elemente in einem Array aus.
let laenge=veggies.length;
console.log(laenge); 

// .map() führt eine Funktion für jedes Element des Arrays aus und erstellt daraufhin einen neuen Array.
const newArr2=myArr.map(Math.sprt);
console.log(newArr2);

// .pop() entfernt das letzte Element eines Arrays.
ages.pop();

// .push() fügt ein neues Element ans Ende des Arrays hinzu und gibt die neue Länge zurück.
veggies.push("Karotte");
console.log(veggies);

// .reduce() ? Bekomme die Methode nicht zum laufen. Verstehe leider nicht, warum.
const num=[100,50,20];
const numbers=num.reduce(num.indexOf(20),num.indexOf(100));

console.log(numbers);

// .slice() gibt einzelne Elemente eines Arrays zurück und bildet sie in einem neuen Array ab.
const redFruit=fruits.slice(2,3);
console.log(redFruit);

// .sort() sortiert die Elemente eines Arrays als Strings alphabetisch und überschreibt den ursprünglichen Array.
fruits.sort();

// .splice() fügt hinzu oder entfernt Elemente eines Arrays an einer angegebenen Stelle.
fruits.splice(0,1); 

// .toString() gibt die Elemente des Arrays als String zurück. Diese werden mit Kommas getrennt.
let text2 = fruits.toString();
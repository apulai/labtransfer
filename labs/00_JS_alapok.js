// JAVASCRIPT ALAPOK 
// Skaláris változók
// var függvényen belül vagy globalálisan elérhető változó
var a="szia";
var b="Világ!"
var c=2;
var d=3.1;

console.log("a,b,c,d:", a,b,c,d);

console.log("a+b:", a+" "+b);
e=c+d;
console.log("e:",e);

// Stringek
// let csak a {} (blokkon belül érhető el)
{
    let text1 = "How are you doing today?";
    const myArray = text1.split(" ");
    console.log(myArray);
    
    let text2 = "Hello world!";
    let result = text2.substr(1, 4);
    console.log(result)    
}


// Néhány ciklus
for(var i=0;i<3;i++)
    {
        console.log(i);
    }


// Feltétel vizsgálatok
if(b == 2){
    console.log('b == 2 igaz')
}

if(b == "2"){
    console.log('b == "2" igaz')
}

if(b === "2"){
    console.log('b === "2" igaz')
}
else
{
    console.log(' b===2 nem igaz!! Tipus ellenőrzés is volt ')
}

console.log(1+"1");
console.log(1-"1");

// LISTÁK

console.log("-- Lista definició ---");

var lista = ['Szia',"Teso",2,"hogy","vagy","?"]
console.log("lista hossza:",lista.length)

console.log("-- Lista iteráció 'for of' ciklussal ---");
for( item of lista)
{
    console.log(item);
}


console.log("-- Lista iteráció 'for in' ciklussal ---");
console.log("lista hossza:",lista.length)
for( idx in lista)
    {
        console.log(idx,lista[idx]);
    }


console.log("-- Lista elem hozzáadása (push) ---");
lista.push("mindig");
console.log(lista);

console.log("-- Lista utolsó elem elvétele (pop) ---");
elem = lista.pop();
console.log("Az elem ", elem," és a lista ", lista);

console.log("-- Lista első elem elvétele (shift) ---");
elem = lista.shift();
console.log("Az elem ", elem," és a lista ", lista);

// OBJEKTUMOK

// Objektumok: üres objektum létrehozása az object literal methoddal operátorral
console.log("--- Uj objektum object literal methoddal ---");
const ember1 = {};

// Add Properties
ember1.firstName = "John";
ember1.lastName = "Doe";
ember1.age = 50;
ember1.eyeColor = "blue";

console.log(ember1);

// Objektumok: új objektum a new Object operátorral ezt nem használják
console.log("--- Uj objektum a new Object operátorral ---");
var ember2 = new Object();
ember2.firstName = "Donald";
ember2.lastName = "Trump";

console.log(ember2);

// Nem konstruktor függvénnyel létrehozott objektumok listája
// Ez a fontos: 
// JavaScript Object
// JavaScript Object Notification format amit itt látunk
l3=[ember1,ember2];
console.log(l3);


// Objektumok: új objektum constructor függvényből
console.log("--- új objektum constructor függvényből ---");

function Person(name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

adori = new Person("Dori", 18, "f");
attila = new Person("Ati",22,"m");
apulus = new Person("PA", 21,"m");
ajani = new Person("VJ",23,"m");

console.log("-----")
console.log("Pulus:",apulus)

console.log("-----")
l=[adori,attila,apulus,ajani];
console.log(l);

console.log("-----")
console.log(JSON.stringify(l));



console.log("-----")
for(p of l)
{   
  console.log(p.name,p.age);
}

console.log("- Ha van neve irjuk ki -")
for(p of l)
  { 
    // Itt van a vizsgálat ha van neve
    if('name' in p)
      {
        console.log(p.name,p.age);
      }  
  }

console.log("-----")
for(p of l)
  { 
    
    console.log(p.name.substr(-2),p.age*2);
  }

// OSZTÁLYOK

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100
  console.log([...square.getSides()]); // [10, 10, 10, 10]

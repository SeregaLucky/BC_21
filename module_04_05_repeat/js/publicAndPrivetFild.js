

//
//
//
`use strict`;
//НАСЛЕДОВАНИЕ
class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }
  gainXP(amount) {
    console.log(`${this.name} gets ${amount} experience`);
    this.xp + -amount;
  }
}
//для того, что бы расширить класс Warrior и взять свойство name из Hero , прописываем extends Hero
class Warrior extends Hero {
  constructor(name, xp, weapon) {
    //передаем в конструктор к weapon еще name, xp
    super(name, xp);
    //передаем в super также name, xp
    //super ставится первым. вызывает конструктор родителя. constructor(name, xp) {this.name = name; this.xp = xp;}. Тогда, будет доступен this.weapon
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
}
// const mango = new Warrior(`Mango`, 1000, `Gun`);
//new создает пустой объект, Warrior создается в контексте этого объекта
//this внутри конструктора Warrior получает ссылку на этот объект
//this внутри конструктора Hero также получает ссылку на этот объект

// const mango = new Hero(`Mango`, 1000);
// console.log(mango);
// mango.attack();
// mango.gainXP(2000);

// class Paladin extends Hero {
//   constructor(name, xp, weapon, spell) {
//     super(name, xp, weapon);
//     this.spell = spell;
//   }
//   cast() {
//     console.log(`${this.name} attacks ${this.spell}`);
//   }
// }

// const mango = new Paladin(`Mango`, 1000, `Gun`, `Cleanse`);
// console.log(mango);
// mango.attack();
// mango.gainXP(2000);
// mango.cast();

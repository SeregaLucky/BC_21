class User {
  constructor({ name = 'Ananim' }) {
    this.name = name;
  }
}

class Status extends User {
  constructor({ name = 'Ananim', status = null }) {
    super({ name });

    this.status = status;
  }
}

class Admin extends Status {
  constructor({ name = 'Ananim', status = null, password }) {
    super({ name, status });

    this.password = password;
    // this.setPassword(password);
  }

  #password = null; // приватное свойство и к нему стучатся на прямую не выйдет. Под капотом он запишет в constructor

  get password() {
    return this.#password;
  }

  // getPassword() {
  //   return this.#password;
  // }

  set password(text) {
    if (text.length > 5 && text.length < 20) {
      console.log('Перезаписало');
      this.#password = text;
    } else {
      console.log('НЕ Перезаписало');
    }
  }

  // setPassword(text) {
  //   if (text.length > 5 && text.length < 20) {
  //     console.log('Перезаписало');
  //     this.#password = text;
  //   } else {
  //     console.log('НЕ Перезаписало');
  //   }
  // }
}

const admin = new Admin({ name: 'Tom', status: 'admin', password: '123456' });
console.log(admin);

// console.log(admin.password);
// console.log(admin.getPassword());
// console.log(admin.#password);

// admin.#password = '3333';
// admin.password = '22224534534';

//
//
//
//

// const arr = [11, 11, 22, 22];

// console.log([...new Set(arr)]);

// const fn1 = function () {};

// const fn2 = function (cb) {
//   const a = 10;
//   const b = 20;
//   cb(a, b);
// };

// // fn2(fn1);
// fn2((a, b) => {});

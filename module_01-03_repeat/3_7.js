/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [
    { id: 1, amount: 20, type: 'deposit' },
    { id: 2, amount: 50, type: 'withdraw' },
    { id: 3, amount: 40, type: 'deposit' },
  ],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    console.log(id);

    for (const obj of this.transactions) {
      // console.log(obj);

      if (obj.id === id) {
        return obj;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    console.log(type);
    let total = 0;

    for (const obj of this.transactions) {
      console.log(obj);
      if (obj.type === type) {
        // '' === 'withdraw'
        total += obj.amount;
      }
    }

    return `Тип тразназкции: ${type}. Общая сумма транзакции ${total}`;
  },
};

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(2));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

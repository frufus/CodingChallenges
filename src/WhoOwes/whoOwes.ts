/**
 * Task: You went on a vacation with friends. Each of you paid for certain meals on the trip for the group. Write a function that determines who owes money to whom so that everyone pays equally.
 * @see https://buttondown.email/cassidoo/archive/nothing-will-work-unless-you-do-maya-angelou/
 * @param receipts
 */

export interface Receipt {
  name: string;
  paid: number;
}

interface Balance {
  [key: string]: number
}

const whoOwes = (receipts: Receipt[]) => {
  const totalPaid = receipts.reduce((sum, r) => r.paid + sum, 0);
  const people = Array.from(new Set(receipts.map(r => r.name)));
  let balances: Balance = {};
  for (let receipt of receipts) {
    balances[receipt.name] = balances[receipt.name]
      ? balances[receipt.name] + receipt.paid
      : receipt.paid;
  }

  const average = totalPaid / Object.keys(people).length;

  const owed: Balance = Object.keys(balances).
    filter((paid) => balances[paid] > average).
    sort((a, b) => balances[b] - balances[a]).
    reduce((owed: Balance, name) => {
      const paid = balances[name];
      const owedMoney = Math.abs(average - paid);
      owed[name] = owedMoney;
      return owed;
    }, {});

  const owes: Balance = Object.keys(balances).
    filter((paid) => balances[paid] < average ).
    sort((a, b) => balances[b] - balances[a]).
    reduce((owes: Balance, name) => {
      const paid = balances[name];
      const owed = average - paid;
      owes[name] = owed;
      return owes;
    }, {});

  return Object.entries(owes).map(([elem, amount]) => `${elem} owes ${Object.keys(owed)} $${amount}`).join(', ');
};

export default whoOwes;

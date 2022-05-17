import whoOwes from './whoOwes';

describe('Testing who owes', () => {
  const receipts = [
    { name: 'Ximena', paid: 45 },
    { name: 'Clara', paid: 130 },
    { name: 'Ximena', paid: 100 },
    { name: 'Cassidy', paid: 140 },
    { name: 'Cassidy', paid: 76 },
    { name: 'Clara', paid: 29 },
    { name: 'Ximena', paid: 20 },
  ];

  it('should should output', () => {
    expect(whoOwes(receipts)).toEqual('Ximena owes Cassidy $15, Clara owes Cassidy $21');
  });

});



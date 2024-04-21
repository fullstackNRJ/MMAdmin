export const CUSTOMERS = [
  {
    id: 1,
    name: 'Andrew',
    number: '555-555-5555',
    email: 'XKQ2Z@example.com',
    nickName: 'Andy',
    sales: [
      {
        id: 1,
        saleDate: new Date(),
        amount: 100,
        discount: 10,
        discountType: '%',
        medicines: [
          {
            id: 1,
            name: 'Paracetamol',
            quantity: 10,
          },
          {
            id: 2,
            name: 'Aspirin',
            quantity: 20,
          },
        ],
      },
    ],
  },
];

export const REMINDER = [
  {
    id: 1,
    message: 'test',
    reminderDate: new Date('22/04/2024 '),
    customer: {
      id: 1,
      name: 'Andrew',
      phoneNumber: ['555-555-5555', '1111111111'],
      email: 'XKQ2Z@example.com',
      nickName: 'Andy',
    },
  },
  {
    id: 2,
    message: 'test',
    reminderDate: new Date('25/04/2024 '),
    customer: {
      id: 2,
      name: 'Ajay',
      phoneNumber: '1111111111',
      email: 'XKQ2Z@example.com',
      nickName: 'Ajju',
    },
  },
];

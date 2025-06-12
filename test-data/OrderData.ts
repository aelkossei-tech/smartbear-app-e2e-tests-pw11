export const OrderData = {
  newOrder: {
    productInfo: {
      product: 'FamilyAlbum',
      quantity: 2
    },
    addressInfo: {
      customerName: 'John Doe',
      street: 'Random Street 123',
      city: 'Chicago',
      state: 'IL',
      ZIP: 12345
    },
    paymentInfo: {
      cardType: 'Visa',
      cardNumber: '1234123412341234',
      expirationDate: '12/27'
    }
  },
  editOrder: {
    productInfo: {
      product: 'ScreenSaver',
    },
    addressInfo: {
      customerName: 'Jane Doe'
    },
    paymentInfo: {
      cardType: 'Visa',
      cardNumber: '1234123412341234',
      expirationDate: '12/2030'
    }
  }
};
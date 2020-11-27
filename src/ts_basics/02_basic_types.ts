// Number
let counter: number = 10;

counter += 1;
counter += 1;
// counter = '0'; // wrong

const PI: number = 3.14;
const hex: number = 0xf;
const bin: number = 0b10100;

// String
const single = '';
const double = 'double';
const ticks: string = `${double} ticks`;

// String literal types
let coupon: 'holiday2020';
coupon = 'holiday2020';
// coupon = 'summer10'; // wrong

// Boolean
const isLogged: boolean = true;

// Array
const data: number[] = [1, 2, 3, 4];
const genericData: Array<number> = [5, 6, 7];

let randomNumber: number;
randomNumber = genericData[2];

// Tuple
let setting: [string, boolean];
setting = ['darkmode', true];
// you can push to this array

// Object
let product: { name: string; price: number; count: number };
product = {
  name: 'Doll',
  price: 199,
  count: 1,
};

const username: { name: string; getName(): string } = {
  name: 'Sebastian',
  getName() {
    return this.name;
  },
};

// Enum
enum ExtensionType {
  doc,
  docx,
  pdf,
}
ExtensionType.docx; // 1
ExtensionType[1]; // docx
ExtensionType.pdf; // 2

function setExtension(extension: ExtensionType) {
  extension;
}
setExtension(ExtensionType.doc);
setExtension(0);

enum ExtensionTypes {
  doc = 'application/msword',
  docx = 'application/msword2010',
  pdf = 'application/' + 'pdf',
}

ExtensionTypes.docx; // application/msword2010

// const Enum
const enum SubscriptionStatus {
  active,
  expired,
}

function getSubscriptions(status: SubscriptionStatus) {
  switch (status) {
    case SubscriptionStatus.active:
      return ['(active subscriptions)'];
    case SubscriptionStatus.expired:
      return ['(expired subscriptions)'];
  }
}

//class

class User {
  constructor(private name: string) {}

  sayHello(): string {
    return this.name;
  }
}

const user = new User('Sebastian');
user.sayHello();

"use strict";
// Number
var counter = 10;
counter += 1;
counter += 1;
// counter = '0'; // wrong
var PI = 3.14;
var hex = 0xf;
var bin = 20;
// String
var single = '';
var double = 'double';
var ticks = double + " ticks";
// String literal types
var coupon;
coupon = 'holiday2020';
// coupon = 'summer10'; // wrong
// Boolean
var isLogged = true;
// Array
var data = [1, 2, 3, 4];
var genericData = [5, 6, 7];
var randomNumber;
randomNumber = genericData[2];
// Tuple
var setting;
setting = ['darkmode', true];
// you can push to this array
// Object
var product;
product = {
    name: 'Doll',
    price: 199,
    count: 1,
};
var username = {
    name: 'Sebastian',
    getName: function () {
        return this.name;
    },
};
// Enum
var ExtensionType;
(function (ExtensionType) {
    ExtensionType[ExtensionType["doc"] = 0] = "doc";
    ExtensionType[ExtensionType["docx"] = 1] = "docx";
    ExtensionType[ExtensionType["pdf"] = 2] = "pdf";
})(ExtensionType || (ExtensionType = {}));
ExtensionType.docx; // 1
ExtensionType[1]; // docx
ExtensionType.pdf; // 2
function setExtension(extension) {
    extension;
}
setExtension(ExtensionType.doc);
setExtension(0);
var ExtensionTypes;
(function (ExtensionTypes) {
    ExtensionTypes["doc"] = "application/msword";
    ExtensionTypes["docx"] = "application/msword2010";
    ExtensionTypes["pdf"] = "application/pdf";
})(ExtensionTypes || (ExtensionTypes = {}));
ExtensionTypes.docx; // application/msword2010
function getSubscriptions(status) {
    switch (status) {
        case 0 /* active */:
            return ['(active subscriptions)'];
        case 1 /* expired */:
            return ['(expired subscriptions)'];
    }
}
//class
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return this.name;
    };
    return User;
}());
var user = new User('Sebastian');
user.sayHello();

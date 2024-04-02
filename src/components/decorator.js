@testable(true)
class Person {
  constructor(name) {
    this.name = name;
  }

  @readonly
  sayHi() {
    console.log(`hi ${this.name}`);
  }
}

function testable(isTestable) {
  return function (t, context) {
    console.log('context', context);
    t.isTestable = isTestable;
  };
}

function readonly(v, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

export default Person;

// function logged(value, context) {
//   console.log(context)
//   const {kind, name} = context
//   if (kind === 'class') {
//     return class extends value {
//       constructor(...args) {
//         super(...args);
//         console.log(`constructing an instance of ${name} with arguments ${args.join(', ')}`);
//       }
//     }
//   }
// }

// @logged
// class C {}

// new C();

function replaceMethod(method) {
  return function () {
    return `How are you, ${this.name}`;
  };
}

class Per {
  constructor(name) {
    this.name = name;
  }

  @replaceMethod
  hello() {
    return `Hi ${this.name}`;
  }
}

const lucy = new Per('Lucy');
console.log(lucy.hello());

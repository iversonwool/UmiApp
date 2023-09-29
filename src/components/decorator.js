@testable(true)
class Person {
  constructor(name) {
    this.name = name;
  }

  @readonly
  sayHi() {
    console.log(`hi ${this.name}`)
  }
}


function testable(isTestable) {

  return function (t, context) {
    console.log('context', context);
    t.isTestable = isTestable;
  }
}

function readonly(v, name, descriptor) {
  descriptor.writable = false;
  return descriptor

}


export default Person
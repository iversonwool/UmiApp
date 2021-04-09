import React from 'react';
import styles from './index.less';

//generic types
interface GenericFunc {
  <Q>(arg: Q): Q
}

// 提升
interface GenericFuncAll<W> {
  (arg: W): W
}

//generic class
class GenericClass<T> {
  one: number = 0;
  add: (a: T, b: T) => T = (a, b) => a
}

//extends
//keyof


export default () => {

  const instance = new GenericClass<number>();
  instance.one = 1;
  instance.add = (a, b) => a + b;


  // ts playground
  const d: object = {
    a: ''
  }
  d;

  function identity<T>(arg: T): T {
    return arg
  }


  function a<T>(arg: T[]): T[] {
    return arg
  }

  const b: number[] = [1, 2, 3]

  let func: <T>(arg: T) => T = identity

  let func1: { <S>(arg: S): S } = identity
  let func2: GenericFunc = identity

  identity(2)

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

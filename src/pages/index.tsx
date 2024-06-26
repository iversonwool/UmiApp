import React, { useEffect } from 'react';
import Person from '../components/decorator';

import { Button } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

//generic types
interface GenericFunc {
  <Q>(arg: Q): Q;
}

// 提升
interface GenericFuncAll<W> {
  (arg: W): W;
}

//generic class
class GenericClass<T> {
  one: number = 0;
  add: (a: T, b: T) => T = (a, b) => a;
}

//extends
//keyof

class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  s = (a: string) => true;
  check(a: string) {
    return this[a] as boolean;
  }
}

export default connect(({ home }) => ({ home }))((props) => {
  console.log('home', props.home);
  console.log('sha', new MyClass().check('s'));
  // useEffect(() => {
  //   props.dispatch({
  //     type: 'home/fetchUser'
  //   })
  // }, [props.dispatch])
  console.log('-', Person.isTestable);
  const p1 = new Person('leehow');
  p1.name = 'ddd';
  p1.sayHi();
  console.log('p1 name', p1.name);

  const instance = new GenericClass<number>();
  instance.one = 1;
  instance.add = (a, b) => a + b;

  // ts playground
  const d: object = {
    a: '',
  };
  d;

  function identity<T>(arg: T): T {
    return arg;
  }

  function a<T>(arg: T[]): T[] {
    return arg;
  }

  const b: number[] = [1, 2, 3];

  let func: <T>(arg: T) => T = identity;

  let func1: { <S>(arg: S): S } = identity;
  let func2: GenericFunc = identity;

  identity(2);

  interface Point {
    x: number;
    y: number;
  }

  function aaaaa(x: unknown) {}

  type Predicate = (x: unknown) => boolean;
  type K = ReturnType<Predicate>;

  type P = keyof Point;

  interface Animal {
    live: () => void;
    live1(): void;
  }

  type Animal1 = {
    a(): void;
    b(): void;
  };

  // const h1Ref = React.useRef<HTMLHeadingElement | null>(null)
  // (h1Ref.current as HTMLHeadingElement)
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <Button type="primary">Primary Button</Button>
    </div>
  );
});

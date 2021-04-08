import React from 'react';
import styles from './index.less';

export default () => {
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

  identity(2)

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

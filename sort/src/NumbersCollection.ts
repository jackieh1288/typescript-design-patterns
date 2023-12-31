// import { SorterRefactor } from './SorterRefactor';
import { SorterAbstract } from './SorterAbstract';

// export class NumbersCollection extends SorterRefactor {
export class NumbersCollection extends SorterAbstract {
  constructor(public data: number[]) {
    super();
  }

  // **getter**
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

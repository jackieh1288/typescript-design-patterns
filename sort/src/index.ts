import { Sorter } from './Sorter';
import { SorterRefactor } from './SorterRefactor';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Poor structure
console.log('Poor version: ');
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);

// Refactor version
console.log('Refactor version: ');
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorterRefactor = new SorterRefactor(numbersCollection);
sorterRefactor.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection('hello');
const sorterRefactorChars = new SorterRefactor(charsCollection);
sorterRefactorChars.sort();
console.log(charsCollection.data);

// Use abstract class
numbersCollection.sort();
charsCollection.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

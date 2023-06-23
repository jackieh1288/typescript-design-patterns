@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  // @logError
  @logErrorF('Oops, boat was sunk')
  pilot(@parameterDecorator speed: string): void {
    if (speed === ' fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
    // throw new Error();
    // console.log('swish');
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: Boat, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log('a');
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops, boat was sunk');
    }
  };
}

/* Decorator Factory */
function logErrorF(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    console.log('b');
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot();

// ================================================
const carV = { make: 'honda', year: 2000 };
Object.getOwnPropertyDescriptor(carV, 'make');
Object.defineProperty(carV, 'make', {
  writable: false,
}); /* Property 'make' is no longer writable */

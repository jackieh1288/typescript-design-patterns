import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'metadata for object ', plane);
// Reflect.defineMetadata('note', 'metadata for color', plane, 'color');

// const noteObject = Reflect.getMetadata('note', plane);
// const noteColor = Reflect.getMetadata('note', plane, 'color');

// console.log(plane);
// console.log(noteObject);
// console.log(noteColor);

// ==============================================
/* Pratical Usage for Metadata */
@controller
class Plane {
  color: string = 'blue';

  @get('/login')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path);
  }
}

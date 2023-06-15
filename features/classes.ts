// Class inheritance

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }

  public honkP(): void {
    this.honk();
    console.log('piu-piu');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('red');
vehicle.honkP();

const car = new Car(4, 'yellow');

car.startDrivingProcess();
car.honkP();

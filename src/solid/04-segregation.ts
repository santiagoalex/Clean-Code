export interface Bird {
  eat(): void;
}

export interface FlyinBird {
  fly(): void;
}


export interface RuningBird {
  run(): void;
}



export interface SwimmingBird {
  swim(): void;
}

class Tucan implements Bird, FlyinBird {
  public eat() { }
  public fly() { }
  public run() { }
}

class humminbird implements Bird,FlyinBird {
  public eat() { }
  public fly() { }
}
class Ostrich implements Bird,RuningBird {
  public eat() { }
  public run() { }
}
class Penguin implements Bird, SwimmingBird, RuningBird {
  public eat() {}
  public swim() { }
  public run() { }

}

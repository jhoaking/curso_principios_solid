interface Bird {
  eat(): void;
}
interface SwimmingBird {
  swim(): void;
}
interface RunningBird {
  run(): void;
}
interface FlyingBird {
  fly(): void;
}



class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class HummingBird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmingBird {
  public eat() {}
  public swim() {}
}

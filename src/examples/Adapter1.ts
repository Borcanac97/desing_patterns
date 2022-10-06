import exp from "constants";

interface Lion {
    roar(): any;
  }
  
  class AfricanLion implements Lion {
    public roar() {
      console.log("AfricanLion: AAAAAAAAF");
    }
  }
  
  class AsianLion implements Lion {
    public roar() {
      console.log("AsianLion: AAAAAAAAS");
    }
  }
  class Hunter {
    public hunt(lion: Lion): void {
      lion.roar();
    }
  }
  
  // This needs to be added to the game
  class WildDog {
    public bark() {
      console.log("WILD DOG : AWAWAW");
    }
  }
  
  // Adapter around wild dog to make it compatible with our game
  class WildDogAdapter implements Lion {
    protected dog: WildDog;
  
    constructor(dog: WildDog) {
      this.dog = dog;
    }
  
    public roar() {
      this.dog.bark();
    }
}

export{ 
  WildDog,
  WildDogAdapter,
  Hunter,
  AfricanLion,
 
}

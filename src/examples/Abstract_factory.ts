/* ABSTRACT FACTORY */
interface Door {
    getDescription(): void;
  }
  interface DoorFittingExpert {
    getDescription(): void;
  }
  interface DoorFactory {
    makeDoor(): Door;
    makeFittingExpert(): DoorFittingExpert;
  }
  class WoodenDoor implements Door {
    public getDescription() {
      console.log("I am a wooden door");
    }
  }
  class IronDoor implements Door {
    public getDescription() {
      console.log("I am an iron door");
    }
  }
  
  class Welder implements DoorFittingExpert {
    public getDescription() {
      console.log("I can only fit iron doors");
    }
  }
  
  class Carpenter implements DoorFittingExpert {
    public getDescription() {
      console.log("I can only fit wooden doors");
    }
  }
  
  // Wooden factory to return carpenter and wooden door
  class WoodenDoorFactory implements DoorFactory {
    public makeDoor(): Door {
      return new WoodenDoor();
    }
  
    public makeFittingExpert(): DoorFittingExpert {
      return new Carpenter();
    }
  }
  
  // Iron door factory to get iron door and the relevant fitting expert
  class IronDoorFactory implements DoorFactory {
    public makeDoor(): Door {
      return new IronDoor();
    }
  
    public makeFittingExpert(): DoorFittingExpert {
      return new Welder();
    }
  }
  export{
    WoodenDoorFactory,
    IronDoorFactory
  }

class Burger {
    protected size: number;
    protected cheese: boolean = false;
    protected pepperoni: boolean = false;
    protected lettuce: boolean = false;
    protected tomato: boolean = false;
    constructor(builder: BurgerBuilder) {
      this.size = builder.size;
      this.cheese = builder.cheese;
      this.pepperoni = builder.pepperoni;
      this.lettuce = builder.lettuce;
      this.tomato = builder.tomato;
    }
  }
  class BurgerBuilder {
    public size: number;
    public cheese = false;
    public pepperoni = false;
    public lettuce = false;
    public tomato = false;
  
    constructor(size: number) {
      this.size = size;
    }
  
    public addPepperoni() {
      this.pepperoni = true;
      return this;
    }
  
    public addLettuce() {
      this.lettuce = true;
      return this;
    }
  
    public addCheese() {
      this.cheese = true;
      return this;
    }
  
    public addTomato() {
      this.tomato = true;
      return this;
    }
  
    public build(): Burger {
      return new Burger(this);
    }
  }
  export{
    
    BurgerBuilder
  }
class User {
   
    constructor(name) {
    this.name = name; // calls the setter
    }

    get name() {
    return this.privatename; //property must match the name used in the setter
    }

    set name(value) {
    if (value.length < 4) {
    alert("Name is too short.");
    } else {
    this.privatename = value; //must set a property name different from the setter name
    }
    }


    }
    const john = new User("Eddy");
    console.log(john);
    console.log(Object.getPrototypeOf(john));
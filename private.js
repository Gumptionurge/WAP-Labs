class User {
    #privatename;
    constructor(name) {
    this.name = name; // calls the setter
    }
    get name() {
    return this.#privatename; //property must match the name used in the setter
    }
    set name(value) {
    if (value.length < 4) {
    alert("Name is too short.");
    } else {
    this.#privatename = value; //must set a property name different from the setter name
    }
    }
    }
    let user = new User("John");
    console.log(user.name); // calling the getter
    user.name = 'Fred'; // calling the setter
    user2 = new User("");
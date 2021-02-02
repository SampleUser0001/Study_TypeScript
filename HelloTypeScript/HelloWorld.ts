'use strict'

class HelloWorld {
    constructor(public displayText : string) {}
    greet(){
        return this.displayText;
    }
}

const helloWorld = new HelloWorld("HelloWorld");
document.body.innerHTML = helloWorld.greet();

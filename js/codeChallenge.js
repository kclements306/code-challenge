class CodeChallenge {

    constructor() {
        this.inputString = "";
        this.hasTen = false;
    }

    init() {
        this._bindEvents();
    }

    /*
        _bindEvents - binds DOM events to the method used to process the event
            returns false when all events are bound.
    */
    _bindEvents() {
        $("#btnInput").on("click", $.proxy(this.btnGetInputString, this));
    }

    btnGetInputString() {
        this.inputString = $("#inputString").val();
        console.log(inputString);
        this.processString(this.inputString);
    }

    processString(inputString) {
        this.hasTen = false;
        let string2 = inputString.match(/[0-9?]+/g);        // Strip out anthing that's not a number or ?
        let string3 = string2.join();                       // Get back one string 
        let string4 = string3.match(/\d\?\?\?\d/g);         // Get only the cases where input is of the form d???d
        console.log(string4);
    }
}


$(function () {
    window.codeChallenge = new CodeChallenge();
    window.codeChallenge.init();
});
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
        this.processString(this.inputString);
    }

    processString(inputString) {
        console.time();
        let string2 = inputString.match(/[0-9?]+/g);        // Strip out anthing that's not a number or ?
        let string3 = string2.join("");                     // Get back one string 
        let string4 = string3.match(/\d\?\?\?\d/g);         // Get only the cases where input is of the form d???d
        if (string4 !== null) {
            this.hasTen = true;
            for (let i=0; i<string4.length; ++i) {
                if ((Number(string4[i].charAt(0)) + Number(string4[i].charAt(4))) !== 10) {
                    this.hasTen = false;
                    // console.log(string4[i].charAt(0));
                    // console.log(string4[i].charAt(4));
                    break;
                } 
            }
        }
        console.log(this.hasTen);
        console.timeEnd();
    }
}


$(function () {
    window.codeChallenge = new CodeChallenge();
    window.codeChallenge.init();
});
console.log("global: ",this); 
let a=5;
function abc(){
    // console.log(a); //7
}
function xyz(){
    console.log("inside func: ",this); 
    a=7;
    abc();
}
xyz();
let ob = {
    key1: 23,
    key2: {
        ab2: 123,
        ab: function () {
            console.log("inside obj: \n", this)
        },

    }
}
ob.key2.ab();
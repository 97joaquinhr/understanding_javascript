function a(){
    var foo = 1;
    b();
}

function b(){
    console.log(foo);
}

a();
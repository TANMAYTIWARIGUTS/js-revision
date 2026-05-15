function outer(){
  let a=1;
  let x=()=>{
    a=a+1000;
  }
  return function apple(){
    a++;
    x();
    console.log(a)
  }
}

let fn=outer();
fn();
fn();
fn();
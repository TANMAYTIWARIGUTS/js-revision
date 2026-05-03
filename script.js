// function getData(x){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//         console.log("got data ",x)
//         res(x);
//     },3000)
//     })
// }
// function workData(x){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//         console.log("working on data...")
//         res(x*x);
//     },2000)
//     })
// }
// function displayData(x){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//         console.log("displaying data ",x)
//         res("done");
//     },1000)
//     })
// }

// (async function meth(){
//     let ans = await getData(5);
//     ans= await workData(ans);
//     await displayData(ans);   
// })();


(async function working3(){
    console.log("hey")
})()
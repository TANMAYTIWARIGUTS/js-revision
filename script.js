function getData(x){
    setTimeout(()=>{
        console.log("got data ",x)
        return x
    },3000)
}
function workData(x){
    setTimeout(()=>{
        console.log("working on data...");
        return x*x;
    },2000)
}
function displayData(x){
    setTimeout(()=>{
        console.log("got data ",x)
    },4000)
}

async function meth(){
    let ans = await getData(5);
    ans= await workData(ans);
    await displayData(ans)
}








const URL = "https://dragonball-api.com/api/characters";

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data.items[0].name);

    let arr=data.items;
    data.items.forEach((i)=>{
        console.log(i.name)
    })
    console.log(data[0]);
    console.log();
    let data2 = await response.json();
    console.log(data);
}
getFacts();


function getData(x){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        console.log("got data ",x)
        res(x);
    },3000)
    })
}
function workData(x){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        console.log("working on data...")
        res(x*x);
    },2000)
    })
}
function displayData(x){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        console.log("displaying data ",x)
        res("done");
    },1000)
    })
}

// (async function meth(){
//     let ans = await getData(5);
//     ans= await workData(ans);
//     await displayData(ans);   
// })();


// (async function working3(){
//     console.log("hey")
// })()
let inp=document.querySelector("input");
let def=document.querySelector("#default");
let deb=document.querySelector("#debounce");
let thr=document.querySelector("#throttle");
// inp.style.backgroundColor="red";
console.log(Date.now())


const updateDebText = debounce((text)=>{
    deb.textContent=text;
})
const updateThrText = throttle((text)=>{
    thr.textContent=text;
})

inp.addEventListener("input",(e)=>{
    def.textContent=e.target.value;
    updateDebText(e.target.value);
    updateThrText(e.target.value);
})

function debounce(cb, delay=1000){
    let timeout;

    return (...args)=>{
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

function throttle(cb,delay=1000){
    let lastCall=0;
    if (Date.now() - lastCall >= delay){
return (...args)=>{
    cb(...args);
    }
    }
    
}
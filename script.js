let pm = new Promise((res, rej) => {
    let x = 23
    if(x>10)
    res(x)
else
    rej("not yet")
})
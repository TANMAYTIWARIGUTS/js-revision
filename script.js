function getData(x, cb) {
    setTimeout(() => {
        console.log("data: ", x);
        if (cb) {
            cb();
        }
    }, 2000)
}




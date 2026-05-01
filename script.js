function getData(x, cb) {
    setTimeout(() => {
        console.log("data: ", x);
        if (cb) {
            cb();
        }
    }, 2000)
}

getData(1001, () => {
    getData(1006, () => {
        getData(1004, () => {
            getData(1006)
        });
    });
});


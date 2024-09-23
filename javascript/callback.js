function callBack(call) {
    setTimeout(() => {
        const data = 'data from callBack function';
        call(data);
    }, 1000);
}

function getData() {
    setTimeout(() => {
        const thisdata = 'thisdata from getthisdata function';
        console.log(thisdata);
    }, 2000);
}

callBack((data) => {
    console.log(data);
});

getData();

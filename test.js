async function name(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random());
        }, 3000)
    });
}

async function name2() {
    await name();
    
    console.log(1);
}

name2();
console.log(2);
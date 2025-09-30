//==============|Example 01|==========
async function hello() {
    console.log("hello");
}
//==============|Example 02|==========

function Api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data");
            resolve(1200)
        }, 4000);
    })
}

async function getWeatherData() {
    await Api(); //1st call
    await Api();  // 2nd call

}
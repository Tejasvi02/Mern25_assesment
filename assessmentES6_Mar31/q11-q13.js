//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved


let promiseObj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            status: "Success",
            code: 200,
            message: "Successfully Logged"
        });
    },2000); //resolving after 2 seconds

    setTimeout(()=>{
        reject({
            status: "Failed",
            code: 403,
            message: "Access Denied"
        });
    },3000) ;//rejecting after 3 seconds
})

promiseObj.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
});

//13. Use the question #11 to build promises using async and await - with multithread
async function fetchData() {
    try {
        const data = await promiseObj;
        console.log("Async Data:", data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();
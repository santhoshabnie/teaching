const data = {
    isError: false,
    isSuccess: false,
    message: "",
    data: null
}

const fetchData = async ()=>{
    try{
        const name = await fetch("https://jsonplaceholder.typicode.com/todos/1",{
            headers: {}
        }).then(result=>result.json());
        data.isSuccess = true;
        data.data = name;
        return data;
    }catch(e){
        data.isSuccess = false;
        data.data = null;
        data.isError = true;
        data.message = e.message;
        return data;
    }
}

 async function main(){
    console.log("one");
    const results = await fetchData();
    console.log(results);
    console.log("two");
}

main();


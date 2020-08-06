const postData = async(url="",data={})=>{
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        console.log("the data for this submit has been sent to server. Database updated")
        return newData
    } catch (error) {
        console.log("error:", error);
        // appropriately handle the error
    }
}
export { postData }

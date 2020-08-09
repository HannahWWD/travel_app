const printTrip = () => {
    const targetElem = event.currentTarget.parentNode.parentNode;
    const tripContents = targetElem.innerHTML; 
    console.log(tripContents)
    const printWindow = window.open("", 'height=500, width=500'); 
    printWindow.document.write(
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Travel App</title>
        <link href='http://localhost:3030/main.css' rel="stylesheet"></head>
        <body>
            ${tripContents}
        </body>
        </html>`); 
    setTimeout(()=>{
        printWindow.print(); 
        printWindow.document.close(); 
    },250)

    
}


export { printTrip }
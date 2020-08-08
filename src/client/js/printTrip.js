const printTrip = () => {
    const targetElem = event.currentTarget.parentNode.parentNode;
    const tripContents = targetElem.innerHTML; 
    console.log(tripContents)
    const printWindow = window.open("", 'height=500, width=500'); 
    printWindow.document.write('<html>'); 
    printWindow.document.write('<body > <h1> Trip information <br>'); 
    printWindow.document.write(tripContents); 
    printWindow.document.write('</body></html>'); 
    setTimeout(()=>{
        printWindow.print(); 
        printWindow.document.close(); 
    },1000)

    
}


export { printTrip }
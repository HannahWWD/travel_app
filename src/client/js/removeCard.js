const removeCard = (event)=> {

   const targetElem = event.target.parentNode.parentNode;
   
   // only remove card when user click the remove button
   if (event.target.nodeName === 'BUTTON') {
      targetElem.remove();
   }

}


export {removeCard}
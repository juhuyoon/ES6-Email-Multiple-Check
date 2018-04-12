//select all checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

//whenever another box is checked, that must be its own variable
let lastChecked; 



// consoles when clicked on checkboxes. 
function handleCheck(i) {
    // console.log(i);
    //must check if shift key is down AND that the boxes are being clicked. 
    //begin by having variables be false;
    let inbetween = false;
    if(i.shiftKey && this.checked) {
        //then click multiple boxes
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox); //when you click shift and click a box, every element is clicked. 
            if(checkbox === this || checkbox === lastChecked){
                inbetween = !inbetween; //setting it to the opposite rather than true 
                //console.log('see where it pauses');
            }
            if(inbetween){
                checkbox.checked = true; //where everything in between now gets checked. 
            }
        })

    }
    lastChecked=this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)); 
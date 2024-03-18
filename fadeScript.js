
/**
 * desc:function for fade the content
 * @param {*} element 
 */

// taking the displaying element as the parameter
function fade(element){
        let targetDiv = document.getElementById(element)
        
        let about = document.getElementById('about')
        let principles = document.getElementById('principles')
        let vision = document.getElementById('vision')
        let achievements = document.getElementById('achievements')
        let currentDiv;
        // checking the opacity of elemetns for taking current element( opacity of displaying element will be 1)
        if(getComputedStyle(about).opacity==1){
            currentDiv=about;
        }
        else if(getComputedStyle(principles).opacity==1){
            currentDiv=principles;
        }
        else if(getComputedStyle(vision).opacity==1){
            currentDiv=vision;
        }
        else if(getComputedStyle(achievements).opacity==1){
            currentDiv=achievements;
        }
        // op1 for current element and op2 for target element
        let op1=1;
        let op2=0;

        let fadeout=setInterval(()=>{
            op1-=0.2;
            //decreasing the opacity of current div by interval
            currentDiv.style.opacity=op1;
            // if opacity becomes 0 the current div makes hidden and target makes showing
            if(op1<=0){
                clearInterval(fadeout)
                currentDiv.style.display="none";
                targetDiv.style.display="block";
                
                let fadein=setInterval(()=>{
                    op2+=0.2;
                    targetDiv.style.opacity=op2
                    if(op2>=1){
                        clearInterval(fadein);
                    }
                },50)
            }
        },50)

}

// let display=String(window.getComputedStyle(currentDiv).getPropertyValue("display"));
// if(display==="none" || currentDiv!=about){
   
//     document.getElementById(element).style.display="block"
//     document.getElementById('about').style.display="none"
// }
// else{
    
//     document.getElementById(element).style.display="none" 
// }

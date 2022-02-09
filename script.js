function addNewEducationField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");
    let eOb=document.getElementById('e');
    let eduAddButtonOb=document.getElementById("eduAddButton");
    eOb.insertBefore(newNode, eduAddButtonOb);
}

function addNewExField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");
    let exOb=document.getElementById('ex');
    let exeAddButtonOb=document.getElementById("exeAddButton");
    exOb.insertBefore(newNode, exeAddButtonOb);
}
function addNewPrField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('pField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");
    let prOb=document.getElementById('pr');
    let prAddButtonOb=document.getElementById("prAddButton");
    prOb.insertBefore(newNode, prAddButtonOb);
}

//generatint cv function
function generateCV()
{
    //console.log("CV");
//name
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML=nameField;
//contact
    let contactField=document.getElementById("contactField").value;
    document.getElementById("contactT").innerHTML=contactField;
//mail
    let emailField=document.getElementById("emailField").value;
    document.getElementById("mailT").innerHTML=emailField;
//college
    let collegeField=document.getElementById("collegeField").value;
    document.getElementById("collegeT").innerHTML=collegeField;
   //address
    let addressField=document.getElementById("addressField").value;
    document.getElementById("addressT").innerHTML= addressField;
 //linkedin id
    let linkedinField=document.getElementById("linkedinField").value;
    document.getElementById("linkedT").innerHTML= linkedinField;

    //academic qualification

    let aq=document.getElementsByClassName(" eField");
    let str="";
    for(let e of aq)
    {
        str=str+ `<li> ${e.value}</li>`;
    }
    document.getElementById("eT").innerHTML=str;

    //skills

    /*let sk=document.getElementsByClassName("skillField ");
    let str1="";
    for(let e of sk)
    {
        str1=`<li> ${e.value}</li>`;
    }
    document.getElementById("sT").innerHTML=str1;*/

    let skillField=document.getElementById("skillField").value;
    document.getElementById("sT").innerHTML= skillField;
    

    //experience
    let ex=document.getElementsByClassName(" weField");
    let str2="";
    for(let e of ex)
    {
        str2=str2+ `<li> ${e.value}</li>`;
    }
    document.getElementById("exT").innerHTML=str2;
 
    //projects
    let p=document.getElementsByClassName("pField");
    let str3="";
    for(let e of p)
    {
        str3=str3+ `<li> ${e.value}</li>`;
    }
    document.getElementById("prT").innerHTML=str3;

    //achievemnt
    let a=document.getElementsByClassName("aField");
    let str4="";
    for(let e of a)
    {
        str4=`<li> ${e.value}</li>`;
    }
    document.getElementById("acT").innerHTML=str4;

    //position of responsibility
    let r=document.getElementsByClassName("poField");
    let str5="";
    for(let e of r)
    {
        str5=`<li> ${e.value}</li>`;
    }
    document.getElementById("rsT").innerHTML=str5;

//for photo

let file=document.getElementById("imgField").files[0];
let reader=new FileReader()
reader.readAsDataURL(file);
console.log(reader.result);

//set the image to template
reader.onloadend=function() {
document.getElementById("imgTemplate").src=reader.result;
};

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

function printCV(){
    window.print();
}
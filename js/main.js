document.body.style.cssText = " margin-left :0px ; background-color :rgb(236, 236, 236); "

//header
let head = document.createElement("header")
head.style.cssText = "display:flex ; padding 20px; backdround-color : white ; justify-content :space-between ; align-item:center ;";
head.classList.add("header");
document.body.appendChild(head);

//logo 
let logo = document.createElement("div");
logo.classList.add("logo");
logo.innerHTML = "Elzero";
logo.style.cssText = " color:rgb(35, 169, 110) ; font-weight:bold ;font-size:25px;  margin-left:20px;";
head.appendChild(logo);
//links
let ul = document.createElement("ul");
let headEle = ["Home", "About", "Service", "Contact"];
for (i = 0; i < headEle.length; i++){
    let li = document.createElement("li");
    li.style.margin = "5px";
    li.style.color = "#454545";
    li.innerHTML = headEle[i];
    ul.appendChild(li);
}
ul.className = "list";
ul.style.cssText = " list-style-type :none ; display:flex; padding :0; margin :0px; margin-right:20px";
head.appendChild(ul);


// create content
let content = document.createElement("div");
document.body.appendChild(content);
content.classList.add("content");
content.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";



// create product
for(i= 0;i< 15;i++){
    let product = document.createElement("div");
    product.classList.add("product");
    product.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
    let span = document.createElement("span");
    span.style.cssText = "font-size: 40px; color: black; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";
    span.textContent = i+1;
    product.appendChild(span);
    product.append("Product");
    content.appendChild(product);
}



/* footer */



// create footer
let foot = document.createElement('footer');
foot.classList.add("footer");
foot.style.cssText = "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
foot.append("Copyright 2021");
document.body.appendChild(foot);
let imy = prompt("ima");
let fan = prompt("familia");
let age = prompt("vozrast");
let eve = prompt("Ismingiz harf tanlang \n 1) katta \n 2) Kichik");

if (eve === "1") {
    imy = imy.toUpperCase();
    fan = fan.toUpperCase();
} else if (eve === "2") {
    imy = imy.toLowerCase();
} else {
    alert("bittasini talla");
    eve = prompt("Ismingiz harf tanlang \n 1) katta \n 2) Kichik");
}


let bye = document.createElement("div"); 
let elem1 = document.createElement("h2");
elem1.textContent = `ima: ${imy}`;
let elem2 = document.createElement("h2");
elem2.textContent = `familia: ${fan}`;
let elem3 = document.createElement("h2");
elem3.textContent = `vozrast: ${age}`;
bye.appendChild(elem1);
bye.appendChild(elem2);
bye.appendChild(elem3);
bye.style.color = 'white';
bye.style.backgroundColor = 'black';
bye.style.width = '250px';
bye.style.height = '150px';
bye.style.padding = '15px';
bye.style.paddingLeft = '15px';
bye.style.marginTop = '10px'; 
document.body.appendChild(bye);


// function product_1() {
//     let image = document.getElementById('image');    
//     let img1 = document.getElementById('img1');
//     let img2 = document.getElementById('img2');
//     let img3 = document.getElementById('img3');
//     let title = document.getElementById('p_title');
//     let price = document.getElementById('p_price');
//     let sell = document.getElementById('p_selling');
//     let disc = document.getElementById('p_discount');

//     image.src = '';
//     img1.src = '';
//     img2.src = '';
//     img3.src = '';
//     title.innerHTML = '';
//     price.innerHTML = '';
//     sell.innerHTML = 'selling price = ';
//     disc.innerHTML = '';
// }

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Read the parameter from the URL and update content
var content = getParameterByName('content');

let image = document.getElementById('image');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let title = document.getElementById('p_title');
let price = document.getElementById('p_price');
let sell = document.getElementById('p_selling');
let disc = document.getElementById('p_discount');

if (content === "product_1") {
    image.src = '../image/bed_sample.jpg';
    img1.src = '../image/bed_sample.jpg';
    img2.src = '../image/furnitur_sample.jpg';
    img3.src = '../image/conntact_bgImage.jpeg';
    title.innerHTML = 'MAST wala bed';
    price.innerHTML = '₹50,000';
    sell.innerHTML = 'selling price = 65,000';
    disc.innerHTML = '15%off';
}

else if (content === "product_2") {
    image.src = '';
    img1.src = '';
    img2.src = '';
    img3.src = '';
    title.innerHTML = 'wjfjwf';
    price.innerHTML = 'wjejk455434343';
    sell.innerHTML = 'selling price = 34567654';
    disc.innerHTML = '234%offf';
}

// ------------------- place order code --------------------

let link = document.getElementById("buy_section");
let newLink = link + "?content=" + image.src;
link.href = newLink;

function sendWhatsAppMessage() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('phone').value;

    // Format the message
    var message = "Hello i am " + name + " " + surname + ", I'm interested in ." + content;

    // Create a WhatsApp link with the pre-filled message
    var whatsappLink = "https://wa.me/9321763572?text=" + encodeURIComponent(message);

    // Open the link in a new window
    window.open(whatsappLink, '_blank');
}

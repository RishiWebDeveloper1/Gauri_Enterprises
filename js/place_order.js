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
console.log(content);

function sendWhatsAppMessage() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('phone').value;

    // Format the message
    var message = "Hello i am " + name + " " + surname + ", and I'm interested in " + content;

    // Create a WhatsApp link with the pre-filled message
    var whatsappLink = "https://wa.me/9321763572?text=" + message;

    // Open the link in a new window
    window.open(whatsappLink, '_blank');
}

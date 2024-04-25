function sendEmail() {
    // console.log('checking...');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
    var body = `Name: ${name}<br/><br/>Email: ${email}<br/><br/>Message: ${msg}`
    // console.log(body);
    if (!name == '' && !email == '' && !msg == '') {
        Email.send({
            SecureToken: "6e7599f7-8783-4130-81a8-6a5881bea97d",
            To: 'shawaizshahsyed@gmail.com',
            From: "shawaizshahsyed@gmail.com",
            Subject: "Client Mail",
            Body: body
        });
        swal("Send Successfully", "You clicked the button!", "success");
        event.preventDefault();
    } else {
        swal({
            title: "Form Empty!!",
            text: "fill your full form",
            icon: "warning",
        });
    }
}


$(document).ready(function () {
    var syed = $('#shaz');
    syed.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    var syed = $('#jan');
    syed.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });

});

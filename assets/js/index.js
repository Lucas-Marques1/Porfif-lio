let sendEmail = document.querySelector("#send-email");

sendEmail.addEventListener('click', function(event) {

    $(document).ready(function() {
        $(sendEmail).click(function(event) {
            
            event.preventDefault();

            let name = $("#name").val();
            let email = $("#email").val();
            let subject = $("#assunto").val();
            let message = $("#msg").val();

            if (name && email && subject && message) {
                
                return true;

            }
            
        });
    });
});
function form() {
    const $form = $('.section-contact-form')
    $form.attr('novalidate', 'novalidate');

    $('.section-contact-form').on('submit', function(e) {
        e.preventDefault();

        const $inputs = $('input[type=text], input[type=email], textarea');
        $form.find(':submit').prop('disabled', true);
        $form.find(':submit').addClass('loading');

        let errorField = false;
        $inputs.each(function() {
            if ($(this).get(0).checkValidity()) {
                $(this).removeClass('error');
            } else {
                $(this).addClass('error');
                errorField = true;
            }
        });

        if (errorField) {
            const $msg = $('<div class="form-message">Wiadomość nie może być wysłana</div>');

            if (!$form.find('.form-message').length) {
                $form.find(':submit').after($msg);
            }
        } else {
            $.ajax({
                url : $form.attr('action'),
                method : $form.attr('method'),
                dataType : 'json',
                data : {
                    formName : $('#formName').val(),
                    formEmail : $('#formEmail').val(),
                    formMessage : $('#formMessage').val()
                }
            }).done(() => {
                $form.find('.form-message').remove();
                const $msg = $('<div class="form-message">Wiadomość została wysłana</div>');
                $form.find(':submit').after($msg);
            }).always(() => {
                $('#formName').val('');
                $('#formEmail').val('');
                $('#formMessage').val('');
                $form.find(':submit').prop('disabled', false);
                $form.find(':submit').removeClass('loading');
            })
        }

    })
}

export { form }
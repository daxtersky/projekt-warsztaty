function form() {
    const $form = $('.section-contact-form')
    $form.attr('novalidate', 'novalidate');

    //podlaczamy sie pod submit
    $('.section-contact-form').on('submit', function(e) {
        e.preventDefault();

        //wszystkie pola required (input, email, textarea)
        const $inputs = $('[required]');
        $form.find(':submit').prop('disabled', true);
        $form.find(':submit').addClass('loading');

        let errorField = false;
        $inputs.each(function() {
            //zmieniam element jquery na element JS
            //i spradzam poprawnosc pola - za pomoca checkValidity
            //zeby to zadzialalo pole musi miec atrybut required
            //dla emaili nic wiecej nie trzeba ale
            //wtedy mozna wpisywac dziwne emaile np. marcin@x
            //zeby to dzialalo dla kazdego pola (nawet emaili)
            //musimy uzyc parametru pattern, który za pomocą regexp
            //ekraśla wygląd wzoru którego wymagamy

            //jezeli wiec dame required i pattern to przy wysylce
            //pojawia nam sie tooltipy domyslne
            //zeby sie ich pozbyc (bo robimy nasza walidacje)
            //dajemy formularzowi attr('novalidity') (na gorze tego skryptu)
            if ($(this).get(0).checkValidity()) {
                $(this).removeClass('error');
            } else {
                $(this).addClass('error');
                errorField = true;
            }
        });

        //ponizej klasyczny ajax + kilka ifów jezeli cos poszlo nie tak
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
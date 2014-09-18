﻿define(['controller'], function (Controller) {
    var registerUi = (function () {
        $("#register").on('click', function () {
        var controller = new Controller('http://localhost:7097/api/Account/Register');
        var email = $('#email').val(),
            password = $('#password').val(),
            confirmedPassword = $('#confirmed-password').val();

        // TODO: check confirmed password
        controller.register(email, password);
        });
    }());

    return registerUi
})
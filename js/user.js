$(document).ready(function() {
    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here
        var userListBody = $('.userList tbody');
        var usernameInput = $('#username');

        //userNumber
        var userNumber = userListBody.find('tr').length+1;



        //creat the a new row with the input unserName
        var row = $("<tr>");
        row.append($(   "<td>" + userNumber + "</td>\n" +
                        "<td>" + usernameInput.val() + "</td>\n" +
                        "<td><button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button></td>\n" +
                        "</tr>")
        );

        //create Button
        var button = $("<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>");

        //Create last Cell of Row + the Button
        var lastCell = $("<td></td>");
        lastCell.append(button);

        userListBody.append(row);




        return false;
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here



        deleteItem(this);
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here


    });

    //maybe some code follows here

});
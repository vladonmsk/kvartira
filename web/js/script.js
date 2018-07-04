
var p1w1;
var p1h1;

$(document).ready(function (){

    //p1w1 = document.getElementById('width1').value();
   // p1h1 = document.getElementById('height1').value();

    /*(function () {
       var form = document.getElementById('form2');
       addEvent(form,'submit',function (e) {
           e.preventDefault();
           var elements = this.elements;
           p1w1 = elements.width1.value;
           p1h1 = elements.height1.value;

       });
    }());*/
    $('#submit').on('click', function (e) {
        $('.vibor_komnat').hide();
        $('.parametr_komnat').show();

        e.preventDefault();
    });

    $('.close').on('click', function () {
       $('.vibor').hide();
       $('.open_vibor').show();
    });
    $('.open').on('click', function () {
        $('.open_vibor').hide();
        $('.vibor').show();
    });
    $('.close-datchik').on('click', function () {
        $('.datchik').hide();
        $('.openD').show();
    });
    $('.open_datchik').on('click', function () {
        $('.openD').hide();
        $('.datchik').show();
    });


    $('.datchiki').on('click',function () {
        $('.datchili_vibor').slideToggle('slow');
    });

    $('#back').on('click', function (e) {
        $('.parametr_komnat').hide();
        $('.vibor_komnat').show();
        e.preventDefault();
    });

    $('#show').on('click', function (e) {
        $('#canvas').show();
        //var form = document.getElementById('form2');
        e.preventDefault();
        //var elements = form.elements;
       // p1w1 = elements.width1.value;
        //p1h1 = elements.height1.value;
    });

    $('#clear').on('click', function (e) {
        $('#canvas').hide();

        //document.forms[2].text.value = '';
        e.preventDefault();
    });




});
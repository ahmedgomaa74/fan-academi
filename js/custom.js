// siledr
$('.maincarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    rtl:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})



//drob-dawn-header


var $winl = $(window); // or $box parent container
var $boxl = $("login-index, .click-index");
$winl.on("click.Bst", function (event) {
    if (
        $boxl.has(event.target).length === 0 && //checks if descendants of $box was clicked
        !$boxl.is(event.target) //checks if the $box itself was clicked
    ) {

    }
});

$(".click-index").click(function(){
    $(".login-index").fadeToggle();
});

//-----
//-----
$('#owl-demo1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    rtl:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})
// wow
new WOW().init();
//mnuo

$("#times-ican").click(function(){
    $(this).toggleClass("active");
   $("#menu-div").toggleClass("active")

})

var $winl = $(window); // or $box parent container
var $boxl = $("#menu-div, #times-ican");
$winl.on("click.Bst", function (event) {
    if (
        $boxl.has(event.target).length === 0 && //checks if descendants of $box was clicked
        !$boxl.is(event.target) //checks if the $box itself was clicked
    ) {
        $("#menu-div").removeClass("active")
        $("#times-ican").removeClass("active")


    }
});
//drob-dawn
$(".r-sections").click(function(){
    $(".sections").slideToggle();
}
);
//img-profile
function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#img-input').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $(".input-p").change(function() {
    readURL(this);
  });

//drob-dawn-message

$("#drob-down-click").click(function(){
    $(".drob-down-message").slideToggle();
});

//input validation 
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//modal
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

// remove message
$('.table-color1').removeClass




$('#upload1').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#upload1')[0].files[0].name;
    $(this).prev('label').text(file);
});


$("#upload1").change(function (e) {
    var fileName = e.target.files[0].name;
    $('#file-input').val(fileName);   
});
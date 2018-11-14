function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile-img-tag').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#profile-img").change(function(){
    readURL(this);
});

function changeSwitchText() {

    var checkBox = document.getElementById("js-myCheck");

    var text = document.getElementById("js-switchtext");

    if (!checkBox.checked) {
        text.innerHTML = "Random";
    }
    else {
        text.innerHTML = "Last";
    }

}

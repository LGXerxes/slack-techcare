setInterval(ch, 400);

function ch() {
    var l = document.querySelectorAll('[alt=":white_check_mark:"]');
    l.forEach(function (el) {
        el.closest(".c-message_kit__gutter").style.background = "#00800036";
    });
    console.log("checked")
}

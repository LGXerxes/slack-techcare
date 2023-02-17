setInterval(ch, 1200);

function ch() {
    if (document.querySelector(".p-view_header__channel_title.p-view_header__truncated_text").textContent == "tech-care") {
        var l = document.querySelectorAll('[alt=":white_tick:"]');
        l.forEach(function (el) {
            el.closest(".c-message_kit__gutter").style.background = "#00800036";
        });
    }

}

setInterval(ch, 1200);
function ch() {
    channelname = document.querySelector(".p-view_header__channel_title.p-view_header__truncated_text")
    if (!channelname) {
        return
    }
    if (channelname.textContent == "tech-care") {
        var l = document.querySelectorAll('[alt=":white_tick:"]');
        l.forEach(function (el) {
            el.closest(".c-message_kit__gutter").style.background = "#00800036";
        });
    } else if (channelname.textContent == "product") {
        l = document.querySelectorAll('.c-mrkdwn__code');
        l.forEach(function (el) {
            t = el.innerHTML
            el.onclick = function () {
                window.open(`https://linear.app/clerkio/issue/${t}`
                )
            };
        });
    }
}
setInterval(ch, 1200);
function ch() {
    var channelname = document.querySelector(".p-view_header__channel_title.p-view_header__truncated_text")
    if (!channelname) {
        return
    }
    if (channelname.textContent == "tech-care") {
        var l = document.querySelectorAll('[alt=":white_check_mark:"]');
        l.forEach(function (el) {
            el.closest(".c-message_kit__gutter").style.background = "#00800036";
        });
    } else if (channelname.textContent == "product") {
        var l = document.querySelectorAll('.c-mrkdwn__code');
        l.forEach(function (el) {
            var t = el.innerHTML
            el.onclick = function () {
                window.open(`https://linear.app/clerkio/issue/${t}`)
            };
        });
    }
}
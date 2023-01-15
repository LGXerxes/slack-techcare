// for domchange thing:
// class
// p - workspace - layout

function green(element, type) {
    switch (type) {
        case 0:
            element.closest(".c-message_kit__gutter").style.background = "#00800036";
            break;
        case 1:
            element.closest(".c-message_kit__gutter").style.background = "#00800036";

    }
};
function colourchange() {
    var l = document.querySelectorAll('[alt=":white_check_mark:"]');
    l.forEach(function (currentValue) {
        green(currentValue, 0);
    });

    setTimeout(colourchange, 1000);
}
colourchange();
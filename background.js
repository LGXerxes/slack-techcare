function green(element, type) {
    switch (type) {
        case 0:
            element.closest(".c-message_kit__gutter").style.background = "#00800036";
            break;
        case 1:
            element.closest(".c-message_kit__gutter").style.background = "#00800036";
            break;
        default:
            console.log("Not implemented yet")
    }
};
function colourchange() {
    var l = document.querySelectorAll('[alt=":white_check_mark:"]');
    l.forEach(function (currentValue) {
        green(currentValue, 0);
    });
}

function callback(mutationList) {
    mutationList.forEach((mutation) => {
        if (mutation.type === 'childList') {
            colourchange()
        }
    })
}

var mList = document.querySelector('.p-workspace-layout')
options = {
    childList: true,
    subtree: true
}
const observer = new MutationObserver(callback)
observer.observe(mList, options) 
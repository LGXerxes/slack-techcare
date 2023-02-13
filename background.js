function sGB() {
    var gEs = document.querySelectorAll('.c-message_kit__gutter');
    gEs.forEach(function (gE) {
        var cME = gE.querySelector('img[alt=":white_check_mark:"]');
        if (cME) {
            gE.style.backgroundColor = "#00800036";
        }
    });
}

function startObserver() {
    var mList = document.querySelector('.p-workspace-layout')
    if (!mList) { return; }
    
    options = {
        childList: true,
        subtree: true
    }
    observer = new MutationObserver(function (mL) {
        mL.forEach((mut) => {
            if (mut.type === 'childList') {
                sGB()
            }
        })
    })
    observer.observe(mList, options)
}


startObserver();
setInterval(startObserver, 1000);
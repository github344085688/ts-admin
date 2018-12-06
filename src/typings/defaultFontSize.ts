/**
 * Created by f on 2018/5/18.
 */
const setFontSize = (win:any, lib:any) => {


   // dd(document, window)
    setDefaultFontSize(window,window)

};
function setDefaultFontSize(win:any, lib?:any) {
    const doc = win.document;
    const docEl = doc.documentElement;
    let metaEl = doc.querySelector('meta[name="viewport"]');
    const flexibleEl = doc.querySelector('meta[name="flexible"]');
    let dpr:any,scale:any, tid:any;
    // flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        const match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
        }
    } else if (flexibleEl) {
        const content = flexibleEl.getAttribute('content');
        if (content) {
            const initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            const maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        const isAndroid = win.navigator.appVersion.match(/android/gi);
        const isIPhone = win.navigator.appVersion.match(/iphone/gi);
        const devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            const wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        let width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        //alert(width)
        const rem = 100 * (width / 1920);
        docEl.style.fontSize = rem + 'px';
       // flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e:any) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e:any) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }


    refreshRem();

   // flexible.dpr = win.dpr = dpr;
   // flexible.refreshRem = refreshRem;
   /* flexible.rem2px = function(d:any) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val = +'px';
        }
        return val;
    }
    flexible.px2rem = function(d:any) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val = +'rem';
        }
        return val;
    }
*/
}
/*function dd(doc:any, win:any) {
    const docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
};*/

export default setFontSize;


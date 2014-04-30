/**
 * Created by NIKHIL on 4/29/2014.
 */




                                                        /*===================   returns read only values from style tag    ===========================*/
                                                        /*===================   getComputedStyle    ===========================*/

function getStyle(el, cssprop) {
    if (el.currentStyle) //IE
        return el.currentStyle[cssprop];
    else if (document.defaultView && document.defaultView.getComputedStyle) //Firefox
        return document.defaultView.getComputedStyle(el, "")[cssprop];
    else
        return el.style[cssprop];
}

                                                        /*===================   to change the style after get computed style returns value     ===========================*/


function setStyle(val) {
    document.getElementById(" ").style.left = val + "px";
}

                                                        /*===================   to call getStyle     ===========================*/

var someVariableName = getStyle(document.getElementById("element"), "css property");
/**
 * Created by NIKHIL on 4/28/2014.
 */


    /*=============================================================================initialization======================================================================================*/
var aliens = [];
var alienId = -1;
var objTop = 0;
var heightLimit = window.innerHeight - 200;

/*=============================================================================Class constructor======================================================================================*/

function Alien(objLeft, objTop) {
    alienId++;
    this.alienObj = document.createElement("img");
    this.alienObj.src = "asset/images/alien.png";
    this.alienObj.style.position = 'absolute';
    this.alienObj.className = "greenAlien";
    this.alienObj.style.width = 100 + "px";
    this.alienObj.style.top = objTop + 'px';
    this.alienObj.style.left = objLeft + 'px';
    this.alienObj.id = alienId;
    document.body.appendChild(this.alienObj);
    this.move = function () {
        objTop += 5;
        if (objTop <= heightLimit) {
            this.alienObj.style.top = objTop + 'px';
        } else {
            this.removeAlien();
        }
    }
    this.removeAlien = function () {
        var parent = document.body;
        var child = document.getElementById(this.alienObj.id);
        parent.removeChild(child);
        removeElementFromArray();
    }
}


var createAliens = function() {
    var screenWidth = window.innerWidth - 100;
    var objLeft = parseInt(Math.random() * screenWidth);
    aliens.push(new Alien(objLeft, objTop));
}


var  moveAliens = function() {
    for (var key in aliens) {
        aliens[key].move();
    }
}

var removeElementFromArray = function(){
    for (var key in aliens) {
        aliens.splice(key, 1);
        document.body.removeChild( document.getElementById(this.alienObj.id));
    }
    return true;
}
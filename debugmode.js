;(function() {
  'use strict';

  var debugMode = function() {
    var ref = 'debugmode';
    var triggers = document.querySelectorAll('.debugmode-trigger, [debugmode-trigger], [data-debugmode]');
    
    // no triggers, don't do a thing
    if (triggers.length == 0) {
      return;
    };

    // initial check when the page loads
    initDebugMode();
    triggers.forEach(listen);
   
    function listen(element) {
      element.addEventListener('click', toggleDebugMode);
    };
    
    function initDebugMode() {
      if (sessionStorage.getItem(ref) === 'active') {
        document.body.classList.add(ref);
        replacedElements();
      }
    };

    function toggleDebugMode() {
      if (sessionStorage.getItem(ref) === null) {
        sessionStorage.setItem(ref, 'active');
        document.body.classList.add(ref);
        replacedElements();
      }
      else {
        sessionStorage.removeItem(ref);
        document.body.classList.remove(ref);
        removeOverlay();
      }
    };

    function replacedElements() {
      var elements = document.querySelectorAll('img, object, select');

      elements.forEach(addOverlay);
    };

    function addOverlay(element) {
      var rec = element.getBoundingClientRect();
      var overlay = document.createElement('div');
      console.log(rec);
      
      overlay.style.width = rec.width + 'px';
      overlay.style.height = rec.height + 'px';
      overlay.style.top = rec.top + 'px';
      overlay.style.left = rec.left + 'px';
      overlay.style.backgroundColor = 'red';
      overlay.style.position = 'absolute';
      overlay.classList.add('overlay');

      document.body.appendChild(overlay);
    };

    function removeOverlay() {
      var overlays = document.querySelectorAll('.overlay');
      console.log(overlays);
      for (var i = 0; i < overlays.length; i++) {
        overlays[i].parentNode.removeChild(overlays[i]);
      }
    };
  };
  
  window.addEventListener('load', function() {
    debugMode();
  });
})();

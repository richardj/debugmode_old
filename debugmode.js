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
    // assign event listeners to the triggers
    triggers.forEach(listen);
   
    function initDebugMode() {
      if (sessionStorage.getItem(ref) === 'active') {
        document.body.classList.add(ref);
        window.addEventListener('resize', updateOverlays);
        replaceElements();
      }
    };

    function listen(element) {
      element.addEventListener('click', toggleDebugMode);
    };
    
    function toggleDebugMode() {
      if (sessionStorage.getItem(ref) === null) {
        sessionStorage.setItem(ref, 'active');
        document.body.classList.add(ref);
        replaceElements();
      }
      else {
        sessionStorage.removeItem(ref);
        document.body.classList.remove(ref);
        removeOverlay();
      }
    };

    function replaceElements() {
      var elements = document.querySelectorAll('img, object, select, input, textarea');

      elements.forEach(addOverlay);
    };

    /* element overlays */

    function addOverlay(element) {
      var rec = element.getBoundingClientRect();
      var overlay = document.createElement('div');
      
      overlay.style.width = rec.width + 'px';
      overlay.style.height = rec.height + 'px';
      overlay.style.top = (rec.top + window.scrollY) + 'px';
      overlay.style.left = rec.left + 'px';
      overlay.style.backgroundColor = '#333';
      overlay.style.outline = '0';
      overlay.style.position = 'absolute';
      overlay.classList.add('overlay');

      document.body.appendChild(overlay);
    };

    function removeOverlay() {
      var overlays = document.querySelectorAll('.overlay');

      for (var i = 0; i < overlays.length; i++) {
        overlays[i].parentNode.removeChild(overlays[i]);
      }
    };

    function updateOverlays() {
      removeOverlay();
      replaceElements();
    };
  };
  
  window.addEventListener('load', function load() {
    // cleanup the event listener after we are done loading
    window.removeEventListener('load', load);
    // initiate debugMode
    debugMode();
  }, false);
})();

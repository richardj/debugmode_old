;(function() {
  'use strict';

  var debugMode = function() {
    var ref = 'debugmode';
    var triggers = document.querySelectorAll('.debugmode-trigger, [debugmode-trigger]');
    
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
      }
    };

    function toggleDebugMode() {
      if (sessionStorage.getItem(ref) === null) {
        sessionStorage.setItem(ref, 'active');
        document.body.classList.add(ref);
      }
      else {
        sessionStorage.removeItem(ref);
        document.body.classList.remove(ref);
      }
    };
  };
  
  window.addEventListener('load', function() {
    debugMode();
  });
})();

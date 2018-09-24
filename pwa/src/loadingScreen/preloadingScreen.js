(function() {
// executes when HTML-Document is loaded and DOM is ready
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log('animation should start');
    setTimeout(function() {
      const wrapper = document.querySelector('#root')
      if (wrapper.classList) {
        wrapper.classList.add('loaded');
      }
      // else
      //   wrapper.className += ' ' + className;
    }, 3000);
  });

// executes when complete page is fully loaded, including all frames, objects and images
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log('animation should stop');
    window.onload = function(){
      const wrapper = document.querySelector('#root')
      if (wrapper.classList) {
        wrapper.classList.remove('preload');
      }
      // else
      //   wrapper.className = wrapper.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  });
})();
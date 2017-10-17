(function(){
  portfolio = {
    init: function(){
      // Initialize all functions
      portfolio.nav.init();
    }
  },
  portfolio.nav = {
    init: function(){
      // When #nav-trigger is clicked, perform actions
      portfolio.nav.onClick('button#nav-trigger');
    },
    onClick: function(el){
      var el = document.querySelector(el);

      // Add click event listener for navigational element
      el.addEventListener('click', function(e) {
        // Gets target
        var target = document.querySelector(el.getAttribute('data-target'));

        e.preventDefault();

        // Toggles class on parent element (open/not open)
        portfolio.nav.toggleNavClass(target);
      });
    },
    toggleNavClass: function(el){
      // Toggles nav class between open and not
      el.classList.toggle("open");
    }
  }

  // Run portfolio
  document.addEventListener("DOMContentLoaded", function() {
    portfolio.init();
  });
}).call(this);
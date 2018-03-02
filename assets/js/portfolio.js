(function(){
  portfolio = {
    init: function(){
      // Initialize all functions
      portfolio.nav.init();
      portfolio.modal.init();
      portfolio.logo.init();
    }
  },
  portfolio.logo = {
    init: function(){
      var letters = {
          meghan_m: false, // false: opacity only
          meghan_e: false,
          meghan_g: false,
          meghan_h: false,
          meghan_a: false,
          meghan_n: false,
          horton_H: 'translateX', // class to be added
          horton_o: false,
          horton_r: false,
          horton_t: false,
          horton_o2: false,
          horton_n: false
        };

      portfolio.logo.expandLogo('svg#MHlogo',0.5);
    },
    expandLogo(target,timing){
      var target = document.querySelector(target);
      target.classList.add('expanded');
      // var i = 0;

      // for (var key in target){
      //   var id = '#'+key,
      //       action = target[key],
      //       delay = Math.round(timing * i * 1000);
        
      //   if(action == false){
      //     console.log(id,delay);
      //     $(id).fadeIn();
      //   } else{
      //     document.getElementById(key).classList.add(action); //jQuery is being a jerk
      //   }
        
      //   // Up count
      //   i++;
      // }
    }
  },
  portfolio.nav = {
    init: function(){
      // When #nav-trigger is clicked, perform actions
      portfolio.nav.onClick('button#nav-trigger');
    },
    onClick: function(el){
      var el = document.querySelector(el),
          nav = el.getAttribute('data-target');

      // Add click event listener for navigational element
      el.addEventListener('click', function(e) {
        // Gets target
        var target = document.querySelector(nav);

        e.preventDefault();

        // Toggles class on parent element (open/not open)
        portfolio.nav.toggleNavClass(target);
      });

      // Close the nav when an element is clicked
      document.querySelector(nav + ' .nav-menu').querySelectorAll("a").forEach(function(e){
        var target = document.querySelector(nav);

        e.addEventListener('click', function(e){
          target.classList.remove("open");
        })
      });
    },
    toggleNavClass: function(el){
      // Toggles nav class between open and not
      el.classList.toggle("open");
    }
  },
  portfolio.modal = {
    init: function(){
      portfolio.modal.eventActions('#contactDialog');
      portfolio.modal.closeModal();
    },
    eventActions(el){
      var modal = document.querySelector(el);
    
      // If this is a page that contains this modal, do the following
      if(modal != null){
        var trigger = document.querySelectorAll('[data-target="'+el+'"]');

        // Trigger for every element on the page that targets it
        trigger.forEach(function(target){
          target.addEventListener('click', function(e) {
            // Triggers modal
            var id = target.getAttribute('data-target');

            portfolio.modal.triggerModal(id);
          });
        });

        // If the page is loaded with the hash in the URL, open it!
        if(window.location.hash == el){
          portfolio.modal.triggerModal(el);
        }
      }
    },
    triggerModal: function(el){
      var target = document.querySelector(el);

      target.classList.add("dialog--open");
      target.classList.remove("dialog--close");
      document.querySelector('body').classList.add("dialog-activated");
    },
    closeModal: function(){
      var targets = document.querySelectorAll('.dialog');

      // Loop through each modal
      targets.forEach(function(el){
        var closeButton = el.querySelector('[data-dialog-close]');

        // For each close button, apply an event listener to trigger classes
        closeButton.addEventListener('click',function(e){
          el.classList.remove("dialog--open");
          el.classList.add("dialog--close");
          document.querySelector('body').classList.remove("dialog-activated");
        });
      });
    }
  }

  timeline = {
    init: function(){
        var items = document.querySelectorAll(".timeline li");
        window.addEventListener("load", timeline.callbackFunc(items));
        window.addEventListener("resize", timeline.callbackFunc(items));
        window.addEventListener("scroll", timeline.callbackFunc(items));
    },
    isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        // console.log(el,rect.top,rect.left,rect.bottom,rect.right);
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    callbackFunc(items) {
      for (var i = 0; i < items.length; i++) {
        if (timeline.isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  };

  // Run portfolio
  document.addEventListener("DOMContentLoaded", function() {
    portfolio.init();
    timeline.init();
    var scroll = new SmoothScroll('a[href*="#"]');
  });
}).call(this);
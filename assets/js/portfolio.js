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
  },
  portfolio.modal = {
    init: function(){
      portfolio.modal.eventActions('button#openContact');
      portfolio.modal.closeModal();
    },
    eventActions(el){
      var el = document.querySelector(el);

      // On click
      el.addEventListener('click', function(e) {
        // Triggers modal
        portfolio.modal.triggerModal(el);
      });
    },
    triggerModal: function(el){
      var target = document.querySelector(el.getAttribute('data-target'));

      target.classList.add("dialog--open");
      target.classList.remove("dialog--close");
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
        });
      });
    }
  }

  // Run portfolio
  document.addEventListener("DOMContentLoaded", function() {
    portfolio.init();
  });
}).call(this);
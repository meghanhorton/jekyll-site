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
      portfolio.logo.triggerLogo('.nav-brand');
    },
    triggerLogo(target){
      var el = document.querySelector(target),
          bod = document.getElementsByTagName('body')[0];

      console.log(el);

      // On hover
      el.addEventListener("mouseenter", function(){portfolio.logo.fadeIn(bod,el)} );
      
      // On focus
      el.addEventListener("focus", function(){portfolio.logo.fadeIn(bod,el)} );

      // On mouseout
      el.addEventListener("mouseleave", function(){portfolio.logo.fadeOut(bod,el)} );

      // On mouseout
      el.addEventListener("focusout", function(){portfolio.logo.fadeOut(bod,el)} );
    },
    fadeIn(bod,target){
      console.log(bod.classList,'fadeIn');
      bod.classList.remove('logoFadeOut');
      bod.classList.add('logoFadeIn');
    },
    fadeOut(bod,target){
      console.log(bod.classList,'fadeOut');
      bod.classList.remove('logoFadeIn');
      bod.classList.add('logoFadeOut');
    }
  },
  // portfolio.altText = {
  //   init: function(){
  //     portfolio.altText.getTargets('data-array',500,5000);
  //   },
  //   getTargets(attr,timing,pause){
  //     var targets = document.querySelectorAll('['+attr+']');

  //     targets.forEach(function(el){
  //       var array = el.getAttribute('data-array'),
  //           array = array.split(','),
  //           count = array.length,
  //           initial = el.innerHTML.length;

  //       $(el).typeIt({
  //         lifeLike: true,
  //         loop: true,
  //         speed: timing
  //       });

  //       // Delete initial entry
  //       $(el).tiPause(pause).tiDelete( initial );

  //       // Loop through array to type, then delete.
  //       $(array).each(function(index,term){
  //         $(el).tiType(term).tiPause(pause).tiDelete(term.length);
  //       });
  //     });
  //   }
  // },
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
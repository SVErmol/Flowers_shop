   $(function () {
      var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
    
        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
      };
    
      Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
    
        $next.slideToggle();
        $this.parent().toggleClass('open');
    
        if (!e.data.multiple) {
          $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
      };
    
      var accordion = new Accordion($('#accordion'), false);
    });
    $(function() {
      function init() {
        $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
        $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
      };
      
      function toggleMenuIcon() {
        $(this).toggleClass('menu-icon--open');
        $('[data-element="toggle-nav"]').toggleClass('nav--active');
      };
      
      function toggleSubMenu() {
        $(this).toggleClass('nav__link--plus nav__link--minus');
        $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
      };
      
      init()
    });
    function viewdiv(id) {
      var el = document.getElementById(id);
      var link = document.getElementById('toggleLink');
      if (el.style.display == "block") {
        el.style.display = "none";
        link.innerText = link.getAttribute('data-text-hide');
      } else {
        el.style.display = "block";
        link.innerText = link.getAttribute('data-text-show');
      }
    }
    
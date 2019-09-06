$(document).ready(function(){
  var s,
  Enq = {
    settings: {

    },

    init: function() {
      s = this.settings;
      this.bindUIActions();
    },

    bindUIActions: function() {
      this.curousalImage();
      this.curousalTestimonials();
    },

    curousalImage: function() {
      $(document).ready(function(){
        $('#owl-carousel').owlCarousel({
          loop: true,
          margin: 50,
          items: 2,
          nav: true,
          navClass: ['owl-prev', 'owl-next'],
          responsiveClass: true,
          onChange: function (elem) {
      var current = this.currentItem;
      var src = elem.find(".owl-item").eq(current).find("img").attr('src');
      console.log('Image current is ' + src);
    },
          responsive: {
            0: {
              items: 2,
              nav: true
            },
            600: {
              items: 2,
              nav: false
            },
            768: {
              items: 3,
              nav: false
            },
            1000: {
              items: 3,
              nav: true,
              loop: true
            }
          }
        });

        // var vartcarousel = $("#owl-carousel");
        // // vartcarousel.owlCarousel(owlcarousel_obj);
        // $(".owl-prev").on("click touch", function(){
        //     vartcarousel.trigger("next.owl.carousel");
        // });
        // $(".owl-next").on("click touch", function(){
        //     vartcarousel.trigger("prev.owl.carousel");
        // });
      });
    },

    curousalTestimonials: function() {
      $(document).ready(function(){
         $('#owl-testimonials').owlCarousel({
            loop: true,
            margin: 50,
            items: 3,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                768: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        });
    });
    },

  };
  Enq.init();
});
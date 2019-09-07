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
          navigation:true,
          navigationText: [
             "<i class='fa fa-chevron-left'></i>",
             "<i class='fa fa-chevron-right'></i>"
          ],
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
            margin: 100,
            items: 2,
            autoPlay: true,
            responsiveClass: true,
            autoplayTimeout: 0,
            autoplaySpeed: 30000,
            autoplayHoverPause: false,
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
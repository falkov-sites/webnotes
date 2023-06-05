$(document).ready(function () {
   // при загрузке страницы все спойлеры разворачиваются ---
   $(".spoiler__title").not(".fold").addClass("active");
   $(".spoiler__body").not(".fold").slideToggle(200);

   // кнопки 'свернуть все' и 'развернуть все' -----
   $(".btn-fold").click(function () {
      $(".spoiler__title").removeClass("active");
      $(".spoiler__body").slideUp(200);
   });
   $(".btn-unfold").click(function () {
      $(".spoiler__title").addClass("active");
      $(".spoiler__body").slideDown(200);
   });

   // если  должен быть развернут только один спойлер (аккордеон),
   // нужно добавить класс 'only-one-item' к классу 'spoiler'
   // и должно быть несколько 'spoiler__item'
   $(".spoiler__title").click(function (event) {
      if ($(".spoiler").hasClass("only-one-item")) {
         $(".spoiler__title").not($(this)).removeClass("active");
         $(".spoiler__body").not($(this).next()).slideUp(200);
      }
      $(this).toggleClass("active").next().slideToggle(200);
   });

   // всплывающая подсказка -------------------
   $(".spoiler__body a").mousemove(function (e) {
      if (this.hasAttribute("tooltip")) {
         let tooltip = $(this).attr("tooltip");
         $("#tooltip").text(tooltip);
         $("#tooltip").css({ left: e.clientX + 10, top: e.clientY + scrollY });
         $("#tooltip").fadeIn({ duration: 100 });
      }
   })
      .mouseout(function (e) {
         $("#tooltip").fadeOut({ duration: 100 });
      });
});


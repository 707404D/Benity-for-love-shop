// Все кнопки фильтра

//

if (document.querySelector(".main__content").classList.contains("filter")) {
  // open menu new
  var menubtns = document.getElementsByClassName("filter__menubtnopen");
  var i;

  for (i = 0; i < menubtns.length; i++) {
    menubtns[i].addEventListener("click", function () {
      this.classList.toggle("openedmenu");

      var menubtnsContent = this.nextElementSibling;
      if (menubtnsContent.classList.contains("menuopened")) {
        menubtnsContent.classList.remove("menuopened");
      } else {
        menubtnsContent.classList.add("menuopened");
      }
    });
  }

  // Ссылки в открывающихся меню

  var menulinks = document.getElementsByClassName("filter__input-btn");
  var i;

  for (i = 0; i < menulinks.length; i++) {
    menulinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("inputactivebtn");
    });
  }

  // Кнопки показать еще
  var showmorebtn = document.getElementsByClassName("filter__menumaxhbtns");
  var i;

  for (i = 0; i < showmorebtn.length; i++) {
    showmorebtn[i].addEventListener("click", function () {
      this.classList.toggle("morebtnunshow");
      var showmorebtnContent = this.previousElementSibling;
      if (showmorebtnContent.classList.contains("menumaxh")) {
        showmorebtnContent.classList.remove("menumaxh");
      } else {
        showmorebtnContent.classList.add("menumaxh");
      }
    });
  }

  let openfiltermob = document.querySelector(".main__filterformobtex");

  openfiltermob.addEventListener("click", function () {
    let mainfilter = document.querySelector(".main__filter");
    openfiltermob.classList.toggle("activefilterbtn");
    mainfilter.classList.toggle("mobilefilter");
  });
} else {
}

// Filter slider
if (
  document.querySelector(".main__content").classList.contains("filterslider")
) {
  $(function () {
    $("#slider").slider({
      range: true,
      min: 0,
      max: 200,
      values: ["45", "80"],
      slide: function (event, ui) {
        $("#min").val(ui.values[0]);
        $("#max").val(ui.values[1]);
      },
    });
  });
} else {
}

// filter btn clear

if (
  document.querySelector(".main__content").classList.contains("filterslider")
) {
  btnclear = document.querySelector("#btn-clear");

  btnclear.addEventListener("click", function () {
    // Закрытие открывающихся меню и снятие active классов с ссылок в этих меню

    var menubtns = document.getElementsByClassName("filter__menubtnopen");
    Array.from(menubtns).forEach((item) => {
      item.classList.remove("openedmenu");
    });

    var menubtnsContent = document.getElementsByClassName("filter__menu-items");

    Array.from(menubtnsContent).forEach((item) => {
      item.classList.remove("menuopened");
    });

    let menuAllLinks = document.querySelectorAll(".filter__input-btn");

    Array.from(menuAllLinks).forEach((item) => {
      item.classList.remove("inputactivebtn");
    });

    let inputcheckboxall = document.querySelectorAll('input[type="checkbox"]');

    Array.from(inputcheckboxall).forEach((item) => {
      item.checked = false;
    });

    const showmorebtns = document.querySelectorAll(".filter__menumaxhbtns");

    Array.from(showmorebtns).forEach((item) => {
      item.classList.remove("morebtnunshow");
    });

    var showmorebtnsContent = document.querySelectorAll(".filter__menu");
    Array.from(showmorebtnsContent).forEach((item) => {
      item.classList.add("menumaxh");
    });
  });
}

// items
if (document.querySelector(".main__content").classList.contains("cards")) {
  var itemsize = document.getElementsByClassName("main__item-size");

  var i;

  for (i = 0; i < itemsize.length; i++) {
    itemsize[i].addEventListener("click", function () {
      var itemsizecontent = this.previousElementSibling;
      this.classList.toggle("activebigsize");

      if (itemsizecontent.classList.contains("activesizescontent")) {
        itemsizecontent.classList.remove("activesizescontent");
      } else {
        itemsizecontent.classList.add("activesizescontent");
      }
    });
  }

  //  item active sizes

  var currentsizeItem = document.getElementsByClassName(
    "main__item-sizes-size"
  );

  var i;

  for (i = 0; i < currentsizeItem.length; i++) {
    currentsizeItem[i].addEventListener("click", function () {
      this.classList.toggle("activesize");
    });
  }
} else {
}

// card slider

if (document.querySelector(".main__content").classList.contains("cardnews")) {
  let cardnewsslider = $("#cardnewsSlider");

  cardnewsslider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".btnprev"),
    nextArrow: $(".main__news-btn"),
    responsive: [
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,

          nextArrow: $(".main__news-btn"),
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,

          nextArrow: $(".main__news-btn"),
        },
      },
    ],
  });

  let categoriesslider = $("#categoriesSlider");

  categoriesslider.slick({
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".btnprev"),
    nextArrow: $(".main__categories-btn"),

    responsive: [
      {
        breakpoint: 989,
        settings: {
          vertical: false,
          verticalSwiping: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          nextArrow: $(".main__categories-btn"),
        },
      },
      {
        breakpoint: 675,
        settings: {
          vertical: false,
          verticalSwiping: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          nextArrow: $(".main__categories-btn"),
        },
      },
      {
        breakpoint: 575,
        settings: {
          vertical: false,
          verticalSwiping: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: $(".main__categories-btn"),
        },
      },
    ],
  });

  let mobilecardslides = $("#mobslides");

  mobilecardslides.slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 675,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
}

if (document.querySelector(".main__content").classList.contains("buycard")) {
  // buycard input decrease/increase btns
  // document.addEventListener('click', function (e) {
  //    if (e.target.classList.contains("buycard__count-increase")) {
  //       ++e.target.parentElement.querySelector("input").value;
  //    } else if (e.target.classList.contains("buycard__count-decrease")) {
  //       --e.target.parentElement.querySelector("input").value;
  //    }
  // });
  // document.addEventListener('click', function (e) {
  //    if (e.target.classList.contains("buycard__count-increase")) {
  //       ++e.target.parentElement.querySelector(".buycard__count").value;
  //    } else if (e.target.classList.contains("buycard__count-decrease")) {
  //       --e.target.parentElement.querySelector(".buycard__count").value;
  //    }
  // });

  // btn choice type of pay

  btnpay = document.querySelector(".buycard__pay-btn");
  btnpay.addEventListener("click", function () {
    btnpay.classList.toggle("activepaybtn");

    var btnpayli = document.querySelectorAll(".buycard__pay-btn > ul >li");

    var i;

    for (i = 0; i < btnpayli.length; i++) {
      btnpayli[i].addEventListener("click", function () {
        Array.from(btnpayli).forEach((item) => {
          item.classList.remove("activepayli");
        });
        this.classList.toggle("activepayli");
      });
    }
  });

  //  check empty inputs

  var button = document.querySelector(".buycard__submitbtn");

  button.addEventListener("click", function (e) {
    $(".buycard__right-wrapper").each(function () {
      // Объявляем переменные (форма)
      var form = $(this);

      // Функция проверки полей формы

      form.find(".buycard__input").each(function () {
        if ($(this).val() != "") {
          // Если поле не пустое удаляем класс-указание

          $(this).removeClass("emptyinput");
        } else {
          // Если поле пустое добавляем класс-указание
          $(this).addClass("emptyinput");
        }
      });
    });
  });

  // Считаем стоимость  от кол-ва товара

  function plus(n) {
    var cena = document.getElementById("cena_" + n);
    var col = document.getElementById("col_" + n);
    var cenap = document.getElementById("cenap_" + n);
    var itog = document.getElementById("itog");

    col.innerHTML = 1 + Number(col.innerHTML);
    cenap.innerHTML = Number(cenap.innerHTML) + Number(cena.innerHTML);
    itog.innerHTML = Number(itog.innerHTML) + Number(cena.innerHTML);
  }
  function minus(n) {
    var cena = document.getElementById("cena_" + n);
    var col = document.getElementById("col_" + n);
    var cenap = document.getElementById("cenap_" + n);
    var itog = document.getElementById("itog");

    if (col.innerHTML != "0") {
      col.innerHTML = Number(col.innerHTML) - 1;
      cenap.innerHTML = Number(cenap.innerHTML) - Number(cena.innerHTML);
      itog.innerHTML = Number(itog.innerHTML) - Number(cena.innerHTML);
    }
  }

  // delete item from card

  var els = document.querySelectorAll(".buycard__delete");
  els.forEach(function (item) {
    item.addEventListener("click", function () {
      item.parentNode.parentNode.removeChild(item.parentNode);
    });
  });
}

// burger
let burger = document.querySelector(".burger");
let headerwrap = document.querySelector(".header__wrapper");
let header = document.querySelector(".header");
let navlinks = document.querySelector(".nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("activeburg");
  headerwrap.classList.toggle("openheaderwrap");
  header.classList.toggle("opennavheader");
  navlinks.classList.toggle("opennav");
});

// filter open btn for mobile

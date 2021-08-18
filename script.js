var sex1, sex2;
var result = {};
var code = {};

var play = false;
const frames = {
    1: "images/frames/frame 1.jpg",
    2: "images/frames/frame 2.jpg",
    3: "images/frames/frame 3.jpg",
    4: "images/frames/frame 4.jpg",
    5: "images/frames/frame 5.jpg",
    6: "images/frames/frame 6.jpg",
    7: "images/frames/frame 7.jpg",
    8: "images/frames/frame 8.jpg",
    9: "images/frames/frame 9.jpg",
    10: "images/frames/frame 10.jpg",
    11: "images/frames/frame 11.jpg",
    12: "images/frames/frame 12.jpg",
    13: "images/frames/frame 13.jpg",
    14: "images/frames/frame 14.jpg",
    15: "images/frames/frame 15.jpg",
    16: "images/frames/frame 16.jpg",
    17: "images/frames/frame 17.jpg",
    18: "images/frames/frame 18.jpg",
    19: "images/frames/frame 19.jpg",
    20: "images/frames/frame 20.jpg",
    21: "images/frames/frame 21.jpg",
    22: "images/frames/frame 22.jpg",
    23: "images/frames/frame 23.jpg",
    24: "images/frames/frame 24.jpg",
    25: "images/frames/frame 25.jpg",
    26: "images/frames/frame 26.jpg",
    27: "images/frames/frame 27.jpg",
    28: "images/frames/frame 28.jpg",
    29: "images/frames/frame 29.jpg",
    30: "images/frames/frame 30.jpg",
    31: "images/frames/frame 31.jpg",
    32: "images/frames/frame 32.jpg",
    33: "images/frames/frame 33.jpg",
    34: "images/frames/frame 34.jpg",
    35: "images/frames/frame 35.jpg",
    36: "images/frames/frame 36.jpg",
    37: "images/frames/frame 37.jpg",
    38: "images/frames/frame 38.jpg",
    39: "images/frames/frame 39.jpg",
    40: "images/frames/frame 40.jpg"
};

$(document).ready(() => {
  $(window).scroll(() => {
    let index = Math.min(Math.floor(window.scrollY / 50) + 1, 40);
    let image = frames[index];
    $("#image-container").css("background-image", `url("${image}")`);
  });
  let audio = document.getElementById("music");
  let button = $("#play-button");
  button.click(() => {
    if (!play)
      audio.play();
    else
      audio.pause();
    play = !play;
    button.toggleClass(["fa-play", "fa-pause"]);
  });

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
      if (link.hash !== "") {
        event.preventDefault();
        var hash = link.hash;
        $("html, body").animate({
          scrollTop: $(hash).offset().top
        }, 400, function() {
          window.location.hash = hash;
        });
      }
    }, true);
  });

  document.querySelectorAll(".sex-male").forEach(button => {
    button.addEventListener("click", event => {
      $("#sex-ques2").removeClass("d-none");
      let buttons = $(".sex-male");
      buttons.css({
        "background-color": "#000000",
        "color": "#FAFAFA"
      });
      $(button).css({
        "background-color": "#FAFAFA",
        "color": "#000000"
      });
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === button)
          sex1 = i;
      }
    }, true);
  });
});

function findsex() {
  if (sex1 == 0) {
    if (sex2 > 1) {
      result.sex = "female";
      code.sex = "01";
    }
  }
  else if (sex2 == 0) {
    if (sex1 > 1) {
      result.sex = "male";
      code.sex = "10";
    }
  }
  else {
    result.sex = "intersex";
    if (sex1 <= 1 && sex2 <= 1)
      code.sex = "00";
    else
      code.sex = "11";
  }
}

var sex, id, exp;
var code = {};
var sex1, sex2, choice;
var trans = false;
var ques = ["sex-ques2", "id-ques1", "id-ques2", "id-ques3", "id-ques4", "id-ques5"];

var female = {
  1: "Have you felt uncomfortable in your body because of the suggestion it makes about your gender—your stature / voice / shape / genitalia / etc?",
  2: "Have you felt pressurized by others to be a 'proper' woman?",
  3: "Do you feel troubled by the thought of remaining a woman for the rest of your life?",
  4: "Which of these gender spectrums feels the most natural and innate to you?",
  5: [
    "Do you sometimes feel detached from the concept of gender altogether?",
    "Do you sometimes feel detached from the concept of gender altogether?",
    "Do you move betweeen these two spectrums interchangeably?",
    "Do you feel detached from the concept of gender altogether?"
  ]
};

var male = {
  1: "Have you felt uncomfortable in your body because of the suggestion it makes about your gender—your stature / voice / shape / genitalia / etc?",
  2: "Have you felt pressurized by others to be a 'proper' man?",
  3: "Do you feel troubled by the thought of remaining a man for the rest of your life?",
  4: "Which of these gender spectrums feels the most natural and innate to you?",
  5: [
    "Do you sometimes feel detached from the concept of gender altogether?",
    "Do you sometimes feel detached from the concept of gender altogether?",
    "Do you move betweeen these two spectrums interchangeably?",
    "Do you feel detached from the concept of gender altogether?"
  ]
};

var intersex = {
  1: "Have you felt uncomfortable in your body because of the suggestion it makes about your gender—your stature / voice / shape / genitalia / etc?",
  2: "Have you felt pressurized by others to be a 'proper' man / woman?",
  3: "Do you feel troubled by the thought of existing as both masculine & feminine for the rest of your life?",
  4: "Which of these gender spectrums feels the most natural and innate to you?",
  5: [
    "Do you sometimes feel detached from the concept of gender altogether?",
    "Do you sometimes feel detached from the concept of gender altogether?",
    "Do you move betweeen these two spectrums interchangeably?",
    "Do you feel detached from the concept of gender altogether?"
  ]
};

$(document).ready(() => {
  $("a").each((index, link) => {
    link.addEventListener("click", event => {
      if (link.hash !== "") {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: $(link.hash).offset().top
        }, 400, function() {
          window.location.hash = link.hash;
        });
      }
    }, true);
  });

  $(".sex-male").each((index, button) => {
    button.addEventListener("click", event => {
      $("#sex-ques2").removeClass("d-none");
      $(".sex-male").removeClass("selected-white");
      $(button).addClass("selected-white");
      sex1 = index;
    }, true);
  });

  $(".sex-female").each((index, button) => {
    button.addEventListener("click", event => {
      $("#id-ques1").removeClass("d-none");
      $(".sex-female").removeClass("selected-black");
      $(button).addClass("selected-black");
      sex2 = index;
      findsex();
      $("#id-ques1 p").text(getques(1));
      $("#id-ques2 p").text(getques(2));
      $("#id-ques3 p").text(getques(3));
    }, true);
  });

  $(".id-1").each((index, button) => {
    button.addEventListener("click", event => {
      $("#id-ques2").removeClass("d-none");
      $(".id-1").removeClass("selected-black");
      $(button).addClass("selected-black");
    }, true);
  });

  $(".id-2").each((index, button) => {
    button.addEventListener("click", event => {
      $("#id-ques3").removeClass("d-none");
      $(".id-2").removeClass("selected-black");
      $(button).addClass("selected-black");
    }, true);
  });

  $(".id-3").each((index, button) => {
    button.addEventListener("click", event => {
      $(".id-3").removeClass("selected-black");
      $(button).addClass("selected-black");
      if (index == 0) {
        $("#id-ques3 a").attr("href", "#id-ques4");
        $("#id-ques4 p").text(getques(4));
        $("#id-ques4").removeClass("d-none");
      }
      else {
        $("#id-ques3 a").attr("href", "#exp-ques1");
        id = "woman";
        code.id = "010";
      }
    }, true);
  });

  $(".id-4").each((index, button) => {
    button.addEventListener("click", event => {
      $(".id-4").removeClass("selected-black");
      $(button).addClass("selected-black");
      choice = index;
      $("#id-ques5 p").text(getques(5)[choice]);
      $("#id-ques5").removeClass("d-none");
    }, true);
  });

  $(".id-5").each((index, button) => {
    button.addEventListener("click", event => {
      $(".id-5").removeClass("selected-black");
      $(button).addClass("selected-black");
      findid(index);
      $("#exp-ques1").removeClass("d-none");
    }, true);
  });

  $(".exp-1").each((index, button) => {
    button.addEventListener("click", event => {
      $(".exp-1").removeClass("selected-white");
      $(button).addClass("selected-white");
      findexp(index);
      console.log(exp);
    }, true);
  });

});

function findsex() {
  if (sex1 == 0) {
    if (sex2 > 1) {
      sex = "female";
      code.sex = "01";
    }
  }
  else if (sex2 == 0) {
    if (sex1 > 1) {
      sex = "male";
      code.sex = "10";
    }
  }
  else {
    result.sex = "intersex";
    if (sex1 <= 1 && sex2 <= 1)
      sex = "00";
    else
      code.sex = "11";
  }
}

function getques(index) {
  if (sex == "female")
    return female[index];
  else if (sex == "male")
    return male[index];
  else
    return intersex[index];
}

function findid(answer) {
  switch(choice) {
    case 0:
      if (Boolean(answer)) {
        id = "man";
        code.id = "100";
      }
      else {
        id = "demigender (demiboy)";
        code.id = "101";
      }
      break;
    case 1:
      if (Boolean(answer)) {
        id = "woman";
        code.id = "010";
      }
      else {
        id = "demigender (demigirl)";
        code.id = "011";
      }
      break;
    case 2:
      if (Boolean(answer)) {
        id = "bigender";
        code.id = "110";
      }
      else {
        id = "genderfluid";
        code.id = "111";
      }
      break;
    case 3:
      if (Boolean(answer)) {
        id = "agender/ genderlux";
        code.id = "000";
      }
      else {
        id = "genderless";
        code.id = "011";
      }
  }
}

function findexp(answer) {
  switch(answer) {
    case 0:
      exp = "masculine";
      code.exp = "10";
      break;
    case 1:
      exp = "feminine";
      code.exp = "01";
      break;
    case 2:
      exp = "androgynous";
      code.exp = "11";
      break;
    case 3:
      exp = "non-conforming";
      code.exp = "00";
  }
}

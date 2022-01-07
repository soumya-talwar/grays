var sex1, sex2, choice;
var sex, id, exp;
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

const female = {
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

const male = {
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

const intersex = {
  1: "Have you felt uncomfortable in your body because of the suggestion it makes about your gender—your stature / voice / shape / genitalia / etc?",
  2: "Have you felt pressurized by others to be a 'proper' man or woman?",
  3: "Do you feel troubled by the thought of living as the gender assigned to you at birth for the rest of your life?",
  4: "Which of these gender spectrums feels the most natural and innate to you?",
  5: [
    "Do you sometimes feel detached from the concept of gender altogether?",
    "Do you sometimes feel detached from the concept of gender altogether?",
    "Do you move betweeen these two spectrums interchangeably?",
    "Do you feel detached from the concept of gender altogether?"
  ]
};

const content = {
  "sex": {
    "female": "A female is often associated with sex characteristics such as a vagina, a uterus, wide hips, breasts and a high-pitched voice.",
    "male": "A male is often associated with sex characteristics such as a penis, testes, narrow hips, a prominent Adam's apple and a low-pitched voice.",
    "intersex": "An intersex individual possesses a combination of chromosomes, gonads, hormones, internal reproductive organs, and genitals that that, together, do not fit the typical traditional definition of male or female."
  },
  "id": {
    "agender": "People who identify as agender may describe themselves as genderless, genderfree, or as someone who does not know or care about gender as an internal identity or an external label.",
    "neutrois": "Neutrois is a non-binary gender identity which is often associated with a feeling of a 'neutral' or a 'null' gender that is neither masculine, feminine, nor anything in between, but still feeling strongly gendered.",
    "woman": "Woman is a gender identity which is part of the traditional gender binary. Women may be cisgender (assigned female at birth and identifying as women) or transgender (assigned male at birth and identifying as women).",
    "demigirl": "Demigender individuals have a partial connection to a certain gender. This includes the partly female identity demigirl. Also called a demiwoman or a demifemale person, demigirl is a gender identity describing someone who partially identifies as a woman.",
    "man": "Man is a gender identity which is part of the traditional gender binary. Men may be cisgender (assigned male at birth and identifying as male) or transgender (assigned female at birth and identifying as male).",
    "demiboy": "Demigender individuals have a partial connection to a certain gender. This includes the partly male identity demiboy. Also called a demiman or demimale person, demiboy is a gender identity describing someone who partially identifies as a man.",
    "multigender": "Multigender is a term for anyone who experiences more than one gender identity. It can be used as a gender identity in its own right, or can be an umbrella term for other identities which fit this description. Multigender identities include bigender (two genders), pangender (all genders) and genderfluid (variable gender) among others.",
    "genderfluid": "A genderfluid individual is a person who experiences different genders at different times, with different people and/or situations. They may at any time identify as a man, woman, agender, or any other non-binary identity, or even a combination of identities."
  },
  "exp": {
    "non-conforming": "A non-conforming gender expression is one that does not conform to the conventional expectations of the masculine and feminine.",
    "feminine": "A feminine expression involves a set of behaviours, presentations and roles that are culturally associated with being a woman. These attributes often include: elegance, gentleness, she/her pronouns, and clothing like dresses, skirts, heels, long hair and/or make-up.",
    "masculine": "A masculine expression involves a set of behaviours, presentations and roles that are culturally associated with being a man. These attributes often include: physical strength, assertiveness, aggression, he/him pronouns, and clothing like trousers, shirts, and short hair.",
    "androgynous": "Androgynous individuals express themselves in a manner that either ambiguously lies between or combines the traditional masculine and the traditional feminine."
  }
}

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

  if ($(window).width() < 992) {
    let view = document.getElementsByTagName("Viewpoint")[0];
    $(view).attr("position", "-1, 0, 18");
  }

  $("a").each((index, link) => {
    $(link).click(event => {
      if (link.hash !== "") {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: $(link.hash).offset().top
        }, 400);
      }
    });
  });

  $(".sex-male").each((index, button) => {
    $(button).click(() => {
      $("#sex-ques2").removeClass("d-none");
      $(".sex-male").removeClass("active");
      $(button).addClass("active");
      sex1 = index;
    });
  });

  $(".sex-female").each((index, button) => {
    $(button).click(() => {
      $("#id-ques1").removeClass("d-none");
      $(".sex-female").removeClass("active");
      $(button).addClass("active");
      sex2 = index;
      findsex();
      $("#id-ques1 p").text(getques(1));
      $("#id-ques2 p").text(getques(2));
      $("#id-ques3 p").text(getques(3));
      $("#id-ques4 p").text(getques(4));
    });
  });

  $(".id-1").each((index, button) => {
    $(button).click(() => {
      $("#id-ques2").removeClass("d-none");
      $(".id-1").removeClass("active");
      $(button).addClass("active");
    });
  });

  $(".id-2").each((index, button) => {
    $(button).click(() => {
      $("#id-ques3").removeClass("d-none");
      $(".id-2").removeClass("active");
      $(button).addClass("active");
    });
  });

  $(".id-3").each((index, button) => {
    $(button).click(() => {
      $("#id-ques4").removeClass("d-none");
      $(".id-3").removeClass("active");
      $(button).addClass("active");
    });
  });

  $(".id-4").each((index, button) => {
    $(button).click(() => {
      $(".id-4").removeClass("active");
      $(button).addClass("active");
      choice = index;
      $("#id-ques5 p").text(getques(5)[choice]);
      $("#id-ques5").removeClass("d-none");
    });
  });

  $(".id-5").each((index, button) => {
    $(button).click(() => {
      $(".id-5").removeClass("active");
      $(button).addClass("active");
      findid(index);
      $("#exp-ques1").removeClass("d-none");
    });
  });

  $(".exp-1").each((index, button) => {
    $(button).click(() => {
      $(".exp-1").removeClass("active");
      $(button).addClass("active");
      $("#result").removeClass("d-none");
      findexp(index);
      $("#result h1").text(code.sex + "," + code.id + "," + code.exp);
      $("#result p").eq(1).text(sex + ", " + id + ", " + exp);
      $("#result li").eq(0).html("<u>biological sex : " + sex + " (" + code.sex + ")</u><br><br>" + content.sex[sex]);
      $("#result li").eq(1).html("<u>gender identity : " + id + " (" + code.id + ")</u><br><br>" + content.id[id]);
      $("#result li").eq(2).html("<u>gender expression : " + exp + " (" + code.exp + ")</u><br><br>" + content.exp[exp]);
      $("#conclusion").removeClass("d-none");
    });
  });

  let matrix = $("#matrix");
  let button2 = $("#toggle-matrix");
  button2.click(() => {
    if (matrix.hasClass("d-none"))
      button2.text("hide matrix");
    else
      button2.text("show matrix");
    matrix.toggleClass(["d-none", "col-12", "col-lg-10"]);
  });

  $("#show-glossary").click(() => {
    $("#glossary").removeClass("d-none");
  });
});

function findsex() {
  if (sex1 == 0 && sex2 > 0) {
    sex = "female";
    code.sex = "01";
  } else if (sex2 == 0 && sex1 > 0) {
    sex = "male";
    code.sex = "10";
  } else {
    sex = "intersex";
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
  switch (choice) {
    case 0:
      if (Boolean(answer)) {
        id = "man";
        code.id = "100";
      } else {
        id = "demiboy";
        code.id = "101";
      }
      break;
    case 1:
      if (Boolean(answer)) {
        id = "woman";
        code.id = "010";
      } else {
        id = "demigirl";
        code.id = "011";
      }
      break;
    case 2:
      if (Boolean(answer)) {
        id = "multigender";
        code.id = "110";
      } else {
        id = "genderfluid";
        code.id = "111";
      }
      break;
    case 3:
      if (Boolean(answer)) {
        id = "agender";
        code.id = "000";
      } else {
        id = "neutrois";
        code.id = "001";
      }
  }
}

function findexp(answer) {
  switch (answer) {
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
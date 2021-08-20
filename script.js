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

var content = {
  "sex": {
    "female": "A female is often associated with sex characteristics such as a vagina, a uterus, wide hips, breasts and a high-pitched voice.",
    "male": "A male is often associated with sex characteristics such as a penis, testes, narrow hips, a prominent Adam's apple and a low-pitched voice.",
    "intersex": "An intersex individual possesses a combination of chromosomes, gonads, hormones, internal reproductive organs, and genitals that that, together, do not fit the typical traditional definition of male or female."
  },
  "id": {
    "agender": "People who identify as agender may describe themselves as genderless, genderfree, or as someone who does not know or care about gender as an internal identity or an external label.",
    "neutrois": "Neutrois is a non-binary gender identity which is often associated with a feeling of a 'neutral' or a 'null' gender that is neither masculine, feminine, nor anything in between, but still feeling strongly gendered.",
    "woman": "Woman is a gender identity which is part of the traditional gender binary. Women may be cisgender (assigned female at birth and identifying as women) or transgender (assigned male at birth and identifying as women).",
    "demigender (demigirl)": "Demigender individuals have a partial connection to a certain gender. This includes the partly female identity demigirl. Also called a demiwoman or a demifemale person, demigirl is a gender identity describing someone who partially identifies as a woman.",
    "man": "Man is a gender identity which is part of the traditional gender binary. Men may be cisgender (assigned male at birth and identifying as male) or transgender (assigned female at birth and identifying as male).",
    "demiboy": "Demigender individuals have a partial connection to a certain gender. This includes the partly male identity demiboy. Also called a demiman or demimale person, demiboy is a gender identity describing someone who partially identifies as a man.",
    "bigender": "Multigender is a term for anyone who experiences more than one gender identity. It can be used as a gender identity in its own right, or can be an umbrella term for other identities which fit this description. Multigender identities include bigender (two genders), pangender (all genders) and genderfluid (variable gender) among others.",
    "genderfluid": "A genderfluid individual is a person who experiences different genders with different times, people and/or situations. They may at any time identify as a man, woman, agender, or any other non-binary identity, or even a combination of identities."
  },
  "exp": {
    "non-conforming": "A non-conforming gender expression is one that does not conform to the conventional expectations of the masculine and feminine.",
    "feminine": "A feminine expression involves a set of behaviours, presentations and roles that are culturally associated with being a woman. These attributes often include: elegance, gentleness, she/her pronouns, and clothing like dresses, skirts, heels, long hair and/or make-up.",
    "masculine": "A masculine expression involves a set of behaviours, presentations and roles that are culturally associated with being a man. These attributes often include: physical strength, assertiveness, aggression, he/him pronouns, and clothing like trousers, shirts, and short hair.",
    "androgynous": "Androgynous individuals express themselves in a manner that either ambiguously lies between or combines the traditional masculine and the traditional feminine."
  }
}

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
      } else {
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
      $("#result h1").text(code.sex + "," + code.id + "," + code.exp);
      $("#result p").text(sex + ", " + id + ", " + exp);
      $("#result").removeClass("d-none");
    }, true);
  });

});

function findsex() {
  if (sex1 == 0) {
    if (sex2 > 1) {
      sex = "female";
      code.sex = "01";
    }
  } else if (sex2 == 0) {
    if (sex1 > 1) {
      sex = "male";
      code.sex = "10";
    }
  } else {
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
  switch (choice) {
    case 0:
      if (!Boolean(answer)) {
        id = "man";
        code.id = "100";
      } else {
        id = "demigender (demiboy)";
        code.id = "101";
      }
      break;
    case 1:
      if (!Boolean(answer)) {
        id = "woman";
        code.id = "010";
      } else {
        id = "demigender (demigirl)";
        code.id = "011";
      }
      break;
    case 2:
      if (!Boolean(answer)) {
        id = "bigender";
        code.id = "110";
      } else {
        id = "genderfluid";
        code.id = "111";
      }
      break;
    case 3:
      if (!Boolean(answer)) {
        id = "agender / genderlux";
        code.id = "000";
      } else {
        id = "genderless";
        code.id = "011";
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
$(document).ready(function () {
  let mainMove = gsap.timeline();

  mainMove.to(".main_contents img", {
    duration: 1,
    opacity: 1,
    scale: 1,
    ease: "bounce.out",
  });

  mainMove.to(
    [".main_contents h2", ".main_contents h3"],
    {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "bounce.out",
      stagger: 0.1,
    },
    "-=0.5"
  );

  $("#about_contents").hide();
  $(".about > button .fa-xmark").hide();

  $(".welcome > button").click(function () {
    $("#welcome_contents").show();
    $(".fa-xmark").show();
    $(this).css("color", "#e9e9e9");

    $(".welcome").css({
      background: "#1b1b1b",
      width: "170px",
    });

    $(".about").css({
      background: "#272727",
      width: "150px",
    });

    $(".about > button > .fa-xmark").css("display", "none");
    $(".stacks > button > .fa-xmark").css("display", "none");
  });

  $(".about > button").click(function () {
    $("#about_contents").show();
    $("#welcome_contents").hide();
    $(".fa-xmark").show();
    $(this).css("color", "#e9e9e9");

    $(".about").css({
      background: "#1b1b1b",
      width: "175px",
    });

    $(".welcome").css({
      background: "#272727",
      width: "140px",
    });

    $(".welcome > button > .fa-xmark").css("display", "none");
    $(".stacks > button > .fa-xmark").css("display", "none");
  });

  $(".stacks > button").click(function () {
    $("#stacks_contents").show();
    $("#welcome_contents, #about_contents").hide();
    $(".fa-xmark").css("display", "block");
    $(this).css("color", "#e9e9e9");

    $(".stacks").css({
      background: "#1b1b1b",
      width: "175px",
    });

    $(".welcome").css({
      background: "#272727",
      width: "140px",
    });

    $(".about").css({
      background: "#272727",
      width: "150px",
    });

    $(".welcome > button > .fa-xmark").css("display", "none");
    $(".about > button > .fa-xmark").css("display", "none");
  });
});

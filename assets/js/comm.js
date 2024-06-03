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
  $("#stacks_contents").hide();
  $(".about > button .fa-xmark").hide();
  $(".stacks > button .fa-xmark").hide();

  $(".welcome > button").click(function () {
    $("#welcome_contents").show();
    $(".fa-xmark").show();
    $(this).css({
      color: "#e9e9e9",
      fontStyle: "italic",
    });

    $(".welcome").css({
      background: "#1b1b1b",
      width: "170px",
    });

    $(".about").css({
      background: "#272727",
      width: "150px",
    });

    $(".stacks").css({
      background: "#272727",
      width: "150px",
    });

    $(".about > button").css("color", "#797979");
    $(".stacks > button").css("color", "#797979");
    $("#jsfile").css("background", "#202020");
    $("#jsfile a").css("color", "#9f9f9f");
    $("#html").css("background", "#202020");
    $("#html a").css("color", "#9f9f9f");
    $(".about > button > .fa-xmark").css("display", "none");
    $(".stacks > button > .fa-xmark").css("display", "none");
  });

  $(".about > button").click(function () {
    $("#about_contents").show();
    $("#welcome_contents, #stacks_contents").hide();
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

    $(".stacks").css({
      background: "#272727",
      width: "150px",
    });

    $(".welcome > button").css({
      color: "#797979",
      fontStyle: "normal",
    });

    $(".stacks > button").css("color", "#797979");
    $("#html").css("background", "#333");
    $("#html a").css("color", "white");
    $("#jsfile").css("background", "#202020");
    $("#jsfile a").css("color", "#9f9f9f");
    $(".welcome > button > .fa-xmark").css("display", "none");
    $(".stacks > button > .fa-xmark").css("display", "none");
  });

  $(".stacks > button").click(function () {
    $("#stacks_contents").show();
    $("#welcome_contents, #about_contents").hide();
    $(".fa-xmark").show();
    $(this).css("color", "#e9e9e9");

    $(".stacks").css({
      background: "#1b1b1b",
      width: "160px",
    });

    $(".welcome").css({
      background: "#272727",
      width: "140px",
    });

    $(".about").css({
      background: "#272727",
      width: "150px",
    });

    $(".welcome > button").css({
      color: "#797979",
      fontStyle: "normal",
    });

    $(".about > button").css("color", "#797979");
    $("#jsfile").css("background", "#333");
    $("#jsfile a").css("color", "white");
    $("#html").css("background", "#202020");
    $("#html a").css("color", "#9f9f9f");
    $(".welcome > button > .fa-xmark").css("display", "none");
    $(".about > button > .fa-xmark").css("display", "none");
  });

  $("#html > a").click(function () {
    $("#about_contents").show();
    $("#welcome_contents, #stacks_contents").hide();
    $(".about > button .fa-xmark").show();
    $(".about > button").css("color", "#e9e9e9");

    $(".about").css({
      background: "#1b1b1b",
      width: "175px",
    });

    $(".welcome").css({
      background: "#272727",
      width: "140px",
    });

    $(".stacks").css({
      background: "#272727",
      width: "150px",
    });

    $(".welcome > button").css({
      color: "#797979",
      fontStyle: "normal",
    });

    $("#html").css("background", "#333");
    $("#html a").css("color", "white");
    $("#jsfile").css("background", "#202020");
    $("#jsfile a").css("color", "#9f9f9f");
  });

  $("#jsfile > a").click(function () {
    $("#stacks_contents").show();
    $("#welcome_contents, #about_contents").hide();
    $(".stacks > button .fa-xmark").show();
    $(".stacks > button").css("color", "#e9e9e9");

    $(".stacks").css({
      background: "#1b1b1b",
      width: "160px",
    });

    $(".welcome").css({
      background: "#272727",
      width: "140px",
    });

    $(".about").css({
      background: "#272727",
      width: "150px",
    });

    $(".welcome > button").css({
      color: "#797979",
      fontStyle: "normal",
    });

    $("#jsfile").css("background", "#333");
    $("#jsfile a").css("color", "white");
    $("#html").css("background", "#202020");
    $("#html a").css("color", "#9f9f9f");
  });
});

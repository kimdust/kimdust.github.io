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

  $("#about_contents, #stacks_contents, #project_contents").hide();
  $(".about > button .fa-xmark").hide();
  $(".stacks > button .fa-xmark").hide();

  $(".welcome > button").click(function () {
    $("#welcome_contents").show();
    $("#about_contents, #stacks_contents, #project_contents").hide();
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

    $(".menu_bar").css("height", "calc(100vh - 37px)");
    $(".folder").css("height", "calc(100vh - 37px)");
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
    $("#welcome_contents, #stacks_contents, #project_contents").hide();
    $(".fa-xmark").show();
    $(this).css("color", "#e9e9e9");

    $("#doc_svg .cls-1").css("stroke", "#e9e9e9");
    $("#contect_svg .cls-1, #project_svg .cls-1").css("stroke", "#79797a");
    $(".folder").css("opacity", "1");
    $(".contect_search, .project_small").css("opacity", "0");

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

    $(".menu_bar").css("height", "calc(160vh - 37px)");
    $(".folder").css("height", "calc(160vh - 37px)");
    $(".stacks > button").css("color", "#797979");
    $("#html").css("background", "#333");
    $("#html a").css("color", "#e9e9e9");
    $("#jsfile").css("background", "#202020");
    $("#jsfile a").css("color", "#9f9f9f");
    $(".welcome > button > .fa-xmark").css("display", "none");
    $(".stacks > button > .fa-xmark").css("display", "none");
  });

  $(".stacks > button").click(function () {
    $("#stacks_contents").show();
    $("#welcome_contents, #about_contents, #project_contents").hide();
    $(".fa-xmark").show();
    $(this).css("color", "#e9e9e9");

    $("#doc_svg .cls-1").css("stroke", "#e9e9e9");
    $("#contect_svg .cls-1, #project_svg .cls-1").css("stroke", "#79797a");
    $(".folder").css("opacity", "1");
    $(".contect_search, .project_small").css("opacity", "0");

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

    $(".menu_bar").css("height", "calc(100vh - 37px)");
    $(".folder").css("height", "calc(100vh - 37px)");
    $(".about > button").css("color", "#797979");
    $("#jsfile").css("background", "#333");
    $("#jsfile a").css("color", "#e9e9e9");
    $("#html").css("background", "#202020");
    $("#html a").css("color", "#9f9f9f");
    $(".welcome > button > .fa-xmark").css("display", "none");
    $(".about > button > .fa-xmark").css("display", "none");
  });

  $("#html > a").click(function () {
    $("#about_contents").show();
    $("#welcome_contents, #stacks_contents, #project_contents").hide();
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

    $(".menu_bar").css("height", "calc(160vh - 37px)");
    $(".folder").css("height", "calc(160vh - 37px)");
    $("#html").css("background", "#333");
    $("#html a").css("color", "#e9e9e9");
    $("#jsfile").css("background", "#202020");
    $("#jsfile a").css("color", "#9f9f9f");
  });

  $("#jsfile > a").click(function () {
    $("#stacks_contents").show();
    $("#welcome_contents, #about_contents, #project_contents").hide();
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

    $(".menu_bar").css("height", "calc(100vh - 37px)");
    $(".folder").css("height", "calc(100vh - 37px)");
    $("#jsfile").css("background", "#333");
    $("#jsfile a").css("color", "#e9e9e9");
    $("#html").css("background", "#202020");
    $("#html a").css("color", "#9f9f9f");
  });

  const skills = document.querySelectorAll("#stacks_contents li img");

  skills.forEach((skill) => {
    skill.addEventListener("mouseenter", () => {
      gsap.to(skill, {
        y: -10,
        duration: 0.5,
        ease: "bounce.out",
      });
    });

    skill.addEventListener("mouseleave", () => {
      gsap.to(skill, {
        y: 0,
        duration: 0.5,
        ease: "bounce.out",
      });
    });
  });

  $("#doc_svg .cls-1").css("stroke", "#e9e9e9");
  $(".project_small, .contect_search").css("opacity", "0");

  $("#doc").click(function () {
    $("#doc_svg .cls-1").css("stroke", "#e9e9e9");
    $("#contect_svg .cls-1, #project_svg .cls-1").css("stroke", "#79797a");
    $(".folder").css({ opacity: "1", zIndex: "1" });
    $(".project_small, .contect_search").css({ opacity: "0", zIndex: "0" });

    $(".welcome").css({
      background: "#272727",
      width: "140px",
    });

    $(".welcome > button").css({
      color: "#797979",
      fontStyle: "normal",
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
  });

  $("#project").click(function () {
    $("#project_svg .cls-1").css("stroke", "#e9e9e9");
    $("#doc_svg .cls-1, #contect_svg .cls-1").css("stroke", "#79797a");
    $(".project_small").css({ opacity: "1", zIndex: "1" });
    $(".folder, .contect_search").css({ opacity: "0", zIndex: "0" });
    $("#project_contents").show();
    $("#welcome_contents, #about_contents, #stacks_contents").hide();

    $(".welcome").css({
      background: "#272727",
      width: "140px",
    });

    $(".welcome > button").css({
      color: "#797979",
      fontStyle: "normal",
    });

    $(".about").css({
      background: "#272727",
      width: "150px",
    });

    $(".stacks").css({
      background: "#272727",
      width: "150px",
    });

    $(".menu_bar").css("height", "calc(100vh - 37px)");
    $(".folder").css("height", "calc(100vh - 37px)");
    $(".about > button").css("color", "#797979");
    $(".stacks > button").css("color", "#797979");
    $(".welcome > button > .fa-xmark").css("display", "none");
    $(".about > button > .fa-xmark").css("display", "none");
    $(".stacks > button > .fa-xmark").css("display", "none");
  });

  $("#contect").click(function () {
    $("#contect_svg .cls-1").css("stroke", "#e9e9e9");
    $("#doc_svg .cls-1, #project_svg .cls-1").css("stroke", "#79797a");
    $(".contect_search").css({ opacity: "1", zIndex: "1" });
    $(".project_small, .folder").css({ opacity: "0", zIndex: "0" });

    $(".welcome").css({
      background: "#272727",
      width: "140px",
    });

    $(".welcome > button").css({
      color: "#797979",
      fontStyle: "normal",
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
  });
});

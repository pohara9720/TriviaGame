$(document).ready(function() {


    //////////////////////////////////Variables//////////////////////////////////////
    var questionsArray = [{
        question: "Why was the chainsaw first created?",
        answer: ["Surgical Procedures", "Cutting down trees faster", "Hunting"]
    }, {
        question: "What other industry did Apple try their hand in other then technology?",
        answer: ["Film", "Food", "Fashion"]

    }, {
        question: "How do male crabs seduce lady crabs",
        answer: ["Waving their claws", "Digging a hole big enough for the male and lady crab", "Chopping up fish for the lady crab to eat"]
    }]

    var imageArray = [{
            image: "assets/images/chainsaw.jpeg",
            html: "The chainsaw was originally created for surigical procedures in 1830!"
        }, {
            image: "assets/images/crab.jpg",
            html: "Crabs use their claws to wave at female crabs. Typically the Crab with the largest claw gets the most attention."
        }, {
            image: "assets/images/apple.jpeg",
            html: "Apple tried releasing a clothing line in 1986 called 'The Apple Collection'. It failed miserably."
        }]
        //////////////////////////////////Jquery Functions//////////////////////////////////////
    function newQuestion(question) {
        $("#Question").html(question.question);
        $("#option1").html(question.answer[0]);
        $("#option2").html(question.answer[1]);
        $("#option3").html(question.answer[2]);
        $("#image").attr("src", "assets/images/hand.jpg");
    }

    function images(image) {
        $("#Question").html(image.html);
        $("#image").attr("src", image.image);
        $("#options").addClass("hide");
    }
    ///////////////////////////////////////Question 1//////////////////////////////////
    $("#Start").on("click", function() {
        $("#Start").remove();
        $("#options").removeClass("hide");
        newQuestion(questionsArray[0]);

        $("#option1").on("click", function() {
            $("#boo").html("Correct!");
            images(imageArray[0]);
            setTimeout(
                function() {
                    newQuestion(questionsArray[1]);
                    $("#boo").addClass("hide");
                    $("#options").removeClass("hide");
                    $("#option1").on("click", function() {
                        $("#boo").html("Correct!").removeClass("hide");
                        images(imageArray[2]);
                        setTimeout(
                            function() {
                                newQuestion(questionsArray[2]);
                                $("#boo").addClass("hide");
                                $("#options").removeClass("hide");
                                $("#option1").on("click", function() {
                                    $("#boo").html("Correct!").removeClass("hide");
                                    images(imageArray[1]);
                                    setTimeout(
                                        function() {
                                            $("#Question").html("Game Over")
                                            $("#options").addClass("hide");
                                        }, 5000);
                                });
                                $("#option2").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                    setTimeout(
                                        function() {
                                            $("#Question").html("Game Over")
                                            $("#options").addClass("hide");
                                        }, 5000);
                                });
                                $("#option3").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                    setTimeout(
                                        function() {
                                            $("#Question").html("Game Over")
                                            $("#options").addClass("hide");
                                        }, 5000);
                                });
                            }, 5000);

                    });
                    $("#option2").on("click", function() {
                        $("#boo").html("WRONG!").removeClass("hide");
                        images(imageArray[2]);
                        setTimeout(
                            function() {
                                newQuestion(questionsArray[2]);
                                $("#boo").addClass("hide");
                                $("#options").removeClass("hide");
                                $("#option1").on("click", function() {
                                    $("#boo").html("Correct!").removeClass("hide");
                                    images(imageArray[1]);
                                    setTimeout(
                                        function() {
                                            $("#Question").html("Game Over")
                                            $("#options").addClass("hide");
                                        }, 5000);
                                });
                                $("#option2").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                    setTimeout(
                                        function() {
                                            $("#Question").html("Game Over")
                                            $("#options").addClass("hide");
                                        }, 5000);
                                });
                                $("#option3").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                    setTimeout(
                                        function() {
                                            $("#Question").html("Game Over")
                                            $("#options").addClass("hide");
                                        }, 5000);
                                });
                            }, 5000);
                    });
                    $("#option3").on("click", function() {
                        $("#boo").html("Correct!").removeClass("hide");
                        images(imageArray[2]);
                        setTimeout(
                            function() {
                                newQuestion(questionsArray[2]);
                                $("#boo").addClass("hide");
                                $("#options").removeClass("hide");
                                $("#option1").on("click", function() {
                                    $("#boo").html("Correct!").removeClass("hide");
                                    images(imageArray[1]);
                                    setTimeout(
                                        function() {
                                            $("#Question").html("Game Over")
                                            $("#options").addClass("hide");
                                        }, 5000);
                                });
                                $("#option2").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                    setTimeout(
                                        function() {
                                            $("#Question").html("Game Over")
                                            $("#options").addClass("hide");
                                        }, 5000);
                                });
                                $("#option3").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                    setTimeout(
                                        function() {
                                            $("#Question").html("Game Over")
                                            $("#options").addClass("hide");
                                        }, 5000);
                                });
                            }, 5000);
                    });
                }, 5000);

        });
        $("#option2").on("click", function() {
            $("#boo").html("WRONG!");
            images(imageArray[0]);
            setTimeout(
                function() {
                    newQuestion(questionsArray[1]);
                    $("#boo").addClass("hide");
                    $("#options").removeClass("hide");
                    $("#option1").on("click", function() {
                        $("#boo").html("Correct!").removeClass("hide");
                        images(imageArray[2]);
                        setTimeout(
                            function() {
                                newQuestion(questionsArray[2]);
                                $("#boo").addClass("hide");
                                $("#options").removeClass("hide");
                                $("#option1").on("click", function() {
                                    $("#boo").html("Correct!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option2").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option3").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                            }, 5000);
                    });
                    $("#option2").on("click", function() {
                        $("#boo").html("WRONG!").removeClass("hide");
                        images(imageArray[2]);
                        setTimeout(
                            function() {
                                newQuestion(questionsArray[2]);
                                $("#boo").addClass("hide");
                                $("#options").removeClass("hide");
                                $("#option1").on("click", function() {
                                    $("#boo").html("Correct!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option2").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option3").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                            }, 5000);
                    });
                    $("#option3").on("click", function() {
                        $("#boo").html("WRONG!").removeClass("hide");
                        images(imageArray[2]);
                        setTimeout(
                            function() {
                                newQuestion(questionsArray[2]);
                                $("#boo").addClass("hide");
                                $("#options").removeClass("hide");
                                $("#option1").on("click", function() {
                                    $("#boo").html("Correct!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option2").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option3").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                            }, 5000);
                    });
                }, 5000);

        });
        $("#option3").on("click", function() {
            $("#boo").html("WRONG!");
            images(imageArray[0]);
            setTimeout(
                function() {
                    newQuestion(questionsArray[1]);
                    $("#boo").addClass("hide");
                    $("#options").removeClass("hide");
                    $("#option1").on("click", function() {
                        $("#boo").html("Correct!").removeClass("hide");
                        images(imageArray[2]);
                        setTimeout(
                            function() {
                                newQuestion(questionsArray[2]);
                                $("#boo").addClass("hide");
                                $("#options").removeClass("hide");
                                $("#option1").on("click", function() {
                                    $("#boo").html("Correct!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option2").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option3").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                            }, 5000);
                    });
                    $("#option1").on("click", function() {
                        $("#boo").html("WRONG!").removeClass("hide");
                        images(imageArray[2]);
                        setTimeout(
                            function() {
                                newQuestion(questionsArray[2]);
                                $("#boo").addClass("hide");
                                $("#options").removeClass("hide");
                                $("#option1").on("click", function() {
                                    $("#boo").html("Correct!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option2").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option3").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                            }, 5000);
                    });
                    $("#option1").on("click", function() {
                        $("#boo").html("WRONG!").removeClass("hide");
                        images(imageArray[2]);
                        setTimeout(
                            function() {
                                newQuestion(questionsArray[2]);
                                $("#boo").addClass("hide");
                                $("#options").removeClass("hide");
                                $("#option1").on("click", function() {
                                    $("#boo").html("Correct!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option2").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                                $("#option3").on("click", function() {
                                    $("#boo").html("WRONG!").removeClass("hide");
                                    images(imageArray[1]);
                                });
                            }, 5000);
                    });
                }, 5000);

        });

    });


    ///////////////////////////////////////Question 2//////////////////////////////////




});


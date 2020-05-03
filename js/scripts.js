$(document).ready(function () {


    //Screen One Explore Event
    $("#explore").on("click keydown", function () {
        $("#onBoard").fadeOut(function () {
            $("#browse").fadeIn().css("display", "grid");
        });
    });

    //goodShep Event
    $("#goodShep").on("click keydown", function () {
        $("#browse").fadeOut(function () {
            $("#chartGoodShep").fadeIn().css("display", "grid");
        });
    });

    //fred Event
    $("#fred").on("click keydown", function () {
        $("#browse").fadeOut(function () {
            $("#chartFred").fadeIn().css("display", "grid");
        });
    });

    //eva Event
    $("#eva").on("click keydown", function () {
        $("#browse").fadeOut(function () {
            $("#chartEva").fadeIn().css("display", "grid");
        });
    });

    //covenant Event
    $("#covenant").on("click keydown", function () {
        $("#browse").fadeOut(function () {
            $("#chartCovenant").fadeIn().css("display", "grid");
        });
    });

    //ywca Event
    $("#ywca").on("click keydown", function () {
        $("#browse").fadeOut(function () {
            $("#chartYwca").fadeIn().css("display", "grid");
        });
    });



    //Screen One Charity Event

        //ywca Event
        $("#donate").on("click keydown", function () {
            $("#onboard").fadeOut(function () {
                $("#donateSelect").fadeIn().css("display", "grid");
            });
        });
    







});
$(document).ready (function() {

    var currentPlayer = "X";
    var totalTurns = 0;
    var endGame = false;
    var tileOne, tileTwo, tileThree;

    function performLogic (button, tile) {
        totalTurns++;
        console.log("totalTurn = " + totalTurns + " endGame = " + endGame);
        checkWinner (tileOne, tileTwo, tileThree);

        if (totalTurns%2!=0) {
            $(button).hide();
            $(tile).text("X");
            $("#turn").text("Now, it's O's turn!");
        }

        else if (totalTurns%2===0) {
            $(button).hide();
            $(tile).text("O");
            $("#turn").text("Go ahead, X!");
        }
    };

    function checkWinner (tile1, tile2, tile3) {
        
    }

    $("#button1").click(function() {
        performLogic("#button1","#tile1");
    });

    $("#button2").click(function() {
        performLogic("#button2","#tile2");
    });

    $("#button3").click(function() {
        performLogic("#button3","#tile3");
    });

    $("#button4").click(function() {
        performLogic("#button4","#tile4");
    });

    $("#button5").click(function() {
        performLogic("#button5","#tile5");
    });

    $("#button6").click(function() {
        performLogic("#button6","#tile6");
    });

    $("#button7").click(function() {
        performLogic("#button7","#tile7");
    });

    $("#button8").click(function() {
        performLogic("#button8","#tile8");
    });

    $("#button9").click(function() {
        performLogic("#button9","#tile9");
    });

});
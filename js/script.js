$(document).ready (function() {

    var totalTurns = 0;
    var currentPlayer;
    var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9;
    var endGame = false;
    var winner;

    function performLogic (button, tile) {

        totalTurns++;

        if (totalTurns===9) {
            console.log ("totalTurns is finally 9!")
            endGame = true;
         }

        if (totalTurns%2!=0) {
            $(button).hide();
            $(tile).text("X");
            $("#turn").text("Now, it's O's turn!")
            currentPlayer = "X";
            return "X";
        }

        else  {
            $(button).hide();
            $(tile).text("O");
            $("#turn").text("Go ahead, X!");
            currentPlayer = "O";
            return "O";
        }

    };

    function checkWinner () {

        //horizontal winners
        if (((tile1===tile2 && tile1===tile3)&&(tile1!=undefined)) ||
            ((tile4===tile5 && tile4===tile6)&&(tile4!=undefined)) || 
            ((tile7===tile8 && tile7===tile9)&&(tile7!=undefined))) {
            endGame = true;
        }

        //vertical winners
        if (((tile1===tile4 && tile1===tile7)&&(tile1!=undefined)) ||
            ((tile2===tile5 && tile2===tile8)&&(tile2!=undefined)) || 
            ((tile3===tile6 && tile3===tile9)&&(tile3!=undefined))) {
            endGame = true;
        }

        //diagonal winners
        if (((tile1===tile5 && tile1===tile9)&&(tile1!=undefined)) ||
            ((tile3===tile5 && tile3===tile7)&&(tile3!=undefined))) {
            endGame = true;
        }
    }

    function endGameMove () {
        if (endGame===true) {
            $("button").hide();
            $("#turn").hide();
            $("h1").text(currentPlayer + " WON!!!").css("color","#715fba");
        }
    }

    $("#button1").click(function() {
        tile1 = performLogic("#button1","#tile1");
        checkWinner();
        endGameMove();
    });

    $("#button2").click(function() {
        tile2 = performLogic("#button2","#tile2");
        checkWinner();
        endGameMove();
    });

    $("#button3").click(function() {
        tile3 = performLogic("#button3","#tile3");
        checkWinner();
        endGameMove();
    });

    $("#button4").click(function() {
        tile4 = performLogic("#button4","#tile4");
        checkWinner();
        endGameMove();
    });

    $("#button5").click(function() {
        tile5 = performLogic("#button5","#tile5");
        checkWinner();
        endGameMove();
    });

    $("#button6").click(function() {
        tile6 = performLogic("#button6","#tile6");
        checkWinner();
        endGameMove();
    });

    $("#button7").click(function() {
        tile7 = performLogic("#button7","#tile7");
        checkWinner();
        endGameMove();
    });

    $("#button8").click(function() {
        tile8 = performLogic("#button8","#tile8");
        checkWinner();
        endGameMove();
    });

    $("#button9").click(function() {
        tile9 = performLogic("#button9","#tile9");
        checkWinner();
        endGameMove();
    });

});
var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var color = "black";

var width = "1";

var radius = "40";

var last_position_of_x;
var last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;

    mouseEvent = "mouseDown";
};

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{

    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {

        console.log("Current Position of X and Y Coordinates = ");

        console.log("X = " + current_position_of_x + " Y = " + current_position_of_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_x, current_position_of_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();

    };

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

};

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e)
{
    mouseEvent = "mouseUp";

    console.log(mouseEvent);

};

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";

    console.log(mouseEvent);

};

window.addEventListener("keydown", keydown);

function keydown(e)
{
    keyPressed = e.keyCode;

    console.log(keyPressed);

    if (keyPressed == "27")
    {
        clearArea();

        console.log("Esc Clicked!");
    }
}

function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

};

var num1;
var num2;
var whichFunction;

$(".btn").click(storeNum);



function storeNum (e) {
	num1 = parseInt($("#numInput").val());
	$("#numInput").val("").focus();
	console.log(num1);
	whichFunction = $(this).html().toLowerCase();
	console.log(whichFunction);
	return num1;
};

$("#numInput").keyup( function() {
	if (event.keyCode === 13) {
		storeNum2();
	};
})

function storeNum2 (e) {
	num2 = parseInt($("#numInput").val());
	$("#numInput").val("");
	console.log(num2);
	$("#numInput").val((window[whichFunction](num1, num2)));
	$("#outputEl").text((window[whichFunction](num1, num2)));
	return num2;
};
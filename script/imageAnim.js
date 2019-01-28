(() => {
	console.log('fired');

	const theButton = document.querySelector("#buttonHolder img");

	//window.addEventListener("load", changeHeadLine);
	//window.addEventListener("load", changePLine);

	function changeHeadLine(){
		document.querySelector("h1").textContent = "hello there from js";
		document.querySelector('p').textContent = "it's me";
	}

	// set up the puzzle pieces and boards
	// 
	theButton.addEventListener("click", changeHeadLine);
})();

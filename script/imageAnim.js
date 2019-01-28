(() => {
	console.log('fired');
	// set up the puzzle pieces and boards
	// need a reference to each piece that we want to create
	const thePieces = ["topleft", "topright", "bottomleft", "bottomright"];

	//get a reference to the drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	//get a reference to the button at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	//function go to the middle
	function createPuzzlePieces(pictureIndex) {
		//generate images hele => need to make 4 ("topleft", "topright", "bottomleft", "bottomright")
		//debugger;
		//loop through the images reference and generate for each
		
		thePieces.forEach((piece, index)=>{
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image"
			src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		})
	}

	function resetPuzzlePieces() {
		// change the current puzzle, regenerate the pieces
		piecesBoard.innerHTML ="";
		createPuzzlePieces(this.dataset.puzzleref);
		//debugger;

	}

	//
	puzzleSelectors.forEach(button=> button.addEventListener("click", resetPuzzlePieces));

	//call this function to setup / generate the pieces on load

})();

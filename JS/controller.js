
	var view 			= new View();
	var wordManager		= new WordManager();
	var checker 		= new Checker(wordManager.getSelectedWord().length);
	
	view.init();
	view.setFirstLetterOnBoard(wordManager.getFirstLetter(),0);
	
	function controllerDoCheck(event)
	{
		if (event.which == 13 || event.keyCode == 13) {
			
			var typedWord = view.getTypedWord();
			
			if(checker.checkCompleteWord(typedWord, wordManager.getSelectedWord())){
				console.log('view do style en let user know he won!!');
			}
			view.presentLetters(checker.checkCorrectLetter(typedWord, wordManager.getSelectedWord()));
		}
		view.setFirstLetterOnBoard(wordManager.getFirstLetter(),view.currentRow);
	}
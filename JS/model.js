class Checker
{
	
	
	
	
	
	constructor(length)
	{
		this.correctLetterArray 	= new Array(length);

		this.sound = 	{
							soundCorrect 		: 'SOUND/soundCorrect.mp3' ,
							soundAlmostCorrect 	: 'SOUND/soundAlmostCorrect.mp3' ,
							soundForlosers 		: 'SOUND/soundForlosers.mp3' ,
							soundGameOver 		: 'SOUND/soundGameOver.mp3',
							SoundWon 			: 'SOUND/soundWon1.mp3'
						};
		//this.containdLetterArray 	= new Array((length-1));
	}
	
	playAudio(file)
    {
    	var audio = new Audio(file);
    	audio.play();
    }
	
	/**
	 * check the typed word if eque whit random selected word by computer
	 * @param {string} typedWord
	 * @param {string} selectedWord
	 * return {bool}
	 */
	checkCompleteWord(typedWord, selectedWord)
	{
		if(typedWord === selectedWord){
			this.playAudio(this.sound.SoundWon)
			return true;
		}else return false;
	}
	
	/**
	 * WEET HET ECHT NIET MEER WTFFFFFFFFFF :-{( GEEN ZIN OM TE ZOEKEN WAT HET OOK ALWEER WAS!! DAT KRIJG JE ERVAN ALS JE HET NIET METEEN OPSCHRIJFT :-{)
	 * @param {string} typedWord
	 * @param {string} selectedWord
	 * return {int}
	 */
	checkCorrectLetter(typedWord, selectedWord)
	{
		for(var i=0; i<selectedWord.length; i++){
			
			if(selectedWord[i] === typedWord[i]){
				
				this.correctLetterArray[i] = typedWord[i]+'RED'
			}
			else if(selectedWord.includes(typedWord[i], i) ){
				this.checkContainsLetter(typedWord, selectedWord, i)
			}else{
				
			}
		}
		console.log(this.correctLetterArray);
		return this.correctLetterArray;
	}

	/**
	 * kijkt of de letter zich elders in het woordje bevindts
	 * @param {string} typedWord
	 * @param {string} selectedWord
	 * @param {int} index
	 * return {int}
	 */
	checkContainsLetter(typedWord, selectedWord, index)
	{
		var tempLetter = "";
		
		for(var i=index; i<selectedWord.length; i++){
			
				var counter = 0;
				if(selectedWord[i] === tempLetter){
					console.log("THIS IS NOT FUNNNNIGGG :)");
				}else
					{
						tempLetter = selectedWord[i];
						var regExp = new RegExp(selectedWord[i],"gi");
						console.log("numSameLetter "+selectedWord[i]+":"+selectedWord.match(regExp).length);
					}
				
			for(var c=index; c<selectedWord.length; c++ ){
				if(c!=i){
					if(typedWord[c] === selectedWord[i]){
						if(counter < selectedWord.match(regExp).length){
							if(selectedWord[0] != typedWord[c] /*&& selectedWord.match(regExp).length > 1*/){
								this.correctLetterArray[c] = typedWord[c]+'YELLOW'
								counter++;
								console.log("counter="+counter);
										
							}else{counter++}	
						}
						else{continue}
					}
					else{
					}
				}
			}
		}
	}
	
}


class WordManager
{
	constructor()
	{
		this.words 			= new Words();
		this.selectedWord 	= this.selectWord().toUpperCase();
		
		/////////////////////////////////////////////////////////
		//JUST FOR CHEATING. FOR LOSERS:)!!!!
		/////////////////////////////////////////////////////////
		console.log(this.selectedWord);
		console.log(this.getFirstLetter());
	}
	
	/**
	 * returns the random selected word by computer
	 * return {string}
	 */
	selectWord()
	{
		return this.words.getWords()[Math.floor((Math.random() * this.words.getWords().length) + 0)];
	}
	
	/**
	 * returns the selected word by computer
	 * return {string}
	 */
	getSelectedWord()
	{
		return this.selectedWord;
	}
	
	/**
	 * returns the first letter of selected word by computer
	 * return {string}
	 */
	getFirstLetter()
	{
		return this.selectedWord[0];
	}	
}


/// MISSCHIEN VOOR LATER OM TE KIJKEN OF IK HET KAN GEBRUIKEN. MAAR NU GA IK LEKKER GENIETEN VAN MIJN THEE :)
/*
	countLetter(selectedWord, index)
	{
		var tempLetter = "";
		
		if(selectedWord[index] === tempLetter){
			console.log("this is not funniggg :)");
			return 0;
		}else
			{
				tempLetter = selectedWord[index];
				var regExp = new RegExp(selectedWord[index],"gi");
				
				return selectedWord.match(regExp).length;
			}
	}

	checkContainsLetter(typedWord, selectedWord, index)
	{
		for(var i=index; i<selectedWord.length; i++){
				
				var countedLetters = this.countLetter(selectedWord,i);
				var counter = 0;
				
			for(var c=index; c<selectedWord.length; c++ ){
				
					if(c!=i){
					
						if(typedWord[c] === selectedWord[i]){
							if(counter < countedLetters){
								if(selectedWord[0] != typedWord[c]  && countedLetters > 1)
									{
										this.correctLetterArray[c] = typedWord[c]+'YELLOW'
										counter++;
										console.log("counter="+counter);
										
									}else{counter++}
								
							}
							else{continue}
						}
						else{
						}
					}
			}
		}
	}

	}*/






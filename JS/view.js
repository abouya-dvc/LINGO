
class View
{
	/**
	 * 
	 */
	constructor()
    {
		this.rows 		= 5;
		this.colums		= 5;
		this.lingoBoard = new Array(this.rows);
		this.typedWord;
		this.currentRow = 0;
    }

	/**
	 *Initialize the lingoboard presentation in HTML
	 */
    init()
    {
    	for(var r=0; r<this.rows; r++){
    		 
    		this.lingoBoard[r] = new Array(this.colums);
    		
    		var rowDiv = document.createElement('div');
    		rowDiv.setAttribute('class','row');
    		rowDiv.setAttribute('id', 'row_'+r);
    		document.body.appendChild(rowDiv)
    		
    		for(var c=0; c<this.colums; c++){
    			var input = document.createElement('INPUT');
    			input.setAttribute('type', 'text');
    			input.setAttribute('id', 'letter_'+r+'-'+c);
    			this.lingoBoard[r][c] = document.body.appendChild(input)
    		}
    	}
    }
        
    /**
     * Sets the firstletter of the word and the current row number
     * @param {string} firstletter
     * @param {int} currentRowNr
     */
    setFirstLetterOnBoard(firstLetter, currentRowNr)
    {
	    	var element = document.getElementById('letter_'+currentRowNr+'-0');
	    	element.value = firstLetter;
	    	element.setAttribute('style','background-color:red')
    }
    
    /**
     * 
     * @param {Array}
     */
    presentLetters(array)
    {
    	  var kleur='';
    	  
    	  for(var i=0; i<array.length; i++){
    		  
    		  if(array[i]){
    			  
    			  for(var c=1; c<array[i].length; c++){
    				  kleur += array[i][c];
    			  }
    			  
    			  document.getElementById('letter_'+this.currentRow+'-'+i).setAttribute('style','background-color:'+kleur+'');
    			  document.getElementById('letter_'+this.currentRow+'-'+i).value = array[i][0];
    			  
    			  kleur = '';
    			  
    		  }else{
    			// do noting
    		  }
    	  }
    }

    
	/**
	 * Gets the letters separate that's typed in HTML by the user on the lingoboard en paste it as a whole word.
	 * return {string} typedWord
	 */
    getTypedWord()
    {
    		this.typedWord = '';
    		
	    	for(var i=0; i<this.colums; i++){
	    		
	    		this.typedWord += document.getElementById('letter_'+this.currentRow+'-'+i).value;
	    	}
	    	
	    	this.currentRow++;
	    		    	
	    	return this.typedWord.toUpperCase();
    }
}
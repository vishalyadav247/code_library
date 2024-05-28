function arrowPat(num){
    let str = "";
    const height = num;
    for (let i = 0; i < height; i++) {
      let underscoreBeforeX = Math.abs(2 - i); 
      let xCount = (i == 2) ? 3 : (i === 0 || i === height - 1) ? 1 : 2;
      let middleCharacter = (i === 2) ? "e" : " ";
      let xLowerCount = 5;
      let underscoreAfterLowerX = (i === 2) ? "e" : " "; 
      let endCharacter = "X";
      str += " ".repeat(underscoreBeforeX) + "X".repeat(xCount) + middleCharacter.repeat(7) + "x".repeat(xLowerCount) + underscoreAfterLowerX.repeat(7) + endCharacter + "\n";
    }
    console.log(str);
  }
  arrowPat(5)
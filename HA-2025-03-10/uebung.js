// Schreibe eine Funktion createHTMLList(liste)
// Sie soll eine JS-Liste annehmen und daraus einen HTML-String für eine ungeordnete Liste (ul) machen

let myList= ["eins","zwei", "drei"]

function createHTMLList(liste) {
    // let ergebnis = "";
    let htmlElements=liste.map((listItem) => `<li>${listItem}</li>`);
    // console.log(htmlElements);
    let flatList=htmlElements.toString().replaceAll(",", "");
    // console.log(flatList);
    let ergebnis = `<ul>${flatList}</ul>`;
    return ergebnis;
}    

function setListContent() {
    let listDiv=document.getElementById("Liste");
    let content = createHTMLList(myList);
    listDiv.innerHTML = content;
}

function setUserInputList() {
    let userInput = document.getElementById("userInput");
    let text = userInput.value;
    let textList = text.split(",");
    myList = myList.concat(textList);
    setListContent();
}
if (document.getElementsByClassName("ssoTemplate pay wall")) {
    let txt = JSON.parse(document.getElementsByTagName("script")[11].innerHTML).articleBody;
    if(!txt){txt = JSON.parse(document.getElementsByTagName("script")[13].innerHTML).articleBody} 
    document.getElementsByClassName("selectionShareable")[1].innerHTML = txt;
    document.getElementById('c1-template-platzhalter').remove();
}
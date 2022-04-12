import translateHelper from "../../../assets/javascripts/helpers/translate/translate.js";
import commonHelper from "../../../assets/javascripts/helpers/common.js";

let disableElement = document.getElementById("disable-simplyTranslate");
disableElement.addEventListener("change",
    (event) => translateHelper.setDisable(!event.target.checked)
);

let simplyTranslateDivElement = document.getElementById("simplyTranslate");
let lingvaDivElement = document.getElementById("lingva");


function changeFrontendsSettings(frontend) {
    if (frontend == 'simplyTranslate') {
        simplyTranslateDivElement.style.display = 'block';
        lingvaDivElement.style.display = 'none';
    }
    else if (frontend == 'lingva') {
        simplyTranslateDivElement.style.display = 'none';
        lingvaDivElement.style.display = 'block';
    }
}
let translateFrontendElement = document.getElementById("translate-frontend");
translateFrontendElement.addEventListener("change",
    event => {
        let frontend = event.target.options[translateFrontendElement.selectedIndex].value
        translateHelper.setFrontend(frontend)
        changeFrontendsSettings(frontend);
    }
);

let protocolElement = document.getElementById("protocol");
protocolElement.addEventListener("change",
    (event) => {
        let protocol = event.target.options[protocolElement.selectedIndex].value
        translateHelper.setProtocol(protocol);
        changeProtocolSettings(protocol);
    }
);

function changeProtocolSettings(protocol) {
    let normalSimplyTranslateDiv = document.getElementById("simplyTranslate").getElementsByClassName("normal")[0];
    let torSimplyTranslateDiv = document.getElementById("simplyTranslate").getElementsByClassName("tor")[0];

    let normalLingvaDiv = document.getElementById("lingva").getElementsByClassName("normal")[0];
    let torLingvaDiv = document.getElementById("lingva").getElementsByClassName("tor")[0];

    if (protocol == 'normal') {
        normalSimplyTranslateDiv.style.display = 'block';
        normalLingvaDiv.style.display = 'block';
        torLingvaDiv.style.display = 'none';
        torSimplyTranslateDiv.style.display = 'none';
    }
    else if (protocol == 'tor') {
        normalSimplyTranslateDiv.style.display = 'none';
        normalLingvaDiv.style.display = 'none';
        torLingvaDiv.style.display = 'block';
        torSimplyTranslateDiv.style.display = 'block';
    }
}

let fromElement = document.getElementsByClassName("from")[0];
fromElement.addEventListener("change",
    event => translateHelper.setFrom(event.target.options[fromElement.selectedIndex].value)
);

let toElement = document.getElementsByClassName("to")[0];
toElement.addEventListener("change",
    event => translateHelper.setTo(event.target.options[toElement.selectedIndex].value)
);

let simplyTranslateElement = document.getElementById("simplyTranslate")
let simplyTranslateEngineElement = simplyTranslateElement.getElementsByClassName("engine")[0];
simplyTranslateEngineElement.addEventListener("change",
    event => translateHelper.setSimplyTranslateEngine(event.target.options[simplyTranslateEngineElement.selectedIndex].value)
);

translateHelper.init().then(() => {
    disableElement.checked = !translateHelper.getDisable();

    let frontend = translateHelper.getFrontend();
    translateFrontendElement.value = frontend;
    changeFrontendsSettings(frontend);

    let protocol = translateHelper.getProtocol();
    protocolElement.value = protocol;
    changeProtocolSettings(protocol);

    fromElement.value = translateHelper.getFrom();
    toElement.value = translateHelper.getTo();
    simplyTranslateEngineElement.value = translateHelper.getSimplyTranslateEngine();

    commonHelper.processDefaultCustomInstances(
        'simplyTranslate',
        'normal',
        translateHelper,
        document,
        translateHelper.getSimplyTranslateNormalRedirectsChecks,
        translateHelper.setSimplyTranslateNormalRedirectsChecks,
        translateHelper.getSimplyTranslateNormalCustomRedirects,
        translateHelper.setSimplyTranslateNormalCustomRedirects
    );

    commonHelper.processDefaultCustomInstances(
        'simplyTranslate',
        'tor',
        translateHelper,
        document,
        translateHelper.getSimplyTranslateTorRedirectsChecks,
        translateHelper.setSimplyTranslateTorRedirectsChecks,
        translateHelper.getSimplyTranslateTorCustomRedirects,
        translateHelper.setSimplyTranslateTorCustomRedirects
    );

    commonHelper.processDefaultCustomInstances(
        'lingva',
        'normal',
        translateHelper,
        document,
        translateHelper.getLingvaNormalRedirectsChecks,
        translateHelper.setLingvaNormalRedirectsChecks,
        translateHelper.getLingvaNormalCustomRedirects,
        translateHelper.setLingvaNormalCustomRedirects
    );

    commonHelper.processDefaultCustomInstances(
        'lingva',
        'tor',
        translateHelper,
        document,
        translateHelper.getLingvaTorRedirectsChecks,
        translateHelper.setLingvaTorRedirectsChecks,
        translateHelper.getLingvaTorCustomRedirects,
        translateHelper.setLingvaTorCustomRedirects
    )
});
console.log('Test Step Injection is Running');

// PASS ALL STEPS
let passButton = document.getElementById("pass");

passButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: passSteps,
    });
});

function passSteps() {
    var dropDown = document.querySelectorAll("[class='trigger-dropDown']")
    for (i = 0; i < dropDown.length; i++) {
        dropDown[i].click();
        let pass = document.querySelector("div[class='dropDown-container activeElement'] li[title='PASS']");
        pass.click()
    }
}

// FAIL ALL STEPS
let failButton = document.getElementById("fail");

failButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: failSteps,
    });
});

function failSteps() {
    var dropDown = document.querySelectorAll("[class='trigger-dropDown']")
    for (i = 0; i < dropDown.length; i++) {
        dropDown[i].click();
        let pass = document.querySelector("div[class='dropDown-container activeElement'] li[title='FAIL']");
        pass.click()
    }
}

// UNEXECUTE ALL STEPS
let unexecuteButton = document.getElementById("unexecute");

function unexecuteSteps() {
    var dropDown = document.querySelectorAll("[class='trigger-dropDown']")
    for (i = 0; i < dropDown.length; i++) {
        dropDown[i].click();
        let pass = document.querySelector("div[class='dropDown-container activeElement'] li[title='UNEXECUTED']");
        pass.click()
    }
};

unexecuteButton.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: unexecuteSteps
    });
});

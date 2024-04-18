console.log('Test Step Injection is Running');

// PASS ALL STEPS
// Get Pass Button ID
let passButton = document.getElementById("pass");

// Click Event
passButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: passSteps
    });
});

// On KeyDown Event "P"
document.addEventListener('keydown', async (event) => {
    if (event.key === 'p' || event.key == 'P') {
        let [tab] = await chrome.tabs.query({ 
            active: true, 
            currentWindow: true });
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: passSteps
        });
    }
});

// Passes all Steps
function passSteps() {
    var dropDown = document.querySelectorAll("[class='trigger-dropDown']")
    for (i = 0; i < dropDown.length; i++) {
        dropDown[i].click();
        let pass = document.querySelector("div[class='dropDown-container activeElement'] li[title='PASS']");
        pass.click()
    }
    setTimeout(() => {  
        var execute = document.querySelector("input[class='button']")
        execute.click(); 
    }, 300);
}

// FAIL ALL STEPS
// Get Fail BUtton ID
let failButton = document.getElementById("fail");

// Click Event
failButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: failSteps,
    });
});

// On KeyDown Event "F"
document.addEventListener('keydown', async (event) => {
    if (event.key === 'f' || event.key == 'F') {
        let [tab] = await chrome.tabs.query({ 
            active: true, 
            currentWindow: true });
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: failSteps
        });
    }
});

// Fails all Steps
function failSteps() {
    var dropDown = document.querySelectorAll("[class='trigger-dropDown']")
    for (i = 0; i < dropDown.length; i++) {
        dropDown[i].click();
        let pass = document.querySelector("div[class='dropDown-container activeElement'] li[title='FAIL']");
        pass.click()
    }
    setTimeout(() => {  
        var execute = document.querySelector("input[class='button']")
        execute.click(); 
    }, 300);
}

// UNEXECUTE ALL STEPS
// Get Unexecute Button ID
let unexecuteButton = document.getElementById("unexecute");

// Click Event
unexecuteButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: unexecuteSteps
    });
});

// On KeyDown Event "U"
document.addEventListener('keydown', async (event) => {
    if (event.key == 'u' || event.key == 'U') {
        let [tab] = await chrome.tabs.query({ 
            active: true, 
            currentWindow: true });
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: unexecuteSteps
        });
    }
});

// Unexecutes all Steps
function unexecuteSteps() {
    var dropDown = document.querySelectorAll("[class='trigger-dropDown']")
    for (i = 0; i < dropDown.length; i++) {
        dropDown[i].click();
        let pass = document.querySelector("div[class='dropDown-container activeElement'] li[title='UNEXECUTED']");
        pass.click()
    }
    setTimeout(() => {  
        var execute = document.querySelector("input[class='button']")
        execute.click(); 
    }, 300);
};

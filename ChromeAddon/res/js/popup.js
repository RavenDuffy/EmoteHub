let changeColour = document.getElementById("changeColour")

// get null to get all items
chrome.storage.sync.get("colour", ({ colour }) => {
    changeColour.style.backgroundColor = colour
})

changeColour.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setBackgroundColour
    })
})

function setBackgroundColour() {
    // chrome.storage.sync.get("colour", ({ colour }) => {
    //     document.body.style.backgroundColor = colour
    // })
}
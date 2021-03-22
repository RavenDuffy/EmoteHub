let colour = '#3aa757'

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ colour })
    console.log(colour)
})
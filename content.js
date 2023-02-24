let domain = window.location.hostname;

chrome.storage.local.get(['userInput'], (result) => {
    const userInput = result.userInput;
    if (userInput == null || userInput.length == 0)
        return;
    console.log(`User input retrieved: ${userInput}`);

    const script = document.createElement('script');
    script.src = `https://raw.githubusercontent.com/${userInput}/SiteInject_Scripts/master/${domain}.js`;
    document.body.appendChild(script);
});

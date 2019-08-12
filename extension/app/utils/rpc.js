function sendMessage(data) {
    console.log(chrome.windows.getCurrent((x) => console.log(x)));
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      console.log('sending', data, tabs);
      chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
        console.log(response);
      });
    });
}

export default (store) => (next) => (action) => {
  switch (action.type) {
    case 'ADD_TODO':
        sendMessage(action.text);
    default:
        break;

  }
  return next(action);
};



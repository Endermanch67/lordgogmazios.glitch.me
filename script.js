function disableExtension() {
  const extensionId = document.getElementById('extension-id').value;
  chrome.management.setEnabled(extensionId, false, function() {
    console.log('Extension ' + extensionId + ' has been disabled');
  });
}


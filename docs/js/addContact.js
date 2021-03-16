function saveContact () {
    document.cookie='contactName'+document.querySelector('#contactName').value
    document.cookie='contactPhone'+document.querySelector('#contactPhone').value
    document.cookie='contactEmail'+document.querySelector('#contactEmail').value

    alert('Data Saved!')

    alert('Save Data: '+document.cookie)
}
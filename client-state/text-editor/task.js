

const areaEditor = document.getElementById('editor');
areaEditor.addEventListener('input', () => {
    localStorage.setItem('setText', areaEditor.value);
});

const storageText = localStorage.getItem('setText');
areaEditor.value = storageText;


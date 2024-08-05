// Sample file data
const files = [
    'document1.txt', 'presentation1.pdf', 'song1.mp3', 'installer1.exe', 'archive1.rar',
    'report1.docx', 'image1.jpg', 'graphic1.png', 'animation1.gif', 'compressed1.zip',
    'document2.txt', 'presentation2.pdf', 'song2.mp3', 'installer2.exe', 'archive2.rar',
    'report2.docx', 'image2.jpg', 'graphic2.png', 'animation2.gif', 'compressed2.zip',
    null, 'presentation3.pdf', '', 'installer3.exe', 'archive3.rar',
    'report3.docx', 'image3.jpg', 'graphic3.png', 'animation3.gif', 'compressed3.zip',
    'document4.txt', 'presentation4.pdf', 'song4.mp3', 'installer4.exe', 'archive4.rar',
    'report4.docx', 'image4.jpg', 'graphic4.png', 'animation4.gif', 'compressed4.zip',
    'document5.txt', 'presentation5.pdf', 'song5.mp3', 'installer5.exe', 'archive5.rar',
    'report5.docx', 'image5.jpg', 'graphic5.png', 'animation5.gif', 'compressed5.zip',
    'document6.txt', 'presentation6.pdf', 'song6.mp3', 'installer6.exe', 'archive6.rar',
    'report6.docx', 'image6.jpg', null, 'animation6.gif', 'compressed6.zip',
    'document7.txt', 'presentation7.pdf', 'song7.mp3', 'installer7.exe', 'archive7.rar',
    'report7.docx', 'image7.jpg', 'graphic7.png', 'animation7.gif', 'compressed7.zip',
    'document8.txt', 'presentation8.pdf', 'song8.mp3', 'installer8.exe', 'archive8.rar',
    'report8.docx', 'image8.jpg', '', 'animation8.gif', 'compressed8.zip',
    'document9.txt', 'presentation9.pdf', 'song9.mp3', 'installer9.exe', 'archive9.rar',
    'report9.docx', 'image9.jpg', '', 'animation9.gif', 'compressed9.zip',
    'document10.txt', 'presentation10.pdf', 'song10.mp3', 'installer10.exe', 'archive10.rar',
    'report10.docx', 'image10.jpg', 'graphic10.png', 'animation10.gif', 'compressed10.zip',
  ];
  
  

// Categorize files into folders
const categorizeFiles = () => {
    const categories = {};
    files.forEach(file => {
        if (!categories[file.type]) {
            categories[file.type] = [];
        }
        categories[file.type].push(file);
    });
    return categories;
};

// Display folders
const displayFolders = (categories) => {
    const foldersContainer = document.getElementById('folders-container');
    foldersContainer.innerHTML = '';

    for (const [type, fileList] of Object.entries(categories)) {
        const folder = document.createElement('div');
        folder.className = 'folder';
        folder.textContent = type;
        folder.onclick = () => displayFiles(type, fileList);
        foldersContainer.appendChild(folder);
    }
};

// Display files
const displayFiles = (type, fileList) => {
    const fileListElement = document.getElementById('file-list');
    const searchBox = document.getElementById('search-box');
    const sortButton = document.getElementById('sort-button');

    fileListElement.innerHTML = '';
    searchBox.value = '';
    searchBox.oninput = () => filterFiles(fileList);
    sortButton.onclick = () => toggleSort(fileList);

    filterFiles(fileList);

    function filterFiles(files) {
        const searchQuery = searchBox.value.toLowerCase();
        const filteredFiles = files.filter(file => file.name.toLowerCase().includes(searchQuery));
        renderFiles(filteredFiles);
    }

    function renderFiles(files) {
        fileListElement.innerHTML = '';
        files.forEach(file => {
            const fileItem = document.createElement('li');
            fileItem.className = 'file-item';
            fileItem.textContent = ${file.name} (${file.type});
            fileListElement.appendChild(fileItem);
        });
    }
    
    function toggleSort(files) {
        const isAscending = sortButton.textContent.includes('Ascending');
        const sortedFiles = [...files].sort((a, b) => {
            const comparison = a.name.localeCompare(b.name);
            return isAscending ? comparison : -comparison;
        });
        sortButton.textContent = isAscending ? 'Sort Descending' : 'Sort Ascending';
        renderFiles(sortedFiles);
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const categories = categorizeFiles();
    displayFolders(categories);
});
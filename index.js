document.getElementById('generateRandomFileButton').addEventListener('click', function () {
    const fileSize = getFileSize();
    const pattern = [0xAA, 0x55]; // Repeating binary pattern
    const repeatedData = new Uint8Array(fileSize);

    // Fill the array with the repeating pattern
    for (let i = 0; i < fileSize; i++) {
        repeatedData[i] = pattern[i % pattern.length];
    }

    // Create the Blob and download it
    const blob = new Blob([repeatedData], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = document.getElementById('filename').value;
    link.click();
    URL.revokeObjectURL(url);
});

function getFileSize(){
    const value = document.getElementById('size').value;
    const unit  = document.getElementById('unit').value;

    switch (unit){
        case 'octet':
            return value;
        case 'kilooctet':
            return value * 1024;
        case 'megaoctet':
            return value * 1024 * 1024;
        case 'gigaoctet':
            return value * 1024 * 1024 * 1024;
    }
    return 0;
}
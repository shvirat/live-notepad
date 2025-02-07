function formatText(command, value = null) {
    document.execCommand(command, false, value);
}

function downloadText() {
    let text = document.getElementById("editor").innerText;
    let blob = new Blob([text], { type: "text/plain" });
    let anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(blob);
    anchor.download = "note.txt";
    anchor.click();
}
function saveText() {
    localStorage.setItem("notepadContent", document.getElementById("editor").innerHTML);
    alert("Text saved successfully!");
}
function loadText() {
    let savedContent = localStorage.getItem("notepadContent");
    if (savedContent) {
        document.getElementById("editor").innerHTML = savedContent;
    } else {
        alert("No saved text found!");
    }
}

function importFile() {
    let file = document.getElementById("fileInput").files[0];
    if (!file) return; // No file selected

    // Check if the file is a .txt file
    if (file.type !== "text/plain") {
        alert("Only .txt files are allowed!");
        fileInput.value = ""; // Reset input
        return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("editor").innerText = e.target.result;
    };
    if (file) {
        reader.readAsText(file);
    }
}

function clearText() {
    document.getElementById("editor").innerHTML = "";
}

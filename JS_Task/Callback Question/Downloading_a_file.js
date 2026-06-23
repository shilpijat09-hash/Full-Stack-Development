function downloadFile(url,callback){
    console.log("Download Started...");
    setTimeout(()=>{
        console.log("Downloading...");
        callback();
    },2000);
}
downloadFile("file.pdf",()=>{
    console.log("Download Completed!");
});
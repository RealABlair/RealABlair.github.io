window.onload = Start;

function Start()
{
    ReadData("./data/info.cfg");
}

function LoadInfo(data)
{
    if(data !== null)
    {
        document.getElementById("app-version").textContent = "Version: " + data.version;
    }
}

function ReadData(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var data = { version: undefined };
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText.split('\n');
                data.version = allText[0];
                LoadInfo(data);
            }
        }
    }
    rawFile.send(null);
}

function DownloadApp()
{
    window.open("./data/OrnamentumSetup.exe");
}
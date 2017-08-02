/***
|''Name''|TiddlyServer upload plugin|
|''Description''|Upload TWC file to TiddlyServer |
|''Author''|icm7216|
|''Version''|1.0.1|
|''date''|Jul 19, 2017|
|''Requires''|[[Arlen22/TiddlyServer|https://github.com/Arlen22/TiddlyServer]]|
|''Source:''|[[icm7216/TiddlyServer-upload-plugin|https://github.com/icm7216/TiddlyServer-upload-plugin/blob/master/TiddlyServerUploadPlugin.js]]|
|''License''|[[MIT|https://opensource.org/licenses/MIT]]|
|''~CoreVersion''|2.8.1|


!Description

When saving the TiddlyWiki Classic (TWC) file, allows to upload it to TiddlyServer with this plugin.  
This plugin was created as a saving method instead of Tiddlyfox when the extension of Tiddlyfox becomes invalid.

Thanks to [[Arlen22/TiddlyServer|https://github.com/Arlen22/TiddlyServer]]


!Installation Plugin

Create a new tiddler with the following contents.

title:
{{{=>}}} ''TiddlyServer upload plugin''

content:
{{{=>}}} Copy the contents of ''TiddlyServerUploadPlugin.js'' and paste it in the contents area.

tags:
{{{=>}}} ''systemConfig''

To enable the plugin, Save the TWC file and reload it.

!Options 

Upload to TiddlyServer if enabled.
<<option chkEnableUpload>> ''chkEnableUpload''


!Code
***/
//{{{

// Upload to TiddlyServer if true
config.options.chkEnableUpload = true;
// Show editing features when viewed over HTTP
config.options.chkHttpReadOnly = false;

// Upload to TiddlyServer function
function UploadToTiddlyServer(filePath, content) {
  if (config.options.chkEnableUpload) {
    config.saveByDownload = true;
    var url = encodeURI(filePath.replace(/\\\\/, 'http://').replace(/\\/g, '/'));
    var data = decodeURIComponent(escape(content));
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status == 200) {
        console.log("upload Ok!");
      }
    }
    try {
      xhr.open('PUT', url, true);
      xhr.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
      xhr.send(data);
      return true;
    } catch (e) {
      alert("Cannot connect to TiddlyServer");
      return false;
    }
  }
  return null;
}

// =====================================
// override window.saveFile
// add upload to TiddlyServer function
// =====================================
window.saveFile = function(fileUrl,content) {
  var r = UploadToTiddlyServer(fileUrl,content);
  if(!r)
    r = mozillaSaveFile(fileUrl,content);
  if(!r)
    r = ieSaveFile(fileUrl,content);
  if(!r)
    r = javaSaveFile(fileUrl,content);
  if(!r)
    r = HTML5DownloadSaveFile(fileUrl,content);
  if(!r)
    r = manualSaveFile(fileUrl,content);
  return r;
}

//}}}

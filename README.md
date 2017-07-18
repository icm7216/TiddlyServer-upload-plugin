# TiddlyServer upload plugin for TiddlyWiki Classic.

## Description

When saving the TiddlyWiki Classic (TWC) file, allows to upload it to TiddlyServer with this plugin.  
This plugin was created as a saving method instead of Tiddlyfox when the extension of Tiddlyfox becomes invalid.

Thanks to [Arlen22/TiddlyServer | GiuHub](https://github.com/Arlen22/TiddlyServer)


## Installation Plugin

Create a new tiddler with the following contents.

*   title:  
    => **TiddlyServer upload plugin**
*   content:  
    => Copy the contents of **TiddlyServerUploadPlugin.js** and paste it in the contents area.
*   tags:  
    => **systemConfig**

To enable the plugin, Save the TWC file and reload it.


### note: AdvancedOptions setting on TWC side

Uncheck the following items in `AdvancedOptions` setting so that TWC can be used via HTTP.  
Automatically unchecked after plugin installation.
``` console 
[ ]: Hide editing features when viewed over HTTP
```


## pulugin Options 

Upload to TiddlyServer if enabled.  
Automatically checked after plugin installation.
*   plugin's checkbox: `chkEnableUpload`


## License

MIT

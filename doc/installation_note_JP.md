# TiddlyServerインストールメモ

現在（Jul 19, 2017）の最新版 TiddlyServer-2.0.6 、及び TiddlyServer upload plugin のインストール手順を簡単に纏めました。  
使用環境は Windows 10 64bit,  Firefox Developer Edition 55.0b10 (64bit), TiddlyWiki Classic 2.8.1, Node.js 6.11.0 (x64) です。

また、 TiddlyServer のインストール詳細は[TiddlyServer/README.md at master · Arlen22/TiddlyServer](https://github.com/Arlen22/TiddlyServer/blob/master/README.md)を参照してください。

## TiddlyServerとは

TiddlyServer は TiddlyWiki5 用に開発されたサーバーアプリケーション、TiddlyWiki5 ファイルの閲覧や編集を可能にします。
また、Tiddlyfox のファイル保存機能に代わり、TiddlyServer へのアップロードによるファイル保存機能を提供します。

*   TiddlyServer: [Arlen22/TiddlyServer: v2](https://github.com/Arlen22/TiddlyServer)
*   TW5: [Jermolene/TiddlyWiki5](https://github.com/Jermolene/TiddlyWiki5)
*   TiddlyFox: [TiddlyWiki/TiddlyFox](https://github.com/TiddlyWiki/TiddlyFox)


## TiddlyServer upload pluginとは

TiddlyServer に対応していない TiddlyWiki Classic のファイル保存を可能にするプラグインです。
近い将来(Firefox 58 or 59 付近で) Add-on SDK のサポート終了によって、現行の TiddlyFox が使用できなくなる場合に備えて、その代替手段のひとつとして開発されました。

*   TWC: [TiddlyWiki Classic](https://github.com/TiddlyWiki/tiddlywiki)
*   TiddlyServer upload plugin: [icm7216/TiddlyServer-upload-plugin](https://github.com/icm7216/TiddlyServer-upload-plugin)



# TiddlyServerのインストール

1.  [Node.js](https://nodejs.org/en/)をインストール。

2.  [https://github.com/Arlen22/TiddlyServer/releases](https://github.com/Arlen22/TiddlyServer/releases) から`TiddlyServer-2.0.6-bundled.zip`をダウンロード後、任意のディレクトリに展開。  
例: `C:\TWSVR\TiddlyServer-2.0.6`

3.  `example-settings.json`をリネームして`settings.json`を作成。実際に利用する TWC ファイルのディレクトリパスを設定。 


#### `settings.json`の作成例

例えば、TWCファイルのパスが `C:\TWSVR\twc`、バックアップディレクトリが`C:\TWSVR\twc\backup`の場合、次のような`settings.json`を作成します。
``` console
{
    "tree": {
        "tiddlywiki": "C:\\TWSVR\\twc"
    },
    "types":{
        "htmlfile": ["htm", "html"]
    },
    "username": "",
    "password": "",
    "host": "127.0.0.1",
    "port": 8080,
    "backupDirectory": "C:\\TWSVR\\twc\\backup"
}
```

## TiddlyServer upload pluginのインストール

次のように新しい tiddler を作成します。

*   タイトル名:  
    => **TiddlyServer upload plugin**
*   本文:  
    => **TiddlyServerUploadPlugin.js**の内容を全てコピーして本文エリアにペースト。
*   タグ:  
    => **systemConfig**

プラグインは TWC ファイルの保存と再読み込み後に有効になります。


## TiddlyServerを起動

1.   TiddlyServer を起動するには、コマンドプロンプトで `node server.js`を入力するか、エクスプローラで`start.cmd`をダブルクリック。`settings.json`に指定した host, port でサーバーが起動します。
``` console
C:\TWSVR\TiddlyServer-2.0.6>node server.js
Settings file: C:\TWSVR\TiddlyServer-2.0.6\settings.json
Open your browser and type in one of the following:
127.0.0.1:8080
```
2.   ブラウザで`http://127.0.0.1:8080/`を開くと TiddlyServer のディレクトリ・リスト画面が表示されます。

3.  ディレクトリ・リストから TWC ファイルを選択すると、閲覧や編集が可能になります。

4.  編集後は`save change`のクリックで TWC ファイルが保存されます。また、`TiddlyWiki advanced options`の`AutoSave`を有効にすれば、TWC ファイルを自動保存することができます。


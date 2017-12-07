# TiddlyServerインストールメモ

現在（Dec. 7, 2017）の最新版 TiddlyServer-2.0.9 、及び TiddlyServer upload plugin のインストール手順を簡単に纏めました。

Firefox の Add-on SDK のサポートは Firefox 57 で廃止されました。これにより TiddlyFox の使用は不可能になります。その代替手段のひとつとして TiddlyServer upload plugin を使用することができます。

*   使用環境は Windows 10 64bit,  Firefox Developer Edition 58.0b9 (64bit), TiddlyWiki Classic 2.8.1, Node.js 6.11.0 (x64)です。
*   TiddlyServer の詳細については[TiddlyServer/README.md at master · Arlen22/TiddlyServer](https://github.com/Arlen22/TiddlyServer/blob/master/README.md)を参照してください。


## TiddlyServerとは

TiddlyServer は TiddlyWiki5 用に開発されたサーバーアプリケーション、TiddlyWiki5 ファイルの閲覧や編集および保存を可能にします。
また、Tiddlyfox のファイル自動保存機能に代わり、TiddlyServer によるファイルの自動保存が可能です。（自動保存の設定は今までどおり TiddlyWiki 側で設定します。）

サーバーアプリケーションと言ってもローカル環境で動作するサーバーなので 1 台の PC で完結します。したがって TiddlyWiki と同様にオフラインでも使用可能です。

*   TiddlyServer: [GitHub | Arlen22/TiddlyServer: v2](https://github.com/Arlen22/TiddlyServer)
*   TW5: [GitHub | Jermolene/TiddlyWiki5](https://github.com/Jermolene/TiddlyWiki5)
*   TiddlyFox: [GitHub | TiddlyWiki/TiddlyFox](https://github.com/TiddlyWiki/TiddlyFox)


## TiddlyServer upload pluginとは

TiddlyServer に対応していない TiddlyWiki Classic ファイルの自動保存を可能にするプラグインです。 TiddlyFox の代替手段として使用できます。

*   TWC: [GitHub | TiddlyWiki Classic](https://github.com/TiddlyWiki/tiddlywiki)
*   TiddlyServer upload plugin: [GitHub | icm7216/TiddlyServer-upload-plugin](https://github.com/icm7216/TiddlyServer-upload-plugin)


# TiddlyServerのインストール方法

1.  [Node.js](https://nodejs.org/en/)をインストール。

2.  [https://github.com/Arlen22/TiddlyServer/releases](https://github.com/Arlen22/TiddlyServer/releases) から [Source code (zip) ](https://github.com/Arlen22/TiddlyServer/archive/2.0.9.zip) をダウンロード後、任意のディレクトリに展開。  
例: `C:\TWSVR\TiddlyServer-2.0.9`

3.  `example-settings-simple.json`をリネームして`settings.json`を作成。 TiddlyServer の設定情報をこのファイルに記述します。 


## `settings.json`の作成例

例えば、TWCファイルのパスが `C:\TWSVR\twc`、バックアップディレクトリが`C:\TWSVR\twc\backup`の場合、次のような`settings.json`を作成します。

*   Windows 環境以外ではパスの表記が異なるので注意してください。
*   バックアップディレクトリを使用しない場合はディレクトリパスを記述せずに`"backupDirectory": ""`のように変更します。
*   このファイルは json フォーマットなので、コメント行を記述することはできません。エラーになるので注意してください。
``` json
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



# TiddlyServer upload pluginのインストール方法

次のように新しい tiddler を作成します。

*   タイトル名:  
    => **TiddlyServer upload plugin**
*   本文:  
    => **TiddlyServerUploadPlugin.js**の内容を全てコピーして本文エリアにペースト。
*   タグ:  
    => **systemConfig**

プラグインは TWC ファイルの保存と再読み込み後に有効になります。このとき既に TiddlyFox が機能していない場合は自動保存できませんので、 TiddlyWiki 標準の手動ファイル保存を使用します。



# TiddlyServerの起動方法

1.   TiddlyServer を起動するには、コマンドプロンプトで `node server.js`を入力するか、エクスプローラで`start.cmd`をダブルクリックします。このとき`settings.json`に指定した host, port （上記の例では 127.0.0.1:8080）でサーバーが起動します。
``` console
C:\TWSVR\TiddlyServer-2.0.9>node server.js
Settings file: C:\TWSVR\TiddlyServer-2.0.9\settings.json
Open your browser and type in one of the following:
127.0.0.1:8080
```
2.   ブラウザで`http://127.0.0.1:8080/`を開くと TiddlyServer のディレクトリ・リスト画面が表示されます。

3.  ディレクトリ・リストから TWC ファイルを選択すると、閲覧や編集が可能になります。

4.  編集後は`save change`のクリックで TWC ファイルが保存されます。また、`TiddlyWiki advanced options`の`AutoSave`を有効にすれば、TWC ファイルを自動保存することができます。

TiddlyServer の終了方法は、上記で起動したコマンドプロンプトを閉じるか`ctrl-C`の押下で終了できます。通常 TiddlyWiki の使用中は TiddlyServer を起動したままにしておきます。

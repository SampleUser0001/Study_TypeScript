# Study_TypeScript
TypeScriptの勉強

- [Study_TypeScript](#study_typescript)
  - [前提](#前提)
  - [導入](#導入)
  - [HelloWorld](#helloworld)
  - [参考](#参考)

## 前提

Node.jsがインストールされていること。

## 導入

```
npm install -g typescript
```

インストールバージョン確認
```
tsc -v
Version 4.1.3
```

## HelloWorld

HelloTypeScriptディレクトリ配下

HelloWorld.ts
```ts:HelloWorld.ts
'use strict'

class HelloWorld {
    constructor(public displayText : string) {}
    greet(){
        return this.displayText;
    }
}

const helloWorld = new HelloWorld("HelloWorld");
document.body.innerHTML = helloWorld.greet();
```

コンパイルする。
```
tsc HelloWorld.ts
```

コンパイル結果としてJavaScriptが生成される。  
HelloWorld.js
```js:HelloWorld.js
'use strict';
var HelloWorld = /** @class */ (function () {
    function HelloWorld(displayText) {
        this.displayText = displayText;
    }
    HelloWorld.prototype.greet = function () {
        return this.displayText;
    };
    return HelloWorld;
}());
var helloWorld = new HelloWorld("HelloWorld");
document.body.innerHTML = helloWorld.greet();
```

JavaScriptを使う。  
HelloWorld.html
```html:HelloWorld.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
</head>
<body>
    <script src="HelloWorld.js"></script>
</body>
</html>
```

nginxのDockerコンテナを用意して、コンテナ起動。
```
docker-compose up
```

ローカルにアクセス。
[http://penguin.linux.test/HelloWorld.html](http://penguin.linux.test/HelloWorld.html)  
[http://localhost/HelloWorld.html](http://localhost/HelloWorld.html)


## 参考

- [仕事ですぐに使えるTypeScript](https://future-architect.github.io/typescript-guide/index.html)
- [Qiita:ざっくり入門TypeScript](https://qiita.com/k-penguin-sato/items/72b21d4bfb631665c342)
- [Qiita:TypeScript HelloWorld](https://qiita.com/Chrowa3/items/92833a36a12f3d0450db)

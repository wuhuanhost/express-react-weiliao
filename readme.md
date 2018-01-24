

> 开发环境前端页面请求后台api服务器的代理地址，正式环境前后端口设置一样

**package.json**

```
{
  "proxy": "http://localhost:4000/"
}
```

**使用concurrently同时启动两个服务**

```json
"scripts": {
   "start": "concurrently \"node ./bin/www\" \"react-scripts start\"",
 }
```

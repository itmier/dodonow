- deploy.sh

  ```shell
  #!/usr/bin/env sh
   
  # 当发生错误时中止脚本
  set -e
   
  # 构建
  npm run build
   
  # cd 到构建输出的目录下
  cd dist
   
  # 部署到自定义域域名
  # echo 'www.example.com' > CNAME
   
  git init
  git add -A
  git commit -m 'deploy'
   
  # 部署到 https://<USERNAME>.github.io
  # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
   
  # 部署到 https://<USERNAME>.github.io/<REPO>
  # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
   
  cd -
  ```

  

- 将win+e改回我的电脑(win10默认为快速访问),且对最近访问不进行记录

  - 按下win+e
  - 选择查看->选项
  - 在打开的文件夹选项中选择

  


## FROM registry.cn-beijing.aliyuncs.com/kaikeba/node:12.13.0
FROM prodenv/node-base

MAINTAINER stark <wsd312@163.com>
# RUN mkdir -p 用于在Image里创建一个文件夹，将来用于保存我们的代码
RUN mkdir -p /usr/src/app

# WORKDIR 是将我们创建的文件夹做为工作目录
WORKDIR /usr/src/app

# COPY是把本机当前目录下的所有文件拷贝到Image的工作目录下
COPY . /usr/src/app

# 配置服务器端口
EXPOSE 80

# 初始化项目
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN npm i -g pm2 --registry=https://registry.npm.taobao.org
#RUN yarn install --registry=https://registry.npm.taobao.org 
RUN yarn --registry=https://registry-npm.kaikeba.com
RUN npm run build:test
# 最后 配置启动项目的命令
CMD ["npm","run", "start"]

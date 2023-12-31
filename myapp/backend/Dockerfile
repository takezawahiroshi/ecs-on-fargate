# ベースイメージ
FROM public.ecr.aws/docker/library/node:18.13.0-alpine

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係ファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ポートの公開
EXPOSE 8080

# アプリケーションの起動コマンド
CMD ["npm", "start"]

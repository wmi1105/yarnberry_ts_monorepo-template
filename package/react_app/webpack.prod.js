module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      minify: {
        collapseWhitespace: true, //빈칸 제거
        removeComments: true, //주석 제거
      },
    }),
  ],
};

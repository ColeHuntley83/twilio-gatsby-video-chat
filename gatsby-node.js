exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    // Exclude Sign-In Widget from compilation path
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /twilio-video/,
            use: loaders.null(),
          }
        ],
      },
    })
  }
};


exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.match(/^\/room/)) {
    page.matchPath = '/room/*';

    actions.createPage(page);
  }
};

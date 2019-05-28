const { bootstrapServer, emitConfigs } = require('./environment');
const { AmbassadorTestkit } = require('@wix/ambassador-testkit');
const {
  NodeWorkshopScalaApp,
} = require('@wix/ambassador-node-workshop-scala-app/rpc');

(async () => {
  const commentsList = [];

  const ambassadorTestkit = new AmbassadorTestkit();
  const commentsServiceStub = ambassadorTestkit.createStub(
    NodeWorkshopScalaApp,
  );
  //FETCH
  commentsServiceStub
    .CommentsService()
    .fetch.when(siteId => {
      return siteId === 'eb6f81e2-4b03-4d6e-955f-a1b4abf6bbcf';
    })
    .call(siteId => commentsList);

  //ADD
  commentsServiceStub
    .CommentsService()
    .add.when(siteId => {
      return siteId === 'eb6f81e2-4b03-4d6e-955f-a1b4abf6bbcf';
    })
    .call((siteId, comment) => commentsList.push({comment}));

  const app = bootstrapServer();

  await emitConfigs();
  await ambassadorTestkit.start();
  await app.start();
})();

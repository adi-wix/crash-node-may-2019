import { Driver } from './driver';

//jest.setTimeout(1000000);

describe('React application', () => {
  let driver;

  beforeEach(async () => {
    driver = new Driver(page);
    await page.goto(app.getUrl('/'));
  });

  //afterAll(()=> new Promise(() => {}))

  it('should send comment to server', async () => {
    const comment = { author: 'Tal', comment: 'Awesome comment' };
    await driver.addComment(comment);
    const comments = await driver.getComments();
    expect(comments).toEqual(comment);
  });
});

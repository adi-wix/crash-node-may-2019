import dataHooks from '../constants';

export class Driver {
  constructor(page) {
    this.page = page;
  }

  addComment = async ({ author, comment }) => {
    await this.page.type(`[data-testid=${dataHooks.authorInput}]`, author);
    await this.page.type(`[data-testid=${dataHooks.commentInput}]`, comment);
    await this.page.click(`[data-testid=${dataHooks.addButton}]`);
  };

  getComments = async () => {
    const commentSelector = `[data-testid=${dataHooks.commentItem}]`;

    await this.page.waitFor(
      commentSelector => !!document.querySelector(commentSelector),
      {},
      commentSelector,
    );

    const convertDivToObj = (divs, args) => {
      const comments = [];

      debugger;

      divs.forEach(div => {
        const author = div.querySelector(`[data-testid=${args.authorHook}]`)
          .innerText;
        const comment = div.querySelector(`[data-testid=${args.commentHook}]`)
          .innerText;
        comments.push({ author, comment });
      });

      return comments;
    };

    const args = {
      authorHook: dataHooks.author,
      commentHook: dataHooks.comment,
    };

    return await this.page.$$eval(commentSelector, convertDivToObj, args);
  };
}

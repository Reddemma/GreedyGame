import { GreedyGameAppPage } from './app.po';

describe('greedy-game-app App', () => {
  let page: GreedyGameAppPage;

  beforeEach(() => {
    page = new GreedyGameAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

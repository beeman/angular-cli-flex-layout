import { AngularCliFlexLayoutPage } from './app.po';

describe('angular-cli-flex-layout App', () => {
  let page: AngularCliFlexLayoutPage;

  beforeEach(() => {
    page = new AngularCliFlexLayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

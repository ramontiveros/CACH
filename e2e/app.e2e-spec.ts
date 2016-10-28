import { ChasWebAppPage } from './app.po';

describe('chas-web-app App', function() {
  let page: ChasWebAppPage;

  beforeEach(() => {
    page = new ChasWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

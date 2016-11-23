import { An24RoutingNewPage } from './app.po';

describe('an2-4-routing-new App', function() {
  let page: An24RoutingNewPage;

  beforeEach(() => {
    page = new An24RoutingNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

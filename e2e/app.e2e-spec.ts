import { NgAppReduxPage } from './app.po';

describe('ng-app-redux App', function() {
  let page: NgAppReduxPage;

  beforeEach(() => {
    page = new NgAppReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

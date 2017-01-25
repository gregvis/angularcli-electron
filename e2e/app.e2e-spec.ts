import { AngularcliElectronPage } from './app.po';

describe('angularcli-electron App', function() {
  let page: AngularcliElectronPage;

  beforeEach(() => {
    page = new AngularcliElectronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

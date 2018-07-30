import { BookWarehousePage } from './app.po';

describe('book-warehouse App', function() {
  let page: BookWarehousePage;

  beforeEach(() => {
    page = new BookWarehousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Ng4ReacttiveFormPage } from './app.po';

describe('ng4-reacttive-form App', () => {
  let page: Ng4ReacttiveFormPage;

  beforeEach(() => {
    page = new Ng4ReacttiveFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

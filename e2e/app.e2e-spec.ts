import { StarterCliBootFirePage } from './app.po';

describe('starter-cli-boot-fire App', () => {
  let page: StarterCliBootFirePage;

  beforeEach(() => {
    page = new StarterCliBootFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

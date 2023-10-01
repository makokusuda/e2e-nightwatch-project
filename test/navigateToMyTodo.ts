describe("Navigate to My Todo", () => {
  it("navigate to My Todo", (browser) => {
    browser.url(browser.launch_url);
    browser.assert.urlEquals("http://localhost:5173/");
  });
});

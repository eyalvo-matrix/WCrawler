const scraperObject = {
    url: 'http://books.toscrape.com',
    async scraper(browser){
        let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		// Navigate to the selected page
		await page.goto(this.url);
		// Wait for the required DOM to be rendered
		await page.waitForSelector('.page_inner');
		// Get the link to all the required books
		let urls = await page.$$eval('img', links => {
			// Extract the links from the data
			links = links.map(elem => ({
                                      imageUrl: elem.src,
                                      sourceUrl: "",
                                      depth: 0,
         }));
			return links;
		});
		console.log(JSON.stringify(urls));
    }
}

module.exports = scraperObject;
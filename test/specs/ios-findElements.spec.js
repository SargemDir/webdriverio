describe('iOS Find Elements', () => {
    it('find element by accessibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find by tag name', async () => {
        // single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        // multiple elements
        const textEls = await $$('XCUIElementTypeStaticText');
        for(const element of textEls) {
            console.log(await element.getText());
        }
    });

    it('find element by xpath', async () => {
        await $('//*[@name="Alert Views"]').click();
        await $('//XCUIElementTypeStaticText[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find element by class chain', async () => {
        // const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find element by predicate string', async () => {
        // const alertText = 'label == "Alert Views"';
        const alertText = 'value CEGINSWITH[C] "alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it.only('exercise Search Input Field', async () => {
        await $('~Search').click();
        await $('~Default').click();
        // await $('//*[@type="XCUIElementTypeSearchField"]').addValue('I love this course');
        await $('//XCUIElementTypeSearchField').addValue('I love this course');
        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value");

        await $('~Clear text').click();
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value");
    });
});
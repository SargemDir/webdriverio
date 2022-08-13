describe('Todo Item', () => {
    it('Create a Todo List', async () => {
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do today");
        await $('~Create').click();
        await expect(await $('~Things to do today')).toBeExisting();

        // Create Todo Item
        await $('~Things to do today').click();
        await $('//*[@name="Create item"]').click();
        //const byGroceries = 'By groceries';
        await $('//*[@value="Title"]').addValue('By groceries');
        await $('//*[@value="Due"]').click();
        await $('~Date Picker').click();
        await $('~Sunday, August 28').click();
        await $('//XCUIElementTypeWindow[@index=2]').click();
        await $("~Create").click();

        //assertion
        await expect(await $('~By groceries')).toBeExisting();
        await expect(await $('~Due August 28, 2022')).toBeExisting();
        // Due August 28, 2022
    });
});
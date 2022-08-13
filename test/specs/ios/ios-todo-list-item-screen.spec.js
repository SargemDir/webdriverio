// const ItemScreen = require("../../screenobjects/ios/item.screen");
import ItemScreen from "../../screenobjects/ios/item.screen";

describe('Todo Item', () => {
    before(async () => {
        // Create TODO List
        await ItemScreen.createListBtn.click();
        await ItemScreen.listNameInput.addValue("Things to do today");
        await ItemScreen.createBtn.click();
        await expect(await ItemScreen.listNameField("Things to do today")).toBeExisting();
    });

    beforeEach(async () => {
        console.log('BEFORE EACH HOOK!!');
    });

    after(async () => {
        console.log('AFTER HOOK!!');
    });

    afterEach(async () => {
        console.log('AFTER EACH HOOK!!');
    });

    it('Create a Todo Item', async () => {
        // Create Todo Item
        await ItemScreen.listNameField("Things to do today").click();
        await ItemScreen.createItem.click();
        //const byGroceries = 'By groceries';
        await ItemScreen.valueTitle.addValue('By groceries');
        await ItemScreen.due.click();
        await ItemScreen.datePicker.click();
        // await $('~Sunday, August 28').click();
        await ItemScreen.getByAccessibility('Sunday, August 28').click();
        await ItemScreen.clickDate.click();
        await ItemScreen.createBtn.click();

        //assertion
        await expect(await ItemScreen.getByAccessibility('By groceries')).toBeExisting();
        await expect(await ItemScreen.getByAccessibility('Due August 28, 2022')).toBeExisting();
        // Due August 28, 2022
    });
});
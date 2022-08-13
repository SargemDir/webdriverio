const EditeNoteScreen = require("../../screenobjects/android/edite-note-screen");

describe('Add Notes', () => {
    

    it('Delete a note & check the note in trash can', async () => {
        before(async () => {
            await EditeNoteScreen.skipTutorial();
            await EditeNoteScreen.addAndSaveNote("TV shows", "Friends\nBreakingBad\nPeakyBlinders");
            await driver.back();
        });

        const note = await EditeNoteScreen.firstNote.getText();

        // click one the note
        await EditeNoteScreen.firstNote.click();

        // click on more icon
        await EditeNoteScreen.moreBtn.click();

        //click on Delete item
        await EditeNoteScreen.deleteItem.click();

        // accept alert
        await driver.acceptAlert();

        // click on nav icon
        await EditeNoteScreen.navIcon.click();

        // click on trash can item
        await EditeNoteScreen.trashCanBtn.click();

        // assertions
        const trashCanItem = await EditeNoteScreen.firstNote.getText();
        await expect(trashCanItem).toEqual(note);
    });
});
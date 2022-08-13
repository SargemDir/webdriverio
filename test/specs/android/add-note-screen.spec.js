const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async () => {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.inputTxtNote.click();
        await expect(AddNoteScreen.editTxtBtn).toBeDisplayed();

        //add note title
        await AddNoteScreen.addNoteTitle.addValue("Fav Anime List");

        //add note body
        await AddNoteScreen.addNoteBody.addValue("Naruto\nOnePiece\nAOT");

        //save the changes
        await AddNoteScreen.saveNote();

        // assertions
        await expect(AddNoteScreen.editBtn).toBeDisplayed();

        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");

    });

});
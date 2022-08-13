const AddNoteScreen = require("./add-note.screen");

class EditNoteScreen {
    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreBtn() {
        return $('~More');
    }

    get deleteItem() {
        return $('//*[@text="Delete"]');
    }

    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanBtn() {
        return $('//*[@text="Trash Can"]');
    }

    async skipTutorial() {
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading, noteBody) {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.inputTxtNote.click();
        await expect(AddNoteScreen.editTxtBtn).toBeDisplayed();

        //add note title
        await AddNoteScreen.addNoteTitle.addValue(noteHeading);

        //add note body
        await AddNoteScreen.addNoteBody.addValue(noteBody);

        //save the changes
        await AddNoteScreen.saveNote();

        // assertions
        await expect(AddNoteScreen.editBtn).toBeDisplayed();

        await expect(AddNoteScreen.viewNote).toHaveText(noteBody);
    }

   

}

module.exports = new EditNoteScreen();
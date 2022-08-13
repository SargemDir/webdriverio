class ItemScreen {
    get createListBtn() {
        return $('//*[@name="Create list"]');
    }

    get listNameInput() {
        return $('//*[@value="List Name"]');
    }

    get createBtn() {
        return $('~Create');
    }

    listNameField(name) {
        return $(`~${name}`);
    }
    
    get createItem() {
        return $('//*[@name="Create item"]');
    }

    get valueTitle() {
        return $('//*[@value="Title"]');
    }

    get due() {
        return $('//*[@value="Due"]');
    }

    get datePicker() {
        return $('~Date Picker');
    }

    get aug28() {
        return $('~Sunday, August 28');
    }

    get clickDate() {
        return $('//XCUIElementTypeWindow[@index=2]');
    }

    getByAccessibility(name) {
        return $(`~${name}`);
    }

}

// module.exports = new ItemScreen();
export default new ItemScreen();
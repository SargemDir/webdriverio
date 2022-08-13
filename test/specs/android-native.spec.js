describe('Android Native Fearure Tests', () => {
    it('Access an Activety directly', async () => {
        // access activtiy
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        // pause 3s
        await driver.pause(3000);
        // assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialjg Boxes', async () => {
        // access activtiy
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        // // accept Alert
        // await driver.acceptAlert();

        // // dismiss Alert
        // await driver.dismissAlert();

        // // click on the OK button
        // await $('//*[@resource-id="android:id/button1"]').click();

        // get a;ert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        // // scroll to the end(not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // await $('~Secure Surfaces').click();

        // assertion
        await expect($('~Secure Dialog')).toExist();

    });

    it('Horizontal scrolling', async () => {
        await driver.startActivity("io.appium.android.apis",
        "io.appium.android.apis.view.Gallery1");
        // Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(3000);
    });

    it.only('Horizontal scrolling', async () => {

        //acces the date picker
        await driver.startActivity("io.appium.android.apis",
        "io.appium.android.apis.view.DateWidgets1");

        //get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        //click on change the date button
        await $('~change the date').click();

        // scroll to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        // select the 10th date
        await $('//*[@text="10"]').click;

        //click on OK button
        await $('//*[@resource-id="android:id/button1"]').click;

        // verify the updated date
        await expect(date.getText()).not.toEqual(currentDate);

        await driver.pause(3000);
    });
});
function onOpen(e) {
    // Add a custom menu to the spreadsheet.
    SpreadsheetApp.getUi() // Or DocumentApp, SlidesApp, or FormApp.
        .createMenu('Custom Menu')
        .addItem('First item', 'menuItem1')
        .addToUi();
  }
// วางใน Extensions > Apps Script ของ Google Sheet แล้ว Deploy เป็น Web app
// (Execute as: Me / Who has access: Anyone)
const SHEET_NAME = 'history';
function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['เวลา', 'เมนู', 'จำนวนคน', 'โซเดียมรวม (mg)', 'เฉลี่ยต่อคน (mg)', 'ระดับ', 'เครื่องปรุงที่ใช้']);
  }
  sh.appendRow([new Date(), d.menu, d.people, d.total, d.perPerson, d.level, d.items]);
  return ContentService.createTextOutput('ok');
}

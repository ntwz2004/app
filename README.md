# ครัวปรุงสุข รู้ทันโซเดียม (บ้านร่มโพธิ์งาม หมู่ 2)

## 1) ตั้งค่า Google Sheet
1. สร้าง Google Sheet ใหม่ > Extensions > Apps Script > วางโค้ดจาก `apps-script/Code.gs`
2. Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone
3. คัดลอก Web app URL

## 2) Deploy บน Vercel
1. push โฟลเดอร์นี้ขึ้น GitHub (หรือใช้ `vercel` CLI)
2. Import เข้า Vercel (Framework: Other, ไม่ต้องมี build command)
3. Settings > Environment Variables: `APPS_SCRIPT_URL` = URL จากข้อ 1 แล้ว Redeploy

ถ้ายังไม่ตั้งค่า แอปยังคำนวณได้ปกติ แต่จะไม่บันทึกประวัติ

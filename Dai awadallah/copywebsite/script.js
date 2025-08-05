const info = {
    image1: "https://via.placeholder.com/150", 
    image2: "https://via.placeholder.com/200", 
    image3: "https://via.placeholder.com/250"
};

const container = document.getElementById("seconttitl");

for (let k in info) {
    const img = document.createElement("img"); // إنشاء عنصر صورة
    img.src = info[k];                         // تحديد رابط الصورة
    img.alt = k;                               // نص بديل
    img.style.margin = "10px";                 // تنسيق بسيط
    img.style.width = "150px";                 // حجم مبدأي
    container.appendChild(img);                // إضافة الصورة للصفحة
}
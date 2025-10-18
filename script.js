// جميع الأسماء والأرقام
const contacts = [
  { name:"رئيس مجلس الادارة - لواء اسلام", role:"رئيس مجلس الادارة", phone:"4001" },
  { name:"متابعة رئيس مجلس إدارة - عقيد محمد سعيد", role:"متابعة رئيس مجلس إدارة", phone:"4055" },
  { name:"سكرتارية رئيس مجلس الادارة - مساعد ياسين زكريا", role:"سكرتارية رئيس مجلس الادارة", phone:"4009" },
  { name:"سكرتارية رئيس مجلس الادارة - رائد محمد عصام", role:"سكرتارية رئيس مجلس الادارة", phone:"4009" },
  { name:"نائب رئيس مجلس الادارة - لواء ناصر", role:"نائب رئيس مجلس الادارة", phone:"4002" },
  { name:"رئيس الفرع المالي - لواء احمد انيس", role:"الفرع المالي", phone:"4004" },
  { name:"رئيس فرع النظم - مقدم محمد سعيد", role:"فرع النظم", phone:"4005" },
  { name:"رئيس فرع التنظيم - عميد عادل راشد", role:"فرع التنظيم", phone:"4026" },
  { name:"رئيس فرع الشئون القانونية", role:"فرع الشئون القانونية", phone:"4028" },
  { name:"رئيس فرع الإنتاج", role:"فرع الإنتاج", phone:"4022" },
  { name:"رئيس فرع التفتيش - عميد محمد الغازولي", role:"فرع التفتيش", phone:"4023" },
  { name:"رئيس فرع المركبات", role:"فرع المركبات", phone:"4007" },
  { name:"رئيس فرع الإشارة - عميد ميخائيل", role:"فرع الإشارة", phone:"4006" },
  { name:"رئيس فرع التخطيط والمتابعة - عميد بسام", role:"فرع التخطيط", phone:"4008" },
  { name:"رئيس فرع الاحتياجات - رائد مهند", role:"فرع الاحتياجات", phone:"4032" },
  { name:"الفرع الإداري", role:"الفرع الإداري", phone:"4045" },
  { name:"ضباط الفرع المالي", role:"الفرع المالي", phone:"4014" },
  { name:"محاسبين الفرع المالي", role:"الفرع المالي", phone:"4039" },
  { name:"المدير العام - العميد حازم النمر", role:"المدير العام", phone:"4024" },
  { name:"ضباط فرع النظم - رائد شوقي", role:"فرع النظم", phone:"4015" },
  { name:"فرع التنظيم", role:"فرع التنظيم", phone:"4027" },
  { name:"فرع الشئون القانونية", role:"فرع الشئون القانونية", phone:"4053" },
  { name:"فرع التسويق", role:"فرع التسويق", phone:"4050" },
  { name:"فرع التسويق 2", role:"فرع التسويق", phone:"4052" },
  { name:"مكتب شؤون العاملين", role:"مكتب شؤون العاملين", phone:"4051" },
  { name:"شؤون ضباط", role:"شؤون ضباط", phone:"4063" },
  { name:"فرع الاستحقاقات", role:"فرع الاستحقاقات", phone:"4035" },
  { name:"شؤون إدارية", role:"شؤون إدارية", phone:"4045" },
  { name:"فرع المصايد", role:"فرع المصايد", phone:"4033" },
  { name:"الارشيف", role:"الارشيف", phone:"4017" },
  { name:"فرع التخطيط", role:"فرع التخطيط", phone:"4037" },
  { name:"مكتب الامن", role:"مكتب الامن", phone:"4019" },
  { name:"البوابة الأمن", role:"البوابة الأمن", phone:"4030" },
  { name:"مكتب قائد الامن - الرائد محمد مكاوي", role:"مكتب قائد الامن", phone:"4029" }
];

// ترتيب الأسماء أبجدياً
contacts.sort((a,b)=>a.name.localeCompare(b.name,'ar'));

// عناصر الصفحة
const searchInput=document.getElementById('searchInput');
const searchBtn=document.getElementById('searchBtn');
const resultArea=document.getElementById('result');
const contactsList=document.getElementById('contactsList');

// عرض كل الأسماء بالقائمة
function renderList(){
  contactsList.innerHTML='';
  contacts.forEach(c=>{
    const li=document.createElement('li');
    li.innerHTML=`<span>${c.name}</span><span>${c.phone}</span>`;
    li.onclick=()=>showResult(c);
    contactsList.appendChild(li);
  });
}

// عرض النتيجة
function showResult(c){
  resultArea.innerHTML=`
    <div class="card">
      <div class="info">
        <div class="name">${c.name}</div>
        <div class="role">${c.role}</div>
        <div class="phone">📞 ${c.phone}</div>
      </div>
      <div class="actions">
        <button class="btn copy" onclick="copyPhone('${c.phone}')">نسخ</button>
        <button class="btn call" onclick="callPhone('${c.phone}')">اتصال</button>
      </div>
    </div>`;
}

// دوال النسخ والاتصال
function copyPhone(p){navigator.clipboard.writeText(p);alert('تم نسخ الرقم: '+p);}
function callPhone(p){window.location.href='tel:'+p;}

// البحث الفعلي
function search(q){
  const query=q.trim();
  if(!query){resultArea.innerHTML='';return;}
  const results=contacts.filter(c=>c.name.includes(query)||c.role.includes(query)||c.phone.includes(query));
  if(results.length===0){
    resultArea.innerHTML=`<div class="card"><div>لا توجد نتائج لـ "<strong>${query}</strong>"</div></div>`;
  }else{
    showResult(results[0]);
    if(results.length>1){
      const more=results.slice(1).map(r=>`<div style="padding:4px 0;">${r.name} — ${r.phone}</div>`).join('');
      resultArea.innerHTML+=`<div style="margin-top:8px;background:rgba(0,0,0,0.1);border-radius:8px;padding:8px;"><strong>نتائج إضافية:</strong>${more}</div>`;
    }
  }
}

// بحث تلقائي أثناء الكتابة
searchInput.addEventListener("input",()=>search(searchInput.value));
// زر البحث
searchBtn.onclick=()=>search(searchInput.value);

// تشغيل القائمة عند بداية الصفحة
renderList();

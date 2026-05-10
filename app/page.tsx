export default function Page() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <div className="overlay"></div>

        <nav className="navbar">
          <div className="logo">SNAD</div>

          <div className="nav-links">
            <a href="#">الرئيسية</a>
            <a href="#">المميزات</a>
            <a href="#">الأسعار</a>
            <a href="#">تواصل</a>
          </div>
        </nav>

        <div className="hero-content">

          <div className="badge">
            نظام محاسبي سحابي ذكي
          </div>

          <h1>
            نظام <span>سند</span>
            <br />
            لإدارة أعمالك بسهولة
          </h1>

          <p>
            إدارة المبيعات والفواتير والعملاء والمخزون
            عبر نظام سحابي سريع وآمن يعمل من أي مكان
          </p>

          <div className="buttons">
            <button className="primary">
              ابدأ الآن
</button>
            <button className="secondary">
              استكشف النظام
</button>          
</div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features">

        <div className="section-title">
          <h2>مميزات نظام سند</h2>
          <p>
            كل ما تحتاجه لإدارة نشاطك التجاري باحترافية
          </p>
        </div>

        <div className="cards">

          <div className="card">
            <h3>فواتير إلكترونية</h3>
            <p>
              إصدار فواتير ضريبية متوافقة بسهولة
            </p>
          </div>

          <div className="card">
            <h3>إدارة المخزون</h3>
            <p>
              متابعة المنتجات والكميات بشكل لحظي
            </p>
          </div>

          <div className="card">
            <h3>تقارير ذكية</h3>
            <p>
              تحليلات دقيقة للأرباح والمبيعات
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
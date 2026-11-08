import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import {
  Shield,
  Menu,
  X,
  Trophy,
  Users,
  CalendarDays,
  Medal,
  Newspaper,
  ChevronLeft,
  ArrowLeft,
  ShieldCheck,
  Target,
  Flag,
  Swords,
  UserRound,
  Mail,
  Instagram,
  Facebook,
  Gamepad2,
} from 'lucide-react'

const navigation = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'الكلانات', href: '#clans' },
  { label: 'البطولات', href: '#competitions' },
  { label: 'المباريات', href: '#matches' },
  { label: 'الترتيب', href: '#standings' },
  { label: 'الأخبار', href: '#news' },
]

const features = [
  {
    icon: Users,
    title: 'الكلانات المعتمدة',
    description: 'اكتشف الكلانات المسجلة والمعتمدة رسميًا لدى الاتحادية.',
    href: '#clans',
  },
  {
    icon: Trophy,
    title: 'البطولات والمسابقات',
    description: 'تابع مختلف المنافسات والبطولات المنظمة تحت إشراف الاتحادية.',
    href: '#competitions',
  },
  {
    icon: CalendarDays,
    title: 'المباريات والنتائج',
    description: 'اطّلع على رزنامة المباريات والنتائج الرسمية.',
    href: '#matches',
  },
  {
    icon: Medal,
    title: 'الترتيب والإحصائيات',
    description: 'تابع ترتيب الكلانات وإحصائيات المنافسات.',
    href: '#standings',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-wrapper" dir="rtl">
      <header className="site-header">
        <div className="container header-content">
          <a className="brand" href="#home" onClick={closeMenu}>
            <div className="brand-logo">
              <Shield size={30} strokeWidth={1.8} />
              <span>A</span>
            </div>
            <div className="brand-text">
              <strong>الاتحادية الجزائرية</strong>
              <span>للكلانات الإلكترونية</span>
            </div>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="فتح القائمة"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a className="login-link" href="#contact" onClick={closeMenu}>
              <UserRound size={17} />
              فضاء الأعضاء
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-pattern" />
          <div className="container hero-content">
            <div className="hero-badge">
              <Flag size={16} />
              <span>الجمهورية الجزائرية الديمقراطية الشعبية</span>
            </div>

            <div className="hero-emblem">
              <Shield size={76} strokeWidth={1.2} />
              <span>AFFC</span>
            </div>

            <p className="hero-kicker">ALGERIAN FEDERATION OF CLANS</p>

            <h1>
              الاتحادية الجزائرية
              <span>للكلانات</span>
            </h1>

            <p className="hero-description">
              الهيئة المنظمة لمنافسات الكلانات الجزائرية في لعبة
              eFootball، نحو تنظيم احترافي ومنافسة عادلة وروح رياضية.
            </p>

            <div className="hero-actions">
              <a href="#competitions" className="primary-button">
                اكتشف المنافسات
                <ArrowLeft size={18} />
              </a>
              <a href="#clans" className="secondary-button">
                استكشف الكلانات
                <ChevronLeft size={18} />
              </a>
            </div>

            <div className="hero-bottom">
              <span />
              <p>الاحترافية · النزاهة · المنافسة</p>
              <span />
            </div>
          </div>
        </section>

        <section className="features-section section-padding">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">منصتكم الرسمية</span>
              <h2>كل ما يخص الكلانات في مكان واحد</h2>
              <p>
                منصة موحدة لمتابعة النشاطات والمنافسات الرسمية للكلانات
                الجزائرية.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature) => {
                const Icon = feature.icon

                return (
                  <a
                    href={feature.href}
                    className="feature-card"
                    key={feature.title}
                  >
                    <div className="feature-icon">
                      <Icon size={27} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <span className="feature-link">
                      اكتشف المزيد <ChevronLeft size={16} />
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        <section className="content-section" id="clans">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">العائلة الجزائرية</span>
              <h2>الكلانات المعتمدة</h2>
              <p>الكلانات المنضوية تحت لواء الاتحادية الجزائرية.</p>
            </div>

            <div className="empty-state">
              <div className="empty-icon">
                <Users size={34} />
              </div>
              <h3>لا توجد كلانات معتمدة للعرض حاليًا</h3>
              <p>ستظهر هنا قائمة الكلانات فور اعتمادها رسميًا.</p>
            </div>
          </div>
        </section>

        <section className="competitions-section section-padding" id="competitions">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">المنافسة تبدأ هنا</span>
              <h2>البطولات والمسابقات</h2>
              <p>تابع المنافسات الرسمية التي تنظمها الاتحادية.</p>
            </div>

            <div className="empty-state">
              <div className="empty-icon">
                <Trophy size={34} />
              </div>
              <h3>لا توجد بطولات منشورة حاليًا</h3>
              <p>سيتم عرض البطولات فور إضافتها إلى المنصة.</p>
            </div>
          </div>
        </section>

        <section className="content-section" id="matches">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">جدول المنافسات</span>
              <h2>المباريات والنتائج</h2>
              <p>كل المواجهات والنتائج الرسمية في مكان واحد.</p>
            </div>

            <div className="empty-state">
              <div className="empty-icon">
                <Swords size={34} />
              </div>
              <h3>لا توجد مباريات مجدولة حاليًا</h3>
              <p>ستظهر هنا المباريات والنتائج الرسمية عند توفرها.</p>
            </div>
          </div>
        </section>

        <section className="standings-section section-padding" id="standings">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">سباق الصدارة</span>
              <h2>الترتيب العام</h2>
              <p>ترتيب الكلانات حسب نتائج المنافسات الرسمية.</p>
            </div>

            <div className="empty-state">
              <div className="empty-icon">
                <Medal size={34} />
              </div>
              <h3>لا توجد بيانات ترتيب حاليًا</h3>
              <p>سيتم تحديث الترتيب بعد تسجيل نتائج المنافسات.</p>
            </div>
          </div>
        </section>

        <section className="news-section content-section" id="news">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">آخر المستجدات</span>
              <h2>الأخبار والإعلانات</h2>
              <p>تابع آخر أخبار وقرارات الاتحادية.</p>
            </div>

            <div className="empty-state">
              <div className="empty-icon">
                <Newspaper size={34} />
              </div>
              <h3>لا توجد أخبار منشورة حاليًا</h3>
              <p>ستجد هنا الأخبار والإعلانات الرسمية فور نشرها.</p>
            </div>
          </div>
        </section>

        <section className="join-section">
          <div className="container join-content">
            <div className="join-icon">
              <ShieldCheck size={42} />
            </div>
            <div>
              <span className="section-label">كن جزءًا من المنظومة</span>
              <h2>هل ترغب في تسجيل كلانك؟</h2>
              <p>
                انضم إلى المنظومة الرسمية للكلانات الجزائرية وابدأ
                مسيرتك التنافسية.
              </p>
            </div>
            <a href="#contact" className="primary-button">
              تواصل معنا <ArrowLeft size={18} />
            </a>
          </div>
        </section>

        <section className="contact-section section-padding" id="contact">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">نحن هنا لخدمتكم</span>
              <h2>تواصل مع الاتحادية</h2>
              <p>للاستفسارات والمقترحات وطلبات الانضمام.</p>
            </div>

            <div className="contact-card">
              <div className="contact-item">
                <Mail size={22} />
                <div>
                  <strong>البريد الإلكتروني</strong>
                  <span>سيتم الإعلان عنه قريبًا</span>
                </div>
              </div>
              <div className="contact-item">
                <Facebook size={22} />
                <div>
                  <strong>فيسبوك</strong>
                  <span>الصفحة الرسمية قريبًا</span>
                </div>
              </div>
              <div className="contact-item">
                <Instagram size={22} />
                <div>
                  <strong>إنستغرام</strong>
                  <span>الحساب الرسمي قريبًا</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <Shield size={27} />
              <span>A</span>
            </div>
            <div>
              <strong>الاتحادية الجزائرية للكلانات</strong>
              <span>ALGERIAN FEDERATION OF CLANS</span>
            </div>
          </div>

          <p className="footer-motto">
            <Gamepad2 size={17} />
            نحو مستقبل احترافي للكلانات الجزائرية
          </p>

          <div className="footer-bottom">
            <span>© AFFC 2026 - جميع الحقوق محفوظة</span>
            <span>صنع بشغف من أجل الكلانات الجزائرية</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

export type Lang = "en" | "tr" | "ku";

export interface Translation {
  logo: string;
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    role: string;
    welcome: string;
    downloadCV: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    coursesTitle: string;
    courses: string[];
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    projectTitle: string;
    desc: string;
    tech: string;
    github: string;
    liveDemo: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sent: string;
  };
}

export const translations: Record<Lang, Translation> = {
  en: {
    logo: "Dania's Portfolio",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "Software Engineering Student (UG3)",
      welcome: "Welcome to Dania's Portfolio",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      p1: "Hello! I'm Dania Abdullah, a 3rd-year (UG3) Software Engineering student at the University of Kurdistan Hewler (UKH). During my studies at the university, I am continuously learning the latest modern technologies",
      p2: "I enjoy building modern software solutions using React, TypeScript, Node.js, and PostgreSQL.",
      p3: "I'm passionate about learning new technologies and creating responsive, user-friendly websites.",
      coursesTitle: "Relevant Academic Coursework",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Architecture & Design",
        "Object-Oriented Programming",
        "Web Development",
        "Operating Systems",
      ],
    },
    skills: {
      title: "My Skills",
    },
    projects: {
      title: "My Projects",
      projectTitle: "Dental Clinic Management System",
      desc: "A full-stack dental clinic management system that allows administrators to manage patients, dentists, appointments, and treatments.",
      tech: "Technologies",
      github: "GitHub",
      liveDemo: "Live Demo",
    },
    contact: {
      title: "Contact Me",
      subtitle:
        "Have a project in mind or want to connect? Feel free to reach out!",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      send: "Send Message",
      sent: "Message Sent!",
    },
  },
  tr: {
    logo: "Dania'nın Portfolyosu",
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      skills: "Yetenekler",
      projects: "Projeler",
      contact: "İletişim",
    },
    hero: {
      role: "Yazılım Mühendisliği 3. Sınıf Öğrencisi",
      welcome: "Dania'nın Portfolyosuna Hoş Geldiniz",
      downloadCV: "CV İndir",
    },
    about: {
      title: "Hakkımda",
      p1: "Merhaba! Ben Dania Abdullah, Kürdistan Hewler Üniversitesi'nde (UKH) üçüncü sınıf (UG3) Yazılım Mühendisliği öğrencisiyim. Üniversitedeki eğitimim boyunca en son modern teknolojileri öğrenmeye devam ediyorum.",
      p2: "React, TypeScript, Node.js ve PostgreSQL kullanarak modern yazılım çözümleri geliştirmekten keyif alıyorum.",
      p3: "Yeni teknolojiler öğrenmeye ve duyarlı, kullanıcı dostu web siteleri oluşturmaya tutkuyla bağlıyım.",
      coursesTitle: "İlgili Akademik Dersler",
      courses: [
        "Veri Yapıları ve Algoritmalar",
        "Veritabanı Yönetim Sistemleri",
        "Yazılım Mimarisi ve Tasarımı",
        "Nesne Yönelimli Programlama",
        "Web Geliştirme",
        "İşletim Sistemleri",
      ],
    },
    skills: {
      title: "Yeteneklerim",
    },
    projects: {
      title: "Projelerim",
      projectTitle: "Diş Kliniği Yönetim Sistemi",
      desc: "Yöneticilerin hastaları, diş hekimlerini, randevuları ve tedavileri yönetmesini sağlayan tam kapsamlı bir diş kliniği yönetim sistemi.",
      tech: "Teknolojiler",
      github: "GitHub",
      liveDemo: "Canlı Demo",
    },
    contact: {
      title: "İletişime Geç",
      subtitle:
        "Aklınızda bir proje mi var, yoksa bağlantı mı kurmak istiyorsunuz? Çekinmeden ulaşın!",
      email: "E-posta",
      github: "GitHub",
      linkedin: "LinkedIn",
      namePlaceholder: "Adınız",
      emailPlaceholder: "E-posta Adresiniz",
      messagePlaceholder: "Mesajınız",
      send: "Mesaj Gönder",
      sent: "Mesaj Gönderildi!",
    },
  },
  ku: {
    logo: "پۆرتفلیۆی دانیە",
    nav: {
      home: "سەرەکی",
      about: "دەربارە",
      skills: "شارەزاییەکان",
      projects: "پڕۆژەکان",
      contact: "پەیوەندی",
    },
    hero: {
      role: "خوێندکاری قۆناغی سێیەمی ئەندازیاری پرۆگرامسازی",
      welcome: "بەخێربێیت بۆ پۆرتفۆلیۆی دانیە عبداللە",
      downloadCV: "داگرتنی CV",
    },
    about: {
      title: "دەربارەی من",
      p1: "سڵاو! من دانیە عبداللە، خوێندکاری قۆناغی سێیەمی (UG3) ئەندازیاری پرۆگرامسازیم لە زانکۆی کوردستان-هەولێر (UKH). لە ماوەی خوێندنم لە زانکۆ بەردەوامم لە فێربوونی نوێترین تەکنەلۆژیای سەردەم.",
      p2: "خوازیاری دروستکردنی چارەسەری پرۆگرامسازی مۆدێرنم، بە بەکارهێنانی React، TypeScript، Node.js و PostgreSQL و JavaScript.",
      p3: "بە پەرۆشەوە فێری تەکنەلۆژیای نوێ دەبم و ماڵپەڕی وەڵامدەرەوە و ئاسان بۆ بەکارهێنەر دروست دەکەم.",
      coursesTitle: "وانە ئەکادیمییەکان",
      courses: [
        " داتا  سترەکچەر و ئەلگۆریتمەکان",
        "سیستەمی بەڕێوەبردنی داتابەیس",
        "دیزاین و تەلارسازی پرۆگرامسازی",
        "بەرنامەسازی ئۆبجێکت ئۆریێنتد",
        "گەشەپێدانی وێب",
        "سیستەمی کارپێکردن",
        "",
      ],
    },
    skills: {
      title: "شارەزاییەکانم",
    },
    projects: {
      title: "پڕۆژەکانم",
      projectTitle: "سیستەمی بەڕێوەبردنی کلینیکی ددان",
      desc: "سیستەمێکی تەواوی بەڕێوەبردنی کلینیکی ددان کە ڕێگە بە (نەخۆش، پزیشکی ددان، یاریدەدەری پزیشکی ددان) دەدات کاتی چاوپێکەوتن و چارەسەرەکان بەڕێوە ببەن.",
      tech: "تەکنەلۆژیاکان",
      github: "گیتهەب",
      liveDemo: "نمایشی ڕاستەوخۆ",
    },
    contact: {
      title: "پەیوەندیم پێوە بکە",
      subtitle:
        "پڕۆژەیەکت لە مێشکدایە یان دەتەوێت پەیوەندی بە کەسی دروست بکەیت؟ دەست پێبکە!",
      email: "ئیمەیل",
      github: "گیتهەب",
      linkedin: "لینکدئین",
      namePlaceholder: "ناوت",
      emailPlaceholder: "ئیمەیلەکەت",
      messagePlaceholder: "نامەکەت",
      send: "ناردنی نامە",
      sent: "نامە نێردرا!",
    },
  },
};

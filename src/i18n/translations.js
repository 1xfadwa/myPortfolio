const translations = {
  en: {
    skip: "Skip to content",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cta: "Let's Talk",
    },
    hero: {
      eyebrow: "Front-End Developer · UI/UX Designer",
      name: "Fadwa Barnawi",
      intro:
        "I turn ideas into clean, intuitive, and engaging digital experiences through front-end development and UI/UX design.",
      cta1: "Explore My Work",
      cta2: "Download CV",
      scroll: "Scroll",
      alt: "Illustrated memoji of Fadwa smiling and giving a thumbs up",
    },
    about: {
      eyebrow: "Who I Am",
      heading: "About Me",
      p1: "I'm Fadwa, an Information Systems graduate from Taibah University, and a Data Analyst and Front-End Developer who enjoys turning ideas into simple, meaningful digital experiences. I care about how things look, but also how they feel and work for the people using them.",
      p2: "I'm always curious to learn, experiment, and improve my skills while building things that are both functional and enjoyable to use.",
      alt: "Illustrated memoji of Fadwa with a lightbulb above her head, representing ideas and creativity",
    },
    skills: {
      eyebrow: "What I Work With",
      heading: "Skills",
      hard: "Hard Skills",
      soft: "Soft Skills",
      groups: {
        data: "Data Analysis",
        frontend: "Front-End Development",
        backend: "Back-End Development",
        uiux: "UI/UX Design",
        other: "Other",
      },
      touchTyping: "Touch Typing",
      softList: [
        "Problem Solving",
        "Time Management",
        "Continuous Learning",
        "Creativity",
        "Communication",
      ],
    },
    projects: {
      eyebrow: "Selected Work",
      heading: "Projects",
      intro: "Here, you will find some of the projects I've worked on.",
      viewGithub: "View on GitHub",
      opensNewTab: "(opens in a new tab)",
      items: [
        {
          featured: true,
          name: "HR Attrition Dashboard",
          desc: "An interactive Power BI dashboard analyzing employee attrition in the IBM HR Analytics dataset. It shows where attrition is concentrated by department, age group and marital status, and ends with actionable recommendations for HR.",
          highlights: [
            "Overall attrition 16.1%; Sales highest at 20.6%",
            "Ages 18-29: 22% of employees but about 38% of leavers",
            "Built with Power Query, DAX and a custom theme",
          ],
          tech: ["Power BI", "DAX", "Power Query", "HR Analytics", "Data Visualization"],
          image: "/assets/hr-attrition-dashboard.png",
          imageAlt: "Screenshot of the HR Attrition Dashboard overview page in Power BI",
          url: "https://github.com/1xfadwa/hr-attrition-dashboard",
        },
        {
          name: "HR Employee Attrition: What Drives It?",
          desc: "A two-page Power BI dashboard analyzing employee attrition in the Kaggle \"Human Resources Data Set\". It shows how large attrition is, where it concentrates, why employees leave, and how pay, performance and hiring source relate to leaving, with findings and recommendations for HR.",
          highlights: [
            "Cumulative attrition 33.4% (104 of 311); 28.3% voluntary",
            "Production accounts for 83 of 104 leavers (80%)",
            "Voluntary leavers earned about 9.5% less on average",
          ],
          tech: ["Power BI", "DAX", "Power Query", "HR Analytics", "Data Visualization"],
          image: "/assets/hr-employee-attrition.png",
          imageAlt: "Overview page of the HR Employee Attrition dashboard in Power BI, showing how large attrition is, where it concentrates and why employees leave",
          url: "https://github.com/1xfadwa/hr-employee-analysis",
        },
        {
          name: "Impact of Social Media on Students",
          desc: "An interactive Power BI dashboard analyzing survey data from 4,500 students to explore how social media use relates to sleep, stress and academic performance.",
          tech: ["Power BI", "Data Analytics"],
          image: "/assets/social-media-impact.png",
          imageAlt: "Overview page of the Impact of Social Media on Students dashboard in Power BI",
          // TODO: replace with the repository link once it is on GitHub, e.g.
          // "https://github.com/1xfadwa/<repo-name>". Until then the button opens the GitHub profile.
        },
        {
          name: "Habitly – Habit Tracker App",
          desc: "A mobile application designed to help users build positive daily habits and track their progress in a simple and organized way. It provides an intuitive interface for managing habits and monitoring daily and weekly achievements.",
          highlights: [
            "Clean and modern user interface with weekly progress tracking",
            "Ability to add, organize, and track daily habits",
            "Light and dark mode support",
            "Currently under development, with ongoing improvements to statistics and data persistence",
          ],
          tech: ["Flutter", "Dart", "Provider", "SharedPreferences", "Mobile App"],
          image: "/assets/habitly-preview.webp",
          imageAlt: "Habitly habit tracker app interface preview",
          url: "https://github.com/1xfadwa/habitly",
        },
        // Hidden for now. To bring these placeholder projects back, delete the
        // opening "/*" and the closing "*/" around them (and do the same in the Arabic list).
        /*
        {
          name: "E-Commerce Checkout Redesign",
          desc: "Redesigned the checkout flow of an online store to reduce friction and improve completion rate, from wireframes to a working front-end build.",
          tech: ["Figma", "React", "CSS"],
        },
        {
          name: "Task Management Dashboard",
          desc: "An interactive web app for organizing tasks and tracking workflow across small teams, built with a focus on clarity and speed.",
          tech: ["React", "JavaScript", "C#"],
        },
        {
          name: "Personal Design System",
          desc: "A small component library and design system balancing personal identity with professional, reusable UI patterns.",
          tech: ["Figma", "HTML", "CSS"],
        },
        */
      ],
    },
    contact: {
      eyebrow: "Get In Touch",
      heading: "Let's Build Something Great",
      intro: "Have a project or an idea in mind? I'd love to hear about it.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      errRequired: "This field is required.",
      errEmail: "Please enter a valid email address.",
      sending: "Sending…",
      statusSuccess: "Thank you! Your message has been sent. I'll get back to you soon.",
      statusError:
        "Something went wrong and your message was not sent. Please try again, or email me directly at b.fadwaabdullah@gmail.com.",
      alt: "Illustrated memoji of Fadwa waving hello",
    },
    footer: {
      rights: "© 2026 Fadwa Barnawi. All rights reserved.",
    },
  },

  ar: {
    skip: "تخطَّ إلى المحتوى",
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "تواصل",
      cta: "لنتحدث",
    },
    hero: {
      eyebrow: "مطوّرة واجهات أمامية · مصممة تجربة وواجهة مستخدم",
      name: "فدوى برناوي",
      intro:
        "أحوّل الأفكار إلى تجارب رقمية نظيفة وبديهية وجذابة من خلال تطوير الواجهات الأمامية وتصميم تجربة وواجهة المستخدم.",
      cta1: "استكشاف أعمالي",
      cta2: "تحميل السيرة الذاتية",
      scroll: "مرّر للأسفل",
      alt: "رمز تعبيري توضيحي لفدوى تبتسم وتشير بإبهامها للأعلى",
    },
    about: {
      eyebrow: "من أنا",
      heading: "نبذة عني",
      p1: "أنا فدوى، خريجة نظم المعلومات من جامعة طيبة، ومحللة بيانات ومطوّرة واجهات أمامية أستمتع بتحويل الأفكار إلى تجارب رقمية بسيطة وذات معنى. أهتم بشكل الأشياء، ولكن أيضًا بكيفية شعور المستخدمين بها وتفاعلهم معها.",
      p2: "أحب دائمًا التعلّم والتجربة وتطوير مهاراتي أثناء بناء أشياء وظيفية وممتعة الاستخدام في آنٍ واحد.",
      alt: "رمز تعبيري توضيحي لفدوى مع مصباح فوق رأسها، يرمز إلى الأفكار والإبداع",
    },
    skills: {
      eyebrow: "أدوات عملي",
      heading: "المهارات",
      hard: "المهارات التقنية",
      soft: "المهارات الشخصية",
      groups: {
        data: "تحليل البيانات",
        frontend: "تطوير الواجهات الأمامية",
        backend: "تطوير الخلفية",
        uiux: "تصميم تجربة وواجهة المستخدم",
        other: "أخرى",
      },
      touchTyping: "الطباعة السريعة",
      softList: [
        "حل المشكلات",
        "إدارة الوقت",
        "التعلم المستمر",
        "الإبداع",
        "التواصل",
      ],
    },
    projects: {
      eyebrow: "أعمال مختارة",
      heading: "المشاريع",
      intro: "فيما يلي بعض المشاريع التي عملت عليها.",
      viewGithub: "عرض على GitHub",
      opensNewTab: "(يفتح في تبويب جديد)",
      items: [
        {
          featured: true,
          name: "لوحة تحليل استقالات الموظفين",
          desc: "لوحة تفاعلية في Power BI تحلل استقالات الموظفين في بيانات IBM HR Analytics. تُظهر أين يتركز التسرب حسب القسم والفئة العمرية والحالة الاجتماعية، وتنتهي بتوصيات عملية لإدارة الموارد البشرية.",
          highlights: [
            "نسبة التسرب الإجمالية 16.1%، وأعلاها في قسم المبيعات بنسبة 20.6%",
            "الفئة العمرية من 18 إلى 29 سنة تمثل 22% من الموظفين، لكنها تشكل نحو 38% من المغادرين",
            "بُنيت باستخدام Power Query وDAX وثيم مخصص",
          ],
          tech: ["Power BI", "DAX", "Power Query", "تحليلات الموارد البشرية", "تصور البيانات"],
          image: "/assets/hr-attrition-dashboard.png",
          imageAlt: "لقطة شاشة للصفحة الرئيسية للوحة تحليل استقالات الموظفين في Power BI",
          url: "https://github.com/1xfadwa/hr-attrition-dashboard",
        },
        {
          name: "ما الذي يدفع الموظفين للمغادرة؟ تحليل استقالات الموظفين",
          desc: "لوحة Power BI من صفحتين تحلل استقالات الموظفين في بيانات Human Resources Data Set من Kaggle. تُظهر حجم المغادرة وأين تتركز ولماذا يغادر الموظفون، وعلاقتها بالراتب والأداء ومصدر التوظيف، وتنتهي بنتائج وتوصيات لإدارة الموارد البشرية.",
          highlights: [
            "نسبة التسرب التراكمية 33.4% (104 من 311)، منها 28.3% مغادرة طوعية",
            "قسم الإنتاج يمثل 83 من أصل 104 مغادرين (80%)",
            "المغادرون طوعًا كان متوسط رواتبهم أقل بنحو 9.5%",
          ],
          tech: ["Power BI", "DAX", "Power Query", "تحليلات الموارد البشرية", "تصور البيانات"],
          image: "/assets/hr-employee-attrition.png",
          imageAlt: "الصفحة الرئيسية للوحة تحليل استقالات الموظفين في Power BI، تُظهر حجم المغادرة وأين تتركز ولماذا يغادر الموظفون",
          url: "https://github.com/1xfadwa/hr-employee-analysis",
        },
        {
          name: "أثر وسائل التواصل الاجتماعي على الطلاب",
          desc: "لوحة تفاعلية في Power BI تحلل استبيانًا لـ 4,500 طالب لاستكشاف علاقة استخدام وسائل التواصل بالنوم والتوتر والأداء الأكاديمي.",
          tech: ["Power BI", "تحليلات البيانات"],
          image: "/assets/social-media-impact.png",
          imageAlt: "الصفحة الرئيسية للوحة أثر وسائل التواصل الاجتماعي على الطلاب في Power BI",
          // TODO: ضعي رابط المستودع هنا بعد رفعه على GitHub (نفس الرابط الموجود في النسخة الإنجليزية).
        },
        {
          name: "Habitly – تطبيق تتبع العادات",
          desc: "تطبيق موبايل يساعد المستخدمين على بناء عادات يومية إيجابية ومتابعة تقدمهم بطريقة بسيطة ومنظمة. يوفر واجهة سهلة لإدارة العادات وتتبع الإنجازات اليومية والأسبوعية.",
          highlights: [
            "واجهة مستخدم بسيطة وعصرية لعرض العادات والتقدم الأسبوعي",
            "إمكانية إضافة العادات وتنظيمها ومتابعة إنجازها",
            "دعم الوضع الليلي والنهاري",
            "المشروع قيد التطوير، ويجري العمل على تحسين الإحصائيات وحفظ البيانات",
          ],
          tech: ["Flutter", "Dart", "Provider", "SharedPreferences", "تطبيق جوال"],
          image: "/assets/habitly-preview.webp",
          imageAlt: "معاينة واجهة تطبيق Habitly لتتبع العادات",
          url: "https://github.com/1xfadwa/habitly",
        },
        // مخفية حاليًا. لإرجاع هذه المشاريع احذفي علامتي "/*" و"*/" حولها (وكذلك في القائمة الإنجليزية).
        /*
        {
          name: "إعادة تصميم واجهة الدفع لمتجر إلكتروني",
          desc: "إعادة تصميم مسار الدفع لمتجر إلكتروني لتقليل نقاط الاحتكاك وتحسين معدل إتمام الشراء، من الرسومات الأولية إلى واجهة أمامية فعلية.",
          tech: ["Figma", "React", "CSS"],
        },
        {
          name: "لوحة تحكم لإدارة المهام",
          desc: "تطبيق ويب تفاعلي لتنظيم المهام وتتبع سير العمل ضمن الفرق الصغيرة، مصمم مع التركيز على الوضوح والسرعة.",
          tech: ["React", "JavaScript", "C#"],
        },
        {
          name: "نظام تصميم شخصي",
          desc: "مكتبة مكوّنات ونظام تصميم صغير يوازن بين الهوية الشخصية وأنماط واجهة احترافية وقابلة لإعادة الاستخدام.",
          tech: ["Figma", "HTML", "CSS"],
        },
        */
      ],
    },
    contact: {
      eyebrow: "تواصل معي",
      heading: "لنبنِ شيئًا رائعًا معًا",
      intro: "لديك مشروع أو فكرة في بالك؟ يسعدني سماعها.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      send: "إرسال الرسالة",
      errRequired: "هذا الحقل مطلوب.",
      errEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      sending: "جارٍ الإرسال…",
      statusSuccess: "شكرًا لك! تم إرسال رسالتك، وسأرد عليك قريبًا.",
      statusError:
        "حدث خطأ ولم يتم إرسال رسالتك. يرجى المحاولة مرة أخرى، أو مراسلتي مباشرة على b.fadwaabdullah@gmail.com.",
      alt: "رمز تعبيري توضيحي لفدوى تلوّح للترحيب",
    },
    footer: {
      rights: "© 2026 فدوى برناوي. جميع الحقوق محفوظة.",
    },
  },
};

export default translations;

import i18n, { t } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          headerRibbon:
            "Tarbyh Namouthajiyah Schools in Alnarjis & Qurtuba are now open ",
          admissionLink: "Register Now",
          main: "Qurtuba 2 Educational Complex",
          home: "Home",
          kindergarten: "Kindergarten",
          boys: "Boys",
          girls: "Girls",
          contact: "Contact Us",
          privacy: "Privacy Policy",
          summary:
            "One of the leading institutions under the National Company for Learning and Education, Tarbyh Namouthajiyah Schools is a pioneer in delivering high-quality education.",
          intro: `Welcome to Tarbyh Namouthajiyah Schools! We are committed to fostering
          excellence in education, personal growth, and community values.
          Explore our programs and discover how we support every student's
          journey to success.`,
          vision: "Our Vision",
          mission: "Our Mission",
          ourVision: `The school vision is to become a national reference specialized in
            managing and operating educational facilities through
            student-centered education. It strives to prepare individuals who
            are able to lead themselves and their country, and take
            responsibility for developing their societies, also to be
            representatives of their Islamic culture and proud of their
            authentic Saudi heritage. This is done through the mission of school
            that seeks to provide qualitative education within an attractive
            environment for students to build their character on leadership,
            research and innovation.`,
          ourMission: `Since the school was established, it has taken upon itself to devote
            (good) values on which it is based. They consist of sustainable
            development by exceeding what is expected, discipline in performance
            from all employees and students, and teamwork by creating an
            environment that promotes sharing education as well as providing
            security and safety through adhering to the highest standards of
            safety for employees and students. They are based on credibility and
            transparency in school community's dealings with each other.`,
        },
      },
      ar: {
        translation: {
          headerRibbon:
            "تم افتتاح مدارس التربية النموذجية في حي النرجس - حي قرطبة ",
          admissionLink: "سجل الآن ",
          main: "مجمع قرطبة 2 التعلميى",
          home: "الرئيسية",
          kindergarten: "الطفولة المبكرة",
          boys: "البنين",
          girls: "البنات",
          contact: "تواصل معنا",
          privacy: "سياسة الخصوصية",
          summary:
            "تعتبر مدارس التربية النموذجية من الجهات الرائدة التابعة للشركة الوطنية للتعليم والتعلم، حيث تعتبر مدارس التربية النموذجية رائدة في تقديم التعليم عالي الجودة.",
          intro:
            "مرحبًا بكم في مدارس التربية النموذجية! نحن ملتزمون بتعزيز التميز في التعليم، والنمو الشخصي، والقيم المجتمعية. استكشفوا برامجنا وتعرفوا على كيفية دعمنا لرحلة نجاح كل طالب.",
          vision: "الرؤية",
          mission: "الرسالة",
          ourVision:
            "تمثلت رؤية المدارس أن تصبح مرجعاً وطنياً متخصصا في إدارة و تشغيل المنشآت التعليمية من خلال تعليمٍ متمحور حول الطالب سعياً منها لإعداد أفراد قادرين على قيادة ذاتهم ووطنهم، وتحمل مسؤولية تطوير مجتمعاتهم، ممثلين لثقافتهم الإسلامية و فخورين بتراثهم السعودي الأصيل. و يتم ذلك من خلال رسالة المدارس التي تسعى إلى تقديم تعليم نوعي ضمن بيئة جاذبة للطالب لبناء الشخصية على القيادة و البحث و الابتكار.",
          ourMission:
            "منذ أن تأسست المدارس، أخذت على عاتقها تكريس القيم الحميدة التي بُنيت عليها و تتكون من التطوير المستدام بتخطي ما هو متوقع، و الانضباطية في الأداء من جميع المنسوبين و الطلاب، و العمل الجماعي من خلال خلق بيئة تعزز التعليم التشاركي، وتوفر الأمن و السلامة من خلال الالتزام بأعلى المعايير لسلامة المنسوبين و الطلاب، وتقوم على المصداقية و الشفافية في تعامل مجتمع المدارس مع بعضهم البعض.",
        },
      },
    },
  });

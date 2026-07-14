/* DALBIT — theme toggle, language toggle, mobile menu, reveal animation */

(function () {
  const root = document.documentElement;

  /* ---------- 한국어/영어 사전 ---------- */
  const I18N = {
    "brand.main": { ko: "달빛", en: "DALBIT" },
    "brand.sub": { ko: "Dalbit", en: "달빛" },
    "nav.palette": { ko: "달빛 팔레트", en: "Palette" },
    "nav.ritual": { ko: "미식 경험", en: "Tasting Ritual" },
    "nav.shop": { ko: "온라인 구매", en: "Shop Online" },
    "nav.cta": { ko: "알림 신청", en: "Get Notified" },
    "common.more": { ko: "자세히 보기 →", en: "Learn More →" },
    "common.cta.preorder": { ko: "할인 쿠폰 받고 사전예약하기", en: "Pre-order with a Discount Coupon" },

    "home.title": { ko: "달빛 DALBIT | 가장 우아한 미식 팔레트", en: "DALBIT | The Most Elegant Gourmet Palette" },
    "home.h1": { ko: "달빛 아래,<br />당신의 취향을 빚다.", en: "Under the Moonlight,<br />Crafted to Your Taste." },
    "home.lede": { ko: "보름달 속 토끼가 절구를 찧던 오랜 상상력에서 출발해,<br />한국의 맛을 오늘의 방식으로 다시 빚습니다.", en: "Inspired by the old tale of the rabbit pounding rice on the full moon,<br />we reshape Korean flavors for today." },
    "home.btn1": { ko: "가장 우아한 디저트 만나보기", en: "Meet the Most Elegant Dessert" },
    "home.stories": { ko: "달빛이 준비한 세 가지 이야기", en: "Three Stories from DALBIT" },
    "home.t1.p": { ko: "식탁 위의 작은 미술관. 6x4cm의 캔버스 위에 고소함을 바르며 나만의 미식을 완성하세요.", en: "A little gallery on your table. Complete your own taste on a 6x4cm canvas." },
    "home.t2.p": { ko: "The Ritual of Taste. 당신만의 달빛을 완성하는 3단계 미식 경험을 만나보세요.", en: "The Ritual of Taste — three steps to complete your own moonlight." },
    "home.t3.p": { ko: "달빛의 시그니처 미식을 가장 먼저 만나보세요. 달빛 팔레트 시그니처 세트.", en: "Be the first to meet DALBIT's signature — the Dalbit Palette Signature Set." },
    "home.cta.h": { ko: "달빛 첫 공개, 슈퍼 얼리버드 알림 신청", en: "DALBIT's First Reveal — Super Early Bird Sign-up" },

    "palette.title": { ko: "달빛 팔레트 | 달빛 DALBIT", en: "Palette | DALBIT" },
    "palette.h1": { ko: "식탁 위의 작은 미술관,<br />달빛 팔레트", en: "A Little Gallery on Your Table,<br />the Dalbit Palette" },
    "palette.lede": { ko: "6x4cm의 캔버스 위에 고소함을 바르며 나만의 미식을 완성하세요.", en: "Spread nutty flavors over a 6x4cm canvas and complete a gastronomy of your own." },
    "palette.c1.h": { ko: "제주 유기농 말차 스프레드", en: "Jeju Organic Matcha Spread" },
    "palette.c1.p": { ko: "프리미엄 제주 유기농 말차 100%. 직접 재배한 유기농 말차의 깊고 진한 맛과 향을 부드러운 스프레드에 그대로 담았습니다.", en: "100% premium organic Jeju matcha. The deep, rich flavor and aroma of estate-grown matcha, folded into a silky spread." },
    "palette.c2.h": { ko: "페이스트리 모약과", en: "Pastry Moyakgwa" },
    "palette.c2.p": { ko: "한 입에 우아하게 들어가는 6x4cm 황금비율. 수십 겹의 결이 살아있는 겉바속쫀 페이스트리 식감으로, 손에 끈적임이 묻지 않도록 프리미엄 유산지에 담아냈습니다.", en: "A golden 6x4cm ratio for one elegant bite. Dozens of flaky layers — crisp outside, chewy inside — served on premium parchment so nothing sticks to your hands." },
    "palette.c3.h": { ko: "제주 우도 땅콩 스프레드", en: "Jeju Udo Peanut Spread" },
    "palette.c3.p": { ko: "첨가물 0%, 오직 원물 100%. 직접 로스팅한 우도 땅콩의 깊고 달큰한 고소함을 취향껏 펴 발라 보세요.", en: "0% additives, 100% peanuts. Spread the deep, sweet nuttiness of freshly roasted Udo peanuts to your taste." },
    "palette.cta.h": { ko: "당신만의 달빛을 완성하는 3단계 미식 경험", en: "A Three-Step Tasting Ritual to Complete Your Own Moonlight" },
    "palette.cta.btn": { ko: "미식 경험 보러가기", en: "Explore the Ritual" },

    "ritual.title": { ko: "미식 경험 | 달빛 DALBIT", en: "Tasting Ritual | DALBIT" },
    "ritual.lede": { ko: "당신만의 달빛을 완성하는 3단계 미식 경험", en: "A three-step tasting ritual to complete your own moonlight" },
    "ritual.s1.ko": { ko: "가볍게 들어올리다", en: "Lift It Lightly" },
    "ritual.s1.h": { ko: "손에 묻지 않는 깔끔함", en: "Clean Hands, Nothing Sticky" },
    "ritual.s1.p": { ko: "무광 틴케이스를 열고, 결이 살아있는 약과 바를 유산지 째로 가볍게 들어 올립니다. 끈적임 없이 오직 기대감만 남습니다.", en: "Open the matte tin and lift a layered yakgwa bar, parchment and all. No stickiness — only anticipation." },
    "ritual.s2.ko": { ko: "우아하게 펴 바르다", en: "Spread It Gracefully" },
    "ritual.s2.h": { ko: "빈 캔버스를 채우는 시간", en: "Time to Fill the Blank Canvas" },
    "ritual.s2.p": { ko: "달토끼 스패출러로 제주 말차 혹은 우도 땅콩 스프레드를 덜어내어, 약과 위에 부드럽게 펴 바릅니다. 나만의 색을 얹는 짧은 의식입니다.", en: "Scoop Jeju matcha or Udo peanut spread with the moon-rabbit spatula and glide it softly over the yakgwa — a brief ritual of laying on your own color." },
    "ritual.s3.ko": { ko: "결과 향을 음미하다", en: "Savor the Layers and Aroma" },
    "ritual.s3.h": { ko: "페이스트리와 원물의 조화", en: "Harmony of Pastry and Pure Ingredients" },
    "ritual.s3.p": { ko: "바삭하게 부서지는 페이스트리의 결 사이로 고소하고 꾸덕한 스프레드가 스며듭니다. 극강의 밸런스를 오롯이 음미해 보세요.", en: "Rich, dense spread seeps between the crisp, shattering layers of pastry. Savor the ultimate balance." },
    "ritual.cta.h": { ko: "달빛의 시그니처 미식을 가장 먼저 만나보세요.", en: "Be the first to meet DALBIT's signature taste." },
    "ritual.cta.btn": { ko: "온라인 구매 가기", en: "Shop Online" },

    "shop.title": { ko: "온라인 구매 | 달빛 DALBIT", en: "Shop | DALBIT" },
    "shop.h1": { ko: "온라인 구매", en: "Shop Online" },
    "shop.lede": { ko: "달빛의 시그니처 미식을 가장 먼저 만나보세요.", en: "Be the first to meet DALBIT's signature taste." },
    "shop.name": { ko: "달빛 팔레트 시그니처 세트", en: "Dalbit Palette Signature Set" },
    "shop.desc": { ko: "식탁 위의 작은 미술관을 그대로 담은 시그니처 패키지. 달빛의 모든 경험이 하나의 틴케이스 안에 담겨 있습니다.", en: "A signature package that carries a little gallery for your table — the whole DALBIT experience in one tin case." },
    "shop.li1": { ko: "페이스트리 모약과 10구", en: "Pastry Moyakgwa, 10 pieces" },
    "shop.li2": { ko: "수제 스프레드 2종 (제주 말차/우도 땅콩)", en: "2 Handmade Spreads (Jeju Matcha / Udo Peanut)" },
    "shop.li3": { ko: "달토끼 우드 스패출러", en: "Moon Rabbit Wooden Spatula" },
    "shop.li4": { ko: "프리미엄 틴케이스 패키지", en: "Premium Tin Case Package" },
    "shop.buy": { ko: "구매하기", en: "Buy Now" },
    "shop.cta.h": { ko: "지금 알림을 신청하면 10% 특별 할인 쿠폰을 드립니다.", en: "Sign up now and receive a special 10% discount coupon." },
    "shop.cta.btn": { ko: "알림 신청하기", en: "Get Notified" },

    "pre.title": { ko: "알림 신청 | 달빛 DALBIT", en: "Get Notified | DALBIT" },
    "pre.h1": { ko: "달빛 첫 공개,<br />슈퍼 얼리버드 알림 신청", en: "DALBIT's First Reveal,<br />Super Early Bird Sign-up" },
    "pre.copy": { ko: "가장 한국적인 낭만을 선물하세요. 시중의 투박한 간식이 아닌 완벽한 K-Dessert. 지금 이메일과 연락처를 남겨주시면, 정식 오픈 시 가장 먼저 안내와 함께 <strong>'10% 특별 할인 쿠폰'</strong>을 보내드립니다.", en: "Gift the most Korean kind of romance — a flawless K-dessert, not just another snack. Leave your email and phone number, and when we launch we'll send the news first, along with a <strong>10% special discount coupon</strong>." },
    "pre.email": { ko: "이메일 주소", en: "Email Address" },
    "pre.phone": { ko: "연락처", en: "Phone Number" },
    "modal.title": { ko: "아직 정식 오픈 전입니다", en: "We Haven't Launched Yet" },
    "modal.body": { ko: "지금은 사전예약 기간이에요.<br />알림을 신청하시면 오픈 소식과 함께<br /><strong>10% 특별 할인 쿠폰</strong>을 가장 먼저 보내드립니다.", en: "We're currently in the pre-order period.<br />Sign up and we'll send you launch news<br />plus a <strong>10% special discount coupon</strong> first." },
    "modal.cta": { ko: "알림 신청하러 가기", en: "Go to Sign-up" },
    "pre.success": { ko: "신청이 완료되었습니다.<br />달빛의 첫 소식을 가장 먼저 전해드릴게요. ☾", en: "You're all set!<br />We'll bring you DALBIT's first news before anyone else. ☾" },
    "pre.privacy": { ko: "* 수집된 정보는 오픈 알림 및 쿠폰 발송 목적으로만 사용되며 안전하게 폐기됩니다.", en: "* Your information is used only for launch notices and coupon delivery, then safely discarded." }
  };

  let lang = localStorage.getItem("dalbit-lang") || "ko";

  function applyLang(next) {
    lang = next;
    root.lang = next;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const t = I18N[el.dataset.i18n];
      if (t && t[next]) el.innerHTML = t[next];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const t = I18N[el.dataset.i18nPh];
      if (t && t[next]) el.placeholder = t[next];
    });
    const toggle = document.querySelector(".lang-toggle");
    if (toggle) toggle.textContent = next === "ko" ? "EN" : "KO";
  }

  /* ---------- 테마 (라이트/다크) ---------- */
  const saved = localStorage.getItem("dalbit-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  applyTheme(saved || (prefersDark.matches ? "dark" : "light"));

  prefersDark.addEventListener("change", (e) => {
    if (!localStorage.getItem("dalbit-theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    /* ---------- 언어 전환 ---------- */
    applyLang(lang);
    const langToggle = document.querySelector(".lang-toggle");
    if (langToggle) {
      langToggle.addEventListener("click", () => {
        const next = lang === "ko" ? "en" : "ko";
        localStorage.setItem("dalbit-lang", next);
        applyLang(next);
      });
    }

    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem("dalbit-theme", next);
      });
    }

    /* ---------- 모바일 메뉴 ---------- */
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        const open = document.body.classList.toggle("menu-open");
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });

      document.querySelectorAll(".main-nav a").forEach((link) => {
        link.addEventListener("click", () => {
          document.body.classList.remove("menu-open");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    /* ---------- 현재 페이지 메뉴 표시 ---------- */
    const current = location.pathname.replace(/index\.html$/, "");
    document.querySelectorAll(".main-nav a").forEach((link) => {
      if (link.getAttribute("href") === current) link.classList.add("active");
    });

    /* ---------- 스크롤 리빌 ---------- */
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("visible"));
    }

    /* ---------- 제품 이미지 슬라이더 ---------- */
    const slides = document.querySelectorAll(".product-slider .slide");
    if (slides.length > 1) {
      let idx = 0;
      setInterval(() => {
        slides[idx].classList.remove("active");
        idx = (idx + 1) % slides.length;
        slides[idx].classList.add("active");
      }, 3500);
    }

    /* ---------- 구매하기 모달 ---------- */
    const buyBtn = document.querySelector("#buy-btn");
    const buyModal = document.querySelector("#buy-modal");
    if (buyBtn && buyModal) {
      const closeModal = () => {
        buyModal.hidden = true;
        document.body.style.overflow = "";
      };
      buyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        buyModal.hidden = false;
        document.body.style.overflow = "hidden";
      });
      buyModal.addEventListener("click", (e) => {
        if (e.target === buyModal) closeModal();
      });
      buyModal.querySelector(".modal-close").addEventListener("click", closeModal);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !buyModal.hidden) closeModal();
      });
    }

    /* ---------- 사전예약 폼 ---------- */
    const form = document.querySelector("#preorder-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.style.display = "none";
        const divider = document.querySelector(".form-divider");
        const naverBtn = document.querySelector(".naver-link");
        if (divider) divider.style.display = "none";
        if (naverBtn) naverBtn.style.display = "none";
        const success = document.querySelector(".form-success");
        if (success) success.style.display = "block";
      });
    }
  });
})();

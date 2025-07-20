const translations = {
  en: {
    account: "Account",
    help: "Help",
    cart: "Cart",
    searchPlaceholder: "Search products, brands and categories",
  },
  ar: {
    account: "الحساب",
    help: "مساعدة",
    cart: "عربة التسوق",
    searchPlaceholder: "ابحث عن المنتجات أو الماركات أو الفئات",
  }
};

document.getElementById("language-select").addEventListener("change", function () {
  const lang = this.value;
  document.documentElement.lang = lang;
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Translate static elements
  document.getElementById("account-text").textContent = translations[lang].account;
  document.getElementById("help-text").textContent = translations[lang].help;
  document.getElementById("cart-text").textContent = translations[lang].cart;
  document.getElementById("search-input").placeholder = translations[lang].searchPlaceholder;
});

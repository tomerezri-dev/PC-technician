// Business contact details – edit these and every link on the page updates.
const CONFIG = {
  phoneDisplay: "055-266-7254",
  phoneIntl: "972552667254", // country code + number, no leading 0 or "+"
  email: "Tomerezri@gmail.com",
};

document.addEventListener("DOMContentLoaded", () => {
  // Apply contact details
  document.querySelectorAll(".js-phone").forEach((a) => (a.href = `tel:+${CONFIG.phoneIntl}`));
  document.querySelectorAll(".js-phone-text").forEach((a) => (a.textContent = CONFIG.phoneDisplay));
  // WhatsApp buttons open with a starter message that matches the page
  const isBusinessPage = !!document.querySelector("#contact-form[data-business]");
  const waStarter = isBusinessPage
    ? "שלום תומר, אשמח לשמוע על שירותי IT לעסק שלי."
    : "שלום תומר, אשמח לעזרה עם המחשב.";
  document.querySelectorAll(".js-whatsapp").forEach(
    (a) => (a.href = `https://wa.me/${CONFIG.phoneIntl}?text=${encodeURIComponent(waStarter)}`)
  );
  document.querySelectorAll(".js-email").forEach((a) => (a.href = `mailto:${CONFIG.email}`));
  document.querySelectorAll(".js-email-text").forEach((a) => (a.textContent = CONFIG.email));

  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const setNav = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setNav(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setNav(false)));

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".card, .step, .stat, .faq details, .why-text, .contact-form");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  // Contact form → opens WhatsApp with a prefilled message
  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const issue = form.elements.issue.value.trim();
    const company = form.elements.company ? form.elements.company.value.trim() : "";

    form.elements.name.classList.toggle("invalid", !name);
    form.elements.phone.classList.toggle("invalid", !/^[\d\s+\-()]{9,}$/.test(phone));
    if (!name || !/^[\d\s+\-()]{9,}$/.test(phone)) {
      note.textContent = "נא למלא שם ומספר טלפון תקין.";
      return;
    }

    const text = form.hasAttribute("data-business")
      ? `שלום תומר, פנייה בנושא שירותי IT לעסק.\nשמי ${name}${company ? `, מהעסק ${company}` : ""}.\nטלפון: ${phone}${issue ? `\nבמה צריך עזרה: ${issue}` : ""}`
      : `שלום תומר, שמי ${name}.\nטלפון: ${phone}${issue ? `\nהבעיה: ${issue}` : ""}`;
    window.open(`https://wa.me/${CONFIG.phoneIntl}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    note.textContent = "תודה! אחזור אליך בהקדם.";
    form.reset();
  });
});

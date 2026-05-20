import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function initHomeAnimations() {
  if (reduceMotion.matches) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const heroImage = document.querySelector<HTMLElement>('[data-gsap="hero-image"]');
  const heroTitle = document.querySelector<HTMLElement>('[data-gsap="hero-title"]');
  const heroCopyTargets = [
    '[data-gsap="hero-kicker"]',
    '[data-gsap="hero-subtitle"]',
  ];

  if (heroImage) {
    gsap.fromTo(
      heroImage,
      { scale: 1.08 },
      { scale: 1, duration: 1.8, ease: "power3.out" },
    );
  }

  const heroTimeline = gsap.timeline({
    defaults: { duration: 0.9, ease: "power3.out" },
  });

  heroTimeline.from(heroCopyTargets[0], {
    autoAlpha: 0,
    y: 22,
    delay: 0.12,
  });

  if (heroTitle) {
    heroTimeline.from(
      heroTitle,
      {
        autoAlpha: 0,
        y: 72,
        duration: 1.15,
        ease: "power4.out",
      },
      "-=0.45",
    );
  }

  heroTimeline.from(
    heroCopyTargets[1],
    {
      autoAlpha: 0,
      y: 22,
    },
    "-=0.55",
  );

  document.querySelectorAll<HTMLElement>("[data-gsap-section]").forEach((section) => {
    const targets = section.querySelectorAll<HTMLElement>(
      "[data-gsap-heading], [data-gsap-copy], [data-gsap-media], [data-gsap-card], [data-gsap-form]",
    );

    if (!targets.length) {
      return;
    }

    gsap.from(targets, {
      autoAlpha: 0,
      y: 34,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
        once: true,
      },
    });
  });

  const peninsulaCards = document.querySelectorAll<HTMLElement>("[data-peninsula-card]");

  if (peninsulaCards.length) {
    const mm = gsap.matchMedia();

    mm.add("(hover: hover) and (min-width: 1024px)", () => {
      const cleanups: Array<() => void> = [];

      peninsulaCards.forEach((card) => {
        const title = card.querySelector<HTMLElement>("[data-peninsula-title]");
        const details = card.querySelector<HTMLElement>("[data-peninsula-details]");
        const image = card.querySelector<HTMLElement>("[data-peninsula-image]");

        if (!title || !details) {
          return;
        }

        gsap.set(details, { height: 0, autoAlpha: 0, overflow: "hidden" });

        const tl = gsap.timeline({
          paused: true,
          defaults: { duration: 0.55, ease: "power3.out" },
        });

        tl.to(card, { flexGrow: 1.8 }, 0)
          .to(details, { height: "auto", autoAlpha: 1 }, 0);

        if (image) {
          tl.to(image, { scale: 1.06, duration: 1 }, 0);
        }

        const enter = () => tl.play();
        const leave = () => tl.reverse();

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        cleanups.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
          tl.kill();
          gsap.set(card, { clearProps: "flexGrow" });
          gsap.set(details, { clearProps: "all" });
          if (image) {
            gsap.set(image, { clearProps: "all" });
          }
        });
      });

      return () => cleanups.forEach((fn) => fn());
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomeAnimations, { once: true });
} else {
  initHomeAnimations();
}

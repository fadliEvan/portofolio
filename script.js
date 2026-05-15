// ===========================
// INIT
// ===========================
document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  // ===========================
  // INTRO ANIMATION
  // ===========================
  const intro = document.getElementById("intro");
  const words = document.querySelectorAll(".intro-word");
  const bar = document.querySelector(".intro-bar");

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(intro, {
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        onComplete: () => {
          intro.style.display = "none";
          animateHeroIn();
        }
      });
    }
  });

  tl.to(words, {
    y: 0,
    stagger: 0.15,
    duration: 0.9,
    ease: "power4.out"
  })
  .to(bar, {
    width: 120,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.3");

  // ===========================
  // HERO ENTRANCE
  // ===========================
  function animateHeroIn() {
    gsap.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" });
    gsap.from(".hero-line", { y: "110%", stagger: 0.15, duration: 0.9, ease: "power4.out", delay: 0.1 });
    gsap.from(".hero-desc", { opacity: 0, y: 20, duration: 0.7, delay: 0.5 });
    gsap.from(".hero-actions", { opacity: 0, y: 20, duration: 0.7, delay: 0.65 });
    gsap.from(".hero-stats", { opacity: 0, y: 20, duration: 0.7, delay: 0.8 });
    gsap.from(".avatar-wrap", { opacity: 0, scale: 0.85, duration: 1, delay: 0.4, ease: "back.out(1.4)" });

    // Start typing after hero loads
    setTimeout(startTyping, 800);
  }

  // ===========================
  // TYPING EFFECT
  // ===========================
  const roles = [
    "Backend Developer ⚙️",
    "REST API Builder 🔗",
    "AI Bot Creator 🤖",
    "Automation Engineer ⚡",
    "Blockchain Explorer 🔗"
  ];
  let roleIdx = 0, charIdx = 0, isDeleting = false;
  const typedEl = document.getElementById("typed-role");

  function startTyping() {
    if (!typedEl) return;
    typeLoop();
  }

  function typeLoop() {
    const current = roles[roleIdx];
    if (isDeleting) {
      typedEl.textContent = current.substring(0, charIdx--);
      if (charIdx < 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(typeLoop, 400);
        return;
      }
    } else {
      typedEl.textContent = current.substring(0, charIdx++);
      if (charIdx > current.length) {
        setTimeout(() => { isDeleting = true; typeLoop(); }, 1800);
        return;
      }
    }
    setTimeout(typeLoop, isDeleting ? 40 : 65);
  }

  // ===========================
  // CURSOR
  // ===========================
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let cx = 0, cy = 0, rx = 0, ry = 0;

  window.addEventListener("mousemove", (e) => {
    cx = e.clientX; cy = e.clientY;
    gsap.to(dot, { x: cx, y: cy, duration: 0.1 });
  });

  gsap.ticker.add(() => {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    gsap.set(ring, { x: rx, y: ry });
  });

  document.querySelectorAll("a, button, .proj-card, .testi-card, .skill-cat").forEach(el => {
    el.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("hovering"));
  });

  // ===========================
  // NAVBAR SCROLL
  // ===========================
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);

    // Active nav link
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  });

  // ===========================
  // SECTIONS REVEAL
  // ===========================
  gsap.utils.toArray(".section").forEach((sec) => {
    gsap.from(sec.querySelector(".sec-label, .sec-title"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sec,
        start: "top 80%"
      }
    });
  });

  // ===========================
  // TIMELINE ITEMS
  // ===========================
  const tlItems = document.querySelectorAll(".tl-item");
  const tlObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 120);
      }
    });
  }, { threshold: 0.2 });
  tlItems.forEach(i => tlObs.observe(i));

  // ===========================
  // SKILL BARS
  // ===========================
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".sb-fill").forEach(bar => {
          bar.style.width = bar.dataset.w + "%";
        });
        skillObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".skill-cat").forEach(cat => skillObs.observe(cat));

  // ===========================
  // PROJECT CARDS
  // ===========================
  const cardObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".proj-card").forEach(c => cardObs.observe(c));

  // ===========================
  // TESTIMONIAL CARDS
  // ===========================
  const testiObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 120);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".testi-card").forEach(c => testiObs.observe(c));

  // ===========================
  // CONTACT FORM
  // ===========================
  const sendBtn = document.getElementById("cf-send");
  const note = document.getElementById("cf-note");

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const subject = document.getElementById("cf-subject").value.trim();
      const msg = document.getElementById("cf-msg").value.trim();

      if (!name || !email || !msg) {
        note.textContent = "Please fill in all required fields.";
        note.style.color = "#f87171";
        return;
      }

      const mailto = `mailto:fadliyurisman@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`)}`;
      window.location.href = mailto;

      note.textContent = "Opening your email client... ✓";
      note.style.color = "#22c55e";
    });
  }

  // ===========================
  // THREE.JS BACKGROUND
  // ===========================
  const canvas = document.getElementById("bg-canvas");
  if (canvas && typeof THREE !== "undefined") {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    camera.position.z = 8;

    // Stars
    const geo = new THREE.BufferGeometry();
    const count = 200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.04, color: 0x00e5ff, transparent: true, opacity: 0.6 }));
    scene.add(stars);

    // Dim violet stars
    const geo2 = new THREE.BufferGeometry();
    const pos2 = new Float32Array(150 * 3);
    for (let i = 0; i < 150 * 3; i++) pos2[i] = (Math.random() - 0.5) * 20;
    geo2.setAttribute("position", new THREE.BufferAttribute(pos2, 3));
    const stars2 = new THREE.Points(geo2, new THREE.PointsMaterial({ size: 0.03, color: 0x9b5de5, transparent: true, opacity: 0.4 }));
    scene.add(stars2);

    let mx = 0, my = 0;
    window.addEventListener("mousemove", e => {
      mx = (e.clientX / innerWidth - 0.5) * 2;
      my = (e.clientY / innerHeight - 0.5) * 2;
    });

    function renderBg() {
      requestAnimationFrame(renderBg);
      stars.rotation.y += 0.0004;
      stars.rotation.x += 0.0002;
      stars2.rotation.y -= 0.0003;
      camera.position.x += (mx * 1.5 - camera.position.x) * 0.04;
      camera.position.y += (-my * 1.5 - camera.position.y) * 0.04;
      renderer.render(scene, camera);
    }
    renderBg();

    window.addEventListener("resize", () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });
  }

  // ===========================
  // AVATAR CANVAS (3D Sphere)
  // ===========================
  const avc = document.getElementById("avatar-canvas");
  if (avc && typeof THREE !== "undefined") {
    const sc = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    const ren = new THREE.WebGLRenderer({ canvas: avc, alpha: true, antialias: true });
    ren.setSize(220, 220);
    ren.setPixelRatio(Math.min(devicePixelRatio, 2));
    cam.position.z = 3.2;

    // Wireframe sphere
    const sGeo = new THREE.SphereGeometry(1.1, 24, 24);
    const sMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const sphere = new THREE.Mesh(sGeo, sMat);
    sc.add(sphere);

    // Inner solid sphere with gradient-like tint
    const innerGeo = new THREE.SphereGeometry(0.9, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0a0020,
      transparent: true,
      opacity: 0.85
    });
    sc.add(new THREE.Mesh(innerGeo, innerMat));

    // Orbiting dots
    const orbitGroup = new THREE.Group();
    sc.add(orbitGroup);
    for (let i = 0; i < 8; i++) {
      const dGeo = new THREE.SphereGeometry(0.04, 8, 8);
      const dMat = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x00e5ff : 0x9b5de5 });
      const dot = new THREE.Mesh(dGeo, dMat);
      const angle = (i / 8) * Math.PI * 2;
      dot.position.set(Math.cos(angle) * 1.35, Math.sin(angle * 0.5) * 0.4, Math.sin(angle) * 1.35);
      orbitGroup.add(dot);
    }

    function renderAvatar() {
      requestAnimationFrame(renderAvatar);
      sphere.rotation.y += 0.006;
      sphere.rotation.x += 0.003;
      orbitGroup.rotation.y += 0.008;
      orbitGroup.rotation.z += 0.004;
      ren.render(sc, cam);
    }
    renderAvatar();
  }

  // ===========================
  // HERO PARALLAX (subtle)
  // ===========================
  window.addEventListener("mousemove", (e) => {
    const mx = (e.clientX / innerWidth - 0.5);
    const my = (e.clientY / innerHeight - 0.5);
    gsap.to(".hero-left", { x: mx * 20, y: my * 10, duration: 1.5, ease: "power2.out" });
    gsap.to(".avatar-wrap", { x: -mx * 30, y: -my * 20, duration: 1.5, ease: "power2.out" });
  });

  // ===========================
  // SMOOTH RESIZE
  // ===========================
  let resizeT;
  window.addEventListener("resize", () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => ScrollTrigger.refresh(), 200);
  });

  ScrollTrigger.config({ ignoreMobileResize: true });

});

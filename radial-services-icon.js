document.addEventListener("DOMContentLoaded", function () {
  const scriptTag = document.getElementById("uf-service-script");
  if (!scriptTag) return;

  // Inject Flaticon CSS
  const flaticonCSS = document.createElement('link');
  flaticonCSS.rel = 'stylesheet';
  flaticonCSS.href = 'https://cdn.jsdelivr.net/npm/@flaticon/flaticon-uicons/css/all/all.css';
  document.head.appendChild(flaticonCSS);

  // Inject Styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink {
      0%, 50%, 100% { opacity: 1; }
      25%, 75% { opacity: 0; }
    }

    @keyframes fadeIn {
      to { opacity: 1; }
    }

    #logo-container {
      position: relative;
      width: 300px;
      height: 300px;
      margin: 50px auto;
      z-index: 9999;
    }

    #center-button {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: linear-gradient(to bottom, #4facfe, #00f2fe);
      color: #fff;
      border: none;
      box-shadow: 0 8px 0 #0c6abf, 0 12px 20px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
      animation: blink 10s infinite;
      transition: all 0.2s ease-in-out;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #center-button:hover {
      box-shadow: 0 6px 0 #0c6abf, 0 8px 15px rgba(0, 0, 0, 0.25);
      transform: translate(-50%, -50%) translateY(2px);
    }

    #center-button:active {
      box-shadow: 0 3px 0 #0c6abf, 0 4px 8px rgba(0, 0, 0, 0.2);
      transform: translate(-50%, -50%) translateY(5px);
    }

    .logo-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 32px;
      background: #fff;
      padding: 10px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #ccc;
      transition: all 0.4s ease;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .logo-icon.active {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      background-color: #f0f8ff;
      box-shadow: 0 6px 12px rgba(0, 123, 255, 0.25);
    }

    .logo-icon.active:hover::after {
      content: attr(data-title);
      position: absolute;
      background-color: #e6f2ff;
      color: #333;
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 999;
      opacity: 0;
      animation: fadeIn 0.3s forwards;
      box-shadow: 0 8px 20px rgba(0, 123, 255, 0.45);
    }

    .logo-icon.top-tip:hover::after {
      bottom: 120%;
      left: 50%;
      transform: translateX(-50%);
    }

    .logo-icon.bottom-tip:hover::after {
      top: 120%;
      left: 50%;
      transform: translateX(-50%);
    }

    .logo-icon.left-tip:hover::after {
      left: -120%;
      top: 50%;
      transform: translateY(-50%);
    }

    .logo-icon.right-tip:hover::after {
      left: 120%;
      top: 50%;
      transform: translateY(-50%);
    }
  `;
  document.head.appendChild(style);

  // Create Container
  const container = document.createElement('div');
  container.id = 'logo-container';
  container.innerHTML = `
    <button id="center-button">Services</button>
    <i class="flaticon-maintenance logo-icon" data-title="Maintenance"></i>
    <i class="flaticon-helmet logo-icon" data-title="Safety"></i>
    <i class="flaticon-management logo-icon" data-title="Management"></i>
    <i class="flaticon-engineering logo-icon" data-title="Engineering"></i>
    <i class="flaticon-maintenance logo-icon" data-title="Repairs"></i>
    <i class="flaticon-helmet logo-icon" data-title="Construction"></i>
    <i class="flaticon-design-thinking logo-icon" data-title="Design"></i>
    <i class="flaticon-motivation logo-icon" data-title="Team"></i>
    <i class="flaticon-bulb logo-icon" data-title="Innovation"></i>
    <i class="flaticon-house logo-icon" data-title="Housing"></i>
    <i class="flaticon-maintenance logo-icon" data-title="Support"></i>
  `;
  document.body.appendChild(container);

  // Logic
  const button = document.getElementById("center-button");
  const icons = document.querySelectorAll(".logo-icon");
  let isOpen = false;
  const radius = 150;

  function spreadIcons() {
    const total = icons.length;
    icons.forEach((icon, index) => {
      const angle = (2 * Math.PI * index) / total;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      icon.classList.add("active");
      icon.classList.remove("top-tip", "bottom-tip", "left-tip", "right-tip");

      if (Math.abs(x) > Math.abs(y)) {
        icon.classList.add(x > 0 ? "right-tip" : "left-tip");
      } else {
        icon.classList.add(y > 0 ? "bottom-tip" : "top-tip");
      }

      icon.style.left = `calc(50% + ${x}px)`;
      icon.style.top = `calc(50% + ${y}px)`;
      icon.style.transform = `translate(-50%, -50%)`;
    });

    isOpen = true;
  }

  function resetIcons() {
    icons.forEach(icon => {
      icon.classList.remove("active", "top-tip", "bottom-tip", "left-tip", "right-tip");
      icon.style.left = '50%';
      icon.style.top = '50%';
      icon.style.transform = 'translate(-50%, -50%)';
    });
    isOpen = false;
  }

  button.addEventListener("click", () => {
    isOpen ? resetIcons() : spreadIcons();
  });
});

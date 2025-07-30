<style>
  @keyframes blink {
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0; }
  }

  #logo-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 50px auto;
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
/* Default icon style */
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
  pointer-events: none; /* disable until active */
}

/* Show icons after button is clicked */
.logo-icon.active {
   opacity: 1;
  visibility: visible;
  pointer-events: auto;
  background-color: #f0f8ff; /* Light soft color */
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.25); /* Blueish shadow */
  transform: translate(-50%, -50%);
}

/* Hover tooltip */
/*.logo-icon.active:hover::after {*/
/*  content: attr(data-title);*/
/*  position: absolute;*/
/*  top: -40px;*/
/*  left: 50%;*/
/*  transform: translateX(-50%);*/
/*  background-color: #333;*/
/*  color: #fff;*/
/*  padding: 6px 10px;*/
/*  border-radius: 4px;*/
/*  white-space: nowrap;*/
/*  font-size: 12px;*/
/*  z-index: 999;*/
/*  opacity: 0;*/
/*  animation: fadeIn 0.3s forwards;*/
/*    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.45);*/
/*  background-color: #e6f2ff;*/
/*  transform: translate(-50%, -50%) scale(1.1);*/
/*}*/

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

/* Directional tooltips */

.logo-icon.active:hover::after {
  content: attr(data-title);
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 999;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

/* Top */

.logo-icon.top-tip:hover::after {
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
}


/* Bottom */
.logo-icon.bottom-tip:hover::after {
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
}


/* Left */
.logo-icon.left-tip:hover::after {
  left: -120%;
  top: 50%;
  transform: translateY(-50%);
}


/* Right */
.logo-icon.right-tip:hover::after {
  left: 120%;
  top: 50%;
  transform: translateY(-50%);
}


@keyframes fadeIn {
  to {
    opacity: 1;
  }
}



</style>

<div id="logo-container">
  <button id="center-button">Services</button>

  <!-- 11 icons instead of <img> -->
  <i class="flaticon-maintenance logo-icon" data-title="Maintenance"></i>
  <i class=" flaticon-helmet logo-icon"  data-title="Maintenance"></i>
  <i class="flaticon-management logo-icon" data-title="Maintenance"></i>
  <i class=" flaticon-engineering logo-icon" data-title="Maintenance"></i>
  <i class="flaticon-maintenance logo-icon" data-title="Maintenance"></i>
  <i class=" flaticon-helmet logo-icon" data-title="Maintenance"></i>
  <i class=" flaticon-design-thinking logo-icon" data-title="Maintenance"></i>
  <i class=" flaticon-motivation logo-icon" data-title="Maintenance"></i>
  <i class="flaticon-bulb logo-icon" data-title="Maintenance"></i>
  <i class=" flaticon-house logo-icon" data-title="Maintenance"></i>
  <i class="flaticon-maintenance logo-icon" data-title="Maintenance"></i>
</div>

<script>
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

    // Remove previous tooltip direction
    icon.classList.remove("top-tip", "bottom-tip", "left-tip", "right-tip");

    // Assign tooltip direction based on angle
    if (Math.abs(x) > Math.abs(y)) {
      // Horizontal direction
      if (x > 0) {
        icon.classList.add("right-tip");
      } else {
        icon.classList.add("left-tip");
      }
    } else {
      // Vertical direction
      if (y > 0) {
        icon.classList.add("bottom-tip");
      } else {
        icon.classList.add("top-tip");
      }
    }

    // Position the icon in a circle
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



</script>

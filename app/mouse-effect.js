export function addMouseEffect() {
    const mouseEffect = document.getElementById('mouse-effect');
    const mouseEffectWidth = mouseEffect.offsetWidth;
    const mouseEffectHeight = mouseEffect.offsetHeight;
  
    document.addEventListener('mousemove', function (e) {
      mouseEffect.style.opacity = '1';
      const mouseX = e.clientX - (mouseEffectWidth / 2);
      const mouseY = e.clientY - (mouseEffectHeight / 2);
      mouseEffect.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
  
    document.addEventListener('mouseleave', function () {
      mouseEffect.style.opacity = '0';
    });
}
document.querySelector('.btn-primary').addEventListener('click', function(){
    var area = document.querySelector('.section')
    var textoElement = document.getElementById('texto_oculto')

    if (textoElement.style.display === "none") {
        textoElement.style.display = "block";
        setTimeout(() => {
            textoElement.style.opacity = '1'
        }, 100);
    } else {
        textoElement.style.display = "none";
        setTimeout(() => {
            textoElement.style.opacity = '0'
        }, 100);
    }
})

// Registrar o plugin
gsap.registerPlugin(ScrollTrigger);



gsap.to('.pilares_container',{
    y:20,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:'.paragrafo2-container',
        start:'bottom center',
        
        markers:false
    }})


    gsap.to(".animated-paragrafo1", {
        y: 0,  // Sobe para a posição original
        duration: 1,  // Duração de 1 segundo
        ease: "power3.out",  // Suavização
        //delay:.5,
        scrollTrigger:{
          trigger:'.paragrafo1-container',
          start:'top center',
        
        }
      });
      gsap.to(".animated-paragrafo2", {
        y: 0,  // Sobe para a posição original
        duration: 1,  // Duração de 1 segundo
        ease: "power3.out",  // Suavização
        //delay:.5,
        scrollTrigger:{
          trigger:'.paragrafo2-container',
          start:'top center',
        
        }
      });
      gsap.to(".animated-paragrafo3", {
        y: 0,  // Sobe para a posição original
        duration: 1,  // Duração de 1 segundo
        ease: "power3.out",  // Suavização
        //delay:.5,
        scrollTrigger:{
          trigger:'.paragrafo3-container',
          start:'top center',
        
        }
      });
      gsap.to(".animated-paragrafo4", {
        y: 0,  // Sobe para a posição original
        duration: 1,  // Duração de 1 segundo
        ease: "power3.out",  // Suavização
        //delay:.5,
        scrollTrigger:{
          trigger:'.paragrafo4-container',
          start:'top center',
        
        }
      });
      gsap.to(".animated-paragrafo5", {
        y: 0,  // Sobe para a posição original
        duration: 1,  // Duração de 1 segundo
        ease: "power3.out",  // Suavização
        //delay:.5,
        scrollTrigger:{
          trigger:'.paragrafo5-container',
          start:'top center',
        
        }
      });


const icons = document.querySelectorAll('.lottie-icon');

icons.forEach(iconElement => {
  const iconName = iconElement.getAttribute('data-icon'); // Pega o nome do ícone
  const animation = lottie.loadAnimation({
    container: iconElement,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: `/assets/media/icons/${iconName}.json` // Caminho dinâmico do ícone
  });

  // Animação no hover
  iconElement.addEventListener('mouseenter', () => animation.play());
  iconElement.addEventListener('mouseleave', () => animation.stop());
});


document.querySelectorAll('.btn-question').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    if (answer.style.height) {
      answer.style.height = null;
      button.innerHTML = 'Ver mais'
    } else {
      answer.style.height = answer.scrollHeight + "px";
      
      button.innerHTML = 'Ver menos'
    }
  });
});

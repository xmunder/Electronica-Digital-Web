function toggleBackgroundColor() {
  const $body = document.body;  
  const $togleButtonIcon = document.querySelectorAll('#toggleButtonIcon');
  console.log($togleButtonIcon);
  
      if ($body.classList.contains('dark-mode')) {
          $body.classList.remove('dark-mode');
          $body.classList.add('light-mode');
          $togleButtonIcon.forEach(element => {
            element.src = './assets/img/moon.svg';
          });
      } else {
          $body.classList.remove('light-mode');
          $body.classList.add('dark-mode');
          $togleButtonIcon.forEach(element => {
            element.src = './assets/img/sun.svg';
          });
      }
}

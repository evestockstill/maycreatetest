import React, { useEffect } from 'react';
import './Widget.scss';

const Widget = () => {
     useEffect(() => {
         const script = document.createElement('script');
    //<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'https://weatherwidget.io/js/widget.min.js');
    script.async = true;

    const section = document.getElementById('widget-container');
    section.appendChild(script);
    //might need to include removing the script
  }, []);

       



return (
  <section id='widget-container'>
    <a
      className='weatherwidget-io'
      href='https://forecast7.com/en/36d10n84d44/petros/?unit=us'
      data-label_1='Brushy Mnt. State Penitentiary'
      data-label_2='Petros, Tennessee'
      data-font='Arial Rounded MT Bold'
      data-icons='Climacons Animated'
      data-theme='original'
    >
      Brushy Mnt. State Penitentiary Petros, Tennessee
    </a>
  </section>
);
}
export default Widget;
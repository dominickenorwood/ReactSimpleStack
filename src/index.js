import React from 'react';
import ReactDOM from 'react-dom';

/*
    - Look for react modules on page.
    - Take the data set and add to module props.
    - Take data-component and mount.
    - Bootstrap module to element found on page.
*/
function mountComponents() {
    const components = Array.from(document.querySelectorAll('.react-module'));
    components.forEach(component => {
        import(`./dynamic/${component.dataset.component}/${component.dataset.component}`)
            .then(response => response.default)
            .then(ReactModule => {
                ReactDOM.render(<ReactModule {...component.dataset} />, component);
            });
    });
}
document.addEventListener('DOMContentLoaded', mountComponents);
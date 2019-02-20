import React from 'react';
import ReactDOM from 'react-dom';

/*
    - Look for react modules on page. (Done)
    - Take the data set and add to module props. (Done)
    - Take data-component and mount. (Done)
    - Bootstrap module to element found on page. (Done)
    
    - Hook up to Redux, have modules talk to each other.
    - Update dependencies.
    - ( Talk to redux from a non-react module )
    - Create default Redux state based on data from backend.
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
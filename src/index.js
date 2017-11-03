import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';

function component() {
    var element = document.createElement('div');

    // Uses the lodash module to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());
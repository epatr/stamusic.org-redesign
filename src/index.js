import _ from 'lodash';
import styles from './styles.scss'

function component() {
    var element = document.createElement('div');

    // Uses the lodash module to work
    element.innerHTML = _.join(['Hello', 'World!'], ' ');

    return element;
}

document.body.appendChild(component());
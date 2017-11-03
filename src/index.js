import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    // Uses the lodash module to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
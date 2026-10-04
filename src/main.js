import {Select} from './select/select.js'
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Выбери элемент',
});

window.s = select
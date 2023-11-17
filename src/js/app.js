import { Popover } from "./popover"

const element = document.getElementById('button')
const popover = new Popover();

popover.createPopover(element)
element.addEventListener('click', () => {
    popover.show(element)
});
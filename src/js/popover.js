export class Popover {
    constructor () {
        this.message = "And here's some amazing content. It's very engaging. Right?";
        this.titel = "Popover title"
    }

    static get markup() {
        return '<div class="popover-title">Popover title</div><div class="popover-content">And here is some amazing content. It is very engaging. Right?</div>'
    }

    createPopover(element) {
        const popoverElement = document.createElement('DIV');
        popoverElement.className = 'popover';
        popoverElement.id = element.id + '_popover';
        popoverElement.innerHTML = Popover.markup;
        document.body.appendChild(popoverElement);
        popoverElement.style.display = 'none';
    }

    show(element) {
        const popoverElement = document.getElementById(element.id + '_popover');
        popoverElement.style.display = 'block';
        const buttonRect = element.getBoundingClientRect();
        popoverElement.style.top = buttonRect.x - popoverElement.offsetHeight - 5 + 'px';
        popoverElement.style.left = buttonRect.y - (popoverElement.offsetWidth - element.offsetWidth) / 2 + 'px';
        setTimeout(() => {
            popoverElement.style.display = 'none';
        }, 1000)
    }
}
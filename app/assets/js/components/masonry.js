import Macy from 'macy';

export default function() {
    let macyInitialised = false;
    const container = document.querySelector('.listings--work');

    const macyInstance = Macy({
        container: '.listings--work',
        columns: 2,
        margin: 25,
        breakAt: {
            640: {
                margin: 15,
                columns: 1
            }
        },
        cancelLegacy: true,
        emit: 'EVENT_INITIALIZED'
    });

    macyInstance.runOnImageLoad(function () {
        if (!macyInitialised) {
            macyInitialised = true;
            container.classList.remove('no-macy');
        }
      }, true);
}
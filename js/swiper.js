new Swiper('.banner-swiper-container', {
    loop: true,
    allowTouchMove: true,
    autoplay: {
        enabled: false,
    },
    pagination: {
        el: '.banner-swiper-pagination',
        bulletClass: 'swiper-pagination-bullet-custom',
        bulletActiveClass: 'swiper-pagination-bullet-custom--active',
        clickable: false
    },
    breakpoints: {
        768: {
            allowTouchMove: false,
            autoplay: {
                enabled: true,
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                renderBullet: function (index, className) {
                    return `<div class="${className}" data-index="${index}">
                    <svg viewbox="0 0 20 20">
                        <circle r="9" cx="10" cy="10" fill="none" stroke-width="1" stroke="#fff"/>
                    </svg>
                    <svg viewbox="0 0 20 20">
                        <circle r="9" cx="10" cy="10" fill="none" stroke-width="1" stroke="#fff"/>
                    </svg>
                </div>`
                },
                clickable: true,
            },
        }
    },
    on: {
        init: function () {
            const _self = this;

            _self.el.style.setProperty('--delay', _self.params.autoplay.delay);

            _self.el.addEventListener('mouseenter', function () {
                _self.el.classList.add('swiper--pause');
                _self.autoplay.stop();
            });

            _self.el.addEventListener('mouseleave', function () {
                _self.el.classList.remove('swiper--pause');
                _self.autoplay.start();
            });
        }
    }
});

new Swiper('.zaim-cards-swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    spaceBetween: 20,
});

new Swiper('.advantages-cards-swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    spaceBetween: 10,
});

new Swiper('.swiper-wrapper-wrap', {
    pagination: {
        el: '.offers-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    allowTouchMove: false,
    spaceBetween: 20,
});

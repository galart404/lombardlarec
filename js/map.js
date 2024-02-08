const addressCards = document.querySelectorAll('.address-card');
const yakorMap = document.getElementById("map");


const placemarks = [
    {
        addressId: 'vl_prospekt100LetVladivostoku',
        coordinates: [43.15866557451837, 131.9128385],
        address: 'Проспект 100-лет Владивостоку, д. 64',
        additionalAddress: ''
    },
    {
        addressId: 'vl_kalinina',
        coordinates: [43.10156907449483, 131.92361799999995],
        address: 'ул. Калинина, 29б,',
        additionalAddress: '1 этаж, продуктовый рынок ОРПОК'
    },
    {
        addressId: 'vl_balyayeva',
        coordinates: [43.12967007451781, 131.93893449999985],
        address: 'ул. Баляева, д. 35,',
        additionalAddress: 'ТЦ «Бачурин», 512 пав., 5 этаж'
    },
    {
        addressId: 'vl_semenovskaya',
        coordinates: [43.11843757451367, 131.8851614999999],
        address: 'ул.Семеновская, д. 21',
        additionalAddress: ''
    },
    {
        addressId: 'vl_fadeyeva',
        coordinates: [43.106980074508805, 131.94007549999995],
        address: 'ул. Фадеева, д. 1"А",',
        additionalAddress: 'ТЦ "Надежда", 1 этаж'
    },
    {
        addressId: 'vl_poletayeva',
        coordinates: [43.21261407453362, 131.95088199999992],
        address: 'ул. Полетаева, д. 6"Д",',
        additionalAddress: 'ТРК "Седанка-Сити", 1 этаж, возле эвалатора, на входе в "Самбери"'
    }
];

function init() {
    const map = new ymaps.Map('map', {
        center: placemarks[1].coordinates,
        zoom: 17
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


    const placemarkArray = []

    placemarks.forEach((obj) => {
        const placemark = new ymaps.Placemark(obj.coordinates, {
            balloonContent:
                `
                <div class="custom-balloon">
                    
                    <span class="custom-balloon-arrow"></span>
                    <div class="custom-balloon-content">
                        <div class="address-card-info">
                            <span class="address-card-address">${obj.address} <span class="address-card-additional-address">${obj.additionalAddress}</span></span>
                            <div class="address-card-phone-wrap">
                                <img src="images/cards/address/phone-icon.svg" alt="">
                                <span class="address-card-phone">8 (423) 240-45-26</span>
                            </div>
                            <div class="working-mode-wrap">
                                <span class="working-mode-header">Режим работы:</span>
                                <span class="working-mode">Ежедневно, с 10:00 до 19:30</span>
                            </div>
                        </div>
                    </div>
                </div>
                `
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icons/marker.svg',
            iconImageSize: [30, 38],
            iconImageOffset: [-15, -38],
            // Отключаем кнопку закрытия балуна.
            balloonCloseButton: false,
            // Балун будем открывать и закрывать кликом по иконке метки.
            hideIconOnBalloonOpen: false
        });

        placemarkArray.push(placemark);

        map.geoObjects.add(placemark);
    });

    placemarkArray[1].balloon.open();

    placemarkArray.forEach(item => {
        item.events.add('click', () => {
            if (item.balloon.isOpen()) {
                addressCards.forEach(card => {
                    card.classList.remove('active');
                });
            };
        });
    });

    addressCards.forEach(card => {
        card.addEventListener('click', (event) => {

            if (event.target.classList.value === 'address-card-map-link' && !card.classList.contains('active')) {

                addressCards.forEach(card => {
                    card.classList.remove('active');
                });
                card.classList.add('active');

                placemarkArray.forEach(item => {
                    item.balloon.close();
                });

                const activePlacemark = placemarks.find((item) => {
                    return item.addressId === event.target.dataset.addressId;
                });

                placemarkArray[placemarks.indexOf(activePlacemark)].balloon.open();

                map.setCenter(activePlacemark.coordinates);

                yakorMap.scrollIntoView({behavior: "smooth"});
            }
        })
    });
};

ymaps.ready(init);

const event = new CustomEvent("setCustomConfig")

window.productsGrid = 5;
window.currency = 'RUB'
window.defaultPaymentAmount = 150
window.zeroToFree = true
window.oldDesignDropdownProduct = true
window.sidebarStoreToRight = false
window.sidebarProfileToRight = false
window.newYearVibe = false
window.hideServerSelector = false

window.dispatchEvent(event);

const svgRU = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="30px" height="30px" viewBox="0 0 66 66" enable-background="new 0 0 66 66" xml:space="preserve">
<g>
	<path fill="#E73B36" d="M2,40v8.223C2,51.586,4.672,54,7.968,54h50.063C61.327,54,64,51.586,64,48.223V40H2z"/>
	<path fill="#F0F7F6" d="M58.031,12H7.968C4.672,12,2,14.414,2,17.777V26h62v-8.223C64,14.414,61.327,12,58.031,12z"/>
	<rect x="2" y="26" fill="#3757A6" width="62" height="14"/>
	<g>
		<g>
			<path fill="#D31C1C" d="M57.75,54c3.297,0,6.25-2.414,6.25-5.777V40H41.392L57.75,54z"/>
			<path fill="#DFF2EF" d="M58.031,12H7.968l16.641,14H64v-8.223C64,14.414,61.327,12,58.031,12z"/>
			<polygon fill="#20448E" points="41.533,40 64,40 64,26 24.466,26 			"/>
			<path fill="#CAEAE4" d="M58.031,12H7.968l46.261,14H64v-8.223C64,14.414,61.327,12,58.031,12z"/>
			<polygon fill="#103577" points="64,28.848 64,26 53.833,26 			"/>
			<path fill="#C41010" d="M64,48.067C64,51.734,61.327,54,58.031,54H7.968C4.672,54,2,51.352,2,47.989"/>
		</g>
	</g>
</g>
</svg>
`;

const svgEN = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px"  viewBox="0 0 40 30" version="1.1">
<g id="surface1">
<rect x="0" y="0" width="40" height="30" style="fill:rgb(0%,0%,40%);fill-opacity:1;stroke:none;"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 0 0 L 0 3.355469 L 35.527344 30 L 40 30 L 40 26.648438 L 4.472656 0 Z M 40 0 L 40 3.355469 L 4.472656 30 L 0 30 L 0 26.648438 L 35.527344 0 Z M 40 0 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.667969 0 L 16.667969 30 L 23.332031 30 L 23.332031 0 Z M 0 10 L 0 20 L 40 20 L 40 10 Z M 0 10 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(80%,0%,0%);fill-opacity:1;" d="M 0 12 L 0 18 L 40 18 L 40 12 Z M 18 0 L 18 30 L 22 30 L 22 0 Z M 18 0 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(80%,0%,0%);fill-opacity:1;" d="M 0 30 L 13.332031 20 L 16.316406 20 L 2.980469 30 Z M 0 0 L 13.332031 10 L 10.351562 10 L 0 2.234375 Z M 23.6875 10 L 37.019531 0 L 40 0 L 26.667969 10 Z M 40 30 L 26.667969 20 L 29.648438 20 L 40 27.765625 Z M 40 30 "/>
</g>
</svg>
`;
function replaceTextWithFlags() {
    const languageButtons = document.querySelectorAll('.LangSwitcher-module__lang');
    Array.from(languageButtons).forEach(button => {
        if (button.textContent.trim() === 'Русский') {
            button.innerHTML = svgRU;
        } else if (button.textContent.trim() === 'English') {
            button.innerHTML = svgEN;
        }
    });
}

function replaceLanguageTextWithFlag() {
    const languageSpans = document.querySelectorAll('.LangSwitcher-module__currentLang');
    Array.from(languageSpans).forEach(span => {
        if (span.textContent.trim() === 'RU') {
            span.innerHTML = svgRU;
        } else if (span.textContent.trim() === 'EN') {
            span.innerHTML = svgEN;
        }
    });
}

var curcontent = [];
curcontent["rules"] = {
    xhead: 'Правила',
    xcon: '<div class="xbox_custom_rules" style="text-align: left;"><ul><p class="MsoNormal"><span>ИГРОВОЙ ПРОЦЕСС</span></p>\
<p><li>1.0 ЗАПРЕЩЕНО Использовать/Хранить/Распространять стороннее ПО или любые другие средства (ЧИТЫ/МАКРОСЫ/СПУФЕРЫ/ПРОСВЕТ), позволяющие получить преимущество над другими игроками.Наличие покупок запрещенного ПО:(Читы/Макросы/Спуферы, Просветы и т.п) приравнивается к хранению.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (БАН НАВСЕГДА).</li></p>\
<p><li>1.1 ЗАПРЕЩЕНО Использование багов игры/сервера: (Строиться/Хранить лут в текстурах, использовать прозрачный сет ,а также использовать другие баги игры/сервера, которые дают преимущество над другими игроками).</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1 ДЕНЬ).</li></p>\
<p><li>При обнаружении бага или недоработки карты/сервера незамедлительно сообщите администрации об этом через сообщение в нашу группу ВКонтакте или Discord.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1-ый раз БАН 1 ДЕНЬ / 2-ой раз БАН 7 ДНЕЙ).</li></p>\
<p><li>1.2 Постройка длинных "усов" у дома.</li></p>\
<p><li>Нарушение данного правила наказывается: (1-ый раз ПРЕДУПРЕЖДЕНИЕ / 2-ой раз БАН 1 ДЕНЬ)</li></p>\
<p><li>1.3. КИДАТЬ на кастомки ЗАПРЕЩЕНО (продавая кастомку за игровую валюту (сера, металл, мвк и т.д.) Вы обязуетесь снести все свои фундаменты(сетхомы) при передаче кастомки. Обманывать строго ЗАПРЕЩЕНО.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1 ДЕНЬ)</li></p>\
<p><li>1.4. Обманывать игроков ЗАПРЕЩЕНО (писать в чат, что телепортируете игрока в Сейф зону, а по итогу телепортируете в другое место и убьете).</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1 ДЕНЬ)</li></p>\
<p><li>1.5. ЗАПРЕЩЕНО себя выдавать за модерацию/администрацию проекта.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (30 ДНЕЙ)</li></p><br>\
<p class="MsoNormal"><span>ПРОВЕРКА ИГРОКОВ</span></li></p>\
<p><li>2.0 Администрация/Модерация в любой момент имеет право проверить Ваш ПК на наличие читов/макросов. На предоставление дискорда - 5 минут. По истечению 5 минут - бан за отказ от проверки. Мы не будем сохранять или передавать любую информацию, не связанную с растом и читами, которую получим от Вас.</li></p>\
<p><li>Выход с проверки, Отказ от проверки, Чистка Пк : (БАН НАВСЕГДА).</li></p>\
<p><li>Не предоставлении информации модератору: (БАН НАВСЕГДА).</li></p>\
<p><li>2.1 Модерация/Администрация сервера вправе сама решать, как наказать игрока за то или иное нарушение. Игрок может отделаться простым предупреждением, а может и попасть в бессрочный бан.</li></p>\
<p><li>2.2 Если при проверке у вас были обнаружены Читы/Макросы/Спуфер/подписки на запрещенное ПО/ подписки на ДС-каналы с Читами/Макросами или найдены следы удаленных Макросов/Читов/Спуферов: (БАН НАВСЕГДА). Постоянные тиммейты банятся на срок - 30 дней.</li></p>\
<p><li>2.3 Если у вас имеются баны на других проектах МЕНЕЕ ГОДА, либо же EAC баны на других аккаунтах МЕНЕЕ 90 ДНЕЙ: (БАН НАВСЕГДА). Вы несете ответственность за свои аккаунты.</li></p>\
<p><li>2.4 Мультиаккаунты ЗАПРЕЩЕНЫ (обход основного бана посредством игры с другого акка ): (БАН НАВСЕГДА)</li></p>\
<p><li>2.5. ПОДКУП модератора на проверке : (БАН НАВСЕГДА). В случае , если модератор принял данное предложение, то последует снятие с должности и бан по причине - Превышение полномочий модератором. (БАН НАВСЕГДА).</li></p>\
<p><li>2.6. Если при проверке у вас была обнаружена чистка пк : (БАН НАВСЕГДА) Постоянные тиммейты наказываются баном: (30 ДНЕЙ).</li></p>\
<p><li>2.7 При проверке вы обязаны скачать архив с программами для проверки на запрещенные файлы. Ссылка на скачивание архива https://disk.yandex.ru/d/2JJTnNdcZ0IdeA Если же вы отказываетесь,то модератор имеет полное право вас забанить по пункту правил: 1.0</li></p>\
<p><li>2.8 Если у вас плохое качество демонстрации экрана,то вы будете обязаны скачать AnyDesk с официального сайта: https://anydesk.com/ru/downloads Если же вы отказываетесь,то модератор имеет полное право вас забанить по пункту правил: 1.0</li></p>\
<p><li>2.9 Запрещено иметь версию Windows, которая чистит за собой недавние действия, логи, отключен Prefetch. Для игры на проекте нужно в переустановить Windows https://www.microsoft.com/ru-ru/software-download/</li></p><br>\
<p class="MsoNormal"><span>ЧАТ</span></li></p>\
<p><li>3.0 ЗАПРЕЩЕНО флудить/спамить в чат ( Повторять одни и те-же строчки/буквы в чат от 3-ёх сообщений подряд - МУТ 5 МИНУТ).</li></p>\
<p><li>3.1 ЗАПРЕЩЕНЫ жёсткие оскорбления, такие как д**б**б, х**с*с, бл***на и т.д. (МУТ 5 МИНУТ)</li></p>\
<p><li>3.2 РАЗРЕШЕНЫ лёгкие маты и оскорбления, такие как с**а, б***ь, к*з*л,ч*о, т*п*ц* , д**н и им подобные</li></p>\
<p><li>3.3 За многократное НАРУШЕНИЕ, более 5-6 мутов за жёсткие оскорбления , игрок может получить игровой мут на долгий срок</li></p>\
<p><li>3.4 ЗАПРЕЩЕНО оскорблять/упоминать родителей ( За плохое упоминание родителей, игрок получит МУТ НА 1 ДЕНЬ)</li></p>\
<p><li>3.5 ЗАПРЕЩЕНА реклама сторонних проектов в любой форме наказание: (МУТ НА 1 ДЕНЬ)</li></p>\
<p><li>3.6 ЗАПРЕЩЕНЫ жёсткие оскорбления Администрации/Модерации/Сервера : (1-ый раз МУТ 5 МИНУТ / повторный раз МУТ 10-15 МИНУТ)</li></p>\
<p><li>3.7 ЗАПРЕЩЕНО разжигать межнациональные конфликты: (1-ый раз МУТ 5 МИНУТ / повторный раз МУТ 10-15 МИНУТ)</li></p><br>\
<p class="MsoNormal"><span>ЛИМИТ ИГРОКОВ</span></li></p>\
<p><li>4.0 ЗАПРЕЩЕНО играть в команде более 3-ёх человек. Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой 7 ДНЕЙ и т.д.)</li></p>\
<p><li>4.1 ЗАПРЕЩЕНО играть с другим (-ими) тиммейтами, пока основные ОФЛАЙН. Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой раз 7 ДНЕЙ и т.д.)</li></p>\
<p><li>4.2 ЗАПРЕЩЕНА постоянная смена тиммейта ( РАЗРЕШЕНА 1 смена за вайп). Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой раз 7 ДНЕЙ и т.д.)</li></p>\
<p><li>4.3 ЗАПРЕЩЕНО строить дома(деревни) по соседству с дружественными группами игроков, тем самым создавать коалиции.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (3 ДНЯ)</li></p>\
<p><li>Для CLANS ЗАПРЕЩЕНЫ альянсы (когда два клана объединяются и атакуют другой клан).</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1-ый раз 3 дня, 2-ой раз 7 дней и т.д.)</li></p>\
<p><li>4.4 ЗАПРЕЩЕНО играть с другим (-ими) игроками, если у Вас разные пачки (зелёнка).</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой раз 7 ДНЕЙ и т.д.)</li></p>\
<p><li>4.5 ЗАПРЕЩЕНО строить отели.</li></p>\
<p><li>Нарушение данного правила наказывается баном: (1- ый раз 3 ДНЯ, 2-ой раз 7 ДНЕЙ и т.д.)</li></p>\
<p><li>Любые совместные действия будут наказываться!</li></p>\<br>\
</ul><div class="unban" style="background: #333; border-radius: 10px; padding: 20px;"><p class="MsoNormal2" style="font-weight: bold; margin-bottom: 5px;">Возможность разблокировки</p><span>Заявку на разблокировку аккаунта можно подать через года после бана, если вы получили бан по причине читы, макросы и в некоторых случаях игра с читером. Подать заявку можно в свободной форме в <a class="unbancolor" href="https://vk.com/rust.fire" target="_blank" rel="noopener noreferrer">группу ВК</a></span></div></div>'
};

curcontent["kit-vip"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
    <button class="btn btn-secondary active">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
	<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "VIP" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/548699316.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/191795897.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1035059994.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1660607208.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416622.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778796102.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x15000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x15000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x5000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2133577942.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x250</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div>	</div>'
};

curcontent["kit-free"] = {
    xhead: 'Стандартные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary active">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
<div class="xbox_custom_kits"><div class="serverheader">Кит - "Строитель" <span>Откат 5М</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-307490664.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1224598842.png"><div class="kit-item__quantity">x1</div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Охотник" - <span>Откат 30м</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/698310895.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-578028723.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bow.hunting.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/arrow.wooden.png"><div class="kit-item__quantity">x36</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png"><div class="kit-item__quantity">x3</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1127699509.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/knife.bone.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1666761111.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-459156023.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-148163128.png"><div class="kit-item__quantity">x1</div></div></div></div></div><div class="serverheader">Кит "Медицина" - <span>Откат 20м</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-789202811.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-337261910.png"><div class="kit-item__quantity">x10</div></div></div></div></div><div class="serverheader">Кит "Еда" - <span>Откат 30м</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1043746011.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1734319168.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/93029210.png"><div class="kit-item__quantity">x5</div></div></div></div></div><div class="serverheader">Кит  "Стартовый" - <span>ОТКАТ 12Ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x5000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x500</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-975723312.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1253290621.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-505639592.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/271534758.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/698310895.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-578028723.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/124310981.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-139769801.png"><div class="kit-item__quantity">x1</div></div></div></div></div>  </div></div>'
};

curcontent["kit-premium"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary active">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "PREMIUM" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1745053053.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/2033918259.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1440143841.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/790921853.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x150</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1660607208.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-699558439.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416622.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778796102.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x30</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x15000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x20000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x10000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x200</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x500</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Переработчик" - <span>2 раза в вайп</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
};

curcontent["kit-elite"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary active">ELITE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
	<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "ELITE" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1745053053.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/456448245.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1440143841.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/790921853.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png"><div class="kit-item__quantity">x200</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x200</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416621.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778796102.png"><div class="kit-item__quantity">x5</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-2092529553.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x30</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x30</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x20000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x25000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x10000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x250</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x750</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "BoomElite" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/649603450.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/498591726.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png"><div class="kit-item__quantity">x100</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Переработчик" - <span>2 раза в вайп</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
};

curcontent["kit-fire"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary active">FIRE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire-pro\', false);">FIRE PRO</button>\
	<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "FIRE" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1229879204.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-141135377.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x300</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416620.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/563023711.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/470729623.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x50</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x50</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x33000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x40000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x20000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x500</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x1250</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">				<div class="kit-item__quantity">x1000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">				<div class="kit-item__quantity">x1000</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "BoomFire" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/649603450.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/498591726.png"><div class="kit-item__quantity">x2</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png"><div class="kit-item__quantity">x4</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png"><div class="kit-item__quantity">x150</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "Переработчик" - <span>2 раза в вайп</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
};

curcontent["kit-fire-pro"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">VIP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-premium\', false);">PREMIUM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-fire\', false);">FIRE</button>\
    <button class="btn btn-secondary active">FIRE PRO</button>\
<div class="xbox_custom_kits">	<div class="xbox_custom_kits"><div class="serverheader">Кит "FIRE PRO" - <span>Откат 24ч</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-778367295.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1229879204.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-141135377.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1428021640.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1488979457.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/815896488.png"><div class="kit-item__quantity">x600</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png"><div class="kit-item__quantity">x10</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1063412582.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-481416620.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1598149413.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/563023711.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1625468793.png"><div class="kit-item__quantity">x4</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/470729623.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1223860752.png"><div class="kit-item__quantity">x20</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1471284746.png"><div class="kit-item__quantity">x25</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1939428458.png"><div class="kit-item__quantity">x25</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-1057402571.png"><div class="kit-item__quantity">x70</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1835797460.png"><div class="kit-item__quantity">x80</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-847065290.png"><div class="kit-item__quantity">x60</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/98228420.png"><div class="kit-item__quantity">x40</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-419069863.png"><div class="kit-item__quantity">x100</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/3655341.png"><div class="kit-item__quantity">x50000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png"><div class="kit-item__quantity">x50000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png"><div class="kit-item__quantity">x50000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/374890416.png"><div class="kit-item__quantity">x1000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png"><div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">				<div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">				<div class="kit-item__quantity">x2000</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/109266897.png">				<div class="kit-item__quantity">x800</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "BoomFirePro" - <span>24 часа</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/649603450.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.app/img/games/rust/498591726.png"><div class="kit-item__quantity">x4</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1578894260.png"><div class="kit-item__quantity">x8</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/1295154089.png"><div class="kit-item__quantity">x15</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/805088543.png"><div class="kit-item__quantity">x300</div></div></div></div></div></div>	<div class="xbox_custom_kits"><div class="serverheader">Кит "Огненные инструменты" - <span>Разовый</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/pickaxe.png.d6d82af402d3f3ad3a05d419008edb32.png"><div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://codefling.com/uploads/monthly_2021_08/hatchet.png.760edd07db9c566b7352a5c120440946.png"><div class="kit-item__quantity">x1</div></div></div></div></div></div><div class="xbox_custom_kits"><div class="serverheader">Кит "FireProBonus" - <span>48 часов</span></div><div class="kit_set"><div class="kit-items"><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/ea48412ea9e6c5c530dca8a147c413e5.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/18792a460ae3f80eff76f080043173e6.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/193190034.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/21/3fccd57c18627b5b016d8a748bbf2415.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2019/08/12/fea7ba07c2d30c1830916645b6eddc6e.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/-295829489.png">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://skyplugins.ru/data/resource_icons/0/114.jpg?1579909421">				<div class="kit-item__quantity">x1</div></div></div><div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://gamestores.ru/img/games/rust/523855532.png">				<div class="kit-item__quantity">x1</div></div></div></div></div></div></div>'
};


curcontent["block"] = {
    xhead: 'Блокировка предметов после вайпа',
    xcon: '<div class="xbox_custom_block"><div class="kit-items">'

};

var BlockListArrays = [['shotgun.double', 'pistol.revolver', 'ammo.shotgun'], ['pistol.semiauto', 'pistol.python', 'shotgun.pump', 'shotgun.spas12', 'coffeecan.helmet', 'roadsign.gloves', 'roadsign.jacket', 'roadsign.kilt'], ['pistol.prototype17', 'pistol.m92', 'smg.2', 'smg.thompson', 'grenade.molotov'], ['rifle.semiauto', 'rifle.m39', 'smg.mp5', 'metal.plate.torso.icevest', 'metal.plate.torso', 'metal.facemask', 'metal.facemask.hockey', 'ammo.rifle.incendiary'], ['rifle.ak', 'rifle.ak.ice', 'rifle.ak.diver', 'rifle.lr300', 'grenade.beancan'], ['heavy.plate.jacket', 'heavy.plate.pants', 'heavy.plate.helmet'], ['rifle.bolt', 'lmg.m249', 'hmlmg', 'rifle.l96', 'ammo.rifle.explosive', 'explosive.satchel'], ['multiplegrenadelauncher', 'homingmissile.launcher', 'rocket.launcher', 'explosive.timed', 'ammo.grenadelauncher.buckshot', 'ammo.rocket.smoke', 'ammo.grenadelauncher.he', 'ammo.rocket.fire', 'ammo.rocket.hv', 'ammo.rocket.basic', 'ammo.rocket.seeker', 'ammo.rocket.mlrs', 'submarine.torpedo.straight']];

function Open(key) {
    if (!curcontent[key]) {
        console.error('Ключ не найден');
        return;
    }

    closeModal();

    const modalContent = `
<div role="presentation" onmousedown="closeModal()" id="${key}Modal" class="customModalWrapper active">
   <div class="customModalOverflow">
      <div class="customModalPosition">
         <div role="presentation" onmousedown="event.stopPropagation();" class="customModalContent">
            <div class="boxHeader">${curcontent[key].xhead}</div>
            <div class="boxBody">
               ${curcontent[key].xcon}
            </div>
            <div class="boxFooter">
                            <button id="closer" onclick="closeModal()" type="button" class="btn Button-module__btn Button-module__gray">Закрыть</button>
                        </div>
         </div>
      </div>
   </div>
</div>
`;

    var div1 = document.createElement("div");
    div1.id = 'Modal';
    div1.innerHTML = modalContent;

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}

function closeModal() {
    const existingModal = document.getElementById('Modal');
    if (existingModal) {
        existingModal.parentNode.removeChild(existingModal);
    }

    var body = document.getElementsByTagName('body')[0];
    body.classList.remove("modal-open");
}




function main() {
    window.dispatchEvent(new CustomEvent("initState"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
        const { player } = window.getState().player;

        if (player) {
        	const userAvatar = `
              <a class="avatar-link" style="width: 38px; height: 38px" href="/profile">
                  <img style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" src="${player.avatar}">
              </a>
        	`;
          
          	const profileLink = document.querySelector('.PlayerMenu-module__profileLink');
              if (profileLink) {
                const parent = profileLink.parentNode;
                parent.removeChild(profileLink);
                parent.insertAdjacentHTML('beforeend', userAvatar);
        	}
        }
		
      
        
      
      	const newLogoContent = `
            <a class="navbar-brand" href="/"></a>
        `;
      
        const logo = document.querySelector('.Header-module__logoWrapper');
        if (logo) {
            const parent = logo.parentNode;
            parent.removeChild(logo);
            parent.insertAdjacentHTML('afterbegin', newLogoContent);
        }
      
      	const test = document.querySelector('.PlayerMenuMobile-module__header123');
      	if (test) {
            const parent = test.parentNode;
            parent.removeChild(test);
            parent.insertAdjacentHTML('afterbegin', newLogoContent);
        }
      

        replaceTextWithFlags();
        replaceLanguageTextWithFlag();
    });
  
  
  	window.componentsManager.addListener('ROULETTE_PRODUCT_MODAL', 'DID_MOUNT', () => {
      const elements = document.querySelectorAll('.productModalItemCount');
      elements.forEach(function(element) {
        var regex = /x(\d+)(-x(\d+))?/;
 		element.textContent = element.textContent.replace(regex, function(match, p1, p2, p3) {
            return p2 ? `Кол-во: ${p1}-${p3}шт` : `Кол-во: ${p1}шт`;
        });
        
        var elementsx = document.querySelectorAll('.RouletteContent-module__rouletteItemInfo span');
          elementsx.forEach(function(element) {
              if (/^x\d+$/.test(element.textContent)) {
                  element.textContent = element.textContent.replace('x', '') + 'шт';
              }
    	});
      });       
	});
  	for (var i = 0; i < BlockListArrays.length; i++) {
        curcontent["block"].xcon += '<div class="block_by_category block_category_' + (i + 1) + '">';
        for (var b = 0; b < BlockListArrays[i].length; b++) {
            if (b == 5 && i == 4)
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.facemask.png">\
										<div class="kit-item__quantity block-lvl-' + (i + 1) + '"></div></div></div>';
            else if (BlockListArrays[i][b] == "pistol.prototype17") {
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/11/06/723437cdd667a17816dccdbdd75994c5.png">\
											<div class="kit-item__quantity block-lvl-' + (i + 1) + '"></div></div></div>';
            } else {
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://www.rustedit.io/images/imagelibrary/' + BlockListArrays[i][b] + '.png">\
											<div class="kit-item__quantity block-lvl-' + (i + 1) + '"></div></div></div>';
            }
        }
        curcontent["block"].xcon += '</div>';
    }
    curcontent["block"].xcon += '</div>\<br></i></div>';
    window.componentsManager.load();
  
}

window.onload = function() {
    document.body.onclick = function(event) {
      console.log(event.target.id)
        if (event.target.id == 'closer')
            closepage();
    }
}

function nocopy(event) {
    var event = event || window.event;
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = true;
    }
    return true;
}
document.onmouseup = nocopy;
document.onmousemove = nocopy;
document.ondragstart = nocopy;
document.onselectstart = nocopy;
document.ontextmenu = nocopy;
document.oncopy = nocopy;
document.oncontextmenu = nocopy;

document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) || e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0) || e.ctrlKey && e.keyCode == 'S'.charCodeAt(0) || e.ctrlKey && e.keyCode == 'D'.charCodeAt(0)) {
        return false;
    }
}

if (window.isAppReady) {
    main();
} else {
    window.addEventListener('appReady', main);
}
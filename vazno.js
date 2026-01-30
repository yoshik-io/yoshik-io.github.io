const vazno_data = [
    { "code": "МИРАНДА", "title": "Правило Миранды", "text": "Вы имеете право хранить молчание. Всё, что вы скажете, может и будет использовано против вас в суде. Ваш адвокат может присутствовать при допросе. Если вы не можете оплатить услуги адвоката, он будет назначен вам государством. Вам ясны ваши права?", "penalty": "Зачитывается дважды", "wanted_stars": 0 },
{
    code: "ТАЙМИНГИ",
    title: "Шпаргалка по процессуальным срокам",
    text: `
        <div class="timing-grid">
            <div class="grid-row grid-header">
                <div class="grid-cell">Субъект/Действие</div>
                <div class="grid-cell cell-time">Срок</div>
                <div class="grid-cell cell-law">Статья ПК</div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">Ответ гос. адвоката</div>
                <div class="grid-cell cell-time">10 мин</div>
                <div class="grid-cell cell-law">Гл. 5 ст. 2</div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">Приезд гос. адвоката</div>
                <div class="grid-cell cell-time">5 мин</div>
                <div class="grid-cell cell-law">Гл. 5 ст. 2</div>
            </div>
            <div class="grid-row">

                <div class="grid-cell">Телефонный разговор</div>
                <div class="grid-cell cell-time">3 мин</div>
                <div class="grid-cell cell-law">Гл. 5 ст. 6</div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">Приезд част. адвоката</div>
                <div class="grid-cell cell-time">7 мин</div>
                <div class="grid-cell cell-law">Гл. 5 ст. 2</div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">Ответ Прокурора/Рук-ва</div>
                <div class="grid-cell cell-time">10 мин</div>
                <div class="grid-cell cell-law">Гл. 7 ст. 1</div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">Запрос прав в КПЗ (лимит)</div>
                <div class="grid-cell cell-time">3 мин</div>
                <div class="grid-cell cell-law">Гл. 5 ст. 6</div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">Макс. срок задержания</div>
                <div class="grid-cell cell-time">60 мин</div>
                <div class="grid-cell cell-law">Гл. 1 ст. 1</div>
            </div>
        </div>
    `,
    wanted_stars: 0
},
    { "code": "УК Особая", "title": "Особенная часть", "text": "<b>✮ КПЗ равна - 10 минутам = 10 суток в IC, ✮ Федеральной тюрьме равна - 20 минутам = год в IC<br><br></b>[Р] - Региональные, в зоне ответственности полицейских управлений, - передача от USSS,FIB, ARMY.<br>[Ф] - Федеральные, в зоне ответственности Федерального расследовательского бюро, передача от LSSD,LSPD, ARMY, USSS, в случае отсутствия FIB, полицейские департаменты вправе самостоятельно реализовать процессуальные действия.<br>[О] - Общая зона ответственности.<br><br><i>Экономические преступления передаются сотрудникам USSS, сотрудниками FIB по федеральным статья.</i><br><br>"},
    
    {
    id: "LINKS",
    title: "Полезные ресурсы (Внешние ссылки)",
    text: `
        
        • <a href="https://docs.google.com/document/d/1PVj4xzauRoLdd8ApJBi9zw_VzXdoTNQ99dQMsX8g5cs/edit?tab=t.0" target="_blank" class="internal-link">ПРОЦЕССУАЛЬНЫЙ КОДЕКС</a><br>
        • <a href="https://docs.google.com/document/d/1vUliG11Y8lIhe1Gh18vhUBxeLMON6Kbe4qztiQxWWBs/edit?tab=t.0" target="_blank" class="internal-link">УГОЛОВНО-АДМИНИСТРАТИВНЫЙ КОДЕКС</a><br>
        • <a href="https://docs.google.com/document/d/1WFFsMZfIMKENW1OBqNDkNcvX2bFoF8PMQbIkKBfClAE/edit?usp=sharing" target="_blank" class="internal-link">Закон о ПОЛИЦЕЙСКИХ УПРАВЛЕНИЯХ</a><br>
        • <a href="https://docs.google.com/document/d/1wWvrutvqEa0b4qa6RmBU_0ClnRUeb_KxCmhPtF7pwFA/edit?usp=sharing" target="_blank" class="internal-link">Закон о ЗОТ</a><br>
        • <a href="https://docs.google.com/document/d/1YpspKmMnvOxGFGLkxF5TkaMyWpUJHMIxAkTVUd0pr84/edit?usp=sharing" target="_blank" class="internal-link">Закон о ОРУЖИИ</a><br>
        • <a href="https://crimewood.ru/rules/2" target="_blank" class="internal-link">Правила Государственных структур</a><br>
    `,
    wanted_stars: 0
}
    
];

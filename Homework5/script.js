document.addEventListener('DOMContentLoaded', function () {
    const divContent = document.querySelector('.content');
    if (divContent) {
        for (let i = 0; i < 6; i++) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const res = data.results[0];
                    console.log(res);
                    divContent.insertAdjacentHTML('beforeend', `
                    <div class="card">
                        <img class="card__photo" src="${res.picture.large}"></img>
                        <h2 class="card__name">${res.name.first + ' ' + res.name.last}</h2>
                        <p class="card__gender">пол: ${res.gender}</p>
                        <p class="card__location">страна: ${res.location.country}</p>
                        <p class="card__location">город: ${res.location.city}</p>
                        <p class="card__email">телефон: ${res.phone}</p>
                        <p class="card__email">email: ${res.email}</p>
                    </div>
                `);
                })
                .catch(error => {
                    console.error('Ошибка получения данных:', error);
                });
        }
    } else {
        console.error('Элемент .content не найден на странице');
    }
});
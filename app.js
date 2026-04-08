console.log("Файл app.js загрузился!"); // Эта надпись появится в консоли браузера (F12)

// Функция, которая отрисует всё сама
function init() {
    const catalog = document.getElementById('catalog');
    
    if (!catalog) {
        console.log("Ошибка: Блок catalog не найден!");
        return;
    }

    const products = [
        { id: 1, name: "Крутая кепка", price: 1500 },
        { id: 2, name: "Худи разработчика", price: 4500 },
        { id: 3, name: "Клавиатура", price: 12000 }
    ];

    let cardsHtml = "";

    products.forEach(item => {
        cardsHtml += `
            <div style="border: 2px solid #333; padding: 15px; margin: 10px; display: inline-block; width: 200px; text-align: center;">
                <img src="https://via.placeholder.com/150" style="width: 100%;">
                <h3>${item.name}</h3>
                <p>${item.price} тг.</p>
                <button onclick="alert('Куплено!')">Купить</button>
            </div>
        `;
    });

    catalog.innerHTML = cardsHtml;
    console.log("Товары отрисованы!");
}

// Запускаем через 100 миллисекунд после открытия, чтобы браузер успел "проснуться"
setTimeout(init, 100);
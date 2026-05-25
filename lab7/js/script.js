const content = document.getElementById("content");
const catalogLink = document.getElementById("catalogLink");

catalogLink.addEventListener("click", function () {
    
    loadCatalog();
});

async function loadCatalog() {
    try {
        const response = await fetch("data/categories.json");

        if (!response.ok) {
            throw new Error("Помилка завантаження категорій");
        }

        const categories = await response.json();

        let html = `
            <h2>Каталог</h2>
            <p>Оберіть категорію товарів:</p>
            <div class="category-list">
        `;

        categories.forEach(function (category) {
            html += `
                <div class="category-card" onclick="loadCategory('${category.shortname}')">
                    <h3>${category.name}</h3>
                    <p>${category.notes}</p>
                </div>
            `;
        });

        html += `
                <div class="category-card" onclick="loadSpecials()">
                    <h3>Specials</h3>
                    <p>Випадкова категорія каталогу.</p>
                </div>
            </div>
        `;

        content.innerHTML = html;

    } catch (error) {
        content.innerHTML = `<p>Сталася помилка: ${error.message}</p>`;
    }
}

async function loadCategory(shortname) {
    try {
        const response = await fetch(`data/${shortname}.json`);

        if (!response.ok) {
            throw new Error("Помилка завантаження товарів");
        }

        const data = await response.json();

        let html = `
            <h2>${data.categoryName}</h2>
            <div class="products">
        `;

        data.items.forEach(function (item) {
            html += `
                <div class="product-card">
                    <img src="https://placehold.co/200x200?text=${encodeURIComponent(item.name)}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="price">${item.price}</p>
                </div>
            `;
        });

        html += `</div>`;

        content.innerHTML = html;

    } catch (error) {
        content.innerHTML = `<p>Сталася помилка: ${error.message}</p>`;
    }
}

async function loadSpecials() {
    try {
        const response = await fetch("data/categories.json");

        if (!response.ok) {
            throw new Error("Помилка завантаження категорій");
        }

        const categories = await response.json();

        const randomIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomIndex];

        loadCategory(randomCategory.shortname);

    } catch (error) {
        content.innerHTML = `<p>Сталася помилка: ${error.message}</p>`;
    }
}

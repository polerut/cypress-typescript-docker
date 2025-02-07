# Используем официальный образ Cypress с Chrome и Firefox
FROM cypress/included:12.17.2

# Устанавливаем рабочую директорию
WORKDIR /e2e

# Копируем файлы проекта
COPY package.json package-lock.json ./
RUN npm install

# Копируем весь проект
COPY . .

# Запуск тестов при старте контейнера
CMD ["npx", "cypress", "run"]

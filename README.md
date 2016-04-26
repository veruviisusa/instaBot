# instaBot


Установка

для адекватной работы с проектом вам понадобится: git, nodejs, npm

установка git:
sudo apt-get update
sudo apt-get install git
настройка git:
git config --global user.name "Your Name"
git config --global user.email "youremail@domain.com"

установка nodejs:
sudo apt-get update
sudo apt-get install nodejs

установка npm:
sudo apt-get install npm

копирование проекта:
1. откройте терминал в директории, где хотите работать
2. выполните git clone https://github.com/veruviisusa/instaBot.git
3. выполните cd instaBot



Запуск

1. Запустите npm start (при первом запуске node скачает в каталог все необходимые компоненты и модули)
2. Откройте в бразуере <a href="http://localhost:8000/app/index.html">http://localhost:8000/app/index.html</a>



Тестирование:

1. Открыть проект в новом терминале
2. Запустить npm test
3. Подождать пока karma запустит новое окно бразуера для тестирования
4. Смотреть результат в терминале
# Сценарий игры  
## Описание сценария
Игрок управляет змеей, стремясь съесть яблоко и увеличить свой счет.
Если змея съедает яблоко, то ее хвост увеличивается в размере, а также увеличивается количество набранных очков.
В случае столкновения с границами поля или самой собой игра завершается.
После завершения игры появляется модальное окно с текущим счетом и рекордом, где игрок может начать новую игру. 

### Начало игры
### Инициализация:
Создание экземпляров классов Snake и Apple.
Установка начальных значений счета, рекорда и флагов остановки игры.

### Отображение интерфейса:
Отображение игрового поля и элементов управления. Игровой цикл

### Управление:
Обработка событий клавиш - стрелок для управления направлением движения змейки.

### Цикл анимации (gameLoop):
Обновление положения змейки, проверка условий завершения игры (столкновение со стенами или самой собой).
Проверка съедания яблока, увеличение длины змейки и генерация нового яблока.
Обновление счета и запись нового рекорда при необходимости.
Отрисовка элементов игры на холсте.
Завершение игры
Столкновение или завершение:
При столкновении змейки со стенами или самой собой:
Отображение диалогового окна с текущим счетом и рекордом.
Возможность начать игру заново.

### При съедании яблока:
Увеличение счета и длины змейки.
Генерация нового яблока в случайной позиции.


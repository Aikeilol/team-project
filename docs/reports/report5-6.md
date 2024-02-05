### Задачи 5го спринта

- Создать репозиторий проекта из шаблона. Убедиться, что проект запускается и работает

  [Ссылка на репозиторий](https://github.com/Aikeilol/team-project)

- Отображение страниц, используя React Router и React Router DOM

  [Инициализация роутинга](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/router/index.tsx)

  [Подключение роутера](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/index.tsx#L15)

- Сверстать главную страницу игры: мини-лендинг с презентацией игры

  [Компонент лендинга](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/Intro/index.tsx)

  [Главное меню с сылками на все страницы](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/components/menu/index.tsx)

- Вёрстка страницы ошибок 400

  [Компонент ошибки](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/Error/index.tsx)
  (В зависимости от типа ошибки отображается 404 или 500 ошибка)

- Вёрстка страницы ошибок 500

  [Компонент ошибки](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/Error/index.tsx)
  (В зависимости от типа ошибки отображается 404 или 500 ошибка)

- Вёрстка страницы логина

  [Страница логина](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/pages/SignIn/index.tsx)

- Реализовать логику авторизации

  [Подключение api](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/utils/scripts/api/yandexApi.ts)

  [Редирект для незалогиненого пользователя](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/ProtectedRoute/index.tsx)

- Вёрстка страницы форума

  [Все экраны для форума](https://github.com/Aikeilol/team-project/tree/main/packages/client/src/pages/Forum)

- Добавьте валидацию на все формы

  [Описание правил валидации](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/Form/data.ts)

  [Подключение react-hook-form](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/components/Form/index.tsx#L33)

- Сверстать страницу регистрации

  [Страница регистрации](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/pages/SignUp/index.tsx)

- Сверстать экран с началом игры — например, обратный отсчёт, лоадер, экран с подсказками о том, как играть, или просто кнопка «Старт»

  [Кнопка "Начать игру" на лендинге](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/components/Intro/index.tsx#L39)

- Сверстать страницу пользователя

  [Страница профиля](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/Profile/index.tsx)

- Документ с описанием механик и логики игры

  [Папка с описаниями игры](https://github.com/Aikeilol/team-project/tree/main/docs)

- Сверстать экран завершения игры

  [Модальное окно завершения игры](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/GameEndDialog/index.tsx)

- Настроить обработку ошибок внутри «детей» React-компонентов

  [Обработка ошибок с помощью встроенного механизма react-router](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/router/index.tsx#L39)

  [Компонент ErrorBoundary](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/ErrorBoundary/index.tsx)

- Создать механику игры на Canvas API

  [Компонент игры](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/Game/index.tsx)

### Задачи 6го спринта

- Реализовать одну из игровых механик, описанных в документе с логикой игры

  Вся механика была реализована в 5ом спринте

- Реализовать состояние «Начало» и состояние «Завершение игры».

  [Подключение модального окна с итогом игры, возможностью опять сыграть и уйти на главную](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/components/Game/index.tsx#L126)

- Проработать визуальную часть игры

  Отрисовка с помощью спрайтов [змейки](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/components/Game/Snake/index.ts#L174), [яблока](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/components/Game/Apple/index.ts#L8), [фона](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/components/Game/index.tsx#L71)

- Добавить Service Workers

  [SW](https://github.com/Aikeilol/team-project/blob/main/packages/client/net-or-cache-sw.js), [регистрация sw](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/utils/service-worker/index.ts)

- Авторизация должна проверяться через отдельно написанный Hook или HOC (на ваш выбор, можно использовать сразу оба)

  [Protected Route](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/ProtectedRoute/index.tsx)

- Добавить минимум одно Web API

  [Кнопка Full screen](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/components/FullScreenButton/index.tsx)

- Добавить Redux-хранилище

  [Подключение стора](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/index.tsx#L12)

  [Слайс для юзера](https://github.com/Aikeilol/team-project/blob/main/packages/client/src/store/slices/userSlice.ts)

  [Пример обновления стора при авторизации](https://github.com/Aikeilol/team-project/blob/40b2b4d6da4482c7ae199460233aef1e84937bcc/packages/client/src/router/actions/signInAction.ts#L25)

- Написать тесты на игровой движок + любой UI

  [Пока в ПР](https://github.com/Aikeilol/team-project/pull/20)

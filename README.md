# Запустить сервер
```bash
  cd test-task
  npm run dev
```

# Live Demo


# О задании
1) Стэк: Vue (Options API) + Typescript
2) Папка Types хранит типизацию получаемых данных с API
3) Папка Helpers хранит переиспользуемую функцию, отвечающую за fetch данных
4) Проект лишь наполовину типизирован. Я так и не понял, как типизировать provide и inject значения в Options API. На будущее для работы с Typescript лучше использовать Composition API.
5) Логика по добавлению предметов в корзину реализована при помощи store
6) На каждое добавление цифры в корзине будут меняться, и сверху будет появляться Snackbar, основанный на встроенном Transition компоненте.
7) Большая часть пропсов передаётся с помощь provide и inject
8) Responsive Design осуществляется с помощью media queries
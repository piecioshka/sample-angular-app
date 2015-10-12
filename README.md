# Prosta aplikacja z użyciem Angular

Przykładowa aplikacja w stylu: Single Page Application.<br />
Demonstracja jak łatwo można stworzyć w pełni działającą aplikację SPA.

## Budowa aplikacji

```
.
├── README.md
├── app
│   ├── index.html
│   └── scripts
│       ├── bootstrap.js
│       ├── main.js
│       ├── modules
│       │   └── simpleAngularApp
│       │       ├── controller
│       │       │   └── MainController.js
│       │       ├── index.js
│       │       ├── module.js
│       │       └── views
│       │           ├── about.html
│       │           ├── contact.html
│       │           └── home.html
│       └── vendor
│           ├── angular
│           │   ├── angular-ui-router.js
│           │   └── angular.js
│           └── require
│               ├── domReady.js
│               └── require.js
└── package.json

9 directories, 15 files
```

## Biblioteki

* [Angular.js](https://angularjs.org/)
* [Require.js](http://requirejs.org/)

# Poor Students

Система для управления учебной информацией в вузе: работа с факультетами, кафедрами, группами, преподавателями, предметами, студентами, журналом и оценками. Проект включает веб-интерфейс, сервер API и отдельный сервис для генерации и печати документов Word.

## Что входит в проект

- Frontend: Angular
- Backend/API: NestJS + TypeORM + PostgreSQL
- Дополнительный сервис: FastAPI + Python для генерации документов Word и печати
- Автоматизация запуска: batch-скрипт `sayt.bat`

## Основные возможности

- просмотр и управление факультетами, кафедрами, группами
- работа со студентами и преподавателями
- управление предметами и связями преподаватель-предмет
- ведение журнала занятий и оценок
- фильтрация данных по факультетам и группам
- генерация документов с итоговыми оценками и ведомостями
- печать форм Word через Windows API

## Структура проекта

```text
poor students/
├── backend/                 # Python сервис для генерации .docx и печати
│   ├── backend.py
│   └── ...
├── client/                  # Angular frontend
│   ├── src/
│   ├── package.json
│   └── angular.json
├── server/                  # NestJS backend
│   ├── src/
│   ├── test/
│   ├── package.json
│   └── tsconfig.json
├── sayt.bat                 # быстрый запуск всех компонентов
├── README.md                # этот файл
└── ...
```

## Технологии

### Frontend
- Angular 18
- TypeScript
- RxJS
- Angular Router

### Backend
- NestJS
- TypeORM
- PostgreSQL
- JWT
- Express

### Document generation service
- Python
- FastAPI
- requests
- python-docx
- python-docx-template
- numpy
- pywin32 (Windows)

## Требования

Перед запуском убедитесь, что установлено:

- Node.js 18+
- npm
- PostgreSQL
- Python 3.10+
- Git

Для Windows также необходимы компоненты, связанные с печатью документов:

```bash
pip install fastapi uvicorn requests python-docx python-docx-template numpy pywin32
```

## Настройка базы данных

В проекте сервер NestJS подключается к PostgreSQL по настройкам в файле:

- `server/src/app.module.ts`

По умолчанию используется база данных:

```text
host: localhost
port: 5432
username: postgres
password: postgres
database: poor_students
```

Создайте базу данных `poor_students` и убедитесь, что PostgreSQL запущен.

## Запуск проекта

### Вариант 1: запуск через batch-файл

В корне проекта выполните:

```bash
sayt.bat
```

Этот скрипт запускает:

- Angular клиент (`client`)
- NestJS сервер (`server`)
- Python сервис (`backend`)

### Вариант 2: запуск вручную

#### 1. Запуск сервера NestJS

```bash
cd server
npm install
npm run start:dev
```

API будет доступно обычно по адресу:

```text
http://localhost:3000
```

#### 2. Запуск клиентского приложения Angular

```bash
cd client
npm install
npm run start
```

Приложение откроется в браузере по адресу:

```text
http://localhost:4200
```

#### 3. Запуск Python-сервиса

```bash
cd backend
pip install -r requirements.txt
```

Если `requirements.txt` нет, установите зависимости вручную:

```bash
pip install fastapi uvicorn requests python-docx python-docx-template numpy pywin32
```

После этого запустите:

```bash
fastapi run backend.py
```

или, если используете uvicorn:

```bash
uvicorn backend:app --reload --host 0.0.0.0 --port 8000
```

> Python-подсервис зависит от работающего NestJS API на `localhost:3000`.

## Сборка и тестирование

### Client

```bash
cd client
npm run build
npm run test
```

### Server

```bash
cd server
npm run build
npm run test
npm run test:e2e
```

## Основные маршруты API

NestJS сервер содержит модули для:

- faculties
- departments
- groups
- students
- teachers
- subjects
- journal
- ratings
- enumerates

Примеры маршрутов:

```text
GET /faculties
GET /groups
GET /students
GET /teachers
GET /subjects
GET /journal
GET /ratings
```

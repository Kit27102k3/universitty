# NCTU University Website - Client-Server Architecture

Dự án website Đại học Nam Cần Thơ với kiến trúc Client-Server sử dụng các công nghệ hiện đại.

## 🏗️ Cấu Trúc Dự Án

```
universitty/
├── client/                 # Next.js + TypeScript Frontend
│   ├── src/
│   │   ├── app/           # Next.js App Router
│   │   ├── components/    # React Components
│   │   ├── lib/          # Utilities & Configs
│   │   ├── hooks/        # Custom React Hooks
│   │   └── types/        # TypeScript Types
│   └── package.json
├── server-nestjs/         # NestJS + TypeScript Backend
│   ├── src/
│   │   ├── users/        # User Management
│   │   ├── programs/     # Academic Programs
│   │   ├── news/         # News & Announcements
│   │   └── app.module.ts
│   └── package.json
└── server-python/         # Python FastAPI Backend
    ├── app/
    │   ├── api/          # API Endpoints
    │   ├── models/       # Database Models
    │   ├── schemas/      # Pydantic Schemas
    │   ├── crud/         # Database Operations
    │   └── core/         # Core Configurations
    └── requirements.txt
```

## 🚀 Công Nghệ Sử Dụng

### Frontend (Client)
- **Next.js 14** - React Framework với App Router
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI Components
- **React Query** - State Management
- **Lucide React** - Icons

### Backend (NestJS Server)
- **NestJS** - Node.js Framework
- **TypeScript** - Type Safety
- **TypeORM** - Database ORM
- **MySQL** - Database
- **Swagger** - API Documentation
- **JWT** - Authentication

### Backend (Python Server)
- **FastAPI** - Python Web Framework
- **SQLAlchemy** - Database ORM
- **Pydantic** - Data Validation
- **Alembic** - Database Migrations
- **PyMySQL** - MySQL Driver

## 📦 Cài Đặt & Chạy

### 1. Frontend (Client)

```bash
cd client
npm install
npm run dev
```

Frontend sẽ chạy tại: http://localhost:3000

### 2. NestJS Server

```bash
cd server-nestjs
npm install
npm run start:dev
```

NestJS server sẽ chạy tại: http://localhost:3001
API Documentation: http://localhost:3001/api/docs

### 3. Python Server

```bash
cd server-python
pip install -r requirements.txt
python main.py
```

Python server sẽ chạy tại: http://localhost:8000
API Documentation: http://localhost:8000/docs

## 🔧 Cấu Hình Database

### MySQL Database
Tạo database `nctu_db` và cập nhật thông tin kết nối trong:

- **NestJS**: `server-nestjs/src/app.module.ts`
- **Python**: `server-python/app/core/config.py`

### Environment Variables

Tạo file `.env` trong mỗi thư mục server:

**NestJS (.env)**
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=nctu_db
```

**Python (.env)**
```env
DATABASE_URL=mysql+pymysql://root:your_password@localhost/nctu_db
SECRET_KEY=your-secret-key-here
```

## 🌐 API Endpoints

### NestJS Server (Port 3001)
- `GET /api/health` - Health check
- `GET /api/docs` - Swagger documentation
- `GET /api/users` - User management
- `GET /api/programs` - Academic programs
- `GET /api/news` - News & announcements

### Python Server (Port 8000)
- `GET /health` - Health check
- `GET /docs` - FastAPI documentation
- `GET /api/v1/users` - User management
- `GET /api/v1/programs` - Academic programs
- `GET /api/v1/news` - News & announcements

## 🔄 Proxy Configuration

Next.js được cấu hình để proxy requests:
- `/api/*` → NestJS server (port 3001)
- `/python-api/*` → Python server (port 8000)

## 📁 Cấu Trúc Components

### Frontend Components
- `Header.tsx` - Navigation header
- `Hero.tsx` - Landing page hero section
- `Programs.tsx` - Academic programs display
- `News.tsx` - News & announcements
- `Footer.tsx` - Site footer
- `BackToTop.tsx` - Back to top button

### Backend Modules

#### NestJS Modules
- `UsersModule` - User management
- `ProgramsModule` - Academic programs
- `NewsModule` - News & announcements

#### Python Modules
- `users` - User management endpoints
- `programs` - Academic programs endpoints
- `news` - News & announcements endpoints

## 🎨 Features

### Frontend Features
- ✅ Responsive design
- ✅ Modern UI với Tailwind CSS
- ✅ Back to Top button với animation
- ✅ TypeScript type safety
- ✅ API integration
- ✅ Loading states
- ✅ Error handling

### Backend Features
- ✅ RESTful APIs
- ✅ Database integration
- ✅ Authentication & Authorization
- ✅ API documentation
- ✅ CORS configuration
- ✅ Error handling
- ✅ Validation

## 🚀 Deployment

### Frontend
```bash
cd client
npm run build
npm run start
```

### NestJS Server
```bash
cd server-nestjs
npm run build
npm run start:prod
```

### Python Server
```bash
cd server-python
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 📝 Scripts

### Development
```bash
# Frontend
cd client && npm run dev

# NestJS Server
cd server-nestjs && npm run start:dev

# Python Server
cd server-python && python main.py
```

### Production
```bash
# Frontend
cd client && npm run build && npm run start

# NestJS Server
cd server-nestjs && npm run build && npm run start:prod

# Python Server
cd server-python && uvicorn main:app --host 0.0.0.0 --port 8000
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Developer** - Next.js, TypeScript, Tailwind CSS
- **Backend Developer (NestJS)** - Node.js, TypeScript, TypeORM
- **Backend Developer (Python)** - FastAPI, SQLAlchemy, Pydantic

---

**NCTU University Website** - Modern, scalable, and maintainable web application with Client-Server architecture. 
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
import uvicorn
from app.core.config import settings
from app.api.v1.api import api_router
# from app.db.session import engine
# from app.db.base import Base

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("Starting up NCTU Python Server...")
    # Create database tables
    # async with engine.begin() as conn:
    #     await conn.run_sync(Base.metadata.create_all)
    yield
    # Shutdown
    print("Shutting down NCTU Python Server...")

app = FastAPI(
    title="NCTU Python API",
    description="Python FastAPI server for Nam Can Tho University",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router
app.include_router(api_router, prefix="/api/v1")

# Health check endpoint
@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "service": "NCTU Python Server",
        "version": "1.0.0"
    }

@app.get("/")
async def root():
    return {"message": "Welcome to NCTU Python Server!"}

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8001,
        reload=True
    ) 
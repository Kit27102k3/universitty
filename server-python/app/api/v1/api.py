from fastapi import APIRouter
from app.api.v1.endpoints import users, programs, news

api_router = APIRouter()

api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(programs.router, prefix="/programs", tags=["programs"])
api_router.include_router(news.router, prefix="/news", tags=["news"]) 
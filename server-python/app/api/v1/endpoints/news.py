from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db

router = APIRouter()

@router.get("/")
async def get_news():
    """Get all news and announcements"""
    return {
        "message": "News endpoint", 
        "data": [
            {"id": 1, "title": "Welcome to New Academic Year", "content": "Welcome message..."},
            {"id": 2, "title": "Research Grant Awarded", "content": "Research news..."},
            {"id": 3, "title": "Student Achievement", "content": "Student success story..."}
        ]
    }

@router.get("/{news_id}")
async def get_news_item(news_id: int):
    """Get news by ID"""
    return {"message": f"News {news_id}", "data": {"id": news_id, "title": "Test News"}} 
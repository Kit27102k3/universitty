from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db

router = APIRouter()

@router.get("/")
async def get_users():
    """Get all users"""
    return {"message": "Users endpoint", "data": []}

@router.get("/{user_id}")
async def get_user(user_id: int):
    """Get user by ID"""
    return {"message": f"User {user_id}", "data": {"id": user_id, "name": "Test User"}} 
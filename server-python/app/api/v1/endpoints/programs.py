from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db

router = APIRouter()

@router.get("/")
async def get_programs():
    """Get all academic programs"""
    return {
        "message": "Programs endpoint", 
        "data": [
            {"id": 1, "name": "Computer Science", "duration": "4 years"},
            {"id": 2, "name": "Business Administration", "duration": "4 years"},
            {"id": 3, "name": "Engineering", "duration": "4 years"}
        ]
    }

@router.get("/{program_id}")
async def get_program(program_id: int):
    """Get program by ID"""
    return {"message": f"Program {program_id}", "data": {"id": program_id, "name": "Test Program"}} 
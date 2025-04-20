# schemas.py
from pydantic import BaseModel, EmailStr

# Dados enviados ao cadastrar um novo usuário
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

# Dados retornados ao consultar um usuário (sem senha!)
class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr

    class Config:
        orm_mode = True

# Dados enviados ao fazer login
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Resposta com o token JWT
class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

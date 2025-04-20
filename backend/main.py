# main.py
from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, engine
import models, schemas, auth
from models import User

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Habilitar CORS para conectar com frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # coloque seu endereço específico depois (ex: http://localhost:3000)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency para pegar o DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/register", response_model=schemas.UserResponse)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    print("Recebido:", user)  # log para debug

    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        print("Email já registrado")
        raise HTTPException(status_code=400, detail="Email já registrado.")

    try:
        hashed_pw = auth.hash_password(user.password)
        new_user = User(name=user.name, email=user.email, hashed_password=hashed_pw)
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    except Exception as e:
        print("Erro ao cadastrar:", e)
        raise HTTPException(status_code=500, detail="Erro interno ao cadastrar.")


@app.post("/login", response_model=schemas.Token)
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if not db_user or not auth.verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Email ou senha inválidos.")

    token = auth.create_access_token(data={"sub": db_user.email})
    return {"access_token": token, "token_type": "bearer"}

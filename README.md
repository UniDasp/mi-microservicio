# Microservicio ElysiaJS

Este repositorio contiene un microservicio desarrollado con ElysiaJS y TypeScript, utilizado como base para implementar un pipeline DevOps.

La idea del proyecto es simular un entorno de trabajo colaborativo, aplicando control de versiones, una estrategia de ramas clara y automatización mediante CI/CD.

---

## Tecnologías utilizadas

- TypeScript  
- ElysiaJS  
- Bun  
- GitHub Actions  

---

## Estrategia de ramificación

Se trabajo utilizando **GitFlow**, ya que permite separar de forma clara el desarrollo de la versión estable del proyecto.

### Ramas principales
- `main`: contiene la version estable (producción)  
- `develop`: integra los cambios en desarrollo  

### Ramas de soporte
- `feature/<nombre>`: nuevas funcionalidades  
- `hotfix/<nombre>`: correcciones urgentes en producción  

> [!IMPORTANT]
> La rama `main` se mantiene siempre estable. Los cambios se integran desde `develop` mediante Pull Requests, excepto en el caso de hotfix

---

## Flujo de trabajo

El flujo seguido durante el desarrollo fue el siguiente:

1. Se crea una rama `feature` desde `develop`  
2. Se implementa la funcionalidad y se realizan commits  
3. Se hace push de la rama al repositorio  
4. Se abre un Pull Request hacia `develop`  
5. Se revisan los cambios y se realiza el merge  
6. Cuando las funcionalidades están listas, se crea un Pull Request de `develop` hacia `main`  
7. Si aparece un error en producción, se crea una rama `hotfix` desde `main`  
8. El hotfix se integra en `main` y luego se sincroniza con `develop`  

> [!NOTE]
> Se utilizaron Pull Requests en todos los casos para simular un flujo de revisión de codigo y mantener trazabilidad de los cambios

---

## Convenciones de commits

Se utilizaron convenciones basadas en **Conventional Commits** para mantener claridad en el historial:

- `feat:` nueva funcionalidad  
- `fix:` corrección de errores  
- `docs:` documentación  
- `chore:` tareas generales

### Ejemplos


feat: add login endpoint
fix: improve login validation


---

## Naming de ramas

Se utilizaron nombres descriptivos para identificar fácilmente el proposito de cada rama:

- `feature/login`  
- `feature/register`  
- `hotfix/login-validation`  

> [!TIP]
> Mantener nombres claros facilita la colaboración y la lectura del repositorio.

---

## Estrategia de merge

- Todos los cambios se integran mediante Pull Requests  
- No se realizan merges directos a `main`  
- Se prioriza la revisión antes de aceptar cambios  

---

## CI/CD

Se configuro un pipeline basico utilizando GitHub Actions para automatizar validaciones.

### Se ejecuta automáticamente en:
- `push` a `develop`  
- `pull request` hacia `main`  

### El pipeline realiza:
- Instalación de dependencias  
- Validación de TypeScript (`tsc --noEmit`)  

> [!IMPORTANT]
> El pipeline no ejecuta el servidor, ya que en CI el objetivo es validar el codigo y no mantener procesos en ejecución (se me quedo tomado en un pr pasado por culpa de correr el servidor xdxd)

---

## Endpoints disponibles

- `GET /` → estado base del servicio  
- `POST /login` → autenticación básica  
- `POST /register` → registro de usuario  

---

## Conclusión

Este proyecto permitio aplicar conceptos clave de DevOps, como el uso de Git en equipo, la organización mediante GitFlow y la automatización básica con CI/CD.  
Ademas, se logró simular un flujo de trabajo real, manteniendo trazabilidad en los cambios y una estructura clara en el repositorio :)

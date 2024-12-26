# ESGI4-DOCKER-TP

# Projet React et Express avec Docker Compose

L'installation Docker génère 5 conteneurs :
- Frontend (react)
- Backend (express)
- Base de données (mysql)
- Client de BDD (phpmyadmin)
- Administration de conteneurs (portainer)

L'application ne fait rien de spécial. Il y a un appel sur la route /api du back qui renvoie un texte.  
Le back a également une route /health qui est appelée par le healthcheck du backend pour vérifier s'il est toujours en vie.  
Le healthcheck du front est juste un curl vers localhost.

## Prérequis

- Docker et Docker Compose installés sur votre machine
- Git pour cloner le projet

## Structure du projet

projet/
│
├── front/
│   └── Dockerfile
│
├── back/
│   └── Dockerfile
│
└── docker-compose.yml


## Étapes de déploiement

### 1. Clonage du projet

Clonez le projet sur votre machine locale :
```
git clone <url-du-projet>
cd <nom-du-projet>
```

### 2. Lancement des conteneurs

Démarrez les conteneurs avec Docker Compose :
```
docker-compose up -d --build
```

### 3. Accès aux applications

- Frontend React : [http://localhost:3000](http://localhost:3000)
- Backend Express : [http://localhost:5000](http://localhost:5000)
- PhpMyAdmin : [http://localhost:8080](http://localhost:8080)
  - user
  - password
- Portainer : [https://localhost:9443](https://localhost:9443)

## Commandes utiles

- Arrêter les conteneurs :
```
docker-compose down
```

- Voir les logs :
```
docker-compose logs -f
```

- Exécuter des commandes dans les conteneurs :
```
docker-compose exec ?????
docker-compose exec react npm run build
```

## Remarques importantes

- Assurez-vous que les ports 3000, 5000, 9443 et 8080 sont libres sur votre machine.
- Les volumes dans `docker-compose.yml` permettent la persistance des données et le développement en temps réel.

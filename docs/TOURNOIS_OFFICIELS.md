# Tournois officiels eBad / BadNet

La page `spectateur.html` ne montre, dans le circuit FFBaD, que les entrées du nœud Firebase `tournoisOfficiels` qui possèdent :

- `officiel: true` ;
- `source: "badnet"` ou `source: "ebad"` ;
- `sourceEventId` ;
- idéalement `sourceUrl`, afin que le visiteur puisse contrôler la source.

Les tournois créés localement dans `tournois` ne sont donc jamais présentés comme des compétitions fédérales.

## Mise en service de la synchronisation sans API

Le script lit la liste publique de BadNet, puis ouvre avec une cadence limitée chaque fiche candidate. Il conserve seulement les fiches qui affichent un numéro Poona, référence fédérale publiée sur BadNet. eBad est l’application mobile du même écosystème ; chaque tournoi contient également son lien eBad.

1. Dans les secrets du dépôt GitHub, créer :
   - `FIREBASE_SERVICE_ACCOUNT` : le JSON complet d’un compte de service Firebase ayant seulement accès en écriture à `tournoisOfficiels` ;
   - `FIREBASE_DATABASE_URL` : l’URL de la Realtime Database.
2. Lancer manuellement l’action GitHub « Synchroniser les tournois officiels » pour vérifier la première importation.

La tâche est ensuite planifiée le jeudi matin et toutes les trois heures. Elle s’arrête après 40 fiches et attend 700 ms entre deux pages BadNet, afin de limiter fortement la charge. La limite est modifiable par `BADNET_MAX_EVENTS` dans le workflow (maximum 100).

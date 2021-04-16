mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  db.createUser({
    user: "$MONGO_USERNAME",
    pwd: "$MONGO_PASSWORD",
    roles: [
      { role: 'readWrite', db: "$MONGO_INITDB_DATABASE" }
    ]
  })
EOF


 db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [ 
      { role: "userAdminAnyDatabase", db: "admin" }, 
      "readWriteAnyDatabase"
     ]
  })
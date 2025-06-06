migrate((app) => {
    let superusers = app.findCollectionByNameOrId("_superusers")

    let record = new Record(superusers)

    // note: the values can be eventually loaded via $os.getenv(key)
    // or from a special local config file
    record.set("email", $os.getenv("POCKETBASE_SUPERUSER_EMAIL"))
    record.set("password", $os.getenv("POCKETBASE_SUPERUSER_PASSWORD"))

    app.save(record)
})
migrate((app) => {
    let settings = app.settings()

    // for all available settings fields you could check
    // /jsvm/interfaces/core.Settings.html
    settings.meta.appName = "BlendSphere"
    settings.meta.url = $os.getenv(POCKETBASE_URL)

    // set mailing settings
    settings.meta.senderAddress = $os.getenv("SENDER_ADDRESS")
    settings.meta.senderName = "BlendSphere Support"
    settings.smtp.enabled = true
    settings.smtp.host = $os.getenv("SMTP_HOST")
    settings.smtp.port = $os.getenv("SMTP_PORT")
    settings.smtp.username = $os.getenv("SMTP_USERNAME")
    settings.smtp.password = $os.getenv("SMTP_PASSWORD")

    // set batch API settings
    settings.batch.enabled = true
    settings.batch.maxRequests = 50

    // set log settings
    settings.logs.maxDays = 7
    settings.logs.logAuthId = true
    settings.logs.logIP = false

    // set rate limiting settings
    settings.rateLimits.enabled = true

    app.save(settings)
})
/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const snapshot = [
    {
      "createRule": null,
      "deleteRule": null,
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text455797646",
          "max": 0,
          "min": 0,
          "name": "collectionRef",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text127846527",
          "max": 0,
          "min": 0,
          "name": "recordRef",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text1582905952",
          "max": 0,
          "min": 0,
          "name": "method",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": true,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": true,
          "type": "autodate"
        }
      ],
      "id": "pbc_2279338944",
      "indexes": [
        "CREATE INDEX `idx_mfas_collectionRef_recordRef` ON `_mfas` (collectionRef,recordRef)"
      ],
      "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      "name": "_mfas",
      "system": true,
      "type": "base",
      "updateRule": null,
      "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId"
    },
    {
      "createRule": null,
      "deleteRule": null,
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text455797646",
          "max": 0,
          "min": 0,
          "name": "collectionRef",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text127846527",
          "max": 0,
          "min": 0,
          "name": "recordRef",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cost": 8,
          "hidden": true,
          "id": "password901924565",
          "max": 0,
          "min": 0,
          "name": "password",
          "pattern": "",
          "presentable": false,
          "required": true,
          "system": true,
          "type": "password"
        },
        {
          "autogeneratePattern": "",
          "hidden": true,
          "id": "text3866985172",
          "max": 0,
          "min": 0,
          "name": "sentTo",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": true,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": true,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": true,
          "type": "autodate"
        }
      ],
      "id": "pbc_1638494021",
      "indexes": [
        "CREATE INDEX `idx_otps_collectionRef_recordRef` ON `_otps` (collectionRef, recordRef)"
      ],
      "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      "name": "_otps",
      "system": true,
      "type": "base",
      "updateRule": null,
      "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId"
    },
    {
      "createRule": null,
      "deleteRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text455797646",
          "max": 0,
          "min": 0,
          "name": "collectionRef",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text127846527",
          "max": 0,
          "min": 0,
          "name": "recordRef",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text2462348188",
          "max": 0,
          "min": 0,
          "name": "provider",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text1044722854",
          "max": 0,
          "min": 0,
          "name": "providerId",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": true,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": true,
          "type": "autodate"
        }
      ],
      "id": "pbc_2281828961",
      "indexes": [
        "CREATE UNIQUE INDEX `idx_externalAuths_record_provider` ON `_externalAuths` (collectionRef, recordRef, provider)",
        "CREATE UNIQUE INDEX `idx_externalAuths_collection_provider` ON `_externalAuths` (collectionRef, provider, providerId)"
      ],
      "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      "name": "_externalAuths",
      "system": true,
      "type": "base",
      "updateRule": null,
      "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId"
    },
    {
      "createRule": null,
      "deleteRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text455797646",
          "max": 0,
          "min": 0,
          "name": "collectionRef",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text127846527",
          "max": 0,
          "min": 0,
          "name": "recordRef",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text4228609354",
          "max": 0,
          "min": 0,
          "name": "fingerprint",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": true,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": true,
          "type": "autodate"
        }
      ],
      "id": "pbc_4275539003",
      "indexes": [
        "CREATE UNIQUE INDEX `idx_authOrigins_unique_pairs` ON `_authOrigins` (collectionRef, recordRef, fingerprint)"
      ],
      "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
      "name": "_authOrigins",
      "system": true,
      "type": "base",
      "updateRule": null,
      "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId"
    },
    {
      "authAlert": {
        "emailTemplate": {
          "body": "<p>Hello,</p>\n<p>We noticed a login to your {APP_NAME} account from a new location.</p>\n<p>If this was you, you may disregard this email.</p>\n<p><strong>If this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.</strong></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
          "subject": "Login from a new location"
        },
        "enabled": true
      },
      "authRule": "",
      "authToken": {
        "duration": 86400
      },
      "confirmEmailChangeTemplate": {
        "body": "<p>Hello,</p>\n<p>Click on the button below to confirm your new email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirm new email</a>\n</p>\n<p><i>If you didn't ask to change your email address, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        "subject": "Confirm your {APP_NAME} new email address"
      },
      "createRule": null,
      "deleteRule": null,
      "emailChangeToken": {
        "duration": 1800
      },
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cost": 0,
          "hidden": true,
          "id": "password901924565",
          "max": 0,
          "min": 8,
          "name": "password",
          "pattern": "",
          "presentable": false,
          "required": true,
          "system": true,
          "type": "password"
        },
        {
          "autogeneratePattern": "[a-zA-Z0-9]{50}",
          "hidden": true,
          "id": "text2504183744",
          "max": 60,
          "min": 30,
          "name": "tokenKey",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "exceptDomains": null,
          "hidden": false,
          "id": "email3885137012",
          "name": "email",
          "onlyDomains": null,
          "presentable": false,
          "required": true,
          "system": true,
          "type": "email"
        },
        {
          "hidden": false,
          "id": "bool1547992806",
          "name": "emailVisibility",
          "presentable": false,
          "required": false,
          "system": true,
          "type": "bool"
        },
        {
          "hidden": false,
          "id": "bool256245529",
          "name": "verified",
          "presentable": false,
          "required": false,
          "system": true,
          "type": "bool"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": true,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": true,
          "type": "autodate"
        }
      ],
      "fileToken": {
        "duration": 180
      },
      "id": "pbc_3142635823",
      "indexes": [
        "CREATE UNIQUE INDEX `idx_tokenKey_pbc_3142635823` ON `_superusers` (`tokenKey`)",
        "CREATE UNIQUE INDEX `idx_email_pbc_3142635823` ON `_superusers` (`email`) WHERE `email` != ''"
      ],
      "listRule": null,
      "manageRule": null,
      "mfa": {
        "duration": 1800,
        "enabled": false,
        "rule": ""
      },
      "name": "_superusers",
      "oauth2": {
        "enabled": false,
        "mappedFields": {
          "avatarURL": "",
          "id": "",
          "name": "",
          "username": ""
        }
      },
      "otp": {
        "duration": 180,
        "emailTemplate": {
          "body": "<p>Hello,</p>\n<p>Your one-time password is: <strong>{OTP}</strong></p>\n<p><i>If you didn't ask for the one-time password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
          "subject": "OTP for {APP_NAME}"
        },
        "enabled": false,
        "length": 8
      },
      "passwordAuth": {
        "enabled": true,
        "identityFields": [
          "email"
        ]
      },
      "passwordResetToken": {
        "duration": 1800
      },
      "resetPasswordTemplate": {
        "body": "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        "subject": "Reset your {APP_NAME} password"
      },
      "system": true,
      "type": "auth",
      "updateRule": null,
      "verificationTemplate": {
        "body": "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        "subject": "Verify your {APP_NAME} email"
      },
      "verificationToken": {
        "duration": 259200
      },
      "viewRule": null
    },
    {
      "authAlert": {
        "emailTemplate": {
          "body": "Hello,\n\nYour {APP_NAME} account was accessed from a new location:\n{IP} ({COUNTRY})\n\nIf it was you, you can ignore this email.\nIf it wasn't you, please secure your account immediately.\n\nThanks,\n{APP_NAME} team",
          "subject": "Login from a new location"
        },
        "enabled": false
      },
      "authRule": "",
      "authToken": {
        "duration": 604800
      },
      "confirmEmailChangeTemplate": {
        "body": "Hello,\n\nClick on the button below to confirm your new email address.\n\n{ACTION_URL}\n\nIf you didn't ask to change your email address, you can ignore this email.\n\nThanks,\n{APP_NAME} team",
        "subject": "Confirm your new email address"
      },
      "createRule": "",
      "deleteRule": "id = @request.auth.id",
      "emailChangeToken": {
        "duration": 1800
      },
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cost": 0,
          "hidden": true,
          "id": "password901924565",
          "max": 0,
          "min": 8,
          "name": "password",
          "pattern": "",
          "presentable": false,
          "required": true,
          "system": true,
          "type": "password"
        },
        {
          "autogeneratePattern": "[a-zA-Z0-9]{50}",
          "hidden": true,
          "id": "text2504183744",
          "max": 60,
          "min": 30,
          "name": "tokenKey",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "exceptDomains": null,
          "hidden": false,
          "id": "email3885137012",
          "name": "email",
          "onlyDomains": null,
          "presentable": false,
          "required": true,
          "system": true,
          "type": "email"
        },
        {
          "hidden": false,
          "id": "bool256245529",
          "name": "verified",
          "presentable": false,
          "required": false,
          "system": true,
          "type": "bool"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text1579384326",
          "max": 100,
          "min": 1,
          "name": "name",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_username",
          "max": 50,
          "min": 3,
          "name": "username",
          "pattern": "^[a-zA-Z0-9_]{3,50}$",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "file376926767",
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "name": "avatar",
          "presentable": false,
          "protected": false,
          "required": false,
          "system": false,
          "thumbs": [],
          "type": "file"
        },
        {
          "hidden": false,
          "id": "select_role",
          "maxSelect": 1,
          "name": "role",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "ADMIN",
            "TEACHER",
            "STUDENT",
            "INDIVIDUAL_LEARNER"
          ]
        },
        {
          "hidden": false,
          "id": "select_native_language",
          "maxSelect": 1,
          "name": "nativeLanguage",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "EN",
            "ES",
            "FR",
            "DE",
            "IT",
            "PL"
          ]
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_about_me",
          "max": 500,
          "min": 0,
          "name": "aboutMe",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "bool1547992806",
          "name": "emailVisibility",
          "presentable": false,
          "required": false,
          "system": true,
          "type": "bool"
        }
      ],
      "fileToken": {
        "duration": 180
      },
      "id": "_pb_users_auth_",
      "indexes": [
        "CREATE UNIQUE INDEX `idx_users_email` ON `users` (`email`)",
        "CREATE UNIQUE INDEX `idx_users_username` ON `users` (`username`) WHERE `username` != ''",
        "CREATE INDEX `idx_users_role` ON `users` (`role`)",
        "CREATE INDEX `idx_users_created` ON `users` (`created`)",
        "CREATE UNIQUE INDEX `idx_tokenKey__pb_users_auth_` ON `users` (`tokenKey`)"
      ],
      "listRule": "id = @request.auth.id",
      "manageRule": null,
      "mfa": {
        "duration": 1800,
        "enabled": false,
        "rule": ""
      },
      "name": "users",
      "oauth2": {
        "enabled": false,
        "mappedFields": {
          "avatarURL": "",
          "id": "",
          "name": "",
          "username": ""
        }
      },
      "otp": {
        "duration": 180,
        "emailTemplate": {
          "body": "Hello,\n\nYour one-time password is: {OTP}\n\nIf you didn't request this, please ignore this email.\n\nThanks,\n{APP_NAME} team",
          "subject": "OTP for {APP_NAME}"
        },
        "enabled": false,
        "length": 8
      },
      "passwordAuth": {
        "enabled": true,
        "identityFields": [
          "email"
        ]
      },
      "passwordResetToken": {
        "duration": 1800
      },
      "resetPasswordTemplate": {
        "body": "Hello,\n\nClick on the button below to reset your password.\n\n{ACTION_URL}\n\nIf you didn't ask to reset your password, you can ignore this email.\n\nThanks,\n{APP_NAME} team",
        "subject": "Reset your {APP_NAME} password"
      },
      "system": false,
      "type": "auth",
      "updateRule": "id = @request.auth.id",
      "verificationTemplate": {
        "body": "Hello,\n\nThank you for joining us at {APP_NAME}.\n\nClick on the button below to verify your email address.\n\n{ACTION_URL}\n\nThanks,\n{APP_NAME} team",
        "subject": "Verify your {APP_NAME} email"
      },
      "verificationToken": {
        "duration": 259200
      },
      "viewRule": "id = @request.auth.id"
    },
    {
      "createRule": "@request.auth.id != ''",
      "deleteRule": "template.author = @request.auth.id",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": true,
          "collectionId": "pbc_templates",
          "hidden": false,
          "id": "relation_template",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "template",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "hidden": false,
          "id": "select_type",
          "maxSelect": 1,
          "name": "type",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "TEXT",
            "IMAGE",
            "AUDIO"
          ]
        },
        {
          "hidden": false,
          "id": "bool_is_input",
          "name": "isInput",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "bool"
        },
        {
          "hidden": false,
          "id": "select_language",
          "maxSelect": 1,
          "name": "language",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "select",
          "values": [
            "EN",
            "ES",
            "FR",
            "DE",
            "IT",
            "PL"
          ]
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_label",
          "max": 100,
          "min": 1,
          "name": "label",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_description",
          "max": 500,
          "min": 0,
          "name": "description",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_example",
          "max": 500,
          "min": 0,
          "name": "example",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_fields",
      "indexes": [
        "CREATE INDEX `idx_fields_template` ON `fields` (`template`)",
        "CREATE INDEX `idx_fields_type_input` ON `fields` (`type`, `isInput`)"
      ],
      "listRule": "@request.auth.id != ''",
      "name": "fields",
      "system": false,
      "type": "base",
      "updateRule": "template.author = @request.auth.id",
      "viewRule": "@request.auth.id != ''"
    },
    {
      "createRule": "@request.auth.id != ''",
      "deleteRule": "user = @request.auth.id",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_user",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "user",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_prompt",
          "max": 5000,
          "min": 1,
          "name": "prompt",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_response",
          "max": 10000,
          "min": 0,
          "name": "response",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "number_response_time",
          "max": null,
          "min": 0,
          "name": "responseTime",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "select_type",
          "maxSelect": 1,
          "name": "type",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "FLASHCARD_GENERATION",
            "EXPLANATION_HELP",
            "TRANSLATION"
          ]
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_ai_prompts",
      "indexes": [
        "CREATE INDEX `idx_ai_prompts_user` ON `aiPrompts` (`user`)",
        "CREATE INDEX `idx_ai_prompts_type` ON `aiPrompts` (`type`)",
        "CREATE INDEX `idx_ai_prompts_created` ON `aiPrompts` (`created`)"
      ],
      "listRule": "user = @request.auth.id",
      "name": "aiPrompts",
      "system": false,
      "type": "base",
      "updateRule": "user = @request.auth.id",
      "viewRule": "user = @request.auth.id"
    },
    {
      "createRule": "@request.auth.id != ''",
      "deleteRule": "user = @request.auth.id || (class != '' && class.teacher = @request.auth.id)",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_name",
          "max": 100,
          "min": 1,
          "name": "name",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_description",
          "max": 1000,
          "min": 0,
          "name": "description",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_user",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "user",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "pbc_classes",
          "hidden": false,
          "id": "relation_class",
          "maxSelect": 1,
          "minSelect": 0,
          "name": "class",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "relation"
        },
        {
          "hidden": false,
          "id": "bool_is_public",
          "name": "isPublic",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "bool"
        },
        {
          "hidden": false,
          "id": "select_language",
          "maxSelect": 1,
          "name": "language",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "select",
          "values": [
            "EN",
            "ES",
            "FR",
            "DE",
            "IT",
            "PL",
            "PT",
            "RU",
            "ZH",
            "JA",
            "KO",
            "AR"
          ]
        },
        {
          "hidden": false,
          "id": "select_level",
          "maxSelect": 1,
          "name": "level",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "select",
          "values": [
            "A1",
            "A2",
            "B1",
            "B2",
            "C1",
            "C2"
          ]
        },
        {
          "hidden": false,
          "id": "json_tags",
          "maxSize": 0,
          "name": "tags",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "json"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_decks",
      "indexes": [
        "CREATE INDEX `idx_decks_user` ON `decks` (`user`)",
        "CREATE INDEX `idx_decks_class` ON `decks` (`class`)",
        "CREATE INDEX `idx_decks_public` ON `decks` (`isPublic`)",
        "CREATE INDEX `idx_decks_language_level` ON `decks` (`language`, `level`)"
      ],
      "listRule": "isPublic = true || user = @request.auth.id || (class != '' && class.classEnrollments_via_class.student ?= @request.auth.id)",
      "name": "decks",
      "system": false,
      "type": "base",
      "updateRule": "user = @request.auth.id || (class != '' && class.teacher = @request.auth.id)",
      "viewRule": "isPublic = true || user = @request.auth.id || (class != '' && class.classEnrollments_via_class.student ?= @request.auth.id)"
    },
    {
      "createRule": "@request.auth.id != ''",
      "deleteRule": "user = @request.auth.id",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_user",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "user",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "pbc_decks",
          "hidden": false,
          "id": "relation_deck",
          "maxSelect": 1,
          "minSelect": 0,
          "name": "deck",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "pbc_lessons",
          "hidden": false,
          "id": "relation_lesson",
          "maxSelect": 1,
          "minSelect": 0,
          "name": "lesson",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "relation"
        },
        {
          "hidden": false,
          "id": "select_type",
          "maxSelect": 1,
          "name": "type",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "REVIEW",
            "NEW_CARDS",
            "MIXED",
            "LESSON"
          ]
        },
        {
          "hidden": false,
          "id": "select_status",
          "maxSelect": 1,
          "name": "status",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "ACTIVE",
            "COMPLETED",
            "PAUSED",
            "CANCELLED"
          ]
        },
        {
          "hidden": false,
          "id": "date_start_time",
          "max": "",
          "min": "",
          "name": "startTime",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "date"
        },
        {
          "hidden": false,
          "id": "date_end_time",
          "max": "",
          "min": "",
          "name": "endTime",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "date"
        },
        {
          "hidden": false,
          "id": "number_duration_seconds",
          "max": null,
          "min": 0,
          "name": "durationSeconds",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number_cards_reviewed",
          "max": null,
          "min": 0,
          "name": "cardsReviewed",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number_correct_answers",
          "max": null,
          "min": 0,
          "name": "correctAnswers",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number_incorrect_answers",
          "max": null,
          "min": 0,
          "name": "incorrectAnswers",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "json_session_data",
          "maxSize": 0,
          "name": "sessionData",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "json"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_study_sessions",
      "indexes": [
        "CREATE INDEX `idx_study_sessions_user` ON `studySessions` (`user`)",
        "CREATE INDEX `idx_study_sessions_deck` ON `studySessions` (`deck`)",
        "CREATE INDEX `idx_study_sessions_lesson` ON `studySessions` (`lesson`)",
        "CREATE INDEX `idx_study_sessions_status` ON `studySessions` (`status`)",
        "CREATE INDEX `idx_study_sessions_start_time` ON `studySessions` (`startTime`)"
      ],
      "listRule": "user = @request.auth.id",
      "name": "studySessions",
      "system": false,
      "type": "base",
      "updateRule": "user = @request.auth.id",
      "viewRule": "user = @request.auth.id"
    },
    {
      "createRule": "@request.auth.id != ''",
      "deleteRule": "user = @request.auth.id",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": true,
          "collectionId": "pbc_flashcards",
          "hidden": false,
          "id": "relation_flashcard",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "flashcard",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "pbc_study_sessions",
          "hidden": false,
          "id": "relation_session",
          "maxSelect": 1,
          "minSelect": 0,
          "name": "session",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_user",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "user",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "hidden": false,
          "id": "select_rating",
          "maxSelect": 1,
          "name": "rating",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "AGAIN",
            "HARD",
            "GOOD",
            "EASY"
          ]
        },
        {
          "hidden": false,
          "id": "number_response_time_ms",
          "max": null,
          "min": 0,
          "name": "responseTimeMs",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "date_review_time",
          "max": "",
          "min": "",
          "name": "reviewTime",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "date"
        },
        {
          "hidden": false,
          "id": "number_previous_difficulty",
          "max": 10,
          "min": 0,
          "name": "previousDifficulty",
          "onlyInt": false,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number_new_difficulty",
          "max": 10,
          "min": 0,
          "name": "newDifficulty",
          "onlyInt": false,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number_previous_stability",
          "max": null,
          "min": 0,
          "name": "previousStability",
          "onlyInt": false,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number_new_stability",
          "max": null,
          "min": 0,
          "name": "newStability",
          "onlyInt": false,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "select_previous_state",
          "maxSelect": 1,
          "name": "previousState",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "select",
          "values": [
            "NEW",
            "LEARNING",
            "REVIEW",
            "RELEARNING"
          ]
        },
        {
          "hidden": false,
          "id": "select_new_state",
          "maxSelect": 1,
          "name": "newState",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "select",
          "values": [
            "NEW",
            "LEARNING",
            "REVIEW",
            "RELEARNING"
          ]
        },
        {
          "hidden": false,
          "id": "json_fsrs_data",
          "maxSize": 0,
          "name": "fsrsData",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "json"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_flashcard_reviews",
      "indexes": [
        "CREATE INDEX `idx_flashcard_reviews_flashcard` ON `flashcardReviews` (`flashcard`)",
        "CREATE INDEX `idx_flashcard_reviews_user` ON `flashcardReviews` (`user`)",
        "CREATE INDEX `idx_flashcard_reviews_session` ON `flashcardReviews` (`session`)",
        "CREATE INDEX `idx_flashcard_reviews_rating` ON `flashcardReviews` (`rating`)",
        "CREATE INDEX `idx_flashcard_reviews_review_time` ON `flashcardReviews` (`reviewTime`)",
        "CREATE INDEX `idx_flashcard_reviews_state_change` ON `flashcardReviews` (`previousState`, `newState`)"
      ],
      "listRule": "user = @request.auth.id",
      "name": "flashcardReviews",
      "system": false,
      "type": "base",
      "updateRule": "user = @request.auth.id",
      "viewRule": "user = @request.auth.id"
    },
    {
      "createRule": "@request.auth.id != '' && @request.auth.role ?= 'TEACHER'",
      "deleteRule": "teacher = @request.auth.id",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_name",
          "max": 100,
          "min": 1,
          "name": "name",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_description",
          "max": 1000,
          "min": 0,
          "name": "description",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_teacher",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "teacher",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "autogeneratePattern": "[A-Z0-9]{6}",
          "hidden": false,
          "id": "text_code",
          "max": 6,
          "min": 6,
          "name": "code",
          "pattern": "^[A-Z0-9]{6}$",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "select_language",
          "maxSelect": 1,
          "name": "language",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "EN",
            "ES",
            "FR",
            "DE",
            "IT",
            "PL"
          ]
        },
        {
          "hidden": false,
          "id": "select_level",
          "maxSelect": 1,
          "name": "level",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "A1",
            "A2",
            "B1",
            "B2",
            "C1",
            "C2"
          ]
        },
        {
          "hidden": false,
          "id": "bool_is_active",
          "name": "isActive",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "bool"
        },
        {
          "hidden": false,
          "id": "date_start_date",
          "max": "",
          "min": "",
          "name": "startDate",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "date"
        },
        {
          "hidden": false,
          "id": "date_end_date",
          "max": "",
          "min": "",
          "name": "endDate",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "date"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_classes",
      "indexes": [
        "CREATE UNIQUE INDEX `idx_classes_code` ON `classes` (`code`)",
        "CREATE INDEX `idx_classes_teacher` ON `classes` (`teacher`)",
        "CREATE INDEX `idx_classes_active` ON `classes` (`isActive`)",
        "CREATE INDEX `idx_classes_language_level` ON `classes` (`language`, `level`)"
      ],
      "listRule": "teacher = @request.auth.id || classEnrollments_via_class.student ?= @request.auth.id",
      "name": "classes",
      "system": false,
      "type": "base",
      "updateRule": "teacher = @request.auth.id",
      "viewRule": "teacher = @request.auth.id || classEnrollments_via_class.student ?= @request.auth.id"
    },
    {
      "createRule": "student = @request.auth.id || class.teacher = @request.auth.id",
      "deleteRule": "student = @request.auth.id || class.teacher = @request.auth.id",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": true,
          "collectionId": "pbc_classes",
          "hidden": false,
          "id": "relation_class",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "class",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_student",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "student",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "hidden": false,
          "id": "select_status",
          "maxSelect": 1,
          "name": "status",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "PENDING",
            "ACTIVE",
            "COMPLETED",
            "DROPPED"
          ]
        },
        {
          "hidden": false,
          "id": "date_joined_at",
          "max": "",
          "min": "",
          "name": "joinedAt",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "date"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_class_enrollments",
      "indexes": [
        "CREATE UNIQUE INDEX `idx_enrollments_unique` ON `classEnrollments` (`class`, `student`)",
        "CREATE INDEX `idx_enrollments_class` ON `classEnrollments` (`class`)",
        "CREATE INDEX `idx_enrollments_student` ON `classEnrollments` (`student`)",
        "CREATE INDEX `idx_enrollments_status` ON `classEnrollments` (`status`)"
      ],
      "listRule": "student = @request.auth.id || class.teacher = @request.auth.id",
      "name": "classEnrollments",
      "system": false,
      "type": "base",
      "updateRule": "class.teacher = @request.auth.id",
      "viewRule": "student = @request.auth.id || class.teacher = @request.auth.id"
    },
    {
      "createRule": "class.teacher = @request.auth.id",
      "deleteRule": "class.teacher = @request.auth.id",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": true,
          "collectionId": "pbc_classes",
          "hidden": false,
          "id": "relation_class",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "class",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_title",
          "max": 200,
          "min": 1,
          "name": "title",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "convertURLs": false,
          "hidden": false,
          "id": "editor_content",
          "maxSize": 0,
          "name": "content",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "editor"
        },
        {
          "hidden": false,
          "id": "number_order",
          "max": null,
          "min": 1,
          "name": "order",
          "onlyInt": true,
          "presentable": false,
          "required": true,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "date_lesson_date",
          "max": "",
          "min": "",
          "name": "lessonDate",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "date"
        },
        {
          "hidden": false,
          "id": "file_attachments",
          "maxSelect": 10,
          "maxSize": 52428800,
          "mimeTypes": [
            "application/pdf",
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp",
            "audio/mpeg",
            "audio/wav",
            "audio/ogg",
            "video/mp4",
            "video/webm",
            "text/plain",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ],
          "name": "attachments",
          "presentable": false,
          "protected": false,
          "required": false,
          "system": false,
          "thumbs": [
            "200x150"
          ],
          "type": "file"
        },
        {
          "hidden": false,
          "id": "bool_is_published",
          "name": "isPublished",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "bool"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_lessons",
      "indexes": [
        "CREATE INDEX `idx_lessons_class` ON `lessons` (`class`)",
        "CREATE INDEX `idx_lessons_order` ON `lessons` (`class`, `order`)",
        "CREATE INDEX `idx_lessons_published` ON `lessons` (`isPublished`)"
      ],
      "listRule": "class.teacher = @request.auth.id || class.classEnrollments_via_class.student ?= @request.auth.id",
      "name": "lessons",
      "system": false,
      "type": "base",
      "updateRule": "class.teacher = @request.auth.id",
      "viewRule": "class.teacher = @request.auth.id || class.classEnrollments_via_class.student ?= @request.auth.id"
    },
    {
      "createRule": "@request.auth.id != ''",
      "deleteRule": "user = @request.auth.id || (lesson != '' && lesson.class.teacher = @request.auth.id)",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_user",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "user",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "pbc_lessons",
          "hidden": false,
          "id": "relation_lesson",
          "maxSelect": 1,
          "minSelect": 0,
          "name": "lesson",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "relation"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_title",
          "max": 200,
          "min": 1,
          "name": "title",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "convertURLs": false,
          "hidden": false,
          "id": "editor_content",
          "maxSize": 10000,
          "name": "content",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "editor"
        },
        {
          "hidden": false,
          "id": "select_type",
          "maxSelect": 1,
          "name": "type",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "DISCUSSION",
            "QUESTION",
            "ANNOUNCEMENT",
            "ACHIEVEMENT",
            "STUDY_NOTE",
            "DECK_SHARE"
          ]
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_posts",
      "indexes": [
        "CREATE INDEX `idx_posts_user` ON `posts` (`user`)",
        "CREATE INDEX `idx_posts_lesson` ON `posts` (`lesson`)",
        "CREATE INDEX `idx_posts_type` ON `posts` (`type`)",
        "CREATE INDEX `idx_posts_created` ON `posts` (`created`)"
      ],
      "listRule": "user = @request.auth.id || (lesson != '' && lesson.class.classEnrollments_via_class.student ?= @request.auth.id)",
      "name": "posts",
      "system": false,
      "type": "base",
      "updateRule": "user = @request.auth.id",
      "viewRule": "user = @request.auth.id || (lesson != '' && lesson.class.classEnrollments_via_class.student ?= @request.auth.id)"
    },
    {
      "createRule": "@request.auth.id != ''",
      "deleteRule": "user = @request.auth.id || post.user = @request.auth.id || (post.lesson != '' && post.lesson.class.teacher = @request.auth.id)",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": true,
          "collectionId": "pbc_posts",
          "hidden": false,
          "id": "relation_post",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "post",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_user",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "user",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "pbc_comments",
          "hidden": false,
          "id": "relation_parent",
          "maxSelect": 1,
          "minSelect": 0,
          "name": "parent",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "relation"
        },
        {
          "convertURLs": false,
          "hidden": false,
          "id": "editor_content",
          "maxSize": 2000,
          "name": "content",
          "presentable": true,
          "required": true,
          "system": false,
          "type": "editor"
        },
        {
          "hidden": false,
          "id": "file_attachments",
          "maxSelect": 3,
          "maxSize": 5242880,
          "mimeTypes": null,
          "name": "attachments",
          "presentable": false,
          "protected": false,
          "required": false,
          "system": false,
          "thumbs": [
            "200x200"
          ],
          "type": "file"
        },
        {
          "hidden": false,
          "id": "number_likes_count",
          "max": null,
          "min": 0,
          "name": "likesCount",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "bool_is_edited",
          "name": "isEdited",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "bool"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_comments",
      "indexes": [
        "CREATE INDEX `idx_comments_post` ON `comments` (`post`)",
        "CREATE INDEX `idx_comments_user` ON `comments` (`user`)",
        "CREATE INDEX `idx_comments_parent` ON `comments` (`parent`)",
        "CREATE INDEX `idx_comments_created` ON `comments` (`created`)"
      ],
      "listRule": "post.user = @request.auth.id || (post.lesson != '' && post.lesson.class.classEnrollments_via_class.student ?= @request.auth.id)",
      "name": "comments",
      "system": false,
      "type": "base",
      "updateRule": "user = @request.auth.id",
      "viewRule": "post.user = @request.auth.id || (post.lesson != '' && post.lesson.class.classEnrollments_via_class.student ?= @request.auth.id)"
    },
    {
      "createRule": "@request.auth.id != ''",
      "deleteRule": "user = @request.auth.id",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_user",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "user",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": true,
          "collectionId": "pbc_posts",
          "hidden": false,
          "id": "relation_post",
          "maxSelect": 1,
          "minSelect": 0,
          "name": "post",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": true,
          "collectionId": "pbc_comments",
          "hidden": false,
          "id": "relation_comment",
          "maxSelect": 1,
          "minSelect": 0,
          "name": "comment",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "relation"
        },
        {
          "hidden": false,
          "id": "select_type",
          "maxSelect": 1,
          "name": "type",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "LIKE",
            "HELPFUL",
            "CELEBRATE",
            "CONFUSED"
          ]
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_reactions",
      "indexes": [
        "CREATE INDEX `idx_reactions_user` ON `reactions` (`user`)",
        "CREATE INDEX `idx_reactions_post` ON `reactions` (`post`)",
        "CREATE INDEX `idx_reactions_comment` ON `reactions` (`comment`)",
        "CREATE INDEX `idx_reactions_type` ON `reactions` (`type`)",
        "CREATE UNIQUE INDEX `idx_reactions_user_post_unique` ON `reactions` (`user`, `post`) WHERE `post` IS NOT NULL",
        "CREATE UNIQUE INDEX `idx_reactions_user_comment_unique` ON `reactions` (`user`, `comment`) WHERE `comment` IS NOT NULL"
      ],
      "listRule": "@request.auth.id != ''",
      "name": "reactions",
      "system": false,
      "type": "base",
      "updateRule": "user = @request.auth.id",
      "viewRule": "@request.auth.id != ''"
    },
    {
      "createRule": "@request.auth.id != ''",
      "deleteRule": "user = @request.auth.id",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_name",
          "max": 100,
          "min": 1,
          "name": "name",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_description",
          "max": 500,
          "min": 0,
          "name": "description",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text_version",
          "max": 20,
          "min": 0,
          "name": "version",
          "pattern": "^\\d+\\.\\d+\\.\\d+$",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_user",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "user",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation_author",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "author",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "hidden": false,
          "id": "select_native_language",
          "maxSelect": 1,
          "name": "nativeLanguage",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "EN",
            "ES",
            "FR",
            "DE",
            "IT",
            "PL"
          ]
        },
        {
          "hidden": false,
          "id": "select_learning_language",
          "maxSelect": 1,
          "name": "learningLanguage",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "EN",
            "ES",
            "FR",
            "DE",
            "IT",
            "PL"
          ]
        },
        {
          "hidden": false,
          "id": "select_language_level",
          "maxSelect": 1,
          "name": "languageLevel",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "A1",
            "A2",
            "B1",
            "B2",
            "C1",
            "C2"
          ]
        },
        {
          "convertURLs": false,
          "hidden": false,
          "id": "editor_front_layout",
          "maxSize": 0,
          "name": "frontLayout",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "editor"
        },
        {
          "convertURLs": false,
          "hidden": false,
          "id": "editor_back_layout",
          "maxSize": 0,
          "name": "backLayout",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "editor"
        },
        {
          "hidden": false,
          "id": "json_styles",
          "maxSize": 0,
          "name": "styles",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "json"
        },
        {
          "hidden": false,
          "id": "bool_is_public",
          "name": "isPublic",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "bool"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_templates",
      "indexes": [
        "CREATE INDEX `idx_templates_user` ON `templates` (`user`)",
        "CREATE INDEX `idx_templates_author` ON `templates` (`author`)",
        "CREATE INDEX `idx_templates_public` ON `templates` (`isPublic`)",
        "CREATE INDEX `idx_templates_language` ON `templates` (`nativeLanguage`, `learningLanguage`, `languageLevel`)"
      ],
      "listRule": "isPublic = true || user = @request.auth.id",
      "name": "templates",
      "system": false,
      "type": "base",
      "updateRule": "user = @request.auth.id",
      "viewRule": "isPublic = true || user = @request.auth.id"
    },
    {
      "createRule": "deck.user = @request.auth.id || (deck.class != '' && deck.class.teacher = @request.auth.id)",
      "deleteRule": "deck.user = @request.auth.id || (deck.class != '' && deck.class.teacher = @request.auth.id)",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "cascadeDelete": true,
          "collectionId": "pbc_decks",
          "hidden": false,
          "id": "relation_deck",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "deck",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "cascadeDelete": false,
          "collectionId": "pbc_templates",
          "hidden": false,
          "id": "relation_template",
          "maxSelect": 1,
          "minSelect": 0,
          "name": "template",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "relation"
        },
        {
          "hidden": false,
          "id": "json_data",
          "maxSize": 0,
          "name": "data",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "json"
        },
        {
          "hidden": false,
          "id": "select_state",
          "maxSelect": 1,
          "name": "state",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "select",
          "values": [
            "NEW",
            "LEARNING",
            "REVIEW",
            "RELEARNING"
          ]
        },
        {
          "hidden": false,
          "id": "number_difficulty",
          "max": 100,
          "min": 0,
          "name": "difficulty",
          "onlyInt": false,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number_stability",
          "max": null,
          "min": 0,
          "name": "stability",
          "onlyInt": false,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number_retrievability",
          "max": 1,
          "min": 0,
          "name": "retrievability",
          "onlyInt": false,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "date_last_review",
          "max": "",
          "min": "",
          "name": "lastReview",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "date"
        },
        {
          "hidden": false,
          "id": "date_next_review",
          "max": "",
          "min": "",
          "name": "nextReview",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "date"
        },
        {
          "hidden": false,
          "id": "number_reviews_count",
          "max": null,
          "min": 0,
          "name": "reviewsCount",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number_lapses_count",
          "max": null,
          "min": 0,
          "name": "lapsesCount",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "json_tags",
          "maxSize": 0,
          "name": "tags",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "json"
        },
        {
          "hidden": false,
          "id": "number1136262716",
          "max": null,
          "min": 0,
          "name": "step",
          "onlyInt": false,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "autodate2990389176",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate3332085495",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_flashcards",
      "indexes": [
        "CREATE INDEX `idx_flashcards_deck` ON `flashcards` (`deck`)",
        "CREATE INDEX `idx_flashcards_template` ON `flashcards` (`template`)",
        "CREATE INDEX `idx_flashcards_state` ON `flashcards` (`state`)",
        "CREATE INDEX `idx_flashcards_next_review` ON `flashcards` (`nextReview`)",
        "CREATE INDEX `idx_flashcards_srs_data` ON `flashcards` (`state`, `nextReview`, `difficulty`)"
      ],
      "listRule": "deck.user = @request.auth.id || deck.isPublic = true || (deck.class != '' && deck.class.classEnrollments_via_class.student ?= @request.auth.id)",
      "name": "flashcards",
      "system": false,
      "type": "base",
      "updateRule": "deck.user = @request.auth.id || (deck.class != '' && deck.class.teacher = @request.auth.id)",
      "viewRule": "deck.user = @request.auth.id || deck.isPublic = true || (deck.class != '' && deck.class.classEnrollments_via_class.student ?= @request.auth.id)"
    }
  ];

  return app.importCollections(snapshot, false);
}, (app) => {
  return null;
})

# Changelog

## 1.1.0 (2022-02-17)

- Implements `autoCloseTimeout`.
  - You can specify in the Meteor settings, like:
  ```json
  {
    "public": {
      "packages": {
        "quave:alert-react-tailwind": {
          "autoCloseTimeout": 5000
        }
      }
    }
  }
  ```
  - You can also provide `autoCloseTimeout` option in `openAlert` function.`

## 1.0.1 (2022-01-19)

- Fixes the default title in the popover that was in Portuguese instead of English.

## 1.0.0 (2022-01-17)

- Initial version.

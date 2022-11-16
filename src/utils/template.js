const template = {
  $schema: "./unify_config_schema.json",
  schemaVersion: "1.0.0",
  projectId: 1,
  templateName: "First Template",
  config: {
    id: 1,
    version: "1.0.0",
    updatedTimestamp: "0000-00-00T00:00:00+00:00",
    mainComponentId: 9010,
    locale: "en",
    globalErrorType: "INLINE",
    showWidgetError: true,
    showWidgetSuccess: true,
    autoHideMessage: false,
    closeableMessage: true,
    autoHideDuration: 10,
    components: [
      {
        id: 9010,
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        subtype: "screen",
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                background: "transparent",
              },
              componentId: 26,
              name: "Ambit logo",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 3,
                lg: 3,
                float: "left",
                "margin-top": "2%",
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                width: "20%",
                background: "#ebeef1",
                "border-radius": "30px",
                padding: "20px",
                "background-color": "rgba(255,255,255,0.8)",
              },
              componentId: 22,
              name: "Login box",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-top": "2%",
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                background: "",
              },
              componentId: 305,
              name: "after loginc quick links",
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-top": "2%",
                "margin-left": "10%",
                "margin-right": "10%",
                "text-align": "center",
                padding: "10px",
              },
              componentId: 243,
              name: "Exchange rate box",
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                "text-align": "center",
              },
              componentId: 25,
              name: "Login footer",
              order: 5,
            },
            {
              layoutProperties: {},
              componentId: 304,
              name: "Security Instruction Modal",
              order: 6,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            overflow: "hidden",
            height: "",
            width: "100%",
            background: "#e4e1e1",
            "background-image":
              "url(https://ambitdigital1.avanzasolutions.com:8201/images/login-Background.png)",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-attachment": "fixed",
          },
        },
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 16,
            name: "run on-load triggers",
            data: "https:ambit.com/prelogin/v1/getSecurityInstructions",
          },
        ],
      },
      {
        id: 9045100,
        name: "Ambit logo",
        type: 20042,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 1,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 14,
            name: "ru on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 26,
        name: "Ambit logo",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 1,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 14,
            name: "ru on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 243,
        name: "Exchange Rate Grid",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 20014,
        name: "DataGrid",
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 57,
            name: "run on-load triggers",
          },
        ],
        attributes: {
          dataSrc: "url",
          uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/getExchangeRates",
          checksum: "098f6bcd4621d373cade4e832627b4f6",
          encryption: true,
          requestBodyType: 1,
          name: "AccountList",
          type: "Grid",
          responseStateKey: "exchangeRateResponse",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            channel_key: "001",
            CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
            CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
            locale: "en-ltr",
          },
          requestBody: [
            {
              key: "fromCurrency",
              value: "USD",
              type: 1,
            },
            {
              key: "toCurrency",
              value: "AED",
              type: 1,
            },
          ],
          layoutProperties: {
            width: "100%",
          },
          defaultColDef: {
            sortable: true,
            animateRows: false,
            resizable: false,
            enableValue: false,
            enableRowGroup: false,
            enablePivot: false,
            filter: true,
            type: "leftAligned",
            minWidth: 30,
            domLayout: "autoHeight",
          },
          rowStyle: {
            color: "black",
            "background-color": "white",
            "text-align": "left",
          },
          columnDefinition: [
            {
              headerName: "S/No.",
              valueGetter: "node.rowIndex + 1",
            },
            {
              headerName: "Country",
              field: "country",
              type: "image",
              imageExtension: "png",
            },
            {
              headerName: "Currency Name",
              field: "currencyName",
            },
            {
              headerName: "Currency Code",
              field: "currencyCode",
            },
            {
              headerName: "Sell Rate",
              field: "sellRate",
            },
            {
              headerName: "Buy Rate",
              field: "buyRate",
            },
          ],
          rowDefinition: [],
          debug: false,
          pagination: true,
          paginationPageSize: 5,
          exportConfiguration: {},
          suppressCsvExport: true,
          suppressExcelExport: true,
        },
      },
      {
        id: 22,
        name: "Login box",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        subtype: "screen",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 238,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904522,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 410,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 31,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 32,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 210,
              order: 6,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 216,
              order: 7,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 213,
              order: 8,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 301,
              order: 9,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 302,
              order: 10,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 303,
              order: 12,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 902300,
              order: 14,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904525,
              order: 2,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {},
        },
      },
      {
        id: 305,
        name: "After login quick links",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        subtype: "screen",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 3,
                lg: 3,
                background: "rgba(255,255,255,0.8)",
                "border-radius": "20px",
                display: "block",
                margin: "15px 0px",
                padding: "15px 2px",
              },
              componentId: 307,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 3,
                lg: 3,
                background: "rgba(255,255,255,0.8)",
                "border-radius": "20px",
                display: "block",
                margin: "15px 0px",
                padding: "15px 2px",
              },
              componentId: 308,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 3,
                lg: 3,
                background: "rgba(255,255,255,0.8)",
                "border-radius": "20px",
                display: "block",
                margin: "15px 0px",
                padding: "15px 2px",
              },
              componentId: 309,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 3,
                lg: 3,
                background: "rgba(255,255,255,0.8)",
                "border-radius": "20px",
                display: "block",
                margin: "15px 0px",
                padding: "15px 2px",
              },
              componentId: 310,
              order: 4,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 1001,
        name: "Device Management Box",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        subtype: "screen",
        attributes: {
          layoutProperties: {
            xs: 12,
            sm: 12,
            md: 3,
            lg: 3,
            "margin-top": "2%",
            background: "#ebeef1",
            "border-radius": "30px",
            padding: "20px",
            "background-color": "rgba(255,255,255,0.8)",
          },
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 1002,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904534,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 1003,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 1004,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 1006,
              order: 7,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904535,
              order: 8,
            },
          ],
        },
      },
      {
        id: 1002,
        name: "Ambit login form header label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "AMBIT INTERNET BANKING",
          layoutProperties: {
            "font-size": 24,
            "font-weight": "bold",
            color: "black",
            "text-align": "center",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 1003,
        name: "Ambit Device Name",
        type: 20004,
        name: "InputComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Device Name",
          stateName: "deviceName",
          "label-locale-key": "login.user.password",
          layoutProperties: {},
          validate: {
            required: true,
            errorMsg: "Device Name is required",
          },
        },
      },
      {
        id: 1004,
        name: "Ambit SecurityConfiguration",
        type: 20016,
        name: "SecurityConfiguration",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          messageWidgetIds: [904534],
          transactionCode: "1115",
          smsOtpLabel: "Sms Otp",
          stateNameSMS: "smsOtp",
          emailEmailLabel: "Email Otp",
          stateNameEmail: "emailOtp",
          generateOtpLabel: "Regenerate Otp",
          layoutProperties: {
            "text-align": "center",
          },
          validate: {
            required: true,
          },
        },
        events: [],
      },
      {
        id: 904534,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904534,
        attributes: {
          layoutProperties: {},
        },
      },

      {
        id: 904535,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904535,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 1006,
        name: "Ambit login button control",
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Verify",
          "font-family": "Verdana",
          "label-locale-key": "",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 4,
            name: "onClick",
            triggerId: 1005,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 307,
        name: "",
        type: 10001,
        name: "GridLayout",
        subtype: "screen",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
                float: "right",
              },
              componentId: 332,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
              },
              componentId: 341,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
                float: "left",
              },
              componentId: 336,
              order: 3,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 308,
        name: "Bank Exchange Rate",
        type: 10001,
        name: "GridLayout",
        subtype: "screen",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
                float: "right",
              },
              componentId: 333,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
              },
              componentId: 343,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
                float: "left",
              },
              componentId: 336,
              order: 3,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 309,
        name: "Bank Exchange Rate",
        type: 10001,
        name: "GridLayout",
        subtype: "screen",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 334,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
              },
              componentId: 344,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 336,
              order: 3,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 310,
        name: "Bank Exchange Rate",
        type: 10001,
        name: "GridLayout",
        subtype: "screen",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 335,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
              },
              componentId: 347,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 336,
              order: 3,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 311,
        name: "Login contact",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 4,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 14,
            name: "ru on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 315,
        name: "login contact",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Connect with our Representive 24x7",
          "label-locale-key": "login.user.copyright",
        },
      },
      {
        id: 316,
        name: "login offers and details",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Contact",
          "label-locale-key": "login.user.copyright",
        },
        layoutProperties: {
          "font-weight": "bold",
          background: "red",
        },
      },
      {
        id: 317,
        name: "login apply for products",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Offers & Details",
          "label-locale-key": "login.user.copyright",
        },
      },
      {
        id: 345,
        name: "login apply for products",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Apply for Products",
          "label-locale-key": "login.user.copyright",
        },
      },
      {
        id: 346,
        name: "login apply for products",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Apply for any product online",
          "label-locale-key": "login.user.copyright",
        },
      },
      {
        id: 344,
        name: "",
        type: 10001,
        name: "GridLayout",
        subtype: "screen",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "font-weight": "bold",
              },
              componentId: 345,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 346,
              order: 2,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 348,
        name: "login apply for products",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Locate US",
          "label-locale-key": "login.user.copyright",
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 64,
            name: "contact us screen swap",
          },
        ],
      },
      {
        id: 349,
        name: "login apply for products",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Track all branches and atm's worldwide",
          "label-locale-key": "login.user.copyright",
        },
      },
      {
        id: 347,
        name: "Bank Exchange Rate",
        type: 10001,
        name: "GridLayout",
        subtype: "screen",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "font-weight": "bold",
              },
              componentId: 348,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 349,
              order: 2,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 318,
        name: "login apply for products",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Avail Various Offers on our Cards",
          "label-locale-key": "login.user.copyright",
        },
      },
      {
        id: 343,
        name: "Bank Exchange Rate",
        type: 10001,
        subtype: "widget",
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "font-weight": "bold",
              },
              componentId: 317,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 318,
              order: 2,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 342,
        name: "login offers and details",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Avail Various Offers on our Cards",
          "label-locale-key": "login.user.copyright",
        },
      },
      {
        id: 341,
        name: "Bank Exchange Rate",
        type: 10001,
        subtype: "widget",
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "font-weight": "bold",
              },
              componentId: 316,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 315,
              order: 2,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 318,
        name: "login position label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Track all branches and atm's worldwide",
          "label-locale-key": "login.user.copyright",
        },
      },
      {
        id: 332,
        name: "login offer",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 4,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 63,
          },
        ],
      },
      {
        id: 333,
        name: "login apply product",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 5,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 517,
            name: "ru on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 334,
        name: "login position",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 6,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 900620,
            name: "ru on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 335,
        name: "login position",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 7,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 64,
          },
        ],
      },
      {
        id: 336,
        name: "login position",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 8,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 14,
            name: "ru on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 24,
        name: "Bank Exchange Rate",
        type: 10001,
        name: "GridLayout",
        subtype: "widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 1000000011111,
              order: 1,
            },
          ],
          rows: 1,
          cols: 1,
          r1c1: "Data Grid",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 214,
        name: "Login Form Footer",
        type: 10001,
        name: "GridLayout",
        subtype: "widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 215,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 216,
              order: 2,
            },
          ],
          rows: 1,
          cols: 2,
          r1c1: "215",
          name: "Ambit login form links",
          r1c2: "240",
          name: "Ambit login form footer logo",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 29,
        name: "Login Id Grid",
        type: 10001,
        name: "GridLayout",
        subtype: "widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 31,
              order: 1,
            },
          ],
          rows: 1,
          cols: 2,
          r1c1: "237",
          name: "Ambit login form logo",
          r1c2: "238",
          name: "Ambit login form label",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 30,
        name: "Login Id Grid",
        type: 10001,
        name: "GridLayout",
        subtype: "widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 32,
              order: 1,
            },
          ],
          rows: 1,
          cols: 2,
          r1c1: "32",
          name: "Login id",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 31,
        name: "Login ID",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Login Id",
          stateName: "username",
          "font-family": "Verdana",
          "font-size": 14,
          "font-color": "#ffffff",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 32,
        name: "Ambit login password",
        type: 20008,
        name: "PasswordComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Password",
          stateName: "password",
          "label-locale-key": "login.user.password",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 34,
        name: "Login Id Grid",
        type: 10001,
        name: "GridLayout",
        subtype: "widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 213,
              order: 1,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 35,
        name: "language Grid layout",
        type: 10001,
        name: "GridLayout",
        subtype: "widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 210,
              order: 1,
            },
          ],
          rows: 1,
          cols: 2,
          r1c1: "210",
          name: "Language dropdown",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 36,
        name: "Ambit login captcha control input",
        type: 20008,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Password",
          "font-family": "Verdana",
          "font-size": 14,
          "font-color": "#ffffff",
          "label-locale-key": "login.user.captcha .input",
        },
      },
      {
        id: 40,
        name: "Login Id Grid",
        type: 10001,
        name: "GridLayout",
        subtype: "widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 216,
              order: 1,
            },
          ],
          rows: 1,
          cols: 2,
          r1c1: "32",
          name: "Login id",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 210,
        name: "Ambit login language control",
        type: 20003,
        name: "Dropdown Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          storeType: 3,
          stateName: "language",
          label: "Language",
          "font-family": "Verdana",
          "font-size": 14,
          "font-color": "#ffffff",
          "label-locale-key": "login.user.language",
          dataSource: "ConfigurationResponse.lookups.languages",
          layoutProperties: {},
        },
      },
      {
        id: 211,
        name: "Ambit login captcha control",
        type: 10001,
        name: "GridLayout",
        subtype: "widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
              },
              componentId: 216,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 8,
                sm: 8,
                lg: 8,
              },
              componentId: 239,
              order: 2,
            },
          ],
          rows: 2,
          cols: 1,
          r1c1: "216",
          name: "Ambit login captcha control",
          r2c1: "239",
          name: "Ambit login captcha control input",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 212,
        name: "Ambit login keyboard control",
        type: 20005,
        name: "Keyboard Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          height: "100px",
          width: "200px",
          enable: "props.configuration.vkEnabled",
        },
      },
      {
        id: 213,
        name: "Ambit login button control",
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Login",
          "font-family": "Verdana",
          "font-size": 14,
          "font-color": "#ffffff",
          "label-locale-key": "",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 4,
            name: "onClick",
            triggerId: 10,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 216,
        name: "Ambit Captcha",
        type: 20015,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Captcha",
          imageSrc: "captchaImage",
          stateName: "captcha",
          layoutProperties: {},
        },
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 60,
            name: "run on-load triggers",
            data: "1",
          },
          {
            type: 2,
            name: "onClick",
            triggerId: 60,
            name: "run on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 239,
        name: "Ambit login captcha control input",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Captcha Input",
          "font-family": "Verdana",
          "font-size": 14,
          "font-color": "#ffffff",
          "label-locale-key": "login.user.captcha .input",
        },
      },
      {
        id: 241,
        name: "Ambit grid",
        type: 20007,
        name: "Grid Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          defaultColDef: {
            sortable: true,
            animateRows: true,
            resizable: true,
            enableValue: true,
            enableRowGroup: true,
            enablePivot: true,
            filter: true,
          },
          columnDefinition: [
            {
              headerName: "Country",
              field: "country",
              filter: "agNumberColumnFilter",
            },
            {
              headerName: "Currency",
              field: "currency",
              filter: "agTextColumnFilter",
            },
            {
              headerName: "Buy Rate",
              field: "buyRate",
            },
            {
              headerName: "Sell Rate",
              field: "sellRate",
            },
          ],
          pagination: true,
          paginationPageSize: 10,
          exportConfiguration: {},
          name: "To export xls with custom formulas like merging fields",
          suppressCsvExport: false,
          name: "To suppress csv export",
          suppressExcelExport: false,
          name: "To suppress excel export",
          debug: true,
          name: "to enable console logs fo debugging",
          rowDefinition: "${this.props.data}",
        },
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 57,
            name: "run on-init triggers",
          },
        ],
      },
      {
        id: 227,
        name: "Ambit Quick Link logo",
        type: 20011,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: "1",
          defaultImageAssetId: "3",
          layoutProperties: {
            textAlign: "center",
            backgroundColor: "#1c2b5a",
          },
        },
      },
      {
        id: 228,
        name: "Quick links Heading and Labels ",
        type: 10001,
        name: "GridLayout",
        subtype: "widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 229,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 230,
              order: 2,
            },
          ],
          rows: 2,
          cols: 1,
          r1c1: "229",
          name: "Contact Us",
          r2c1: "230",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 229,
        name: "Quick links",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 231,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 232,
              order: 2,
            },
          ],
          rows: 1,
          cols: 2,
          r1c1: "231",
          name: "Contact Us",
          r1c2: "232",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 230,
        name: "Ambit login form label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Avail Various Offers on our Cards",
          "font-family": "Verdana",
          "font-size": 14,
          "font-color": "#ffffff",
          "label-locale-key": "login.user.quick.links.details",
        },
      },
      {
        id: 231,
        name: "Ambit login form label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Contact Us",
          "font-family": "Verdana",
          "font-size": 14,
          "font-color": "#ffffff",
          "label-locale-key": "login.user.quick.links.details",
        },
      },
      {
        id: 232,
        name: "Ambit logo",
        type: 20011,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: "1",
          defaultImageAssetId: "3",
          layoutProperties: {
            textAlign: "center",
            backgroundColor: "#1c2b5a",
          },
          url: "loginPage",
        },
        events: [
          {
            data: "contactUs",
            type: 5,
            name: "onClick",
            triggerId: 72,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 233,
        name: "Security instruction on login screen",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 234,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 235,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 236,
              order: 3,
            },
          ],
          rows: 3,
          cols: 1,
          r1c1: "234",
          name: "Ambit Modal Header",
          r1c2: "235",
          name: "Ambit Modal Body",
          r1c3: "236",
          name: "Ambit Modal Footer",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
        events: [
          {
            type: 5,
            name: "onClick",
            triggerId: 17,
          },
        ],
      },
      {
        id: 234,
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Security Instructions",
          "font-family": "Verdana",
          "font-size": 24,
          "font-color": "#ffffff",
          "label-locale-key": "login.user.security.instructions",
        },
      },
      {
        id: 235,
        type: 20002,
        name: "HtmlComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          content: "${caller}.props.data.body",
        },
      },
      {
        id: 236,
        name: "Ambit modal control",
        type: 20002,
        name: "HtmlComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          content: "${caller}.props.data.footer",
        },
        events: [
          {
            type: 5,
            name: "onClick",
            triggerId: 10,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 237,
        name: "Ambit login form header logo",
        type: 20011,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: "1",
          defaultImageAssetId: "3",
          layoutProperties: {
            textAlign: "center",
            backgroundColor: "#1c2b5a",
          },
        },
      },
      {
        id: 238,
        name: "Ambit login form header label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "AMBIT INTERNET BANKING",
          variant: "subtitle1",
          layoutProperties: {
            color: "black",
            "text-align": "center",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 904522,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904522,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 904523,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904523,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 410,
        name: "Ambit login form error ",
        type: 20020,
        name: "Error component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          layoutProperties: {
            "background-color": "#f5b6b6",
            color: "red",
            "border-radius": "8px",
            "padding-left": "11px",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 270,
        name: "Offer & Deals ",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 227,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 228,
              order: 2,
            },
          ],
          rows: 1,
          cols: 2,
          r1c1: "227",
          name: "Ambit Quick Link logo",
          r1c2: "228",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 271,
        name: "Apply for Products ",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 227,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 228,
              order: 2,
            },
          ],
          rows: 1,
          cols: 2,
          r1c1: "227",
          name: "Ambit Quick Link logo",
          r1c2: "228",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 272,
        name: "Locate us",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 227,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                lg: 12,
              },
              componentId: 228,
              order: 2,
            },
          ],
          rows: 1,
          cols: 2,
          r1c1: "227",
          name: "Ambit Quick Link logo",
          r1c2: "228",
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 25,
        name: "Footer",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 220,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 221,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 222,
              order: 3,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 220,
        name: "Footer Links",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 223,
              name: "Login",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                lg: 3,
                md: 3,
              },
              componentId: 224,
              name: "Contact Us",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 225,
              name: "Faq",
              order: 3,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 226,
              name: "Locate us",
              order: 4,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 221,
        name: "Ambit login form label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "COPYRIGHT © 2020 AMBIT INTERNET BANKING",
          "label-locale-key": "login.user.copyright",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 222,
        name: "Ambit login form label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "DISCLAIMER: Bank does not take responsibility for any losses, disputes or claims which may arise because of the use of this site.",
          "label-locale-key": "login.user.disclaimer",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 223,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Login",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 513,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 224,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Contact Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 514,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 225,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Faq",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 515,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 226,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Locate Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 516,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 301,
        name: "Login dic quick link",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Register Now",
          layoutProperties: {
            "text-align": "left",
            "text-decoration": "underline",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 71,
          },
        ],
      },
      {
        id: 302,
        name: "Login dic quick link",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Forget User Name/ID",
          layoutProperties: {
            "text-align": "left",
            "text-decoration": "underline",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 2041,
          },
        ],
      },
      {
        id: 303,
        name: "Login dic quick link",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Forget User Password",
          layoutProperties: {
            "text-align": "left",
            "text-decoration": "underline",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 3042,
          },
        ],
      },
      {
        id: 304,
        type: 20031,
        name: "UI modal",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          widgetId: 306,
          layoutProperties: {
            overflow: "hidden",
          },
        },
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 30,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 306,
        type: 10001,
        name: "grid layout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 312,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 313,
              order: 2,
            },
          ],
          label: "Header",
          layoutProperties: {},
        },
      },
      {
        id: 312,
        name: "Html parser component",
        type: 20034,
        name: "Html Modal component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          htmlToRender: "securityResponseHtml",
          searchInState: true,
          layoutProperties: {},
        },
        events: [],
      },
      {
        id: 313,
        name: "Button",
        type: 20006,
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Accept",
          layoutProperties: {
            "background-color": "rgb(28, 43, 90)",
            color: "white",
            width: "100px",
            float: "right",
            "margin-bottom": "10px",
          },
        },
        events: [
          {
            type: 2,
            name: "onInit",
            triggerId: 32,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 2001,
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                background: "transparent",
              },
              componentId: 2000,
              name: "Ambit logo",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                float: "left",
                "margin-top": "2%",
                "margin-left": "20%",
                "margin-right": "20%",
                overflow: "hidden",
                height: "",
                width: "20%",
                background: "#ebeef1",
                "border-radius": "30px",
                "min-width": "400px",
                "background-color": "rgba(255,255,255,0.8)",
              },
              componentId: 2002,
              name: "Forget user name Main Div ",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                "text-align": "center",
              },
              componentId: 2021,
              name: "Login footer",
              order: 3,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            overflow: "hidden",
            height: "",
            width: "100%",
            background: "#e4e1e1",
            "background-image":
              "url(https://ambitdigital1.avanzasolutions.com:8201/images/login-Background.png)",
            "background-repeat": "no-repeat",
            "background-size": "cover",
          },
        },
        events: [],
      },
      {
        id: 2000,
        name: "Ambit logo",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 1,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 99999991,
          },
        ],
      },
      {
        id: 2002,
        name: "Forget username box step 1",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2003,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904530,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2004,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2005,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 2006,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 2007,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 2051,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 2052,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 2053,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "text-align": "center",
              },
              componentId: 2064,
              name: "empty container for forget user name",
              order: 99,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "text-align": "center",
              },
              componentId: 2060,
              name: "Captcha",
              order: 100,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "text-align": "center",
              },
              componentId: 2014,
              name: "Button",
              order: 100,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904531,
              order: 101,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {},
        },
      },
      {
        id: 2064,
        name: "empty container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100000001,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 2060,
        name: "captcha container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 2012,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 2061,
        name: "card container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 2008,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 2009,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 2011,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 4001,
        name: "CNIC container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4002,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4003,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 4002,
        name: "CNIC Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "CNIC Number",
          stateName: "userIdenValue",
          maxLength: "13",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 4003,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          stateName: "mobileNumber",
          maxLength: "14",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 4005,
        name: "NTN container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4006,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4007,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 4006,
        name: "NTN Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "NTN Number",
          stateName: "userIdenValue",
          maxLength: "8",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 4007,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          maxLength: "14",
          stateName: "mobileNumber",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 4011,
        name: "Passport container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4012,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4013,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 4012,
        name: "Passport Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Passport Number",
          stateName: "userIdenValue",
          maxLength: "",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 4013,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          maxLength: "14",
          stateName: "mobileNumber",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 2062,
        name: "account container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 2010,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 2011,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 2003,
        name: "Ambit login form header label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Forget User Name",
          layoutProperties: {
            color: "black",
            "text-align": "center",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 904530,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904530,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 904531,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904531,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 2004,
        name: "Steps",
        type: 20018,
        name: "Steps Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          steps: [
            {
              name: "Step1",
              nextwidgetId: "1",
            },
            {
              name: "Step2",
              widgetId: "2",
            },
            {
              name: "Step3",
              widgetId: "3",
            },
          ],
          layoutProperties: {
            background: "transparent",
          },
        },
        events: [],
      },
      {
        id: 2005,
        name: "Ambit login form header label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Select Self Forget User Name Option",
          layoutProperties: {
            "text-align": "center",
            "font-weight": "bold",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 2006,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "ACC",
          checked: true,
          "label-locale-key": "login.user.login.form.label",
          label: "With Account",
          layoutProperties: {},
        },
        events: [
          {
            type: 1,
            name: "onClick",
            triggerId: 91,
            name: "run on-load triggers",
            delay: 1,
          },
          {
            type: 3,
            name: "onClick",
            triggerId: 93,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 2007,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "CARD",
          label: "With Card No",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 92,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 2051,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "CNIC",
          label: "With CNIC",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 101,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 2052,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "NTN",
          label: "With NTN",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 102,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 2053,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "PASSPORT",
          label: "With Passport",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 103,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 2008,
        name: "Card Type",
        type: 20003,
        name: "Dropdown Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "cardType",
          label: "Card Type",
          "label-locale-key": "login.user.language",
          dataSource: "ConfigurationResponse.lookups.cardType",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 2009,
        name: "Card number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "userIdenValue",
          maxLength: "16",
          label: "Card Number",
          "label-locale-key": "login.user.language",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 2010,
        name: "Account Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Account Number",
          maxLength: "16",
          stateName: "userIdenValue",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 2011,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          maxLength: "14",
          stateName: "mobileNumber",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 2012,
        name: "Ambit Captcha",
        type: 20015,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Captcha",
          imageSrc: "captchaImage",
          stateName: "captcha",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 60,
            name: "run on-load triggers",
            data: "1",
          },
          {
            type: 2,
            name: "onClick",
            triggerId: 60,
            name: "run on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 2013,
        name: "Ambit login captcha control input",
        type: 20002,
        name: "Label Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "",
        },
      },
      {
        id: 2014,
        name: "",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 10,
                lg: 10,
                "margin-top": "5px",
              },
              componentId: 100000001,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 2015,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 2016,
              order: 1,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 2015,
        name: "Ambit login button control",
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Next",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 4,
            name: "onClick",
            triggerId: 3052,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 2016,
        name: "Ambit login button control",
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Clear",
          "font-family": "Verdana",
          layoutProperties: {
            "background-color": "rgb(191 193 197)",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 2016,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 2021,
        name: "Footer",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2022,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2023,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2024,
              order: 3,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 2022,
        name: "Footer Links",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 2025,
              name: "Login",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                lg: 3,
                md: 3,
              },
              componentId: 2026,
              name: "Contact Us",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 2027,
              name: "Faq",
              order: 3,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 2028,
              name: "Locate us",
              order: 4,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 2023,
        name: "",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "COPYRIGHT © 2020 AMBIT INTERNET BANKING",
          "label-locale-key": "login.user.copyright",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 222,
        name: " ",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "DISCLAIMER: Bank does not take responsibility for any losses, disputes or claims which may arise because of the use of this site.",
          "label-locale-key": "login.user.disclaimer",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 2024,
        name: " ",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "DISCLAIMER: Bank does not take responsibility for any losses, disputes or claims which may arise because of the use of this site.",
          "label-locale-key": "login.user.disclaimer",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 2025,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Login",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            name: "login widget id",
            type: 2,
            name: "onClick",
            triggerId: 501,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 2026,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Contact Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 502,
          },
        ],
      },
      {
        id: 2027,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Faq",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 503,
          },
        ],
      },
      {
        id: 2028,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Locate Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 504,
          },
        ],
      },
      {
        id: 2029,
        name: "Forget User ID step 2",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2030,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904532,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2031,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2032,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2035,
              order: 6,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2036,
              order: 7,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904533,
              order: 8,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {
            background: "#ebeef1",
            "border-radius": "30px",
            "background-color": "rgba(255,255,255,0.8)",
          },
        },
      },
      {
        id: 2030,
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Forget User Name",
          layoutProperties: {
            "text-align": "center",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 904532,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904532,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 904533,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904533,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 2031,
        name: "Steps",
        type: 20018,
        name: "Steps Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          steps: [
            {
              name: "Step1",
              nextwidgetId: "1",
            },
            {
              name: "Step2",
              widgetId: "2",
            },
            {
              name: "Step3",
              widgetId: "3",
            },
          ],
          layoutProperties: {
            background: "transparent",
          },
        },
        events: [],
      },
      {
        id: 2032,
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Select Self Forget User Name Option",
          layoutProperties: {
            "text-align": "center",
            "font-weight": "bold",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 2035,
        name: "Ambit SecurityConfiguration",
        type: 20016,
        name: "SecurityConfiguration",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          messageWidgetIds: [904532],
          transactionCode: "0004",
          smsOtpLabel: "Sms Otp",
          stateNameSMS: "smsOtp",
          emailEmailLabel: "Email Otp",
          stateNameEmail: "emailOtp",
          generateOtpLabel: "Regenerate Otp",
          isPrelogin: true,
          isRegistration: false,
          layoutProperties: {
            "text-align": "center",
          },
          validate: {
            required: true,
          },
        },
        events: [],
      },
      {
        id: 2036,
        name: "",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 10,
                lg: 10,
                "margin-top": "5px",
              },
              componentId: 100000001,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 2037,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 2038,
              order: 1,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 2037,
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Next",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 4,
            name: "onClick",
            triggerId: 3060,
          },
        ],
      },
      {
        id: 2038,
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Clear",
          "font-family": "Verdana",
          layoutProperties: {
            "background-color": "rgb(191 193 197)",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 2038,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3001,
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                background: "transparent",
              },
              componentId: 3000,
              name: "Ambit logo",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                float: "left",
                "margin-top": "2%",
                "margin-left": "20%",
                "margin-right": "20%",
                overflow: "hidden",
                height: "",
                width: "20%",
                background: "#ebeef1",
                "border-radius": "30px",
                "min-width": "400px",
                "background-color": "rgba(255,255,255,0.8)",
              },
              componentId: 3002,
              name: "Forget user name Main Div ",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                "text-align": "center",
              },
              componentId: 3021,
              name: "Login footer",
              order: 5,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            overflow: "hidden",
            height: "",
            width: "100%",
            background: "#e4e1e1",
            "background-image":
              "url(https://ambitdigital1.avanzasolutions.com:8201/images/login-Background.png)",
            "background-repeat": "no-repeat",
            "background-size": "cover",
          },
        },
        events: [],
      },
      {
        id: 3000,
        name: "Ambit logo",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 1,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 9999999,
          },
        ],
      },
      {
        id: 3002,
        name: "For get id/name box",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3003,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904526,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3004,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3005,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 3006,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 3007,
              order: 6,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 3054,
              order: 7,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 3055,
              order: 8,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 3056,
              order: 9,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "text-align": "center",
              },
              componentId: 3064,
              name: "empty container for forget user password",
              order: 99,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "text-align": "center",
              },
              componentId: 3060,
              name: "Captcha",
              order: 100,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "text-align": "center",
              },
              componentId: 3014,
              name: "Button",
              order: 100,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904527,
              order: 101,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {},
        },
      },
      {
        id: 3064,
        name: "empty container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100000001,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 3060,
        name: "captcha container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 3012,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 3061,
        name: "card container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 3008,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 3009,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 3011,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },

      {
        id: 4021,
        name: "CNIC container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4022,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4013,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 4022,
        name: "CNIC Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "CNIC Number",
          stateName: "userIdenValue",
          maxLength: "13",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 4023,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          stateName: "mobileNumber",
          maxLength: "14",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 4025,
        name: "NTN container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4026,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4027,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 4026,
        name: "NTN Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "NTN Number",
          stateName: "userIdenValue",
          maxLength: "8",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 4027,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          maxLength: "14",
          stateName: "mobileNumber",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 4031,
        name: "Passport container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4032,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 4033,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 4032,
        name: "Passport Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Passport Number",
          stateName: "userIdenValue",
          maxLength: "",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 4033,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          maxLength: "14",
          stateName: "mobileNumber",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 3062,
        name: "account container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 3010,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 3011,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 3003,
        name: "Ambit login form header label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Forget User Password",
          layoutProperties: {
            "text-align": "center",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 904526,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904526,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 904527,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904527,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 3004,
        name: "Steps",
        type: 20018,
        name: "Steps Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          steps: [
            {
              name: "Step1",
              nextwidgetId: "1",
            },
            {
              name: "Step2",
              widgetId: "2",
            },
            {
              name: "Step3",
              widgetId: "3",
            },
          ],
          layoutProperties: {
            background: "transparent",
          },
        },
        events: [],
      },
      {
        id: 3005,
        name: "Ambit login form header label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Select Self Forget User Password Option",
          layoutProperties: {
            "text-align": "center",
            "font-weight": "bold",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 3006,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "ACC",
          checked: true,
          "label-locale-key": "login.user.login.form.label",
          label: "With Account No",
          layoutProperties: {},
        },
        events: [
          {
            type: 1,
            name: "onClick",
            triggerId: 95,
            name: "run on-load triggers",
            delay: 3,
          },
          {
            type: 3,
            name: "onClick",
            triggerId: 97,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3007,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "CARD",
          label: "With Card No",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 96,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3008,
        name: "Card Type",
        type: 20003,
        name: "Dropdown Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          storeType: 3,
          stateName: "cardType",
          label: "Card Type",
          "label-locale-key": "login.user.language",
          dataSource: "ConfigurationResponse.lookups.cardType",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 3054,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "CNIC",
          label: "With CNIC",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 104,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3055,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "NTN",
          label: "With NTN",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 105,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3056,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "PASSPORT",
          label: "With Passport",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 106,
            name: "run on-load triggers",
          },
        ],
      },

      {
        id: 3009,
        name: "Card Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "cardNumber",
          label: "Card Number",
          "label-locale-key": "login.user.language",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 3010,
        name: "Account Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Account Number",
          stateName: "userIdenValue",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 3011,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          stateName: "mobileNumber",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 3012,
        name: "Ambit Captcha",
        type: 20015,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Captcha",
          imageSrc: "captchaImage",
          stateName: "captcha",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 60,
            name: "run on-load triggers",
            data: "1",
          },
          {
            type: 2,
            name: "onClick",
            triggerId: 60,
            name: "run on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 3013,
        name: "Ambit login captcha control input",
        type: 20002,
        name: "Label Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "",
        },
      },
      {
        id: 3014,
        name: "",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 10,
                lg: 10,
                "margin-top": "5px",
              },
              componentId: 100000001,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 3015,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 3016,
              order: 1,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 3015,
        name: "Ambit login button control",
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Next",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 4,
            name: "onsubmit",
            triggerId: 3047,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3016,
        name: "Ambit login button control",
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Clear",
          "font-family": "Verdana",
          layoutProperties: {
            "background-color": "rgb(191 193 197)",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 3016,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3021,
        name: "Footer",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3022,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3023,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3024,
              order: 3,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 3022,
        name: "Footer Links",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 3025,
              name: "Login",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                lg: 3,
                md: 3,
              },
              componentId: 3026,
              name: "Contact Us",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 3027,
              name: "Faq",
              order: 3,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 3028,
              name: "Locate us",
              order: 4,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 3023,
        name: "",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "COPYRIGHT © 2020 AMBIT INTERNET BANKING",
          "label-locale-key": "login.user.copyright",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 222,
        name: " ",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "DISCLAIMER: Bank does not take responsibility for any losses, disputes or claims which may arise because of the use of this site.",
          "label-locale-key": "login.user.disclaimer",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 3024,
        name: " ",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "DISCLAIMER: Bank does not take responsibility for any losses, disputes or claims which may arise because of the use of this site.",
          "label-locale-key": "login.user.disclaimer",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 3025,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Login",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 505,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3026,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Contact Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 506,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3027,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Faq",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 507,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3028,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Locate Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 508,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 3029,
        name: "Forget User Password step 2",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3030,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904528,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3031,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3032,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 3033,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 3034,
              order: 6,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3035,
              order: 7,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3036,
              order: 8,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904529,
              order: 9,
            },
          ],
          name: "",
          layoutProperties: {
            background: "#ebeef1",
            "border-radius": "30px",
            "background-color": "rgba(255,255,255,0.8)",
          },
        },
      },
      {
        id: 3030,
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Forget User Password",
          layoutProperties: {
            "text-align": "center",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 904528,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904528,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 904529,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904529,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 3031,
        name: "Steps",
        type: 20018,
        name: "Steps Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          steps: [
            {
              name: "Step1",
              nextwidgetId: "1",
            },
            {
              name: "Step2",
              widgetId: "2",
            },
            {
              name: "Step3",
              widgetId: "3",
            },
          ],
          layoutProperties: {
            background: "transparent",
          },
        },
        events: [],
      },
      {
        id: 3032,
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Select Self Forget User Name Option",
          layoutProperties: {
            "text-align": "center",
            "font-weight": "bold",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 3033,
        type: 20008,
        name: "PasswordComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Enter New Password",
          stateName: "password",
          "label-locale-key": "login.user.password",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 3034,
        type: 20008,
        name: "PasswordComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Re-enter New Password",
          stateName: "confirmPassword",
          "label-locale-key": "login.user.password",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 3035,
        name: "Ambit SecurityConfiguration",
        type: 20016,
        name: "SecurityConfiguration",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          messageWidgetIds: [904528],
          transactionCode: "0006",
          smsOtpLabel: "Sms Otp",
          stateNameSMS: "smsOtp",
          emailEmailLabel: "Email Otp",
          stateNameEmail: "emailOtp",
          generateOtpLabel: "Regenerate Otp",
          isPrelogin: true,
          isRegistration: false,
          layoutProperties: {
            "text-align": "center",
          },
          validate: {
            required: true,
          },
        },
        events: [],
      },
      {
        id: 3036,
        name: "",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 10,
                lg: 10,
                "margin-top": "5px",
              },
              componentId: 100000001,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 3037,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 3038,
              order: 1,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 3037,
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Next",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 4,
            name: "onClick",
            triggerId: 3048,
          },
        ],
      },
      {
        id: 3038,
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Clear",
          "font-family": "Verdana",
          layoutProperties: {
            "background-color": "rgb(191 193 197)",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 3040,
          },
        ],
      },
      {
        id: 100300,
        name: "Forget User Password step 3",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3030,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 3031,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100301,
              order: 3,
            },
          ],
          name: "",
          layoutProperties: {
            background: "#ebeef1",
            "border-radius": "30px",
            "background-color": "rgba(255,255,255,0.8)",
          },
        },
      },
      {
        id: 100301,
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Your password has been successfully reset",
          layoutProperties: {
            "text-align": "center",
            width: "90%",
            margin: "15px auto",
            color: "#050013",
            "letter-spacing": "1",
            "background-color": "rgba(255, 255, 255, 1)",
            border: "1px solid #efefef",
            "border-radius": "7px",
            "font-size": "20px",
            "line-height": "22px",
            padding: "15px 30px",
            "font-family": "'DaxMedium', sans-serif",
            display: "block",
            "margin-top": "30px !important",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 100310,
        name: "Forget User ID step 3",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2030,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 2031,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100311,
              order: 3,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {
            background: "#ebeef1",
            "border-radius": "30px",
            "background-color": "rgba(255,255,255,0.8)",
          },
        },
      },
      {
        id: 100311,
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "Username is sent to your registered email address/mobile number ",
          layoutProperties: {
            "text-align": "center",
            width: "90%",
            margin: "15px auto",
            color: "#050013",
            "letter-spacing": "1",
            "background-color": "rgba(255, 255, 255, 1)",
            border: "1px solid #efefef",
            "border-radius": "7px",
            "font-size": "20px",
            "line-height": "22px",
            padding: "15px 30px",
            "font-family": "'DaxMedium', sans-serif",
            display: "block",
            "margin-top": "30px !important",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
      {
        id: 900501,
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout REGISTRATION START",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                background: "transparent",
              },
              componentId: 200501,
              name: "Ambit logo",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                float: "left",
                "margin-top": "2%",
                "margin-left": "20%",
                "margin-right": "20%",
                overflow: "hidden",
                height: "",
                width: "20%",
                background: "#ebeef1",
                "border-radius": "30px",
                "min-width": "400px",
                "background-color": "rgba(255,255,255,0.8)",
              },
              componentId: 100501,
              name: "Registration Main Div ",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                "text-align": "center",
              },
              componentId: 100503,
              name: "Login footer",
              order: 3,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            overflow: "hidden",
            height: "",
            width: "100%",
            background: "#e4e1e1",
            "background-image":
              "url(https://ambitdigital1.avanzasolutions.com:8201/images/login-Background.png)",
            "background-repeat": "no-repeat",
            "background-size": "cover",
          },
        },
        events: [],
      },
      {
        id: 200501,
        name: "Ambit logo",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 1,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 80,
          },
        ],
      },
      {
        id: 100501,
        name: "Registration box",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200502,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904524,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200503,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 200505,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 200506,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 200531,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 200532,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 2,
                lg: 2,
              },
              componentId: 200533,
              order: 4,
            },

            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "text-align": "center",
              },
              componentId: 100508,
              name: "e,pty container for registration",
              order: 99,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "text-align": "center",
              },
              componentId: 100509,
              name: "Captcha",
              order: 100,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100502,
              order: 101,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904525,
              order: 102,
            },
          ],
          name: "Registration Box Footer",
          layoutProperties: {},
        },
      },
      {
        id: 200502,
        name: "Ambit login form header label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Registration",
          variant: "h5",
          layoutProperties: {
            color: "black",
            "text-align": "center",
          },
          "label-locale-key": "registration.main.label",
        },
      },
      {
        id: 904524,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904524,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 904525,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904525,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 200503,
        name: "Steps",
        type: 20018,
        name: "Steps Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          steps: [
            {
              name: "Step1",
              nextwidgetId: "1",
            },
            {
              name: "Step2",
              widgetId: "2",
            },
            {
              name: "Step3",
              widgetId: "3",
            },
          ],
          layoutProperties: {
            background: "transparent",
          },
        },
        events: [],
      },
      {
        id: 100506,
        name: "card container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200507,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200508,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200510,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 100507,
        name: "account container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200509,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200510,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 200505,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "ACC",
          checked: true,
          "label-locale-key": "login.user.login.form.label",
          label: "With Account No",
          layoutProperties: {},
        },
        events: [
          {
            type: 1,
            name: "onClick",
            triggerId: 98,
            name: "run on-load triggers",
            delay: 3,
          },
          {
            type: 3,
            name: "onClick",
            triggerId: 99,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 100508,
        name: "empty container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100000001,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 200506,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "CARD",
          label: "With Card No",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 100,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 200507,
        name: "Card Type",
        type: 20003,
        name: "Dropdown Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "cardType",
          label: "Card Type",
          "label-locale-key": "login.user.language",
          dataSource: "ConfigurationResponse.lookups.cardType",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 200551,
        name: "CNIC container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200552,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200553,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 200552,
        name: "CNIC Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "CNIC Number",
          stateName: "userIdenValue",
          maxLength: "13",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 200553,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          stateName: "mobileNumber",
          maxLength: "14",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 200555,
        name: "NTN container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200556,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200557,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 200556,
        name: "NTN Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "NTN Number",
          stateName: "userIdenValue",
          maxLength: "8",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 200557,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          maxLength: "14",
          stateName: "mobileNumber",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 200561,
        name: "Passport container",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200562,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200563,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 200562,
        name: "Passport Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Passport Number",
          stateName: "userIdenValue",
          maxLength: "",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 200563,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          maxLength: "14",
          stateName: "mobileNumber",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },

      {
        id: 200531,
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "CNIC",
          label: "With CNIC",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 531,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 200532,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "NTN",
          label: "With NTN",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 532,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 200533,
        name: "Ambit login form header label",
        type: 20007,
        name: "RadioComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "accountCardSelection",
          name: "accountCardSelection",
          value: "PASSPORT",
          label: "With Passport",
          "label-locale-key": "login.user.login.form.label",
          layoutProperties: {},
        },
        events: [
          {
            type: 3,
            name: "onClick",
            triggerId: 533,
            name: "run on-load triggers",
          },
        ],
      },

      {
        id: 200508,
        name: "Card Numnber",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "cardNumber",
          label: "Card Number",
          "label-locale-key": "login.user.language",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 200509,
        name: "Account Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Account Number",
          stateName: "userIdenValue",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 200510,
        name: "Mobile Number",
        type: 20004,
        name: "Input Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Mobile Number",
          stateName: "mobileNumber",
          "label-locale-key": "login.user.captcha.input",
          layoutProperties: {},
          validate: {
            required: true,
          },
        },
      },
      {
        id: 100509,
        name: "captcha grid",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200511,
              order: 1,
            },
          ],
          name: "",
          layoutProperties: {},
        },
      },
      {
        id: 200511,
        name: "Ambit Captcha",
        type: 20015,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Captcha",
          imageSrc: "captchaImage",
          stateName: "captcha",
          layoutProperties: {},
        },
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 60,
            name: "run on-load triggers",
            data: "1",
          },
          {
            type: 2,
            name: "onClick",
            triggerId: 60,
            name: "run on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 100502,
        name: "",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 10,
                lg: 10,
                "margin-top": "5px",
              },
              componentId: 100000001,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 200512,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 200513,
              order: 1,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 200512,
        name: "Ambit login button control",
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Next",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 900601,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 200513,
        name: "Ambit login button control",
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Clear",
          "font-family": "Verdana",
          layoutProperties: {
            "background-color": "rgb(191 193 197)",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 200513,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 100503,
        name: "Footer",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100504,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200519,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200520,
              order: 3,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 100504,
        name: "Footer Links",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 200514,
              name: "Login",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                lg: 3,
                md: 3,
              },
              componentId: 200515,
              name: "Contact Us",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 200516,
              name: "Faq",
              order: 3,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 200517,
              name: "Locate us",
              order: 4,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 200519,
        name: "",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "COPYRIGHT © 2020 AMBIT INTERNET BANKING",
          "label-locale-key": "login.user.copyright",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 200520,
        name: " ",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "DISCLAIMER: Bank does not take responsibility for any losses, disputes or claims which may arise because of the use of this site.",
          "label-locale-key": "login.user.disclaimer",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 200514,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Login",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 509,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 200515,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Contact Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 510,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 200516,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Faq",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 511,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 200517,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Locate Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 512,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 900502,
        name: "registration step 2",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200521,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904536,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200522,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200523,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200524,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              componentId: 200525,
              order: 6,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200526,
              order: 7,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100505,
              order: 8,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904537,
              order: 102,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {
            background: "#ebeef1",
            "border-radius": "30px",
            "background-color": "rgba(255,255,255,0.8)",
          },
        },
      },
      {
        id: 900601,
        name: "registration step 3",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200521,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200522,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 900602,
              order: 4,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "text-align": "center",
              },
              componentId: 900634,
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904525,
              order: 6,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {
            background: "#ebeef1",
            "border-radius": "30px",
            "background-color": "rgba(255,255,255,0.8)",
          },
        },
      },
      {
        id: 900602,
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "Thank you, You have successfully registered to Digital Banking",
          layoutProperties: {
            "text-align": "center",
            width: "90%",
            margin: "15px auto",
            color: "#050013",
            "letter-spacing": "1",
            "background-color": "rgba(255, 255, 255, 1)",
            border: "1px solid #efefef",
            "border-radius": "7px",
            "font-size": "20px",
            "line-height": "22px",
            padding: "15px 30px",
            "font-family": "'DaxMedium', sans-serif",
            display: "block",
            "margin-top": "30px !important",
          },
          "label-locale-key": "registration.upper.form.label",
        },
      },
      {
        id: 200521,
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Registration",
          variant: "h5",
          layoutProperties: {
            "text-align": "center",
          },
          "label-locale-key": "registration.upper.form.label",
        },
      },
      {
        id: 904536,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904536,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 904537,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904537,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 200522,
        name: "Steps",
        type: 20018,
        name: "Steps Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          steps: [
            {
              name: "Step1",
              nextwidgetId: "1",
            },
            {
              name: "Step2",
              widgetId: "2",
            },
            {
              name: "Step3",
              widgetId: "3",
            },
          ],
          layoutProperties: {
            background: "transparent",
          },
        },
        events: [],
      },
      {
        id: 200523,
        type: 20004,
        name: "InputComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          storeType: 3,
          label: "User Name",
          stateName: "userName",
          tooltipState: "ConfigurationResponse.lookups.usernamePolicy.0.code",
          layoutProperties: {
            "text-align": "center",
          },
          "label-locale-key": "registration.form.user.name",
          validate: {
            required: true,
          },
        },
      },
      {
        id: 200524,
        type: 20008,
        name: "InputComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          storeType: 3,
          label: "Password",
          stateName: "choosePassword",
          tooltipState: "ConfigurationResponse.lookups.passwordMatcher.3.name",
          layoutProperties: {
            "text-align": "center",
          },
          "label-locale-key": "registration.form.password",
          validate: {
            required: true,
          },
        },
      },
      {
        id: 200525,
        type: 20008,
        name: "InputComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Confirm Password",
          stateName: "confirmPassword",
          layoutProperties: {
            "text-align": "center",
          },
          "label-locale-key": "registration.form.confirm.password",
          validate: {
            required: true,
          },
        },
      },
      {
        id: 200526,
        name: "Ambit SecurityConfiguration",
        type: 20016,
        name: "SecurityConfiguration",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          messageWidgetIds: [904536],
          transactionCode: "0106",
          smsOtpLabel: "Sms Otp",
          stateNameSMS: "smsOtp",
          emailEmailLabel: "Email Otp",
          stateNameEmail: "emailOtp",
          generateOtpLabel: "Regenerate Otp",
          isPrelogin: true,
          isRegistration: true,
          layoutProperties: {
            "text-align": "center",
          },
          validate: {
            required: true,
          },
        },
        events: [],
      },
      {
        id: 100505,
        name: "",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 10,
                lg: 10,
                "margin-top": "5px",
              },
              componentId: 100000001,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 200527,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 1,
                lg: 1,
                "margin-top": "5px",
              },
              componentId: 200528,
              order: 1,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 200527,
        type: 20006,
        name: "Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Next",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 4,
            name: "onClick",
            triggerId: 900606,
          },
        ],
      },
      {
        id: 200528,
        type: 20006,
        name: "Registraiton END Button Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Clear",
          "font-family": "Verdana",
          layoutProperties: {
            "background-color": "rgb(191 193 197)",
            color: "white",
            width: "100%",
            "border-radius": "30px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 200528,
            name: "run on-load triggers",
          },
        ],
      },
      {
        id: 100000001,
        name: "Empty component",
        type: 20019,
        name: "Label Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "",
        },
      },
      {
        id: 200100,
        name: "Ambit logo",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 1,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 14,
            name: "ru on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 9011,
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                background: "transparent",
              },
              componentId: 200100,
              name: "Ambit logo",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                float: "left",
                "margin-top": "2%",
                "margin-left": "20%",
                "margin-right": "20%",
                overflow: "hidden",
                height: "",
                width: "20%",
                background: "#ebeef1",
                "border-radius": "30px",
                "min-width": "400px",
                "background-color": "rgba(255,255,255,0.8)",
              },
              componentId: 100100,
              name: "FAQ screen data ",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                "text-align": "center",
              },
              componentId: 100709,
              name: "Login footer",
              order: 5,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            overflow: "hidden",
            height: "",
            width: "100%",
            background: "#e4e1e1",
            "background-image":
              "url(https://ambitdigital1.avanzasolutions.com:8201/images/login-Background.png)",
            "background-repeat": "no-repeat",
            "background-size": "cover",
          },
        },
      },
      {
        id: 200100,
        name: "Ambit logo",
        type: 20012,
        name: "ImageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          imageAssetId: 1,
          defaultImageAssetId: 3,
          layoutProperties: {},
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 14,
            name: "ru on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 100100,
        name: "FAQ GRID",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 2,
                sm: 2,
                md: 2,
                lg: 2,
              },
              componentId: 200101,
              name: "FAQ Back button",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200102,
              name: "FAQ help label",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904518,
              order: 3,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200105,
              name: "FAQ data Accordian ",
              order: 5,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904519,
              name: "FAQ data Accordian ",
              order: 6,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {},
        },
      },
      {
        id: 200101,
        name: "FAQ back button",
        type: 20006,
        name: "BUTTON Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Back",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "5px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100705,
            name: "ru on-load triggers",
          },
        ],
      },
      {
        id: 200102,
        name: "FAQ Help Label",
        type: 20002,
        name: "Label Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Help",
          layoutProperties: {
            "font-size": "30px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 14,
            name: "ru on-load triggers",
            data: "1",
          },
        ],
      },
      {
        id: 904518,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904518,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 904519,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904519,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 200105,
        name: "FAQ Accordian",
        type: 20017,
        name: "Accordian Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          stateName: "faqResponse",
          parentCodeKey: "groupCode",
          parentNameKey: "groupName",
          childDataKey: "groupFAQ",
          childCodeKey: "question",
          childNameKey: "answer",
          isSearchable: true,
          layoutProperties: {
            "background-color": "rgb(239,239,239)",
            "border-bottom": "1px solid rgba(0, 0, 0, .125)",
            "margin-bottom": -1,
            "min-height": 56,
          },
        },
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 78,
            name: "ru on-load triggers",
          },
        ],
      },
      {
        id: 9015,
        name: "Locate Us widget",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                background: "transparent",
              },
              componentId: 200100,
              name: "Ambit logo",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                float: "left",
                "margin-top": "2%",
                "margin-left": "20%",
                "margin-right": "20%",
                overflow: "hidden",
                height: "",
                width: "20%",
                background: "#ebeef1",
                "border-radius": "30px",
                "min-width": "400px",
                "background-color": "rgba(255,255,255,0.8)",
              },
              componentId: 100105,
              name: "Locate Us Screen",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                "text-align": "center",
              },
              componentId: 100708,
              name: "Login footer",
              order: 5,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            overflow: "hidden",
            height: "",
            width: "100%",
            background: "#e4e1e1",
            "background-image":
              "url(https://ambitdigital1.avanzasolutions.com:8201/images/login-Background.png)",
            "background-repeat": "no-repeat",
            "background-size": "cover",
          },
        },
        events: [],
      },
      {
        id: 100105,
        name: "Locate US GRID",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 2,
                sm: 2,
                md: 2,
                lg: 2,
              },
              componentId: 200110,
              name: "Locate Us Back button",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 904520,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200111,
              name: "Locate Us help label",
              order: 3,
            },
            {
              layoutProperties: {
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
                "max-height": "500px",
                overflow: "auto",
              },
              componentId: 200113,
              name: "Locate Us list",
              order: 4,
            },
            {
              layoutProperties: {
                xs: 8,
                sm: 8,
                md: 8,
                lg: 8,
              },
              componentId: 200114,
              name: "Locate Us Google Map",
              order: 5,
            },
            {
              layoutProperties: {
                xs: 8,
                sm: 8,
                md: 8,
                lg: 8,
              },
              componentId: 904521,
              name: "Locate Us Loader",
              order: 6,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {},
        },
      },
      {
        id: 200110,
        name: "Contact US back button",
        type: 20006,
        name: "BUTTON Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Back",
          layoutProperties: {
            "background-color": "#1c2b5a",
            color: "white",
            width: "100%",
            "border-radius": "5px",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100701,
            name: "ru on-load triggers",
          },
        ],
      },
      {
        id: 904520,
        name: "Ambit login form header label",
        type: 20044,
        name: "MessageComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904520,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 904521,
        name: "Ambit login form header label",
        type: 20045,
        name: "LoaderComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        widgetId: 904521,
        attributes: {
          layoutProperties: {},
        },
      },
      {
        id: 200111,
        name: "Locate US Label",
        type: 20002,
        name: "Label Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Locate Us",
          layoutProperties: {
            "font-size": "26px",
          },
        },
        events: [],
      },
      {
        id: 200112,
        name: "Locate US Search textbox",
        type: 20004,
        name: "Label Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Search",
          stateName: "searchLocation",
          layoutProperties: {},
        },
        events: [],
      },
      {
        id: 200113,
        name: "Contact us Addresses component",
        type: 20009,
        name: "Collection Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "",
          dataSource: "locationResponse",
          isSearchable: true,
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 900632,
              name: "empty padding component",
              order: 10,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200115,
              name: "Locate us location name",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
              },
              componentId: 200126,
              name: "Locate us location address label",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 8,
                sm: 8,
                md: 8,
                lg: 8,
              },
              componentId: 200116,
              name: "Locate us location address label",
              order: 3,
            },
            {
              layoutProperties: {
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
              },
              componentId: 200127,
              name: "Locate us branch address",
              order: 4,
            },
            {
              layoutProperties: {
                xs: 8,
                sm: 8,
                md: 8,
                lg: 8,
              },
              componentId: 200117,
              name: "Locate us Phone number",
              order: 5,
            },
            {
              layoutProperties: {
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
              },
              componentId: 200128,
              name: "Locate us Email",
              order: 6,
            },
            {
              layoutProperties: {
                xs: 8,
                sm: 8,
                md: 8,
                lg: 8,
              },
              componentId: 200118,
              name: "Locate us Email",
              order: 7,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 200119,
              name: "location timging",
              order: 9,
            },
          ],
          layoutProperties: {
            "background-color": "#ffffff",
            "border-radius": "10px",
            padding: "10px 15px 22px 15px",
            "box-sizing": "border-box",
            margin: "5px 0",
            "box-shadow": "1px 3px 10px 0px rgb(136 136 136 / 9%)",
            border: "1px solid #e2e2e252",
          },
        },
        events: [],
      },
      {
        id: 200114,
        name: "Locate US Map",
        type: 20021,
        name: "Google Map Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          responseStateKey: "locationResponse",
          initialLat: 24.856564,
          initialLng: 67.004418,
          initialZoom: 8,
          apiKey: "AIzaSyC9RxIa0mIxOiYPhqta9EjTZJsOKZaoFE0",
          layoutProperties: {
            width: "100%",
            height: "500px",
            position: "relative",
          },
        },
        events: [
          {
            type: 1,
            name: "onInit",
            triggerId: 77,
          },
        ],
      },
      {
        id: 200115,
        name: "Locate US Branch Name",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "name",
          layoutProperties: {},
        },
        events: [],
      },
      {
        id: 200116,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "address",
          layoutProperties: {},
        },
        events: [],
      },
      {
        id: 200117,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "phoneNumber",
          layoutProperties: {},
        },
        events: [],
      },
      {
        id: 200118,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "email",
          layoutProperties: {
            "overflow-wrap": "anywhere",
          },
        },
        events: [],
      },
      {
        id: 200119,
        name: "Contact us Addresses component",
        type: 20009,
        name: "Collection Component",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "",
          dataSource: "locationResponse",
          iteratorKey: "timings",
          gridProps: [
            {
              layoutProperties: {
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
              },
              componentId: 200125,
              name: "Contact Us Back button",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 200122,
              name: "Contact Us Back button",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 5,
                sm: 5,
                md: 5,
                lg: 5,
              },
              componentId: 200123,
              name: "Contact Us Back button",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
              },
              componentId: 200124,
              name: "Contact Us Back button",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 200120,
              name: "Contact Us Back button",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 5,
                sm: 5,
                md: 5,
                lg: 5,
              },
              componentId: 200121,
              name: "Contact Us Back button",
              order: 1,
            },
          ],
        },
        events: [],
      },
      {
        id: 200120,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "openTime",
          layoutProperties: {},
        },
        events: [],
      },
      {
        id: 200121,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "closingTime",
          layoutProperties: {},
        },
        events: [],
      },
      {
        id: 200122,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "fromDayOfWeek",
          layoutProperties: {},
        },
        events: [],
      },
      {
        id: 200123,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "toDayOfWeek",
          layoutProperties: {},
        },
        events: [],
      },
      {
        id: 200124,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Time:",
          layoutProperties: {
            "font-weight": "bold",
          },
        },
        events: [],
      },
      {
        id: 200125,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Opening:",
          layoutProperties: {
            "font-weight": "bold",
          },
        },
        events: [],
      },
      {
        id: 200126,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Address:",
          layoutProperties: {
            "font-weight": "bold",
          },
        },
        events: [],
      },
      {
        id: 200127,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Contact:",
          layoutProperties: {
            "font-weight": "bold",
          },
        },
        events: [],
      },
      {
        id: 200128,
        name: "Locate US Branch address",
        type: 20002,
        name: "Label",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Email:",
          layoutProperties: {
            "font-weight": "bold",
          },
        },
        events: [],
      },
      {
        id: 100708,
        name: "Footer",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100701,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100702,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100703,
              order: 3,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 100701,
        name: "Footer Links",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 100704,
              name: "Login",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                lg: 3,
                md: 3,
              },
              componentId: 100705,
              name: "Contact Us",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 100706,
              name: "Faq",
              order: 3,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 100707,
              name: "Locate us",
              order: 4,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 100702,
        name: "Ambit login form label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "COPYRIGHT © 2020 AMBIT INTERNET BANKING",
          "label-locale-key": "login.user.copyright",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 100703,
        name: "Ambit login form label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "DISCLAIMER: Bank does not take responsibility for any losses, disputes or claims which may arise because of the use of this site.",
          "label-locale-key": "login.user.disclaimer",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 100704,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Login",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100701,
          },
        ],
      },
      {
        id: 100705,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Contact Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100702,
          },
        ],
      },
      {
        id: 100706,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Faq",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100703,
          },
        ],
      },
      {
        id: 100707,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Locate Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100704,
          },
        ],
      },
      {
        id: 100709,
        name: "Footer",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100710,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100711,
              order: 2,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 100712,
              order: 3,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "1px",
            "margin-left": "20px",
            "margin-right": "20px",
            overflow: "hidden",
          },
        },
      },
      {
        id: 100710,
        name: "Footer Links",
        type: 10001,
        name: "GridLayout",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 100713,
              name: "Login",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                lg: 3,
                md: 3,
              },
              componentId: 100714,
              name: "Contact Us",
              order: 2,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 100715,
              name: "Faq",
              order: 3,
            },
            {
              layoutProperties: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
              },
              componentId: 100716,
              name: "Locate us",
              order: 4,
            },
          ],
          layoutProperties: {},
        },
      },
      {
        id: 100711,
        name: "Ambit login form label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "COPYRIGHT © 2020 AMBIT INTERNET BANKING",
          "label-locale-key": "login.user.copyright",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 100712,
        name: "Ambit login form label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label:
            "DISCLAIMER: Bank does not take responsibility for any losses, disputes or claims which may arise because of the use of this site.",
          "label-locale-key": "login.user.disclaimer",
          layoutProperties: {
            color: "#fff",
          },
        },
      },
      {
        id: 100713,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Login",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100705,
          },
        ],
      },
      {
        id: 100714,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Contact Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100706,
          },
        ],
      },
      {
        id: 100715,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Faq",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100707,
          },
        ],
      },
      {
        id: 100716,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Locate Us",
          layoutProperties: {
            "text-align": "left",
            color: "white",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 100708,
          },
        ],
      },
      {
        id: 900632,
        type: 20019,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "",
          layoutProperties: {
            "padding-top": "14px",
          },
          "label-locale-key": "registration.upper.form.label",
        },
      },
      {
        id: 900634,
        name: "footer nav links",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Click here to login",
          layoutProperties: {
            "text-align": "center",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 509,
          },
        ],
      },
      {
        id: 902300,
        name: "Login dic quick link",
        type: 20011,
        name: "LinkComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Apply for Roshan Digital Account",
          layoutProperties: {
            "text-align": "left",
            "text-decoration": "underline",
          },
        },
        events: [
          {
            type: 2,
            name: "onClick",
            triggerId: 902300,
          },
        ],
      },
      {
        id: 902301,
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                background: "transparent",
              },
              componentId: 3000,
              name: "Ambit logo",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                float: "left",
                "margin-top": "2%",
                "margin-left": "10%",
                "margin-right": "10%",
                overflow: "hidden",
                height: "",
                width: "20%",
                background: "#ebeef1",
                "border-radius": "30px",
                "min-width": "400px",
                "background-color": "white",
                padding: "20px 20px 20px 20px",
              },
              componentId: 902302,
              name: "RDA screen ",
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                "margin-left": "10%",
                "margin-right": "10%",
                "text-align": "center",
              },
              componentId: 3021,
              name: "Login footer",
              order: 5,
            },
          ],
          layoutProperties: {
            float: "left",
            padding: "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            overflow: "hidden",
            height: "",
            width: "100%",
            background: "#e4e1e1",
            "background-image":
              "url(https://ambitdigital1.avanzasolutions.com:8201/images/login-Background.png)",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-attachment": "fixed",
          },
        },
        events: [],
      },
      {
        id: 902302,
        name: "roshan digital account",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        type: 10001,
        name: "GridLayout",
        attributes: {
          gridProps: [
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 908303,
              order: 1,
            },
            {
              layoutProperties: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
              },
              componentId: 909500,
              order: 2,
            },
          ],
          name: "Login Box Footer",
          layoutProperties: {},
        },
      },
      {
        id: 908303,
        name: "Ambit login form header label",
        type: 20002,
        name: "LabelComponent",
        updatedTimestamp: "0000-00-00T00:00:00+00:00",
        attributes: {
          label: "Roshan Digital Account Application",
          variant: "h4",
          layoutProperties: {
            "text-align": "center",
          },
          "label-locale-key": "login.user.login.form.label",
        },
      },
    ],
    triggers: [
      {
        id: 6,
        services: [
          {
            type: 6,
            name: "UINotificationService",
            command: {
              type: 1,
              name: "DisplayFatalErrorAndExit",
              attributes: {
                errorCode: "${caller}.errorCode",
                sendDiagnostics: true,
              },
            },
          },
        ],
      },
      {
        id: 6,
        services: [
          {
            type: 6,
            name: "UINotificationService",
            command: {
              type: 1,
              name: "DisplayFatalErrorAndExit",
              attributes: {
                errorCode: "${caller}.errorCode",
                sendDiagnostics: true,
              },
            },
          },
        ],
      },
      {
        id: 10,
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "doLogin",
              attributes: {
                loader: true,
                loaderWidgetIds: [904523],
                messageWidgetIds: [904522],
                responseStateKey: "userProfile",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/security/v3/validateLoginPassword",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBody: [
                  {
                    key: "loginType",
                    value: "CREDENTIALS",
                    type: 1,
                  },
                  {
                    value: "username",
                    key: "username",
                    type: 2,
                  },
                  {
                    value: "password",
                    key: "password",
                    type: 2,
                  },
                  {
                    key: "captcha",
                    value: "captcha",
                    type: 2,
                  },
                  {
                    value: "language.code",
                    key: "language",
                    type: 2,
                  },
                ],
              },
              returns: [
                {
                  code: 1,
                  responseConditions: {
                    isTrustedDevice: true,
                  },
                  triggerId: 19,
                  name: "jump to post-login home screen",
                },
                {
                  code: 1,
                  responseConditions: {
                    isTrustedDevice: false,
                  },
                  triggerId: 18,
                  name: "jump to post-login device registration screen",
                },
                {
                  code: -1,
                  triggerId: 60,
                  name: "display error",
                },
              ],
            },
          },
        ],
      },
      {
        id: 1007,
        name: "jump to device regiration screen",
        services: [
          {
            type: 1,
            name: "FlowManagerService",
            command: {
              type: 1,
              name: "TransitionToNextWidgetCommand",
              attributes: {
                nextWidgetId: 9010,
                name: "jump to device regiration screen'",
              },
            },
          },
        ],
      },
      {
        id: 1005,
        name: "Device Management",
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "postApi",
              attributes: {
                loaderWidgetIds: [904535],
                messageWidgetIds: [904534],
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/security/v1/deviceManagement",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                transactionCode: "1115",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [
                  {
                    key: "action",
                    value: "A",
                    type: 1,
                  },
                  {
                    key: "trustedDevice.os",
                    value: "device.os",
                    type: 3,
                  },
                  {
                    key: "trustedDevice.deviceKey",
                    value: "device.deviceKey",
                    type: 3,
                  },
                  {
                    key: "trustedDevice.name",
                    value: "deviceName",
                    type: 2,
                  },
                  {
                    key: "trustedDevice.osType",
                    value: "device.osType",
                    type: 3,
                  },
                ],
              },
              returns: [
                {
                  code: 1,
                  responseConditions: {},
                  triggerId: 19,
                  name: "jump to post-login home screen",
                },
              ],
            },
          },
        ],
      },
      {
        id: 11,
        name: "jump to post-login home screen",
        services: [
          {
            type: 1,
            name: "FlowManagerService",
            command: {
              type: 2,
              name: "TransitionToNextWidgetCommand",
              attributes: {
                nextWidgetId: 9001,
                name: "post-login home screen widget",
              },
            },
          },
        ],
      },
      {
        id: 12,
        services: [
          {
            type: 6,
            name: "UINotificationService",
            command: {
              type: 1,
              name: "DisplayError",
              attributes: {
                errorCode: "${caller}.errorCode",
              },
            },
          },
        ],
      },
      {
        id: 14,
        name: "jump to device regiration screen",
        services: [
          {
            type: 1,
            name: "FlowManagerService",
            command: {
              type: 1,
              name: "TransitionToNextWidgetCommand",
              attributes: {
                nextWidgetId: 9010,
                name: "jump to device regiration screen'",
              },
            },
          },
        ],
      },
      {
        id: 15,
        name: "fetch configurations from api",
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "postApi",
              attributes: {
                loader: true,
                responseStateKey: "ConfigurationResponse",
                storeType: 3,
                name: "Response key used to saved in redux state and to refer it in later api call",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/getConfiguration",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [
                  {
                    key: "isSystemConfiguration",
                    value: true,
                    type: 1,
                  },
                  {
                    key: "isSecurityConfiguration",
                    value: true,
                    type: 1,
                  },
                  {
                    key: "lookUps",
                    value: [
                      "USER_IDEN_TYPE",
                      "REGISTER_CARD_TYPES",
                      "AVAILABLE_CHANNELS",
                      "CREDIT_CARD_TYPE",
                      "ACCOUNT_STATUS",
                      "ACCOUNT_TYPE",
                      "USERNAME_POLICY",
                      "BANK_LIST",
                      "CHARGES_PAY_INSTRUCT",
                      "COUNTRY",
                      "CURRENCY",
                      "TRANSFER_REASONS",
                      "DEPOSIT_TYPE",
                      "LOAN_TYPE",
                      "PASSWORD_POLICY",
                      "CARD_STATUS",
                      "PFM_GOAL_TERMS_CONDITIONS",
                      "CARD_MERCHANT_CONTROL",
                      "CARD_CHANNEL",
                      "CARD_LIMIT_TYPE",
                      "BENE_TYPE",
                      "STATE_LIST",
                      "NATIONALITY_LIST",
                      "DELIVERY_BRANCH",
                      "DELIVERY_OPTION",
                      "CARD_REASON",
                      "VIRTUAL_CARD_TYPE",
                      "VIRTUAL_CARD_DENOMINATION",
                      "VIRTUAL_CARD_EXPIRY",
                      "VIRTUAL_CARD_CATEGORY",
                      "LANGUAGES",
                      "ACTIVITY_STATUS",
                      "ACTIVITY_TYPE",
                      "THEME",
                      "RDA_CURRENCY",
                      "RDA_IDEN_TYPE",
                      "RDA_QUALIFICATION",
                      "RDA_PROFESSION",
                      "RDA_INCOME_SOURCE",
                      "RDA_BUSINESS",
                      "RDA_CREDIT_CARD_TYPE",
                      "RDA_CDC_BROKER",
                      "RDA_MARITAL_STATUS",
                      "RDA_SUP_CARD_RELATIONSHIP",
                      "RDA_SUP_CARD_PURPOSE",
                    ],
                    type: 1,
                  },
                ],
              },
              returns: [],
            },
          },
        ],
      },
      {
        id: 16,
        name: "toggle modal from response data",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [15, 58],
              },
            },
          },
        ],
      },
      {
        id: 17,
        name: "toggle modal from response data for Security instruction on login screen",
        services: [
          {
            type: 9,
            name: "ModalService",
            command: {
              type: 1,
              name: "showModal",
              attributes: {
                modalId: 304,
              },
            },
          },
        ],
      },
      {
        id: 18,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 22,
                nextWidgetId: 1001,
              },
            },
          },
        ],
      },
      {
        id: 19,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 9016,
              },
            },
          },
        ],
      },
      {
        id: 2041,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [2020, 2045],
              },
            },
          },
        ],
      },
      {
        id: 2020,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 2001,
              },
            },
          },
        ],
      },
      {
        id: 2040,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2002,
                nextWidgetId: 2029,
              },
            },
          },
        ],
      },
      {
        id: 2044,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [2040, 2043],
              },
            },
          },
        ],
      },
      {
        id: 2043,
        name: "Update redux stepper service",
        services: [
          {
            type: 10,
            name: "increment",
            command: {
              type: 1,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 2045,
        name: "Updat eredux for for step to set to 0",
        services: [
          {
            type: 10,
            name: "set to 0",
            command: {
              type: 3,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 2042,
        name: "Update redux stepper service",
        services: [
          {
            type: 10,
            name: "increment",
            command: {
              type: 1,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 3041,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [3020, 2045],
              },
            },
          },
        ],
      },
      {
        id: 902302,
        name: "Updat eredux for for step to set to 0",
        services: [
          {
            type: 10,
            name: "set to 0",
            command: {
              type: 3,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 3045,
        name: "Updat eredux for for step to set to 0",
        services: [
          {
            type: 10,
            name: "set to 0",
            command: {
              type: 3,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 902301,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 902301,
              },
            },
          },
        ],
      },
      {
        id: 3020,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 3001,
              },
            },
          },
        ],
      },
      {
        id: 3040,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3002,
                nextWidgetId: 3029,
              },
            },
          },
        ],
      },
      {
        id: 902300,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [902301, 902302],
              },
            },
          },
        ],
      },
      {
        id: 3042,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [3020, 3045],
              },
            },
          },
        ],
      },
      {
        id: 3043,
        name: "Update redux stepper service",
        services: [
          {
            type: 10,
            name: "increment",
            command: {
              type: 1,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 3044,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [3040, 3043],
              },
            },
          },
        ],
      },
      {
        id: 3046,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [3040, 3043],
              },
            },
          },
        ],
      },
      {
        id: 3047,
        name: "Post prelogin forget password validation api",
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "postApi",
              attributes: {
                loaderWidgetIds: [904527],
                messageWidgetIds: [904526],
                responseStateKey: "validationResponse",
                name: "Response key used to saved in redux state and to refer it in later api call",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/validateRegistrationGenerateOTP",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [
                  {
                    key: "userIdenType",
                    value: "accountCardSelection",
                    type: 2,
                  },
                  {
                    key: "userIdenType",
                    value: "cardType.cardType",
                    type: 2,
                  },
                  {
                    key: "userIdenValue",
                    value: "userIdenValue",
                    type: 2,
                  },

                  {
                    key: "mobileNumber",
                    value: "mobileNumber",
                    type: 2,
                  },
                  {
                    key: "registrationFlag",
                    value: false,
                    type: 1,
                  },
                  {
                    key: "tranCode",
                    value: "0006",
                    type: 1,
                  },
                ],
              },
              returns: [
                {
                  code: 1,
                  responseConditions: {},
                  triggerId: 3046,
                  name: "jump to post-login home screen",
                },
              ],
            },
          },
        ],
      },
      {
        id: 3048,
        name: "Post prelogin forget password submit api",
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "postApi",
              attributes: {
                loaderWidgetIds: [3001],
                responseStateKey: "validationResponse",
                loaderWidgetIds: [904529],
                messageWidgetIds: [904528],
                name: "Response key used to saved in redux state and to refer it in later api call",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/validateOTPRessetPasswordNotify",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                transactionCode: "0006",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [
                  {
                    key: "userIdenType",
                    value: "accountCardSelection",
                    type: 2,
                  },
                  {
                    key: "userIdenType",
                    value: "cardType.cardType",
                    type: 2,
                  },
                  {
                    key: "userIdenValue",
                    value: "userIdenValue",
                    type: 2,
                  },

                  {
                    key: "mobileNumber",
                    value: "mobileNumber",
                    type: 2,
                  },
                  {
                    key: "newPassword",
                    value: "confirmPassword",
                    type: 2,
                  },
                ],
              },
              returns: [
                {
                  code: 1,
                  responseConditions: {},
                  triggerId: 3049,
                  name: "jump to post-login home screen",
                },
              ],
            },
          },
        ],
      },
      {
        id: 3049,
        name: "toggle modal from response data",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [3050, 3051],
              },
            },
          },
        ],
      },
      {
        id: 3050,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3029,
                nextWidgetId: 100300,
              },
            },
          },
        ],
      },
      {
        id: 3051,
        name: "Update redux stepper service",
        services: [
          {
            type: 10,
            name: "increment",
            command: {
              type: 1,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 3052,
        name: "Post prelogin forget password validation api",
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "postApi",
              loaderWidgetIds: [2001],
              attributes: {
                loaderWidgetIds: [904531],
                messageWidgetIds: [904530],
                responseStateKey: "validationResponse",
                name: "Response key used to saved in redux state and to refer it in later api call",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/validateRegistrationGenerateOTP",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [
                  {
                    key: "userIdenType",
                    value: "accountCardSelection",
                    type: 2,
                  },
                  {
                    key: "userIdenType",
                    value: "cardType.cardType",
                    type: 2,
                  },
                  {
                    key: "userIdenValue",
                    value: "userIdenValue",
                    type: 2,
                  },

                  {
                    key: "mobileNumber",
                    value: "mobileNumber",
                    type: 2,
                  },
                  {
                    key: "registrationFlag",
                    value: false,
                    type: 1,
                  },
                  {
                    key: "tranCode",
                    value: "0004",
                    type: 1,
                  },
                ],
              },
              returns: [
                {
                  code: 1,
                  responseConditions: {},
                  triggerId: 3053,
                  name: "jump to post-login home screen",
                },
              ],
            },
          },
        ],
      },
      {
        id: 3053,
        name: "toggle modal from response data",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [3054, 3055],
              },
            },
          },
        ],
      },
      {
        id: 3054,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2002,
                nextWidgetId: 2029,
              },
            },
          },
        ],
      },
      {
        id: 3055,
        name: "Update redux stepper service",
        services: [
          {
            type: 10,
            name: "increment",
            command: {
              type: 1,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 3060,
        name: "Post prelogin forget username submit api",
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "postApi",
              attributes: {
                loaderWidgetIds: [2001],
                responseStateKey: "validationResponse",

                loaderWidgetIds: [904533],
                messageWidgetIds: [904532],
                name: "Response key used to saved in redux state and to refer it in later api call",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/validateOtpSendUserName",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                transactionCode: "0006",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [
                  {
                    key: "userIdenType",
                    value: "accountCardSelection",
                    type: 2,
                  },
                  {
                    key: "userIdenType",
                    value: "cardType.cardType",
                    type: 2,
                  },
                  {
                    key: "userIdenValue",
                    value: "userIdenValue",
                    type: 2,
                  },

                  {
                    key: "mobileNumber",
                    value: "mobileNumber",
                    type: 2,
                  },
                ],
              },
              returns: [
                {
                  code: 1,
                  responseConditions: {},
                  triggerId: 3061,
                  name: "jump to post-login home screen",
                },
              ],
            },
          },
        ],
      },
      {
        id: 3061,
        name: "toggle modal from response data",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [3062, 3055],
              },
            },
          },
        ],
      },
      {
        id: 3062,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2029,
                nextWidgetId: 100310,
              },
            },
          },
        ],
      },
      {
        id: 9999999,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 3001,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 99999991,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 2001,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 30,
        name: "toggle modal from response data",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [59, 17],
              },
            },
          },
        ],
      },
      {
        id: 32,
        name: "toggle modal from response data for Security instruction on login screen",
        services: [
          {
            type: 9,
            name: "ModalService",
            command: {
              type: 2,
              name: "hideModal",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 56,
        name: "Generate Otp Service",
        services: [
          {
            type: 2,
            name: "AuthorizationService",
            command: {
              type: 1,
              name: "GenerateOtp",
              attributes: {
                encryption: true,
              },
              returns: [],
            },
          },
        ],
      },
      {
        id: 57,
        name: "fetch exchange rate from api",
        services: [
          {
            type: 8,
            name: "ApiRestTemplateService",
            command: {
              type: 1,
              name: "postApi",
              attributes: {
                responseStateKey: "exchangeRateResponse",
                responseReturnValue: "exchangeRateFTList",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/getExchangeRates",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBody: [
                  {
                    key: "fromAccountCurrency",
                    value: "USD",
                    type: 1,
                  },
                  {
                    key: "toCurrency",
                    value: "AED",
                    type: 1,
                  },
                ],
              },
              returns: [],
            },
          },
        ],
      },
      {
        id: 58,
        name: "set configurations to local storage",
        services: [
          {
            type: 7,
            name: "LocalStorageAccessService",
            command: {
              type: 2,
              name: "SetData",
              attributes: {
                data: "${caller}.props.data",
              },
              returns: [
                {
                  code: "-1",
                  triggerId: 6,
                  name: "display error and shutdown app",
                },
              ],
            },
          },
        ],
      },
      {
        id: 59,
        name: "fetch security instructions from api",
        services: [
          {
            type: 8,
            name: "ApiRestTemplateService",
            command: {
              type: 1,
              name: "postApi",
              attributes: {
                responseStateKey: "securityResponseHtml",
                responseReturnValue: "htmlContent",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/getTermsAndConditions",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [
                  {
                    key: "entityId",
                    value: "SECURITY_TIPS",
                    type: 1,
                  },
                ],
              },
              returns: [],
            },
          },
        ],
      },
      {
        id: 60,
        name: "Create captcha image",
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "postApi",
              attributes: {
                stateName: "captchaImage",
                responseStateKey: "captchaImage",
                responseReturnValue: "imageBinary",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/generateCaptcha",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [],
              },
              returns: [],
            },
          },
        ],
      },
      {
        id: 61,
        name: "jump to post-login home screen",
        services: [
          {
            type: 1,
            name: "FlowManagerService",
            command: {
              type: 1,
              name: "reload component",
              attributes: {
                nextWidgetId: 9010,
                name: "post-login home screen widget",
              },
            },
          },
        ],
      },
      {
        id: 71,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [73, 72],
              },
            },
          },
        ],
      },
      {
        id: 906022,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [906023],
              },
            },
          },
        ],
      },
      {
        id: 72,
        name: "Updat eredux for for step to set to 0",
        services: [
          {
            type: 10,
            name: "set to 0",
            command: {
              type: 3,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 73,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 900501,
              },
            },
          },
        ],
      },
      {
        id: 906023,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 906024,
              },
            },
          },
        ],
      },
      {
        id: 77,
        name: "fetch exchange rate from api",
        services: [
          {
            type: 8,
            name: "ApiRestTemplateService",
            command: {
              loaderWidgetIds: [900501],
              type: 1,
              name: "postApi",
              attributes: {
                loaderWidgetIds: [904521],
                messageWidgetIds: [904520],
                responseStateKey: "locationResponse",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/getLocations",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBody: [],
              },
              returns: [],
            },
          },
        ],
      },
      {
        id: 78,
        name: "fetch faq from api",
        services: [
          {
            type: 8,
            name: "ApiRestTemplateService",
            command: {
              type: 1,
              loaderWidgetIds: [900501],
              name: "postApi",
              attributes: {
                responseStateKey: "faqResponse",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/getAllFAQs",
                loaderWidgetIds: [904519],
                messageWidgetIds: [904518],
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [],
              },
              events: [],
              returns: [],
            },
          },
        ],
      },
      {
        id: 63,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 9014,
              },
            },
          },
        ],
      },
      {
        id: 64,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 9015,
              },
            },
          },
        ],
      },
      {
        id: 70,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 9011,
              },
            },
          },
        ],
      },
      {
        id: 74,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 100501,
                nextWidgetId: 900502,
              },
            },
          },
        ],
      },
      {
        id: 75,
        name: "",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [74, 76],
              },
            },
          },
        ],
      },
      {
        id: 76,
        name: "Update redux stepper service",
        services: [
          {
            type: 10,
            name: "increment",
            command: {
              type: 1,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 80,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 900501,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 900601,
        name: "Post prelogin forget password validation api",
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "postApi",

              attributes: {
                loaderWidgetIds: [900501],
                responseStateKey: "validationResponse",
                loaderWidgetIds: [904525],
                messageWidgetIds: [904524],
                name: "Response key used to saved in redux state and to refer it in later api call",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/validateRegistrationGenerateOTP",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [
                  {
                    key: "userIdenType",
                    value: "accountCardSelection",
                    type: 2,
                  },
                  {
                    key: "userIdenType",
                    value: "cardType.cardType",
                    type: 2,
                  },
                  {
                    key: "userIdenValue",
                    value: "userIdenValue",
                    type: 2,
                  },

                  {
                    key: "mobileNumber",
                    value: "mobileNumber",
                    type: 2,
                  },
                  {
                    key: "registrationFlag",
                    value: true,
                    type: 1,
                  },
                  {
                    key: "tranCode",
                    value: "0106",
                    type: 1,
                  },
                ],
              },
              returns: [
                {
                  code: 1,
                  responseConditions: {},
                  triggerId: 900602,
                  name: "jump to post-login home screen",
                },
              ],
            },
          },
        ],
      },
      {
        id: 900602,
        name: "toggle modal from response data",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [900603, 900604],
              },
            },
          },
        ],
      },
      {
        id: 900603,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 100501,
                nextWidgetId: 900502,
              },
            },
          },
        ],
      },
      {
        id: 900604,
        name: "Update redux stepper service",
        services: [
          {
            type: 10,
            name: "increment",
            command: {
              type: 1,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 900606,
        name: "Post prelogin forget password validation api",
        services: [
          {
            type: 8,
            name: "RestClientService",
            command: {
              type: 1,
              name: "postApi",
              attributes: {
                responseStateKey: "validationResponse",
                loaderWidgetIds: [904537],
                messageWidgetIds: [904536],
                name: "Response key used to saved in redux state and to refer it in later api call",
                uri: "http://ambitdigital1.avanzasolutions.com:8196/api/prelogin/v1/completeRegistration",
                checksum: "098f6bcd4621d373cade4e832627b4f6",
                encryption: true,
                isDeviceDetails: true,
                transactionCode: "0106",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  channel_key: "001",
                  CHECKSUM: "55Q59Y58Q06HOY1KKQ5K8K6MKK56KH59MKM9K59O",
                  CSRF_TOKEN: "4c6e939d-db00-4697-82d8-b69bb05aef5a",
                  locale: "en-ltr",
                },
                requestBodyType: 1,
                requestBody: [
                  {
                    key: "userIdenType",
                    value: "accountCardSelection",
                    type: 2,
                  },
                  {
                    key: "userIdenType",
                    value: "cardType.cardType",
                    type: 2,
                  },
                  {
                    key: "userIdenValue",
                    value: "userIdenValue",
                    type: 2,
                  },

                  {
                    key: "mobileNumber",
                    value: "mobileNumber",
                    type: 2,
                  },
                  {
                    key: "userName",
                    value: "userName",
                    type: 2,
                  },
                  {
                    key: "choosePassword",
                    value: "choosePassword",
                    type: 2,
                  },
                  {
                    key: "confirmPassword",
                    value: "confirmPassword",
                    type: 2,
                  },
                ],
              },
              returns: [
                {
                  code: 1,
                  responseConditions: {},
                  triggerId: 900607,
                  name: "jump to post-login home screen",
                },
              ],
            },
          },
        ],
      },
      {
        id: 900607,
        name: "toggle modal from response data",
        services: [
          {
            type: 2,
            name: "TriggerChainRunner",
            command: {
              type: 1,
              name: "RunSequentially",
              attributes: {
                triggerIds: [900608, 900609],
              },
            },
          },
        ],
      },
      {
        id: 900608,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 900502,
                nextWidgetId: 900601,
              },
            },
          },
        ],
      },
      {
        id: 900609,
        name: "Update redux stepper service",
        services: [
          {
            type: 10,
            name: "increment",
            command: {
              type: 1,
              name: "",
              attributes: {},
            },
          },
        ],
      },
      {
        id: 92,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2064,
                nextWidgetId: 2061,
              },
            },
          },
        ],
      },
      {
        id: 93,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2064,
                nextWidgetId: 2062,
              },
            },
          },
        ],
      },
      {
        id: 101,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2064,
                nextWidgetId: 4001,
              },
            },
          },
        ],
      },
      {
        id: 102,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2064,
                nextWidgetId: 4005,
              },
            },
          },
        ],
      },
      {
        id: 103,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2064,
                nextWidgetId: 4011,
              },
            },
          },
        ],
      },

      {
        id: 91,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2064,
                nextWidgetId: 2062,
              },
            },
          },
        ],
      },
      {
        id: 95,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3064,
                nextWidgetId: 3062,
              },
            },
          },
        ],
      },
      {
        id: 96,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3064,
                nextWidgetId: 3061,
              },
            },
          },
        ],
      },

      {
        id: 104,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3064,
                nextWidgetId: 4021,
              },
            },
          },
        ],
      },
      {
        id: 105,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3064,
                nextWidgetId: 4025,
              },
            },
          },
        ],
      },
      {
        id: 106,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3064,
                nextWidgetId: 4031,
              },
            },
          },
        ],
      },

      {
        id: 97,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3064,
                nextWidgetId: 3062,
              },
            },
          },
        ],
      },
      {
        id: 98,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 100508,
                nextWidgetId: 100507,
              },
            },
          },
        ],
      },
      {
        id: 99,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 100508,
                nextWidgetId: 100507,
              },
            },
          },
        ],
      },
      {
        id: 100,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 100508,
                nextWidgetId: 100506,
              },
            },
          },
        ],
      },
      {
        id: 100701,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 9015,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 100702,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9015,
                nextWidgetId: 9014,
              },
            },
          },
        ],
      },
      {
        id: 100703,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9015,
                nextWidgetId: 9011,
              },
            },
          },
        ],
      },
      {
        id: 100704,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9015,
                nextWidgetId: 9015,
              },
            },
          },
        ],
      },
      {
        id: 100705,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 9011,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 100706,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9011,
                nextWidgetId: 9014,
              },
            },
          },
        ],
      },
      {
        id: 100707,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9011,
                nextWidgetId: 9011,
              },
            },
          },
        ],
      },
      {
        id: 100708,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9011,
                nextWidgetId: 9015,
              },
            },
          },
        ],
      },
      {
        id: 501,
        name: "Flow manager login",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 2001,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 502,
        name: "Flow manager contact us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2001,
                nextWidgetId: 9014,
              },
            },
          },
        ],
      },
      {
        id: 503,
        name: "Flow manager faq",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2001,
                nextWidgetId: 9011,
              },
            },
          },
        ],
      },
      {
        id: 504,
        name: "Flow manager locate us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 2001,
                nextWidgetId: 9015,
              },
            },
          },
        ],
      },
      {
        id: 505,
        name: "Flow manager login",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 3001,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 506,
        name: "Flow manager contact us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3001,
                nextWidgetId: 9014,
              },
            },
          },
        ],
      },
      {
        id: 507,
        name: "Flow manager faq",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3001,
                nextWidgetId: 9011,
              },
            },
          },
        ],
      },
      {
        id: 508,
        name: "Flow manager locate us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 3001,
                nextWidgetId: 9015,
              },
            },
          },
        ],
      },
      {
        id: 509,
        name: "Flow manager login",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 900501,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 510,
        name: "Flow manager contact us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 900501,
                nextWidgetId: 9014,
              },
            },
          },
        ],
      },
      {
        id: 511,
        name: "Flow manager faq",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 900501,
                nextWidgetId: 9011,
              },
            },
          },
        ],
      },
      {
        id: 512,
        name: "Flow manager locate us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 900501,
                nextWidgetId: 9015,
              },
            },
          },
        ],
      },
      {
        id: 513,
        name: "Flow manager login",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 514,
        name: "Flow manager contact us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 9014,
              },
            },
          },
        ],
      },
      {
        id: 515,
        name: "Flow manager faq",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 9011,
              },
            },
          },
        ],
      },
      {
        id: 200528,
        name: "Flow manager locate us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 200528,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 200513,
        name: "Flow manager locate us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 200513,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 3016,
        name: "Flow manager locate us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 3016,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 2038,
        name: "Flow manager locate us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 2038,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 2016,
        name: "Flow manager locate us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 1,
              name: "swapping",
              attributes: {
                fromWidgetId: 2016,
                nextWidgetId: 9010,
              },
            },
          },
        ],
      },
      {
        id: 516,
        name: "Flow manager locate us",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 9010,
                nextWidgetId: 9015,
              },
            },
          },
        ],
      },
      {
        id: 531,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 100508,
                nextWidgetId: 200551,
              },
            },
          },
        ],
      },
      {
        id: 532,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 100508,
                nextWidgetId: 200555,
              },
            },
          },
        ],
      },
      {
        id: 533,
        name: "Flow manager serbice",
        services: [
          {
            type: 1,
            name: "Flow Manager Service",
            command: {
              type: 2,
              name: "swapping",
              attributes: {
                fromWidgetId: 100508,
                nextWidgetId: 200561,
              },
            },
          },
        ],
      },
      {
        id: 517,
        name: "redirect to offer and promotion screen",
        services: [
          {
            type: 12,
            name: "Redirect Service",
            command: {
              type: 1,
              name: "redirect to url",
              attributes: {
                url: "https://www.ajmanbank.ae/site/AjmanForLife/hospitality.php",
              },
            },
          },
        ],
      },
    ],
    assets: [
      {
        id: 1,
        uri: "https://ambitdigital1.avanzasolutions.com:8201/images/bank_logo/avanza.png",
        checksum: "098f6bcd4621d373cade4e832627b4f6",
      },
      {
        id: 2,
        uri: "http://172.16.11.56/images/card-logo.png",
        checksum: "098f6bcd4621d373cade4e832627b4f6",
      },
      {
        id: 3,
        uri: "https://assets.unify.com/",
        checksum: "098f6bcd4621d373cade4e832627b4f6",
      },
      {
        id: 4,
        uri: "https://ambitdigital1.avanzasolutions.com:8201/images/login-contact.png",
        checksum: "098f6bcd4621d373cade4e832627b4f6",
      },
      {
        id: 5,
        uri: "https://ambitdigital1.avanzasolutions.com:8201/images/login-offer.png",
        checksum: "098f6bcd4621d373cade4e832627b4f6",
      },
      {
        id: 6,
        uri: "https://ambitdigital1.avanzasolutions.com:8201/images/login-onlinePay.png",
        checksum: "098f6bcd4621d373cade4e832627b4f6",
      },
      {
        id: 7,
        uri: "https://ambitdigital1.avanzasolutions.com:8201/images/login-location.png",
        checksum: "098f6bcd4621d373cade4e832627b4f6",
      },
      {
        id: 8,
        uri: "https://ambitdigital1.avanzasolutions.com:8201/images/right-arrow-login.png",
        checksum: "098f6bcd4621d373cade4e832627b4f6",
      },
      {
        id: 9,
        uri: "https://ambitdigital1.avanzasolutions.com:8201/images/social/instagram-icon.png",
        checksum: "098f6bcd4621d373cade4e832627b4f6",
      },
    ],
  },
};

module.exports = { template };

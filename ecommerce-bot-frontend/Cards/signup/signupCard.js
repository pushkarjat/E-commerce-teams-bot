const config = require('../../config.json')

module.exports.cardToDisplay = () => {
    try {
        // var length = serviceList.length;

        var card = {
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [
                {
                    "type": "TextBlock",
                    "text": "E-Commerce Bot",
                    "horizontalAlignment": "Left",
                    "weight": "Bolder"
                } 
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
        }
        
        card['body'].push({
            "type": "TextBlock",
            "text": "SignUp",
            "wrap": true,
            "separator": true
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Email :",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "Input.Text",
                            "placeholder": "Email",
                            "id": "Email"
                        }
                    ]
                }
            ],
            "separator": true
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Password :",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "Input.Text",
                            "placeholder": "Password",
                            "id": "Password"
                        }
                    ]
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "First Name :",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "Input.Text",
                            "id": "firstName",
                            "placeholder": " "
                        }
                    ]
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Last Name :",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "Input.Text",
                            "id": "lastName",
                            "placeholder": " "
                        }
                    ]
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Address :",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "Input.Text",
                            "id": "address"
                        }
                    ]
                }
            ]
        },
        {
            "type": "ActionSet",
            "actions": [
                {
                    "type": "Action.Submit",
                    "value": "signup",
                    "action":"signup",
                    "title": "signup",
                    "data": {
                        "action": "signup" ,
                        "msteams": {
                            "type": "messageBack",
                            "displayText":  "signup"
                        }
                    }
                }
            ],
            "separator": true
        }
        ,{
            "type": "ActionSet",
            "actions": [
                {
                    "type": "Action.Submit",
                    "value": "Login",
                    "action":"Login",
                    "title": "Login",
                    "data": {
                        "action": "Login" ,
                        "msteams": {
                            "type": "messageBack",
                            "displayText":  "Login"
                        }
                    }
                }
            ],
            "separator": true
        },)
        return card
    } catch (error) {
        console.error(error);
        return config.errorMessage
    }

}
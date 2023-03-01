const questions = {
    "texture-dots": [
        // Reading vis questions
        {
            "id": 1,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["texture-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 2,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["texture-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 3,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["texture-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        // Reading vis concentration questions
        {
            "id": 4,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["texture-edit4.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 5,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["texture-edit5.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 6,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["texture-edit6.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 7,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["texture-edit7.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1
        },
        // Interpreting vis questions
        {
            "id": 8,
            "question": "What is the likelihood that the blue X-marked location has a medium concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Neutral",
            "image": ["texture-edit1.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 9,
            "question": "What is the likelihood that the blue X-marked location has a low concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Likely",
            "image": ["texture-edit5.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 10,
            "question": "What is the likelihood that the blue X-marked location has a low concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Unlikely",
            "image": ["texture-edit3.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 11, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["texture1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Texture/Colour"
        },
        {
            "id": 12, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["texture2.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Texture/Colour"
        },
        {
            "id": 13, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["texture3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Texture/Colour"
        },
    ],
    "texture-cross": [
        // Reading vis questions
        {
            "id": 14,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["texture-edit8.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 15,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["texture-edit9.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 16,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["texture-edit10.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        // Reading vis concentration questions
        {
            "id": 17,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["texture-edit11.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 18,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["texture-edit12.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 19,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["texture-edit13.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 20,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["texture-edit14.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1
        },
        // Interpreting vis questions
        {
            "id": 21,
            "question": "What is the likelihood that the blue X-marked location has a low concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Neutral",
            "image": ["texture-edit10.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 22,
            "question": "What is the likelihood that the blue X-marked location has a medium concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Likely",
            "image": ["texture-edit8.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 23,
            "question": "What is the likelihood that the blue X-marked location has a medium concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Unlikely",
            "image": ["texture-edit9.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 24, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["texture4.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Texture/Colour"
        },
        {
            "id": 25, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["texture5.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Texture/Colour"
        },
        {
            "id": 26, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["texture6.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Texture/Colour"
        },
    ]
}
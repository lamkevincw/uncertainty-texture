const instructionText = {
    "startPage": {
        "text-1": "In this study, you will be asked to perform a series of tasks that require you to view and interpret a visualization of a polluted location, and then answer some questions related to the visualization.",
        "text-2": "As seen in the example image above, pollutants (red area) have been spilled in land owned by a company that is shown bordered by the blue lines. They have employed underground sensors (blue triangles with a white border) to monitor the extent of the spill and have used a computer model to produce a 2D estimate of the size and shape of the polluted area.",
        "text-3": "The sensors can detect the concentration of the pollutants at various thresholds, which are marked by different colours (as shown in the left image). The pollution model is most certain about the concentration levels nearest the sensors. The certainty is reduced in proportion to the distance away from any given sensor (as shown in the right image).\n\nDifferent types of visualizations will be used in this study. Instructions will be shown to describe how to interpret these visualizations, followed by a set of 13 questions for that visualization type.\nYou can choose to take a short break at any time while the instructions are being shown, but please try to complete each set of questions as quickly as possible.\n\nPlease do not use the back button or refresh the page during the study, as the results will not be saved until all tasks have been completed.",
        "img-1": "start-img1.png",
        "img-2": "start-img2.png",
        "img-3": "start-img3.png"
    },
    "visPage": [
        {
            "name": "Texture - Dots",
            "text": "This visualization type uses colour and texture to differentiate between the concentration of the pollutants and the certainty of the pollution model.\n\nDifferent colours are used to distinguish between the levels of concentration, while textures (e.g., dotting) show the different degrees of certainty.\n\nYou may now choose to take a short break before proceeding to the questions with the Continue button.",
            "img-1": "vis-baseline.png",
            "img-2": "texture-dots-instruct.png"
        },
        {
            "name": "Texture - Cross-hatch",
            "text": "This visualization type uses colour and texture to differentiate between the concentration of the pollutants and the certainty of the pollution model.\n\nDifferent colours are used to distinguish between the levels of concentration, while textures (e.g., cross-hatching) show the different degrees of certainty.\n\nYou may now choose to take a short break before proceeding to the questions with the Continue button.",
            "img-1": "vis-baseline.png",
            "img-2": "texture-cross-instruct.png"
        }
    ],
    "questionPage": {
        "multiple": {
            "name": "Multiple Choice",
            "text": "The following set of questions will be multiple choice questions, similar to the example above. A visualization image will be presented with each question. Read the question carefully and select the response which most accurately and correctly answers the question.",
            "img": "multiple-choice-instruction.png"
        },
        "click": {
            "name": "Click",
            "text": "The following set of questions will require you to click on the image itself to answer the question. A visualization image will be presented with each question. Read the question carefully and click on the location on the image which most accurately and correctly answers the question.",
            "img": "click-instruction.png"
        },
        "multiple-text": {
            "name": "Multiple Choice - Textbox",
            "text": "The following set of questions will be multiple choice questions, followed by a text-entry box to describe your reasoning for your answer, similar to the example above. A visualization image will be presented with each question. Read the question carefully and select the response which most accurately and correctly answers the question, and provide a reason for your response.",
            "img": "multiple-choice-text-instruction.png"
        },
        "text": {
            "name": "Text Box",
            "text": "The following set of questions will be a short answer question. A visualization image will be presented with each question. Read the question carefully and enter your answer in the provided text box.",
            "img": "text-instruction.png"
        },
        "mouseover": {
            "name": "Mouseover",
            "text": "The following set of questions will include a mix of question types. In order to answer the questions, use your mouse to hover over the image, where a tooltip will inform you of the pollution model's certainty at that mouse location. A visualization image will be presented with each question. Read the question carefully before providing your response.",
            "img": "mouseover-instruct.png"
        }
    }
}
$(document).ready(function () {
    const words = [
        { text: "SQL", weight: 1 },
        { text: "Python", weight: 1 },
        { text: "Tableau", weight: 0.9 },
        { text: "Power BI", weight: 0.8 },
        { text: "GIT", weight: 0.7 },
        { text: "VBA", weight: 0.6 },
        { text: "Advanced Excel", weight: 0.6 },
        { text: "Business Intelligence", weight: 0.2 },
        { text: "Predictive Analytics", weight: 0.4 },
        { text: "Marketing Analytics", weight: 0.5 },
        { text: "ETL", weight: 0.3 },
        { text: "R", weight: 0.8 },
        { text: "ggplot2", weight: 0.6 },
        { text: "NLP", weight: 0.5 },
        { text: "matplotlib", weight: 0.4 },
        { text: "AWS", weight: 0.7 },
        { text: "Spark", weight: 0.5 },
        { text: "seaborn", weight: 0.2 },
        { text: "HTML", weight: 0.6 },
        { text: "CSS", weight: 0.5},
        { text: "Alteryx", weight: 0.2 },     
        { text: "KNIME", weight: 0.1 },
        { text: "Data Mining", weight: 0.4 },
        { text: "Database Design", weight: 0.3 },
        { text: "Data Visualization", weight: 0.3 },
        { text: "Machine Learning", weight: 0.5 },
        { text: "Data Warehousing", weight: 0.3 },
        { text: "Data Modeling", weight: 0.1 },
        { text: "Hive", weight: 0.3 },
        { text: "Google Analytics", weight: 0.5 },
        
    ];

    $('#word-cloud').jQCloud(words, {
        height: 350,
        autoResize: true,
        delay: 50
    });
});

function rand() {
    return Math.random() * 15;
}


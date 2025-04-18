const additionalQuestions = {
    powerBiSpecific: [
        {
            question: "What is a Power BI Premium Per User (PPU) license?",
            options: [
                "A license that gives organizations unlimited Power BI usage",
                "A license that provides Premium features to individual users",
                "A license only available for government organizations",
                "A license for using Power BI on mobile devices only"
            ],
            answer: 1,
            explanation: "Power BI Premium Per User (PPU) is a license type that provides individual users with Premium features like paginated reports, AI capabilities, and higher refresh rates without requiring organizational Premium capacity."
        },
        {
            question: "Which feature allows you to see how report changes will affect key metrics before implementing them?",
            options: [
                "Impact Analysis",
                "What-If Analysis",
                "Scenario Analysis",
                "Predictive Forecasting"
            ],
            answer: 1,
            explanation: "What-If Analysis in Power BI allows users to see how changes to parameters affect key metrics in real-time, helping to model different scenarios before implementation."
        },
        {
            question: "What is the purpose of the 'Analyze in Excel' feature in Power BI?",
            options: [
                "To convert Power BI reports to Excel format",
                "To use Excel to analyze data from a Power BI dataset",
                "To import Excel files into Power BI",
                "To export visuals to Excel"
            ],
            answer: 1,
            explanation: "The 'Analyze in Excel' feature allows users to connect to a published Power BI dataset from Excel, enabling them to build PivotTables, charts, and use other Excel features with the data from Power BI."
        },
        {
            question: "What is a paginated report in Power BI?",
            options: [
                "A report that focuses on data pagination features",
                "A report designed for printing or PDF generation with precise formatting",
                "A report that loads one page at a time",
                "A basic report type for beginners"
            ],
            answer: 1,
            explanation: "Paginated reports in Power BI are specifically designed for printing or PDF generation with precise formatting control, allowing for pixel-perfect layouts and pagination of large datasets."
        },
        {
            question: "What is the Power BI 'Smart Narrative' visual used for?",
            options: [
                "Creating charts based on natural language queries",
                "Automatically generating text summaries of data insights",
                "Translating reports to different languages",
                "Converting visualizations to text descriptions for accessibility"
            ],
            answer: 1,
            explanation: "The Smart Narrative visual in Power BI automatically generates text summaries of key insights from your data, helping to explain trends, patterns, and important points in natural language."
        },
        {
            question: "What is the 'Analyze' feature in Power BI visualizations?",
            options: [
                "A feature that performs detailed statistical analysis",
                "A quick insights tool for individual visuals",
                "A feature that analyzes report performance",
                "A tool that checks data quality"
            ],
            answer: 1,
            explanation: "The 'Analyze' feature in Power BI visualizations provides quick insights about the selected data point, automatically generating relevant analysis like time series forecasting, contribution analysis, and anomaly detection."
        },
        {
            question: "What is Composite Models in Power BI?",
            options: [
                "Models made from composite materials",
                "Models that combine imported tables and DirectQuery tables",
                "Models created by multiple developers",
                "3D composite visualizations"
            ],
            answer: 1,
            explanation: "Composite Models in Power BI allows combining tables from different data sources in the same model, enabling some tables to be in DirectQuery mode while others are imported, providing flexibility in handling large or real-time datasets."
        },
        {
            question: "What is the purpose of 'Deployment Pipelines' in Power BI?",
            options: [
                "To create ETL pipelines",
                "To manage the lifecycle of content from development to production",
                "To deploy reports to mobile devices",
                "To automate data refreshes"
            ],
            answer: 1,
            explanation: "Deployment Pipelines in Power BI provide a structured way to manage the lifecycle of content from development to production, allowing content to be moved between development, test, and production environments with proper testing and validation."
        },
        {
            question: "What is the maximum file size for a Power BI Desktop file (.pbix)?",
            options: [
                "100 MB",
                "1 GB",
                "10 GB",
                "There is no fixed limit, but performance may degrade with large files"
            ],
            answer: 3,
            explanation: "While there's no strict file size limit for Power BI Desktop (.pbix) files, practical limitations exist based on available memory and performance considerations. Files over 1 GB may experience performance issues."
        },
        {
            question: "What is the 'small multiples' feature in Power BI?",
            options: [
                "A visualization showing multiple small charts",
                "A data reduction technique",
                "A feature for creating mobile-friendly reports",
                "A method for displaying multiple small datasets"
            ],
            answer: 0,
            explanation: "Small multiples in Power BI is a visualization feature that displays multiple small versions of the same visual, each showing different portions of the dataset, allowing for easy comparison across categories or time periods."
        }
    ],
    dataAnalysis: [
        {
            question: "What is data normalization in the context of data analysis?",
            options: [
                "Converting data to a normal distribution",
                "Removing duplicates from data",
                "Organizing data into tables to minimize redundancy",
                "Scaling data to a common range (like 0-1)"
            ],
            answer: 3,
            explanation: "In data analysis, data normalization typically refers to scaling numerical data to a common range (often between 0 and 1) to make features comparable and improve algorithm performance."
        },
        {
            question: "What is a confidence interval in statistical analysis?",
            options: [
                "A measure of how confident an analyst is in their results",
                "A range of values that likely contains the true population parameter",
                "An interval that contains exactly 95% of the data",
                "The time interval during which analysis can be trusted"
            ],
            answer: 1,
            explanation: "A confidence interval is a range of values that likely contains the true population parameter with a specified level of confidence, accounting for sampling variability."
        },
        {
            question: "What is the purpose of A/B testing in data analysis?",
            options: [
                "To compare the performance of different algorithms",
                "To compare two versions of something to determine which performs better",
                "To test if data follows distribution A or distribution B",
                "To verify data quality between source A and source B"
            ],
            answer: 1,
            explanation: "A/B testing is an experimental methodology used to compare two versions (A and B) of a variable to determine which one performs better according to a predefined metric, commonly used in web design, marketing, and product development."
        },
        {
            question: "What is a correlation coefficient?",
            options: [
                "A measure of how accurately data was collected",
                "A measure of the correlation between data collection methods",
                "A measure of the strength and direction of the relationship between two variables",
                "A coefficient that corrects errors in data analysis"
            ],
            answer: 2,
            explanation: "A correlation coefficient is a statistical measure that expresses the strength and direction of the linear relationship between two variables, typically ranging from -1 (perfect negative correlation) to +1 (perfect positive correlation)."
        },
        {
            question: "What is data imputation?",
            options: [
                "The process of removing incorrect data",
                "The process of replacing missing values in a dataset",
                "The process of importing data into analysis tools",
                "The process of encrypting sensitive data"
            ],
            answer: 1,
            explanation: "Data imputation is the process of replacing missing values in a dataset with estimated values based on other available information, to maintain the usefulness of the dataset for analysis."
        },
        {
            question: "What is feature engineering in data analysis?",
            options: [
                "Building new physical features for data collection devices",
                "Creating new variables from existing data to improve model performance",
                "Engineering systems to extract features automatically",
                "The process of selecting the best features in a dataset"
            ],
            answer: 1,
            explanation: "Feature engineering is the process of creating new variables (features) from existing data to improve the performance of machine learning models by providing more relevant information or transforming data into more useful formats."
        },
        {
            question: "What does ANOVA (Analysis of Variance) test?",
            options: [
                "If there are significant differences between two or more means",
                "If data follows a normal distribution",
                "If variables are correlated",
                "If data has enough variance to be useful"
            ],
            answer: 0,
            explanation: "ANOVA (Analysis of Variance) is a statistical test used to determine if there are significant differences between the means of three or more independent groups, by analyzing the variance between and within those groups."
        },
        {
            question: "What is multicollinearity in the context of regression analysis?",
            options: [
                "Using multiple color coding systems in data visualization",
                "Running multiple regression analyses simultaneously",
                "High correlation among independent variables",
                "Analyzing data across multiple color spectrums"
            ],
            answer: 2,
            explanation: "Multicollinearity refers to a situation where independent variables in a regression model are highly correlated with each other, which can lead to unstable and misleading results regarding the individual effects of these variables."
        },
        {
            question: "What is the purpose of principal component analysis (PCA)?",
            options: [
                "To identify the principal causes of data errors",
                "To reduce dimensionality while preserving variance",
                "To analyze the main components of a database system",
                "To identify the most important variables without transformation"
            ],
            answer: 1,
            explanation: "Principal Component Analysis (PCA) is a dimensionality reduction technique that transforms a set of correlated variables into a smaller set of uncorrelated variables called principal components, while preserving as much variance in the data as possible."
        },
        {
            question: "What is a time series analysis?",
            options: [
                "Analysis of how long data operations take",
                "Analysis of data collected over time to identify patterns and trends",
                "Analysis of timestamps in database records",
                "Analysis of how much time users spend viewing reports"
            ],
            answer: 1,
            explanation: "Time series analysis involves methods for analyzing time-ordered data points to extract meaningful statistics, identify patterns, trends, seasonality, and sometimes to predict future values based on historical data."
        }
    ],
    etlAndDataPreparation: [
        {
            question: "What does ETL stand for in data processing?",
            options: [
                "Extract, Transform, Load",
                "Export, Transfer, Link",
                "Evaluate, Test, Launch",
                "Execute, Track, Log"
            ],
            answer: 0,
            explanation: "ETL stands for Extract, Transform, Load, which is a process used to collect data from various sources, transform it to fit operational needs, and load it into a destination database or data warehouse."
        },
        {
            question: "What is data cleansing?",
            options: [
                "Encrypting data for security purposes",
                "Removing all historical data",
                "Identifying and correcting errors in a dataset",
                "Cleaning database storage to free up space"
            ],
            answer: 2,
            explanation: "Data cleansing, also known as data cleaning, is the process of identifying and correcting (or removing) errors, inconsistencies, and inaccuracies in a dataset to improve its quality."
        },
        {
            question: "What is a data warehouse?",
            options: [
                "A large physical storage facility for hard drives",
                "A system for storing and managing current operational data",
                "A centralized repository for storing integrated data from multiple sources",
                "A cloud storage service for data backups"
            ],
            answer: 2,
            explanation: "A data warehouse is a centralized repository that stores integrated data from multiple sources, designed for query and analysis rather than transaction processing, typically containing historical data used for creating business intelligence."
        },
        {
            question: "What is a data lake?",
            options: [
                "A large database managed by data scientists",
                "A storage repository that holds a vast amount of raw data in its native format",
                "A visualization tool for large datasets",
                "A database specifically designed for time-series data"
            ],
            answer: 1,
            explanation: "A data lake is a storage repository that holds a vast amount of raw data in its native format until needed, allowing for diverse types of analytics from dashboards to big data processing and machine learning."
        },
        {
            question: "What is data partitioning?",
            options: [
                "Dividing data into separate, independent parts",
                "Separating sensitive data from non-sensitive data",
                "Creating partial backups of data",
                "Sharing data between different departments"
            ],
            answer: 0,
            explanation: "Data partitioning is the process of dividing a database or a dataset into distinct independent parts or partitions to improve manageability, performance, and availability while reducing the impact of maintenance operations."
        },
        {
            question: "What is a star schema in data warehousing?",
            options: [
                "A database design shaped like a star",
                "A data model with one central fact table connected to multiple dimension tables",
                "A schema that only works with star-rated data quality",
                "A hierarchical organization of database stars or celebrities"
            ],
            answer: 1,
            explanation: "A star schema is a data modeling technique used in data warehouses where one central fact table is connected to multiple dimension tables, forming a star-like structure that simplifies queries and improves performance."
        },
        {
            question: "What is 'slowly changing dimension' (SCD) in data warehousing?",
            options: [
                "A dimension that grows very slowly over time",
                "A method for handling dimension data that changes slowly over time",
                "A dimension with a slow database connection",
                "A technique to reduce the change rate in dimensions"
            ],
            answer: 1,
            explanation: "Slowly Changing Dimension (SCD) is a method for handling dimension data that changes slowly over time in a data warehouse, with different types (Type 1, 2, 3, etc.) determining how historical changes are tracked and stored."
        },
        {
            question: "What is data profiling?",
            options: [
                "Creating user profiles based on data",
                "Examining data to collect statistics and information about it",
                "Monitoring who accesses specific data",
                "Creating a public profile for your dataset"
            ],
            answer: 1,
            explanation: "Data profiling is the process of examining data from an existing source and collecting statistics and information about that data, to help understand its content, structure, relationships, and quality."
        },
        {
            question: "What is data lineage?",
            options: [
                "The historical record of data's ancestors",
                "Data that can only be accessed by certain bloodlines",
                "The lifecycle data goes through from origin to destination",
                "A technique for organizing data into family trees"
            ],
            answer: 2,
            explanation: "Data lineage describes the lifecycle that data goes through, from its origin to its destination and everything that happens to it along the way, providing visibility into the data flow and helping with impact analysis, debugging, and regulatory compliance."
        },
        {
            question: "What is data integration?",
            options: [
                "The process of combining data from different sources into a unified view",
                "Integrating data analysis into business processes",
                "The integration of data scientists into project teams",
                "Implementing data security across an organization"
            ],
            answer: 0,
            explanation: "Data integration is the process of combining data from different sources, formats, and systems to provide users with a unified view of the data, enabling more comprehensive analysis and decision-making."
        }
    ]
};

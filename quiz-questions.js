// This file contains all quiz questions for the Power BI & Data Analysis Quiz

const quizQuestions = {
    basics: [
        {
            question: "What is Power BI primarily used for?",
            options: [
                "Word processing",
                "Data visualization and business intelligence",
                "Video editing",
                "Programming"
            ],
            answer: 1,
            explanation: "Power BI is Microsoft's business analytics tool designed for data visualization and business intelligence, allowing users to create interactive dashboards and reports."
        },
        {
            question: "Which company developed Power BI?",
            options: [
                "Google",
                "Microsoft",
                "Oracle",
                "IBM"
            ],
            answer: 1,
            explanation: "Power BI was developed by Microsoft as part of their business intelligence tools suite."
        },
        {
            question: "What are the main components of Power BI?",
            options: [
                "Power BI Desktop, Power BI Service, Power BI Mobile",
                "Power BI Excel, Power BI Word, Power BI Outlook",
                "Power BI Home, Power BI Pro, Power BI Enterprise",
                "Power BI Cloud, Power BI Local, Power BI Hybrid"
            ],
            answer: 0,
            explanation: "The main components are Power BI Desktop (for creating reports), Power BI Service (web-based platform for sharing), and Power BI Mobile (for viewing on mobile devices)."
        },
        {
            question: "Which file extension is used for Power BI Desktop files?",
            options: [
                ".pbi",
                ".pbix",
                ".pbit",
                ".pbip"
            ],
            answer: 1,
            explanation: ".pbix is the file extension for Power BI Desktop files, which contain the report data, visualizations and data model."
        },
        {
            question: "What is the Power BI dataflow used for?",
            options: [
                "Creating visualizations",
                "ETL (Extract, Transform, Load) processes",
                "Publishing reports",
                "Managing user access"
            ],
            answer: 1,
            explanation: "Power BI dataflows are used for ETL (Extract, Transform, Load) processes, allowing data preparation tasks to be reused across multiple reports."
        },
        {
            question: "Which of these is NOT a Power BI product?",
            options: [
                "Power BI Desktop",
                "Power BI Mobile",
                "Power BI Excel",
                "Power BI Report Server"
            ],
            answer: 2,
            explanation: "Power BI Excel is not a Power BI product. The main products are Power BI Desktop, Power BI Service, Power BI Mobile, and Power BI Report Server."
        },
        {
            question: "What is Power BI Embedded?",
            options: [
                "A way to embed Power BI reports in other applications",
                "An on-premises version of Power BI",
                "A version of Power BI for mobile devices",
                "A specialized version for Excel"
            ],
            answer: 0,
            explanation: "Power BI Embedded is a capability that allows developers to embed Power BI reports, dashboards and visuals into their own applications."
        },
        {
            question: "The Power BI desktop has how many views?",
            options: [
                "2",
                "3",
                "4",
                "5"
            ],
            answer: 1,
            explanation: "Power BI Desktop has three main views: Report view (for creating visualizations), Data view (for examining and working with data), and Model view (for managing relationships)."
        },
        {
            question: "What is the purpose of Power BI Gateway?",
            options: [
                "To create dashboards",
                "To connect to on-premises data sources",
                "To publish reports to the web",
                "To create mobile reports"
            ],
            answer: 1,
            explanation: "Power BI Gateway allows you to connect to on-premises data sources and refresh data in Power BI Service from these sources."
        },
        {
            question: "Which of these is NOT a standard visualization in Power BI?",
            options: [
                "Bar chart",
                "Pie chart",
                "Neural network plot",
                "Line chart"
            ],
            answer: 2,
            explanation: "Neural network plot is not a standard visualization in Power BI. Bar charts, pie charts, and line charts are all standard visualizations."
        },
        {
            question: "What language is used for DAX (Data Analysis Expressions) in Power BI?",
            options: [
                "SQL",
                "Java",
                "Python",
                "Formula language similar to Excel"
            ],
            answer: 3,
            explanation: "DAX (Data Analysis Expressions) is a formula language similar to Excel formulas, designed for data analysis in Power BI, Power Pivot, and SSAS Tabular models."
        },
        {
            question: "Which data source cannot be directly connected to Power BI?",
            options: [
                "Excel",
                "SQL Server",
                "A handwritten document",
                "CSV file"
            ],
            answer: 2,
            explanation: "A handwritten document cannot be directly connected to Power BI as it's not a digital data source. Power BI can connect to various digital data sources like Excel, SQL Server, and CSV files."
        },
        {
            question: "What is the maximum file size limit for uploading to Power BI Service in the free version?",
            options: [
                "1 GB",
                "500 MB",
                "100 MB",
                "10 GB"
            ],
            answer: 1,
            explanation: "The maximum file size limit for uploading to Power BI Service in the free version is 500 MB."
        },
        {
            question: "What is a slicer in Power BI?",
            options: [
                "A visualization that filters other visualizations",
                "A tool to cut data into segments",
                "A method to delete data",
                "A way to combine multiple data sources"
            ],
            answer: 0,
            explanation: "A slicer in Power BI is a visualization that acts as a filter, allowing users to filter other visualizations on the report page."
        },
        {
            question: "Which of the following is NOT a Power BI license type?",
            options: [
                "Power BI Free",
                "Power BI Pro",
                "Power BI Premium",
                "Power BI Ultimate"
            ],
            answer: 3,
            explanation: "Power BI Ultimate is not a license type. The main license types are Power BI Free, Power BI Pro, and Power BI Premium."
        },
        {
            question: "Power BI refreshes data in the free version up to:",
            options: [
                "Once a day",
                "Twice a day",
                "8 times a day",
                "Unlimited times"
            ],
            answer: 0,
            explanation: "In the free version of Power BI, data can be refreshed up to once a day."
        },
        {
            question: "Which tool is used to clean and transform data in Power BI?",
            options: [
                "Power Query",
                "Power Pivot",
                "Power Map",
                "Power View"
            ],
            answer: 0,
            explanation: "Power Query (or Query Editor) is the tool used in Power BI to clean, transform, and shape data before loading it into the data model."
        },
        {
            question: "Which feature allows you to ask natural language questions about your data in Power BI?",
            options: [
                "Q&A",
                "Smart Narrative",
                "Quick Insights",
                "AI Insights"
            ],
            answer: 0,
            explanation: "The Q&A feature in Power BI allows users to ask natural language questions about their data and get immediate visualized answers."
        },
        {
            question: "What is the primary purpose of a dashboard in Power BI?",
            options: [
                "To create detailed reports",
                "To provide an at-a-glance view of key metrics",
                "To transform data",
                "To connect to data sources"
            ],
            answer: 1,
            explanation: "The primary purpose of a dashboard in Power BI is to provide an at-a-glance view of key metrics and important information from one or more reports."
        },
        {
            question: "What does the Power BI 'Refresh' button do?",
            options: [
                "Refreshes the visuals on the screen",
                "Updates the data from the data source",
                "Resets all filters",
                "Reformats all visualizations"
            ],
            answer: 1,
            explanation: "The 'Refresh' button in Power BI updates the data from the data source, bringing in the latest data available from the connected sources."
        }
    ],
    modeling: [
        {
            question: "What is a star schema in data modeling?",
            options: [
                "A modeling technique where tables are arranged in a star pattern",
                "A schema where one fact table is connected to multiple dimension tables",
                "A schema that only contains dimension tables",
                "A schema that only contains fact tables"
            ],
            answer: 1,
            explanation: "A star schema is a data modeling technique where one central fact table is connected to multiple dimension tables, forming a star-like pattern."
        },
        {
            question: "In Power BI, what is a calculated column?",
            options: [
                "A column that is calculated at query time",
                "A column that is calculated when the data is refreshed",
                "A column that changes based on user input",
                "A column that calculates the sum of other columns"
            ],
            answer: 1,
            explanation: "A calculated column in Power BI is a column that is calculated when the data is refreshed and stores a value for each row in the table."
        },
        {
            question: "What is a measure in Power BI?",
            options: [
                "A calculated field that performs aggregate functions",
                "A dimension in your data model",
                "A non-calculated column in a table",
                "A visual element on a report"
            ],
            answer: 0,
            explanation: "A measure in Power BI is a calculated field that performs aggregate functions (like sum, average, count) and is calculated at query time based on the current filter context."
        },
        {
            question: "What is the difference between implicit and explicit measures in Power BI?",
            options: [
                "Implicit measures are created automatically, explicit measures are user-defined",
                "Implicit measures use DAX, explicit measures use M",
                "Implicit measures are for dimensions, explicit measures are for facts",
                "There is no difference"
            ],
            answer: 0,
            explanation: "Implicit measures are created automatically by Power BI when you drag numerical fields to visuals, while explicit measures are those that users define using DAX expressions."
        },
        {
            question: "What is a relationship in Power BI data modeling?",
            options: [
                "A connection between two tables based on common fields",
                "A connection between two visualizations",
                "A connection between two reports",
                "A connection between two data sources"
            ],
            answer: 0,
            explanation: "A relationship in Power BI data modeling is a connection between two tables based on common fields, allowing for filtering and calculations across related tables."
        },
        {
            question: "What is cardinality in a relationship?",
            options: [
                "The uniqueness of values in the relationship",
                "The number of rows in the related tables",
                "The number of columns in the related tables",
                "The position of tables in the model"
            ],
            answer: 0,
            explanation: "Cardinality in a relationship refers to the uniqueness of values in the relationship, specifying how many rows in one table can relate to how many rows in another table (e.g., one-to-many, many-to-many)."
        },
        {
            question: "What is a snowflake schema?",
            options: [
                "A schema shaped like a snowflake",
                "A schema where dimension tables are normalized and connected to other dimension tables",
                "A schema that only works with snow/winter data",
                "A schema that has exactly six dimension tables"
            ],
            answer: 1,
            explanation: "A snowflake schema is a data modeling technique where dimension tables are normalized and can connect to other dimension tables, creating a more complex structure than a star schema."
        },
        {
            question: "What is a bridge table in data modeling?",
            options: [
                "A table that connects fact tables directly",
                "A table that helps establish many-to-many relationships",
                "A table that contains foreign keys only",
                "A table that connects to external data sources"
            ],
            answer: 1,
            explanation: "A bridge table in data modeling is an intermediate table that helps establish many-to-many relationships between other tables by breaking them down into one-to-many relationships."
        },
        {
            question: "What is the role of a date/calendar table in Power BI?",
            options: [
                "To store temporal data only",
                "To enable time intelligence functions and date hierarchy",
                "To replace timestamp columns in fact tables",
                "To create date-based visualizations only"
            ],
            answer: 1,
            explanation: "A date/calendar table in Power BI is used to enable time intelligence functions (like YTD, MTD) and to provide a consistent date hierarchy for filtering and aggregating data over time periods."
        },
        {
            question: "What is data normalization?",
            options: [
                "The process of organizing data to reduce redundancy",
                "The process of converting data to normal distribution",
                "The process of standardizing data formats",
                "The process of cleaning data"
            ],
            answer: 0,
            explanation: "Data normalization is the process of organizing data in a database to reduce redundancy by dividing large tables into smaller, related tables and defining relationships between them."
        },
        {
            question: "What is a fact table typically used for?",
            options: [
                "Storing descriptive attributes",
                "Storing measurements, metrics, or facts about business processes",
                "Defining user permissions",
                "Generating reports"
            ],
            answer: 1,
            explanation: "A fact table is typically used for storing measurements, metrics, or facts about business processes, such as sales amounts, quantities, or counts of events."
        },
        {
            question: "What is the preferred relationship filter direction in Power BI?",
            options: [
                "Single direction",
                "Bi-directional",
                "No filter",
                "Depends on the model"
            ],
            answer: 0,
            explanation: "The preferred relationship filter direction in Power BI is single direction, as bi-directional relationships can cause performance issues and ambiguity in complex models."
        },
        {
            question: "What is a dimension table typically used for?",
            options: [
                "Storing numerical data",
                "Storing descriptive attributes that are used to filter facts",
                "Performing calculations",
                "Creating relationships"
            ],
            answer: 1,
            explanation: "A dimension table is typically used for storing descriptive attributes (like product names, categories, dates) that are used to filter, group, and label the facts in fact tables."
        },
        {
            question: "What is denormalization in the context of data modeling?",
            options: [
                "Removing duplicated data",
                "Adding redundant data to improve query performance",
                "Normalizing data even further",
                "Dividing tables into smaller tables"
            ],
            answer: 1,
            explanation: "Denormalization in data modeling is the process of adding redundant data to improve query performance by reducing the need for complex joins between tables."
        },
        {
            question: "What is a composite model in Power BI?",
            options: [
                "A model that combines DirectQuery and Import mode",
                "A model that uses only DirectQuery mode",
                "A model that uses only Import mode",
                "A model that contains multiple fact tables"
            ],
            answer: 0,
            explanation: "A composite model in Power BI is a data model that combines DirectQuery and Import mode, allowing some tables to be in DirectQuery mode and others in Import mode."
        },
        {
            question: "What is a surrogate key?",
            options: [
                "A natural business key",
                "An artificial key created specifically for the database",
                "A foreign key that links to another table",
                "A key that can't be used in relationships"
            ],
            answer: 1,
            explanation: "A surrogate key is an artificial key created specifically for the database, often as a simple integer, that has no business meaning but uniquely identifies each row."
        },
        {
            question: "What does 'one-to-many' cardinality mean in a relationship?",
            options: [
                "One row in Table A can relate to many rows in Table B",
                "Many rows in Table A can relate to one row in Table B",
                "One row in Table A relates to exactly one row in Table B",
                "Many rows in Table A can relate to many rows in Table B"
            ],
            answer: 0,
            explanation: "'One-to-many' cardinality means that one row in Table A can relate to many rows in Table B, but each row in Table B relates to only one row in Table A."
        },
        {
            question: "What is a slowly changing dimension (SCD)?",
            options: [
                "A dimension that rarely changes its values",
                "A dimension that tracks changes to dimension attributes over time",
                "A dimension with very few records",
                "A dimension that changes quickly but is not tracked"
            ],
            answer: 1,
            explanation: "A slowly changing dimension (SCD) is a dimension that tracks changes to dimension attributes over time, preserving historical values and allowing for point-in-time analysis."
        },
        {
            question: "What is row-level security (RLS) in Power BI?",
            options: [
                "A feature that restricts data access at the row level based on user roles",
                "A feature that encrypts data at the row level",
                "A feature that compresses data at the row level",
                "A feature that sorts data at the row level"
            ],
            answer: 0,
            explanation: "Row-level security (RLS) in Power BI is a feature that restricts data access at the row level based on user roles, allowing different users to see different subsets of the data."
        },
        {
            question: "What is a calculated table in Power BI?",
            options: [
                "A table created using DAX expressions",
                "A table created by importing data",
                "A table created in the data source",
                "A table created by Power Query"
            ],
            answer: 0,
            explanation: "A calculated table in Power BI is a table created using DAX expressions rather than being imported or queried from an external data source."
        }
    ],
    dax: [
        {
            question: "What does the CALCULATE function do in DAX?",
            options: [
                "It performs basic arithmetic calculations",
                "It evaluates an expression in a modified filter context",
                "It calculates the sum of a column",
                "It calculates the average of a column"
            ],
            answer: 1,
            explanation: "The CALCULATE function in DAX evaluates an expression in a modified filter context, allowing you to change the context in which a calculation is performed."
        },
        {
            question: "What is a filter context in DAX?",
            options: [
                "The rows that are included due to filters applied to a calculation",
                "The columns that are included in a calculation",
                "The tables that are included in a calculation",
                "The visualization where the calculation is used"
            ],
            answer: 0,
            explanation: "A filter context in DAX refers to the set of rows that are included in a calculation due to filters applied from visuals, slicers, or explicitly in DAX functions."
        },
        {
            question: "What does the RELATED function do in DAX?",
            options: [
                "Returns a related value from another table",
                "Creates a relationship between tables",
                "Removes relationships between tables",
                "Calculates relations between values"
            ],
            answer: 0,
            explanation: "The RELATED function in DAX returns a related value from another table, using an existing relationship between the tables to look up the value."
        },
        {
            question: "What is the purpose of the ALL function in DAX?",
            options: [
                "To return all records in a table",
                "To return all tables in the model",
                "To remove all filters from the calculation",
                "To apply all filters to the calculation"
            ],
            answer: 2,
            explanation: "The ALL function in DAX is used to remove all filters from the specified table or column, returning all values regardless of any filters that might have been applied."
        },
        {
            question: "What is an iterator function in DAX?",
            options: [
                "A function that iterates through tables row by row",
                "A function that creates loops",
                "A function that moves between reports",
                "A function that iterates through relationships"
            ],
            answer: 0,
            explanation: "An iterator function in DAX (like SUMX, AVERAGEX) evaluates an expression for each row in a table and then aggregates the results."
        },
        {
            question: "Which of these is NOT a time intelligence function in DAX?",
            options: [
                "TOTALYTD",
                "SAMEPERIODLASTYEAR",
                "DATEMERGE",
                "DATESYTD"
            ],
            answer: 2,
            explanation: "DATEMERGE is not a time intelligence function in DAX. TOTALYTD, SAMEPERIODLASTYEAR, and DATESYTD are all valid time intelligence functions."
        },
        {
            question: "What does the FILTER function do in DAX?",
            options: [
                "Applies a filter to all visuals",
                "Returns a table that has been filtered",
                "Creates a filter in the query editor",
                "Defines row-level security"
            ],
            answer: 1,
            explanation: "The FILTER function in DAX returns a table that has been filtered based on the specified condition, creating a subset of the original table."
        },
        {
            question: "What is a virtual table in the context of DAX?",
            options: [
                "A table that exists in memory during calculation",
                "A table that doesn't contain real data",
                "A table that is visible only to administrators",
                "A table created in a virtual machine"
            ],
            answer: 0,
            explanation: "A virtual table in DAX is a table that exists temporarily in memory during the calculation process, often created by functions like FILTER, ALL, or VALUES."
        },
        {
            question: "What is the result of SUM()?",
            options: [
                "The sum of all values in the specified column",
                "The sum of the current row",
                "An error because SUM requires an argument",
                "Zero"
            ],
            answer: 2,
            explanation: "SUM() without an argument will result in an error because the SUM function requires a column or expression to aggregate."
        },
        {
            question: "What does DISTINCTCOUNT do in DAX?",
            options: [
                "Counts all rows in a table",
                "Counts all columns in a table",
                "Counts distinct values in a column",
                "Counts duplicate values in a column"
            ],
            answer: 2,
            explanation: "DISTINCTCOUNT in DAX counts the number of distinct (unique) values in a column, ignoring any duplicate values."
        },
        {
            question: "What is the purpose of variables in DAX (using VAR keyword)?",
            options: [
                "To store the results of expressions for later use in the formula",
                "To define global variables for the entire data model",
                "To create query parameters",
                "To define column names"
            ],
            answer: 0,
            explanation: "Variables in DAX (defined with the VAR keyword) are used to store the results of expressions for later use within the same formula, making complex formulas more readable and efficient."
        },
        {
            question: "Which function would you use to get the previous quarter's value?",
            options: [
                "PREVIOUSQUARTER",
                "DATEADD",
                "SAMEPERIODLASTYEAR",
                "PARALLELPERIOD"
            ],
            answer: 3,
            explanation: "PARALLELPERIOD is the function you would use to get the previous quarter's value, as it allows you to shift dates by a specified number of intervals (like quarters)."
        },
        {
            question: "What is the correct syntax for creating a measure in DAX?",
            options: [
                "New Measure = SUM(Sales[Amount])",
                "CREATE MEASURE SUM(Sales[Amount])",
                "MEASURE = SUM(Sales[Amount])",
                "DEFINE MEASURE AS SUM(Sales[Amount])"
            ],
            answer: 0,
            explanation: "The correct syntax for creating a measure in DAX is \"Measure Name = Expression\", for example: \"New Measure = SUM(Sales[Amount])\"."
        },
        {
            question: "Which of these is a valid DAX function for text manipulation?",
            options: [
                "CONCATENATE",
                "TEXTJOIN",
                "STRCAT",
                "APPEND"
            ],
            answer: 0,
            explanation: "CONCATENATE is a valid DAX function for text manipulation, used to join two text strings into one."
        },
        {
            question: "What does the BLANK() function return in DAX?",
            options: [
                "A zero",
                "An empty string",
                "A null value",
                "An error"
            ],
            answer: 2,
            explanation: "The BLANK() function in DAX returns a null value, which represents the absence of a value (different from zero or an empty string)."
        },
        {
            question: "What is a context transition in DAX?",
            options: [
                "The process of moving from row context to filter context",
                "The process of changing from one page to another",
                "The process of moving between tables",
                "The process of changing filter contexts"
            ],
            answer: 0,
            explanation: "A context transition in DAX is the process of converting a row context into a filter context, which happens implicitly when you reference a measure within a calculated column or when using certain functions."
        },
        {
            question: "Which function would you use to get the first date in the current month?",
            options: [
                "STARTOFMONTH",
                "FIRSTDATE",
                "MONTHSTART",
                "FIRSTDAYOFMONTH"
            ],
            answer: 0,
            explanation: "The STARTOFMONTH function in DAX returns the first date of the month in the specified date column."
        },
        {
            question: "What does the SELECTEDVALUE function do?",
            options: [
                "Returns the selected value in a slicer",
                "Returns a value when there's only one value in the filter context",
                "Returns the value selected by the user",
                "Returns the maximum selected value"
            ],
            answer: 1,
            explanation: "The SELECTEDVALUE function in DAX returns a value when there's only one value in the filter context, or an alternate result if there are multiple values or no values."
        },
        {
            question: "What is the primary difference between SUMX and SUM?",
            options: [
                "SUMX can evaluate an expression for each row, SUM only sums a column",
                "SUMX works on multiple tables, SUM works on a single table",
                "SUMX is faster than SUM",
                "SUMX accepts text values, SUM only accepts numbers"
            ],
            answer: 0,
            explanation: "The primary difference is that SUMX can evaluate a custom expression for each row before summing the results, while SUM simply adds up the values in a column."
        },
        {
            question: "What does the FORMAT function do in DAX?",
            options: [
                "Formats a table's appearance",
                "Formats a value as text with specified formatting",
                "Formats a data model",
                "Formats a visualization"
            ],
            answer: 1,
            explanation: "The FORMAT function in DAX converts a value to text with the specified formatting applied, such as currency, percentage, or date formats."
        }
    ],
    visualization: [
        {
            question: "What type of chart is best for showing parts of a whole?",
            options: [
                "Line chart",
                "Scatter plot",
                "Pie chart",
                "Bar chart"
            ],
            answer: 2,
            explanation: "A pie chart is best for showing parts of a whole, as it visually represents how individual parts contribute to a total (100%)."
        },
        {
            question: "What is a KPI (Key Performance Indicator) in data visualization?",
            options: [
                "A type of chart that shows multiple metrics",
                "A measure of performance against a target",
                "A key that uniquely identifies a performance metric",
                "A type of data source"
            ],
            answer: 1,
            explanation: "A KPI (Key Performance Indicator) in data visualization is a measure of performance against a defined target, helping to track progress toward business objectives."
        },
        {
            question: "What type of chart is best for showing trends over time?",
            options: [
                "Pie chart",
                "Line chart",
                "Treemap",
                "Gauge"
            ],
            answer: 1,
            explanation: "A line chart is best for showing trends over time, as it clearly illustrates changes, patterns, and trends in data across a continuous time period."
        },
        {
            question: "What is a heatmap used for?",
            options: [
                "Showing the relationship between two categories",
                "Showing magnitude of values using color intensity",
                "Showing geographical data on a map",
                "Showing hierarchical data"
            ],
            answer: 1,
            explanation: "A heatmap is used for showing the magnitude of values using color intensity, making it easy to spot patterns, concentrations, and variations in data across two dimensions."
        },
        {
            question: "What does a funnel chart typically represent?",
            options: [
                "Time-based data",
                "Comparison between categories",
                "Stages in a sequential process",
                "Distribution of values"
            ],
            answer: 2,
            explanation: "A funnel chart typically represents stages in a sequential process, showing values decreasing progressively through the stages (like a sales process or conversion funnel)."
        },
        {
            question: "What is a slicer in the context of data visualization?",
            options: [
                "A visual filter that narrows the data shown in other visualizations",
                "A tool that divides a chart into smaller parts",
                "A function that reduces the data size",
                "A tool that cuts the dataset into training and testing sets"
            ],
            answer: 0,
            explanation: "In data visualization, a slicer is a visual filter that allows users to narrow down the data shown in other visualizations on the same page, making it easy to analyze specific segments."
        },
        {
            question: "What is the purpose of drill-down in data visualization?",
            options: [
                "To remove detailed data",
                "To navigate from summary data to more detailed levels",
                "To create relationships between visuals",
                "To delete unnecessary visualizations"
            ],
            answer: 1,
            explanation: "The purpose of drill-down in data visualization is to navigate from summary or aggregate data to more detailed levels, allowing users to explore the underlying data behind high-level metrics."
        },
        {
            question: "What is a dashboard?",
            options: [
                "A single visualization that shows key metrics",
                "A collection of visualizations on a single page",
                "A tool for data modeling",
                "A type of chart"
            ],
            answer: 1,
            explanation: "A dashboard is a collection of visualizations arranged on a single page to provide a comprehensive view of key metrics and information at a glance."
        },
        {
            question: "What is cross-filtering in Power BI?",
            options: [
                "The ability for selections in one visual to filter other visuals",
                "Applying the same filter to all pages",
                "Filtering data across multiple data sources",
                "Creating a filter that applies to multiple columns"
            ],
            answer: 0,
            explanation: "Cross-filtering in Power BI is the ability for selections in one visual to automatically filter other visuals on the same page, creating an interactive experience."
        },
        {
            question: "What is bookmarking in Power BI?",
            options: [
                "Saving a website link for later reference",
                "Saving the current state of filters and selections",
                "Creating a reference point in the data model",
                "Adding a description to a visual"
            ],
            answer: 1,
            explanation: "Bookmarking in Power BI is the feature that allows you to save the current state of a report page, including filters, slicers, and visual selections, for easy access later."
        },
        {
            question: "What is a tooltip in data visualization?",
            options: [
                "A hint that appears when hovering over a visual element",
                "A small visual that appears at the top of a report",
                "A feature that shows all report tooltips",
                "A type of chart"
            ],
            answer: 0,
            explanation: "A tooltip in data visualization is a hint or additional information that appears when hovering over a visual element, providing context or details about the specific data point."
        },
        {
            question: "What is the primary purpose of a waterfall chart?",
            options: [
                "To show how water flows through a system",
                "To visualize sequential changes to an initial value",
                "To display time-based data",
                "To compare values between categories"
            ],
            answer: 1,
            explanation: "The primary purpose of a waterfall chart is to visualize sequential changes (increases and decreases) to an initial value, showing how it changes over time or across categories."
        },
        {
            question: "In data visualization, what is binning?",
            options: [
                "Putting data into the recycle bin",
                "Grouping numeric data into ranges",
                "Creating binary (yes/no) data",
                "Removing outliers from the dataset"
            ],
            answer: 1,
            explanation: "In data visualization, binning is the process of grouping numeric data into ranges or 'bins' to simplify analysis and visualization of distributions."
        },
        {
            question: "What is a choropleth map?",
            options: [
                "A map that shows routes between locations",
                "A map that uses color intensity to represent values in different regions",
                "A map that shows population density only",
                "A map that shows only country boundaries"
            ],
            answer: 1,
            explanation: "A choropleth map is a type of thematic map that uses color intensity or patterns to represent values in different geographical regions, making it easy to see spatial patterns."
        },
        {
            question: "What is the purpose of small multiples in data visualization?",
            options: [
                "To create tiny charts that are hard to see",
                "To show the same visualization for different categories or time periods",
                "To reduce the size of visualizations",
                "To create multiple small dashboards"
            ],
            answer: 1,
            explanation: "The purpose of small multiples in data visualization is to show the same visualization repeated for different categories or time periods, allowing for easy comparison across segments."
        },
        {
            question: "What does the 'Focus mode' in Power BI allow you to do?",
            options: [
                "Zoom in on a particular visual",
                "Focus only on specific data points",
                "Add a spotlight effect to a visual",
                "Remove distractions from the screen"
            ],
            answer: 0,
            explanation: "The 'Focus mode' in Power BI allows you to zoom in on a particular visual, expanding it to fill the entire screen so you can examine it in detail without distractions."
        },
        {
            question: "What is a scatter chart best used for?",
            options: [
                "Showing trends over time",
                "Showing relationships between two numerical variables",
                "Showing parts of a whole",
                "Showing hierarchical data"
            ],
            answer: 1,
            explanation: "A scatter chart is best used for showing relationships or correlations between two numerical variables, with each point representing an observation or data point."
        },
        {
            question: "What is a decomposition tree in Power BI?",
            options: [
                "A visual that breaks down a measure by different dimensions",
                "A visual that shows the structure of a forest",
                "A visual that decomposes complex formulas",
                "A visual that breaks apart and analyzes text data"
            ],
            answer: 0,
            explanation: "A decomposition tree in Power BI is an AI-powered visual that breaks down a measure by different dimensions, allowing for interactive exploration of the data across multiple levels."
        },
        {
            question: "What is conditional formatting in data visualization?",
            options: [
                "Changing the appearance of a visual based on conditions",
                "Creating conditions for data to appear in a visual",
                "Formatting data only when certain conditions are met",
                "Creating conditional relationships between tables"
            ],
            answer: 0,
            explanation: "Conditional formatting in data visualization is the technique of changing the appearance of visual elements (like colors, icons, or font styles) based on specified conditions or thresholds."
        },
        {
            question: "What is the purpose of a reference line in a chart?",
            options: [
                "To reference another chart",
                "To highlight a significant value or threshold",
                "To create a reference to the data source",
                "To link to external documentation"
            ],
            answer: 1,
            explanation: "The purpose of a reference line in a chart is to highlight a significant value or threshold (like an average, target, or benchmark) for comparison with the actual data values."
        }
    ],
    advanced: [
        {
            question: "What is predictive analytics?",
            options: [
                "Analyzing past data to make predictions about future events",
                "Analyzing real-time data for current insights",
                "Analyzing user predictions",
                "Analyzing the accuracy of visualizations"
            ],
            answer: 0,
            explanation: "Predictive analytics is the practice of analyzing past and current data to make predictions about future events or trends, often using statistical algorithms and machine learning techniques."
        },
        {
            question: "What is the Quick Insights feature in Power BI?",
            options: [
                "A feature that quickly loads data",
                "An automated tool that searches for interesting patterns in data",
                "A feature that provides quick access to frequently used visuals",
                "A feature that simplifies complex data models"
            ],
            answer: 1,
            explanation: "Quick Insights in Power BI is an automated tool that uses AI to search for interesting patterns, trends, and relationships in your data, generating visualizations to highlight these insights."
        },
        {
            question: "What is R integration in Power BI used for?",
            options: [
                "Running R scripts for advanced data analysis and visualization",
                "Registering new data sources",
                "Relating tables in the data model",
                "Refreshing data automatically"
            ],
            answer: 0,
            explanation: "R integration in Power BI is used for running R scripts to perform advanced data analysis and create custom visualizations that aren't available in the standard Power BI visual library."
        },
        {
            question: "What is the purpose of the Power BI Q&A feature?",
            options: [
                "To provide answers about Power BI functionality",
                "To allow users to ask natural language questions about their data",
                "To create a FAQ section in reports",
                "To answer questions about DAX formulas"
            ],
            answer: 1,
            explanation: "The purpose of the Power BI Q&A feature is to allow users to ask natural language questions about their data and get immediate visualized answers, making data exploration more intuitive."
        },
        {
            question: "What is time series analysis?",
            options: [
                "Analysis of data collected at different points in time",
                "Analysis of how long users spend viewing reports",
                "Analysis of when reports are created",
                "Analysis of server response times"
            ],
            answer: 0,
            explanation: "Time series analysis is the analysis of data collected at different points in time, looking for patterns, trends, seasonality, and other time-dependent characteristics."
        },
        {
            question: "What is cohort analysis?",
            options: [
                "Analysis of data by age groups",
                "Analysis of groups of users who share common characteristics",
                "Analysis of how users work together",
                "Analysis of genetic cohorts"
            ],
            answer: 1,
            explanation: "Cohort analysis is the analysis of groups of users who share common characteristics or experiences within a defined time period, often used to track behavior or metrics over time."
        },
        {
            question: "What is anomaly detection?",
            options: [
                "Identifying software bugs in Power BI",
                "Identifying unusual patterns that deviate from expected behavior",
                "Detecting unauthorized access to data",
                "Identifying missing data points"
            ],
            answer: 1,
            explanation: "Anomaly detection is the process of identifying unusual patterns, events, or observations in data that deviate from expected behavior, which could indicate problems, opportunities, or errors."
        },
        {
            question: "What is RLS (Row-Level Security) used for in Power BI?",
            options: [
                "Restricting access to specific rows of data based on user roles",
                "Securing relationships between tables",
                "Restricting access to specific reports",
                "Securing the row count in large datasets"
            ],
            answer: 0,
            explanation: "RLS (Row-Level Security) in Power BI is used for restricting access to specific rows of data based on user roles, ensuring users only see the data they're authorized to view."
        },
        {
            question: "What is a calculated column vs. a measure in Power BI?",
            options: [
                "Calculated columns are evaluated per row at data refresh time; measures are evaluated at query time",
                "Calculated columns can only use simple formulas; measures can use complex ones",
                "Calculated columns are visible in tables; measures are not",
                "Calculated columns are faster than measures"
            ],
            answer: 0,
            explanation: "The key difference is that calculated columns are evaluated per row when data is refreshed and store a result for each row, while measures are evaluated at query time in the context of the current visualization."
        },
        {
            question: "What is the purpose of DataFlows in Power BI?",
            options: [
                "To visualize data flows between systems",
                "To prepare and transform data for reuse across multiple reports",
                "To control the flow of data in real-time",
                "To restrict data access based on flows"
            ],
            answer: 1,
            explanation: "The purpose of DataFlows in Power BI is to prepare and transform data (using Power Query) for reuse across multiple reports, allowing for centralized data preparation and management."
        },
        {
            question: "What is incremental refresh in Power BI?",
            options: [
                "A feature that refreshes only part of the data based on a date/time column",
                "A feature that refreshes data incrementally throughout the day",
                "A feature that adds new data without removing old data",
                "A feature that refreshes visuals one at a time"
            ],
            answer: 0,
            explanation: "Incremental refresh in Power BI is a feature that refreshes only part of the data (typically newer data) based on a date/time column, reducing refresh times and resource usage for large datasets."
        },
        {
            question: "What are aggregations in Power BI?",
            options: [
                "Functions that combine multiple values into one",
                "Pre-calculated summaries of data to improve query performance",
                "Visual elements that group data",
                "Relationships between aggregate tables"
            ],
            answer: 1,
            explanation: "Aggregations in Power BI are pre-calculated summaries of data at different levels of granularity to improve query performance, especially for large datasets and complex calculations."
        },
        {
            question: "What is a key influencer analysis?",
            options: [
                "Analysis of which users influence others",
                "Analysis of which factors most influence a metric",
                "Analysis of key performance indicators",
                "Analysis of influencer marketing campaigns"
            ],
            answer: 1,
            explanation: "A key influencer analysis in Power BI is an AI-powered analysis that identifies which factors most influence a metric or outcome, showing the relative importance of different variables."
        },
        {
            question: "What is a decomposition tree analysis?",
            options: [
                "Analysis of how tree structures decompose",
                "Analysis that breaks down a measure by different dimensions",
                "Analysis of organizational hierarchies",
                "Analysis of how components break down over time"
            ],
            answer: 1,
            explanation: "A decomposition tree analysis in Power BI is an analysis that breaks down a measure by different dimensions, allowing users to drill down through multiple levels to understand what's driving the results."
        },
        {
            question: "What is the purpose of the SUMMARIZE function in DAX?",
            options: [
                "To provide a textual summary of a dataset",
                "To create a summary table with group-by operations",
                "To summarize the data model structure",
                "To create a visual summary"
            ],
            answer: 1,
            explanation: "The purpose of the SUMMARIZE function in DAX is to create a summary table that groups data by specified columns and can calculate aggregations for each group, similar to a GROUP BY in SQL."
        },
        {
            question: "What is sentiment analysis?",
            options: [
                "Analysis of how users feel about Power BI",
                "Analysis of opinions and emotions in text data",
                "Analysis of customer satisfaction metrics",
                "Analysis of employee sentiment"
            ],
            answer: 1,
            explanation: "Sentiment analysis is the process of analyzing opinions and emotions expressed in text data to determine whether the attitude is positive, negative, or neutral, often applied to customer feedback or social media."
        },
        {
            question: "What is DirectQuery mode in Power BI?",
            options: [
                "A mode where data is directly queried from the source without importing",
                "A mode that allows direct queries from users",
                "A mode that directly queries the Power BI service",
                "A mode that queries data directly from Excel"
            ],
            answer: 0,
            explanation: "DirectQuery mode in Power BI is a connection mode where data is directly queried from the source without importing it into the Power BI data model, ensuring that reports always show the latest data."
        },
        {
            question: "What is Power BI embedded?",
            options: [
                "A way to embed Power BI in the operating system",
                "A capability to integrate Power BI content into custom applications",
                "A feature that embeds data within reports",
                "A tool for embedding external content in Power BI"
            ],
            answer: 1,
            explanation: "Power BI Embedded is a capability that allows developers to integrate or embed Power BI reports, dashboards, and visuals into custom applications, websites, or portals."
        },
        {
            question: "What is the difference between importing data and DirectQuery in Power BI?",
            options: [
                "Importing data copies the data into Power BI; DirectQuery leaves data at the source",
                "Importing data is slower; DirectQuery is faster",
                "Importing data uses less memory; DirectQuery uses more",
                "Importing data is for small datasets; DirectQuery is for text data only"
            ],
            answer: 0,
            explanation: "The main difference is that importing data copies the data into Power BI's in-memory data model, while DirectQuery leaves the data at the source and queries it on-demand."
        },
        {
            question: "What is a drill-through in Power BI?",
            options: [
                "A way to navigate through historical data",
                "A feature that allows users to see more detailed data related to a data point",
                "A technique to analyze data deeply",
                "A way to create holes in visualizations"
            ],
            answer: 1,
            explanation: "A drill-through in Power BI is a feature that allows users to right-click on a data point in a visualization and navigate to a different report page with detailed information about that specific data point."
        }
    ]
};
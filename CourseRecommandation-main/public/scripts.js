var gradeValues = { 'A': 10, 'A-': 9, 'B': 8, 'B-': 7, 'C': 6, 'C-': 5, 'D': 4, 'E': 2, 'NC': 0 }
var valueGrades = { 10: 'A', 9: 'A-', 8: 'B', 7: 'B-', 6: 'C', 5: 'C-', 4: 'D', 2: 'E', 0: 'NC' }

var subjects = [
    "ENGINEERING GRAPHICS",
    "COMPUTER PROGRAMMING",
    "GENERAL BIOLOGY",
    "BIOLOGY LABORATORY",
    "TECHNICAL REPORT WRITING",
    "THERMODYNAMICS",
    "WORKSHOP PRACTICE",
    "CHEMISTRY LABORATORY",
    "PHYSICS LABORATORY",
    "GENERAL CHEMISTRY",
    "MATHEMATICS I",
    "PROBABILITY & STATISTICS",
    "ENVIRONMENTAL STUDIES",
    "PRACTICE SCHOOL I",
    "MECH OSCILLATIONS & WAVE",
    "ELECTRICAL SCIENCES",
    "MATHEMATICS II",
    "MATHEMATICS III",
    "PRACTICE SCHOOL II",
    "PRINCIPLES OF ECONOMICS",
    "DIGITAL DESIGN",
    "MICROPROC & INTERFACING",
    "OBJECT ORIENTED PROG",
    "OPERATING SYSTEMS",
    "FUNDA OF FIN AND ACCOUNT",
    "CONTROL SYSTEMS",
    "ELECTRONIC DEVICES",
    "SIGNALS & SYSTEMS",
    "ANALOG ELECTRONICS",
    "MICROELECTRONIC CIRCUITS",
    "ELECTRICAL MACHINES",
    "STUDY PROJECT",
    "DERIVATIVES & RISK MGMT",
    "SECUR ANAL & PORTFOL MGT",
    "FLUID MECHANICS",
    "DESIGN PROJECT",
    "DATA STRUCTURES & ALGO",
    "FINANCIAL MANAGEMENT",
    "BUSS ANAL & VALUATION",
    "COMPUTER ARCHITECTURE",
    "COMMUNICATION SYSTEMS",
    "CRYPTOGRAPHY",
    "LOGIC IN COMPUTER SC",
    "LABORATORY PROJECT",
    "MECHANICS OF SOLIDS",
    "INTERNET OF THINGS",
    "PRINCIPLES OF MANAGEMENT",
    "HEAT TRANSFER",
    "DISASTER AND DEVELOPMENT",
    "DATABASE SYSTEMS",
    "ANALOG & DIGIT VLSI DES",
    "PRINCIPLES OF PROGG LANG",
    "COMPILER CONSTRUCTION",
    "COMPUTER NETWORKS",
    "DESIGN & ANAL OF ALGO",
    "THEORY OF COMPUTATION",
    "MACHINE LEARNING",
    "DISCR STRUC FOR COMP SCI",
    "OPTIMIZATION",
    "ELEC & ELECTRONIC CIRCUITS LAB",
    "POWER ELECTRONICS",
    "CONTROL SYSTEMS LABORATORY",
    "PROJECT APPRAISAL",
    "GAME THEORY AND ITS APPLICATIO",
    "ARTIFICIAL INTELLIGENCE",
    "ELECTROMAGNETIC THEO",
    "APPLIED THERMODYNAMICS",
    "ENGINEERING OPTIMIZATION",
    "NEURAL NET & FUZZY LOGIC",
    "PRIMEMOVERS & FLUID MACH",
    "DIGITAL IMAGE PROCESSING",
    "DIGITAL SIGNAL PROCESS",
    "DISCRETE MATHEMATICS",
    "COMMUNICATION NETWORKS",
    "EM FIELDS & MICRO ENGG",
    "SRIMAD BHAGAVAD GITA",
    "INFO THEORY & CODING",
    "THESIS",
    "HUMAN RESOURCE DEVELOP",
    "ELECTROMAGNETIC THEORY",
    "FINANCIAL RISK ANALYTICS & M",
    "FOUNDATIONS OF DATA SCIENCE",
    "CULTURAL STUDIES",
    "URBAN POLICY AND GOVERNANCE",
    "POWER SYSTEMS",
    "INFORMATION RETRIEVAL",
    "IC ENGINES",
    "MECHANICAL VIBRATIONS",
    "INTRODUCTION TO CRITICAL PEDAG",
    "COMPUTER AIDED DESIGN",
    "ADV MECHANICS OF SOLIDS",
    "KIN & DYN OF MACHINES",
    "PRODUCTION TECHNIQUES I",
    "MACHINE DESIGN & DRAWING",
    "PRODUCTION TECHNIQUES II",
    "MATERIALS SCIENCE & ENGG",
    "MECHANICAL ENGG LAB",
    "HUM THEO OF SC & TECH",
    "DATA MINING",
    "ECONOMETRIC METHODS",
    "INSTRU METHODS OF ANAL",
    "NUMBER THEORY",
    "LINGUISTICS",
    "COMPARATIVE INDIAN LIT",
    "SCIENCE,TECH & MODERNITY",
    "SUPPLY CHAIN MANAGEMENT",
    "MATHEMATIC & STAT METHOD",
    "PUBLIC ADMINISTRATION",
    "SOFTWARE ENGINEERING",
    "SEL TOPICS FROM COMP SC",
    "INTRODUCTORY PHILOSOPHY",
    "HUMAN COMP INTERACTION",
    "POP LITER & CULT S ASIA",
    "ELECTROMAGNETIC THEO I",
    "ADV COMMUNICATIVE ENG",
    "CREATIVE WRITING",
    "MONEY BANK & FIN MARKETS",
    "MICROECONOMICS",
    "BUSINESS COMMUNICATION",
    "MACROECONOMICS",
    "CONTEMPORARY INDIA",
    "BIOLOGICAL CHEMISTRY",
    "MICROBIOLOGY",
    "ECONOMIC ENV OF BUSINESS",
    "CONSTRUCTION PLAN & TECH",
    "SURVEYING",
    "HYDRAULIC ENGINEERING",
    "DES OF STEEL STRUCTURES",
    "DESIGN OF REINFORCED CONCRETE",
    "WATER & WASTEWATER TREAT",
    "HIGHWAY ENGINEERING",
    "SOIL MECHANICS",
    "ANALYSIS OF STRUCTURES",
    "ENGINEERING HYDROLOGY",
    "FOUNDATION ENGINEERING",
    "CIVIL ENGINEERING MATERIALS",
    "INTERNATIONAL ECONOMICS",
    "ECONOMIC ANAL OF PUB POL",
    "PUBLIC FIN THEO & POLICY",
    "APPLIED ECONOMETRICS",
    "ECONOMIC OF GROWTH & DEV",
    "POST COLONIAL LITERATURE",
    "ISSUES IN ECONOMIC DEV",
    "PHILOSOPHY OF NAGARJUNA",
    "PUBLIC POLICY",
    "APPLIED STATISTICAL METHODS",
    "ORDINARY DIFF EQUATIONS",
    "MATHEMATICAL METHODS",
    "INTRO TO GLOBALIZATION",
    "LOCAL GOVERNANCE AND PARTICIPA",
    "INTRO TO GENDER STUDIES",
    "GRAPHS AND NETWORKS",
    "ALGEBRA I",
    "CINEMATIC ADAPTATION",
    "ELEMENTARY REAL ANALYSIS",
    "NUMERICAL ANALYSIS",
    "PARTIAL DIFF EQUATIONS",
    "MEASURE & INTEGRATION",
    "INTRO TO FUNCTIONAL ANAL",
    "INTRODUCTION TO TOPOLOGY",
    "NATURAL LANGUAGE PROCESSING",
    "OPERATIONS RESEARCH",
    "DIFFERENTIAL GEOMETRY",
    "INTRODUCTION TO PHONOLOGY",
    "NEGOTIATION SKILLS AND TECHNIQ",
    "CHEMICAL ENGG LAB II",
    "CONTEMPORARY INDAIN ENG FIC",
    "INTERNATIONAL BUSINESS",
    "PROCESS DES PRINCIPLE II",
    "PROCESS DES PRINCIPLES I",
    "PROCESS DYN & CONTROL",
    "SEPARATION PROCESSES I",
    "SEPARATION PROCESSES II",
    "CHEMICAL PROCESS CALCULA",
    "INDUS INSTRUMENT & CONT",
    "CHEMICAL ENGG LAB I",
    "TRANSD & MEASUREMENT TEC",
    "NUM METHOD FOR CHEM ENGG",
    "MATERIAL SCIENCE & ENGG",
    "CHEM ENGG THERMODYNAMICS",
    "KINETICS & REACTOR DESIG",
    "ELECTRO INST & INST TECH",
    "INTRODUCTION TO MEMS",
    "ARTIFICIAL INTELLIGENCE FOR ROBOTS",
    "SUSTAINABLE MANUFACTURING",
    "EFFECTIVE PUBLIC SPEAKING",
    "ENGINEERING CHEMISTRY",
    "COMBINATORIAL MATHEMATICS",
    "AUTOMOTIVE TECHNOLOGY",
    "SCIENCE OF SUSTAINABLE HAPPINESS",
    "LITERARY CRITICISM",
    "DYNAMICS OF SOCIAL CHANGE",
    "ROBOTICS",
    "PHONETICS & SPOKEN ENGLISH",
    "COMPUTER GRAPHICS",
    "COMPUTATIONAL PHYSICS",
    "QUANTUM MECHANICS I",
    "NONLINEAR OPTIMIZATION",
    "CLASSICAL MECHANICS",
    "ENVIRONMENTAL POLLUTION CONTROL",
    "MATERIALS SCIENCE AND ENGINEERING",
    "WIND ENERGY",
    "DEVELOPMENT ECONOMICS",
    "STATISTICAL MECHANICS",
    "ENGINES, MOTORS, AND MOBILITY",
    "COMPUTER-AIDED DESIGN",
    "MANUFACTURING PROCESSES",
    "MANUFACTURING MANAGEMENT",
    "MECHANISMS AND MACHINES",
    "DESIGN OF MACHINE ELEMENTS",
    "ADVANCED PHYSICS LAB",
    "ADVANCED MECHANICS OF SOLIDS",
    "MATHEMATICAL METHODS OF PHYSICS",
    "VIBRATIONS AND CONTROL",
    "ELECTROMAGNETIC THEORY AND APPLICATIONS",
    "MODERN POLITICAL CONCEPTS",
    "ADVANCED MANUFACTURING PROCESSES",
    "ELECTROMAGNETIC THEORY II",
    "AIRPORT, RAIL & WATERWAYS ENGINEERING",
    "SOLID STATE PHYSICS",
    "STRUCTURAL DYNAMICS",
    "ENVIRONMENTAL DEVELOPMENT & CLIMATE CHANGE",
    "OPTICS",
    "MODERN PHYSICS LAB",
    "ATOMIC & MOLECULAR PHYSICS",
    "NUCLEAR & PARTICLE PHYSICS",
    "COMPUTATIONAL GEOMETRY",
    "CRITICAL ANALYSIS OF LITERATURE & CINEMA",
    "QUANTUM MECHANICS II",
    "INTRODUCTION TO MASS COMMUNICATION",
    "ENERGY MANAGEMENT",
    "MECHATRONICS & AUTOMATION",
    "FUEL CELL SCIENCE AND TECHNOLOGY",
    "INTRODUCTION TO MOLECULAR BIOLOGY",
    "ANATOMY, PHYSIOLOGY & HYGIENE",
    "BIOETHICS & BIOSAFETY",
    "DISPENSING PHARMACY",
    "PHARMACEUTICAL FORMULATION & BIOPHARMACEUTICS",
    "FORENSIC PHARMACY",
    "PROCESS ENGINEERING",
    "THIN FILM TECHNOLOGY",
    "PHYSICAL PHARMACY",
    "INTRODUCTION TO NANOSCIENCE",
    "MEDICINAL CHEMISTRY I",
    "MEDICINAL CHEMISTRY II",
    "PHARMACOLOGY II",
    "PHARMACOLOGY I",
    "PHARMACEUTICAL CHEMISTRY",
    "PHARMACEUTICAL ANALYSIS",
    "NATURAL DRUGS",
    "BEHAVIORAL ECONOMICS",
    "STATISTICAL INFERENCE & APPLICATIONS",
    "COLLOIDS AND INTERFACE ENGINEERING",
    "PHYSICAL CHEMISTRY II",
    "ORGANIC CHEMISTRY I",
    "FPGA BASED SYSTEM DESIGN LAB"

];


var semesterSubjects = {};

function showSubjectDropdown() {
    var input = document.getElementById('subjectDropdown');
    var dataList = document.getElementById('subjectsList');
    dataList.innerHTML = '';

    var inputText = input.value.toUpperCase();

    subjects.forEach(function (subject) {
        if (subject.toUpperCase().includes(inputText)) {
            var option = document.createElement('option');
            option.value = subject;
            dataList.appendChild(option);
        }
    });
}

function showPreferredElectivesDropdown() {
    var input = document.getElementById('preferredElectivesDropdown');
    var dataList = document.getElementById('preferredElectivesList');
    dataList.innerHTML = '';

    var inputText = input.value.toUpperCase();

    subjects.forEach(function (subject) {
        if (subject.toUpperCase().includes(inputText)) {
            var option = document.createElement('option');
            option.value = subject;
            dataList.appendChild(option);
        }
    });
}

let csv1Variable;
let csv2Variable;
let csv3Variable;
let csv4Variable;


var semesterSubjects = {};

function addSubject() {
    document.getElementById('addSubjectForm').style.display = 'block';
    hideSemesterTables();
}

function addCourse() {
    var semester = document.getElementById('semesterDropdown').value;
    var subject = document.getElementById('subjectDropdown').value;
    var courseGrade = document.getElementById('courseGrade').value;

    if (!semester || !subject || !courseGrade) {
        alert('Please fill in all fields before adding a course.');
        return;
    }

    var courseTuple = {
        subject: subject,
        courseGrade: gradeValues[courseGrade]
    };

    if (!semesterSubjects[semester]) {
        semesterSubjects[semester] = [];
    }

    semesterSubjects[semester].push(courseTuple);
    displaySemesterTable(semester);
    resetCourseForm();
    document.getElementById('addSubjectForm').style.display = 'none';
    showSemesterTables();
}

function displaySemesterTable(semester) {
    var semesterTablesContainer = document.getElementById('semesterTablesContainer');

    if (!document.getElementById('semesterTableContainer_' + semester)) {
        var semesterTableContainer = document.createElement('div');
        semesterTableContainer.id = 'semesterTableContainer_' + semester;
        semesterTableContainer.className = 'semesterTableContainer';
        semesterTableContainer.innerHTML = '<h2>Semester ' + semester + '</h2>';
        var semesterTable = document.createElement('table');
        semesterTable.id = 'semesterTableBody_' + semester;
        semesterTable.innerHTML = '<thead><tr><th>SUBJECT</th><th>GRADE</th></tr></thead><tbody></tbody>';
        semesterTableContainer.appendChild(semesterTable);
        semesterTablesContainer.appendChild(semesterTableContainer);
    }

    var semesterTableBody = document.getElementById('semesterTableBody_' + semester);
    semesterTableBody.innerHTML = '';

    // Add a row for attribute names
    var attributeRow = semesterTableBody.insertRow();
    attributeRow.innerHTML = '<th>SUBJECT</th><th>GRADE</th>';

    semesterSubjects[semester].forEach(function (course, index) {
        var row = semesterTableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = course.subject;
        cell2.innerHTML = course.courseGrade;
    });
}

function resetCourseForm() {
    document.getElementById('subjectDropdown').value = '';
    document.getElementById('courseGrade').value = '';
}

function submitForm() {
    // Assume you have already collected the user's data and stored it in variables
    // Replace the following lines with your actual data processing logic
    const subject = "GENERAL CHEMISTRY";
    const courseGrade = "A";
    const preferredElective = document.getElementById('preferredElectivesDropdown').value; // Assume this is the preferred elective entered by the user
    const beDegree = document.getElementById('singleDegree').value;
    const mscDegree = document.getElementById('dualDegree').value;

    semesterSubjects['beDegree'] = beDegree;
    semesterSubjects['mscDegree'] = mscDegree;
    semesterSubjects['preferredElective'] = preferredElective;

    var formData = semesterSubjects;

    var loading = document.getElementById('loading');
    loading.innerText = "Loading... Please Wait";

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.text())
        .then((data) => {
            console.log(data); // Log server response
            // Handle success or display a message to the user
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error or display an error message to the user
        });

    function displayCSVAsTable(csvId) {
        return new Promise((resolve, reject) => {
            fetch(`/get-csv-data/${csvId}`) // Endpoint to get CSV data from server
                .then((response) => response.text())
                .then((data) => {
                    const rows = data.split('\n'); // Split CSV into rows

                    // Extracting CSV data into an array
                    const csvData = rows.map(row => row.split(','));

                    resolve(csvData); // Resolve with CSV data
                })
                .catch((error) => {
                    console.error('Error fetching CSV data:', error);
                    reject(error);
                });
        });
    }



    // Call the function to display CSV data as a table for each CSV file
    setTimeout(() => {
        Promise.all([
            displayCSVAsTable('csv1'),
            displayCSVAsTable('csv2'),
            displayCSVAsTable('csv3'),
            displayCSVAsTable('csv4')
        ]).then((csvDataArray) => {
            // csvDataArray contains arrays of data from all four CSV files
            const [csv1Data, csv2Data, csv3Data, csv4Data] = csvDataArray;

            // Store the data in different variables
            csv2Variable = csv2Data;
            csv3Variable = csv3Data;
            csv4Variable = csv4Data;
            csv1Variable = csv1Data;

            // Now you can work with csv1Variable, csv2Variable, csv3Variable, csv4Variable
            console.log('Data from CSV 1:', csv1Variable);
            console.log('Data from CSV 2:', csv2Variable);
            console.log('Data from CSV 3:', csv3Variable);
            console.log('Data from CSV 4:', csv4Variable);

            // Clear the current content
            document.body.innerHTML = '';

            // Create the main heading
            const mainHeading = document.createElement("h1");
            mainHeading.textContent = "Thank you for using our services.";
            document.body.appendChild(mainHeading);

            const tableContainer = document.createElement("div");
            tableContainer.id = "tableContainer1";

            // Append the container to the body
            document.body.appendChild(tableContainer);

            // Add Use Case 1 subheading
            const useCase1SubHeading = document.createElement("h2");
            useCase1SubHeading.textContent = "Use Case 1 : Recommend Courses for next Semester to increase CGPA";
            tableContainer.appendChild(useCase1SubHeading);

            // Add the table for Use Case 1
            const useCase1Table = document.createElement("table");
            useCase1Table.innerHTML = `
               <tr>
                   <th>SUBJECT</th>
               </tr>`;
            csv1Variable.forEach(row => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                useCase1Table.appendChild(tr);
            });
            tableContainer.appendChild(useCase1Table);

            const tableContainer2 = document.createElement("div");
            tableContainer2.id = "tableContainer2";

            // Append the container to the body
            document.body.appendChild(tableContainer2);

            // Add Use Case 2 subheading
            const useCase2SubHeading = document.createElement("h2");
            useCase2SubHeading.textContent = "Use Case 2 : Predict Final CGPA";
            tableContainer2.appendChild(useCase2SubHeading);

            // Create the predicted CGPA label using csv2Variable
            const predictedCGPALabel = document.createElement("p");
            predictedCGPALabel.textContent = "Your Predicted CGPA by the end of 4-2 would be : " + (csv2Variable.length > 0 ? csv2Variable[0] : "Data not available");
            tableContainer2.appendChild(predictedCGPALabel);

            // Add Learning pathways subheading
            const learningPathwaysSubHeading = document.createElement("h2");
            learningPathwaysSubHeading.textContent = "Use Case 3 : Learning pathways to improve grade";
            document.body.appendChild(learningPathwaysSubHeading);

            // Add the table for Learning pathways
            const learningPathwaysTable = document.createElement("table");

            // Add table headers
            learningPathwaysTable.innerHTML = `
        <tr>
            <th>SUBJECT</th>
        </tr>`;

            // Iterate over csv3Variable array and create table rows
            csv3Variable.forEach((element) => {
                const [subject, courseGrade] = element; // Assuming each element contains [subject, courseGrade]

                const tableRow = document.createElement("tr");
                tableRow.innerHTML = `
            <td>${subject}</td>`;

                learningPathwaysTable.appendChild(tableRow);
            });

            // Append the table to the body
            document.body.appendChild(learningPathwaysTable);

            // Add Use Case 4 subheading
            const useCase4SubHeading = document.createElement("h2");
            useCase4SubHeading.textContent = "Use Case 4 : Electives Personalization";
            document.body.appendChild(useCase4SubHeading);

            // Add the label for preferred elective
            const preferredElectiveLabel = document.createElement("p");
            preferredElectiveLabel.textContent = "Your preferred elective is:";
            document.body.appendChild(preferredElectiveLabel);

            // Add the preferred elective entered by the user
            const preferredElectiveValue = document.createElement("p");
            preferredElectiveValue.textContent = preferredElective;
            document.body.appendChild(preferredElectiveValue);

            // Add the table for Use Case 4
            const useCase4Table = document.createElement("table");
            useCase4Table.innerHTML = `
               <tr><th>Course
                </th></tr>`;
            csv4Variable.forEach((element) => {
                const [subject, courseGrade] = element; // Assuming each element contains [subject, courseGrade]

                const tableRow = document.createElement("tr");
                tableRow.innerHTML = `
                <td>${subject}</td>`;

                useCase4Table.appendChild(tableRow);
            });
            document.body.appendChild(useCase4Table);

        }).catch(error => {
            console.error('Error:', error);
            // Handle error or display an error message to the user
        });
    }, 25000);

}



function hideSemesterTables() {
    var semesterTableContainers = document.getElementsByClassName('semesterTableContainer');
    for (var i = 0; i < semesterTableContainers.length; i++) {
        semesterTableContainers[i].style.display = 'none';
    }
}

function showSemesterTables() {
    var selectedSemester = document.getElementById('semesterDropdown').value;
    var semesterTableContainers = document.getElementsByClassName('semesterTableContainer');
    for (var i = 0; i < semesterTableContainers.length; i++) {
        var semester = semesterTableContainers[i].id.split('_')[1];
        semesterTableContainers[i].style.display = semester === selectedSemester ? 'block' : 'none';
    }
}

function changeSemester() {
    showSemesterTables();
    resetCourseForm();
    document.getElementById('addSubjectForm').style.display = 'none';
}


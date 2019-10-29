// https://crm-app-be.herokuapp.com/
// http://localhost:8080

const globalVars = {
    titleSubText: "| CRM-APP",
    serverURL: "http://localhost:8080/api",
    permanentFields: {
        fistName: "First name",
        lastName: "Last name",
        email: "Email",
        dateAdded: "Date added",
        lastModified: "Last modified"
    },
    fieldTypes: {
        text : "text",
        number: "number",
        select: "select"
    },
    blankOption: "---",
    msgSuccess: "Success"
}

export default globalVars;
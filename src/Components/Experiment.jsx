import React, { useState } from 'react';

// Replace this with the entire JSON schema
const schema = {
  // The entire schema from your JSON file
  // Replace this section with your loaded JSON schema
};

const DynamicForm = ({ schema }) => {
  const [formData, setFormData] = useState({});

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to render form fields based on schema
  const renderField = (name, fieldSchema) => {
    const { type } = fieldSchema;

    if (type === "object") {
      return (
        <div key={name}>
          <h3>{name}</h3>
          {renderFormFields(fieldSchema.properties)}
        </div>
      );
    }

    switch (type) {
      case "string":
        return (
          <div key={name}>
            <label>{name}</label>
            <input
              type="text"
              name={name}
              pattern={fieldSchema.pattern || undefined}
              maxLength={fieldSchema.maxLength || undefined}
              required={fieldSchema.required || false}
              onChange={handleInputChange}
            />
          </div>
        );
      case "number":
        return (
          <div key={name}>
            <label>{name}</label>
            <input
              type="number"
              name={name}
              required={fieldSchema.required || false}
              onChange={handleInputChange}
            />
          </div>
        );
      case "integer":
        return (
          <div key={name}>
            <label>{name}</label>
            <input
              type="number"
              name={name}
              required={fieldSchema.required || false}
              onChange={handleInputChange}
            />
          </div>
        );
      case "boolean":
        return (
          <div key={name}>
            <label>{name}</label>
            <input
              type="checkbox"
              name={name}
              onChange={(e) => handleInputChange({ target: { name, value: e.target.checked } })}
            />
          </div>
        );
      case "array":
        return (
          <div key={name}>
            <label>{name}</label>
            {/* Assuming array contains simple types, modify accordingly if it's more complex */}
            {fieldSchema.items && renderField(`${name}[]`, fieldSchema.items)}
          </div>
        );
      default:
        return null;
    }
  };

  // Recursive function to render fields for the schema
  const renderFormFields = (fields) => {
    return Object.keys(fields).map((field) => renderField(field, fields[field]));
  };

  return (
    <form>
      <h1>Dynamic Form</h1>
      {renderFormFields(schema.properties)}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;

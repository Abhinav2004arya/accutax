import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaxCalculator = () => {
  const [formData, setFormData] = useState({
    dob: '',
    grossSalary: '',
    houseIncome: '',
    otherIncome: '',
    capitalGains: '',
    agriculturalIncome: '',
    exemptIncome: '',
    section80C: '',
    section80D: '',
    section80G: '',
    section80TTA: '',
    section80E: '',
    section80CCD: '',
    tds: '',
    advanceTax: '',
    selfAssessmentTax: '',
  });

  const [results, setResults] = useState({
    age: 0,
    totalIncome: 0,
    totalDeductions: 0,
    taxableIncome: 0,
    taxPayable: 0,
    totalTaxPayable: 0,
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const calculateAge = (dob) => {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    const monthDifference = new Date().getMonth() - birthDate.getMonth();
    return (monthDifference < 0 || (monthDifference === 0 && new Date().getDate() < birthDate.getDate())) ? age - 1 : age;
  };

  const calculateResults = () => {
    const totalIncome =
      parseFloat(formData.grossSalary || 0) +
      parseFloat(formData.houseIncome || 0) +
      parseFloat(formData.otherIncome || 0) +
      parseFloat(formData.capitalGains || 0) +
      parseFloat(formData.agriculturalIncome || 0) +
      parseFloat(formData.exemptIncome || 0);

    const totalDeductions =
      parseFloat(formData.section80C || 0) +
      parseFloat(formData.section80D || 0) +
      parseFloat(formData.section80G || 0) +
      parseFloat(formData.section80TTA || 0) +
      parseFloat(formData.section80E || 0) +
      parseFloat(formData.section80CCD || 0);

    const taxableIncome = totalIncome - totalDeductions;

    let taxPayable = 0;

    // Determine tax slab based on age
    const age = calculateAge(formData.dob);
    if (age < 60) { // Non-senior citizens
      if (taxableIncome <= 250000) {
        taxPayable = 0;
      } else if (taxableIncome <= 500000) {
        taxPayable = (taxableIncome - 250000) * 0.05;
      } else if (taxableIncome <= 1000000) {
        taxPayable = (taxableIncome - 500000) * 0.1 + 12500;
      } else {
        taxPayable = (taxableIncome - 1000000) * 0.3 + 62500;
      }
    } else if (age >= 60 && age < 80) { // Senior citizens
      if (taxableIncome <= 300000) {
        taxPayable = 0;
      } else if (taxableIncome <= 500000) {
        taxPayable = (taxableIncome - 300000) * 0.05;
      } else if (taxableIncome <= 1000000) {
        taxPayable = (taxableIncome - 500000) * 0.1 + 10000;
      } else {
        taxPayable = (taxableIncome - 1000000) * 0.3 + 60000;
      }
    } else { // Super senior citizens
      if (taxableIncome <= 500000) {
        taxPayable = 0;
      } else if (taxableIncome <= 1000000) {
        taxPayable = (taxableIncome - 500000) * 0.1;
      } else {
        taxPayable = (taxableIncome - 1000000) * 0.3 + 50000;
      }
    }

    // Calculate total tax payable considering TDS, Advance Tax, and Self-Assessment Tax
    const totalTaxPayable = taxPayable - (parseFloat(formData.tds || 0) + parseFloat(formData.advanceTax || 0) + parseFloat(formData.selfAssessmentTax || 0));

    setResults({
      age,
      totalIncome,
      totalDeductions,
      taxableIncome,
      taxPayable,
      totalTaxPayable,
    });
  };

  useEffect(() => {
    calculateResults();
  }, [formData]);

  return (
    <div className="container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px' }}>
      <h1 className="my-4">Tax Calculator</h1>
      <form>
        {/* Income Details Section */}
        <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
          <h2>Income Details</h2>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={formData.dob}
              onChange={(e) => handleChange('dob', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gross Salary</label>
            <input
              type="number"
              className="form-control"
              value={formData.grossSalary}
              onChange={(e) => handleChange('grossSalary', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Income from House Property</label>
            <input
              type="number"
              className="form-control"
              value={formData.houseIncome}
              onChange={(e) => handleChange('houseIncome', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Income from Other Sources</label>
            <input
              type="number"
              className="form-control"
              value={formData.otherIncome}
              onChange={(e) => handleChange('otherIncome', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Capital Gains</label>
            <input
              type="number"
              className="form-control"
              value={formData.capitalGains}
              onChange={(e) => handleChange('capitalGains', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Agricultural Income</label>
            <input
              type="number"
              className="form-control"
              value={formData.agriculturalIncome}
              onChange={(e) => handleChange('agriculturalIncome', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Exempt Income</label>
            <input
              type="number"
              className="form-control"
              value={formData.exemptIncome}
              onChange={(e) => handleChange('exemptIncome', e.target.value)}
            />
          </div>
        </section>

        {/* Deductions Section */}
        <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
          <h2>Deductions</h2>
          <div className="form-group">
            <label>Section 80C (Investments)</label>
            <input
              type="number"
              className="form-control"
              value={formData.section80C}
              onChange={(e) => handleChange('section80C', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80D (Medical Insurance)</label>
            <input
              type="number"
              className="form-control"
              value={formData.section80D}
              onChange={(e) => handleChange('section80D', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80G (Donations)</label>
            <input
              type="number"
              className="form-control"
              value={formData.section80G}
              onChange={(e) => handleChange('section80G', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80TTA (Savings Account Interest)</label>
            <input
              type="number"
              className="form-control"
              value={formData.section80TTA}
              onChange={(e) => handleChange('section80TTA', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80E (Education Loan Interest)</label>
            <input
              type="number"
              className="form-control"
              value={formData.section80E}
              onChange={(e) => handleChange('section80E', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80CCD (Pension Contribution)</label>
            <input
              type="number"
              className="form-control"
              value={formData.section80CCD}
              onChange={(e) => handleChange('section80CCD', e.target.value)}
            />
          </div>
        </section>

        {/* Tax Paid Section */}
        <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
          <h2>Tax Paid</h2>
          <div className="form-group">
            <label>TDS</label>
            <input
              type="number"
              className="form-control"
              value={formData.tds}
              onChange={(e) => handleChange('tds', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Advance Tax</label>
            <input
              type="number"
              className="form-control"
              value={formData.advanceTax}
              onChange={(e) => handleChange('advanceTax', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Self-Assessment Tax</label>
            <input
              type="number"
              className="form-control"
              value={formData.selfAssessmentTax}
              onChange={(e) => handleChange('selfAssessmentTax', e.target.value)}
            />
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
          <h2>Results</h2>
         
       
          <div className="form-group">
            <label>Total Income: </label>
            <input
              type="text"
              className="form-control"
              value={results.totalIncome.toFixed(2)}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Total Deductions: </label>
            <input
              type="text"
              className="form-control"
              value={results.totalDeductions.toFixed(2)}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Taxable Income: </label>
            <input
              type="text"
              className="form-control"
              value={results.taxableIncome.toFixed(2)}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Tax Payable: </label>
            <input
              type="text"
              className="form-control"
              value={results.taxPayable.toFixed(2)}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Total Tax Payable after TDS: </label>
            <input
              type="text"
              className="form-control"
              value={results.totalTaxPayable.toFixed(2)}
              readOnly
            />
          </div>
        </section>

       
      </form>
    </div>
  );
};

export default TaxCalculator;
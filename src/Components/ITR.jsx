// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../CSS/itr.css';

// const ITR1Form = () => {
//   const [formData, setFormData] = useState({
//     personalInfo: {
//       firstName: '',
//       middleName: '',
//       surname: '',
//       pan: '',
//       dob: '',
//       aadhaar: '',
//       gender: 'M', // M for Male, F for Female
//       email: '',
//       mobile: '',
//       address: '',
//       city: '',
//       state: '',
//       pin: '',
//       employerCategory: 'OTH',
//     },
//     filingStatus: {
//       returnFileSection: '11',
//       newTaxRegimeOptOut: 'N',
//     },
//     incomeDetails: {
//       grossSalary: '',
//       houseIncome: '',
//       otherIncome: '',
//       exemptIncome: '',
//     },
//     deductions: {
//       section80C: '',
//       section80D: '',
//       section80G: '',
//       section80TTA: '',
//       section80E: '',
//       section80CCD: '', // Pension Contribution
//     },
//     taxPaid: {
//       tds: '',
//       advanceTax: '',
//       selfAssessmentTax: '',
//     },
//     bankDetails: {
//       bankName: '',
//       accountNumber: '',
//       ifsc: '',
//     },
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (section, field, value) => {
//     setFormData({
//       ...formData,
//       [section]: {
//         ...formData[section],
//         [field]: value,
//       },
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     // Personal Info Validation
//     if (!formData.personalInfo.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.personalInfo.pan || !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.personalInfo.pan)) {
//       newErrors.pan = 'Valid PAN is required';
//     }
//     if (!formData.personalInfo.dob || !/\d{4}-\d{2}-\d{2}/.test(formData.personalInfo.dob)) {
//       newErrors.dob = 'Date of Birth is required in YYYY-MM-DD format';
//     }
//     if (!formData.personalInfo.mobile || !/^\d{10}$/.test(formData.personalInfo.mobile)) {
//       newErrors.mobile = 'Valid mobile number is required';
//     }
//     if (!formData.personalInfo.email || !/\S+@\S+\.\S+/.test(formData.personalInfo.email)) {
//       newErrors.email = 'Valid email address is required';
//     }
//     if (!formData.personalInfo.pin || !/^\d{6}$/.test(formData.personalInfo.pin)) {
//       newErrors.pin = 'Valid PIN code is required';
//     }
//     if (!formData.bankDetails.ifsc || !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.bankDetails.ifsc)) {
//       newErrors.ifsc = 'Valid IFSC is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form Data:', formData);
//       alert('Form submitted successfully!');
//     } else {
//       alert('Please correct the errors.');
//     }
//   };

//   return (
//     <div className="container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px' }}>
//       <h1 className="my-4">Enhanced ITR-1 Form</h1>
//       <form onSubmit={handleSubmit}>

//         {/* Personal Information Section */}
//         <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
//           <h2>Personal Information</h2>
//           <div className="form-group">
//             <label>First Name</label>
//             <input
//               type="text"
//               className={`form-control ${errors.firstName && 'is-invalid'}`}
//               value={formData.personalInfo.firstName}
//               onChange={(e) => handleChange('personalInfo', 'firstName', e.target.value)}
//             />
//             {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
//           </div>
//           <div className="form-group">
//             <label>Middle Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={formData.personalInfo.middleName}
//               onChange={(e) => handleChange('personalInfo', 'middleName', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Last Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={formData.personalInfo.surname}
//               onChange={(e) => handleChange('personalInfo', 'surname', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>PAN</label>
//             <input
//               type="text"
//               className={`form-control ${errors.pan && 'is-invalid'}`}
//               value={formData.personalInfo.pan}
//               onChange={(e) => handleChange('personalInfo', 'pan', e.target.value)}
//             />
//             {errors.pan && <div className="invalid-feedback">{errors.pan}</div>}
//           </div>
//           <div className="form-group">
//             <label>Date of Birth (YYYY-MM-DD)</label>
//             <input
//               type="text"
//               className={`form-control ${errors.dob && 'is-invalid'}`}
//               value={formData.personalInfo.dob}
//               onChange={(e) => handleChange('personalInfo', 'dob', e.target.value)}
//             />
//             {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
//           </div>
//           <div className="form-group">
//             <label>Aadhar Number</label>
//             <input
//               type="text"
//               className="form-control"
//               value={formData.personalInfo.aadhaar}
//               onChange={(e) => handleChange('personalInfo', 'aadhaar', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Gender</label>
//             <select
//               className="form-control"
//               value={formData.personalInfo.gender}
//               onChange={(e) => handleChange('personalInfo', 'gender', e.target.value)}
//             >
//               <option value="M">Male</option>
//               <option value="F">Female</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="text"
//               className={`form-control ${errors.email && 'is-invalid'}`}
//               value={formData.personalInfo.email}
//               onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
//             />
//             {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//           </div>
//           <div className="form-group">
//             <label>Mobile Number</label>
//             <input
//               type="text"
//               className={`form-control ${errors.mobile && 'is-invalid'}`}
//               value={formData.personalInfo.mobile}
//               onChange={(e) => handleChange('personalInfo', 'mobile', e.target.value)}
//             />
//             {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
//           </div>
//           <div className="form-group">
//             <label>Address</label>
//             <textarea
//               className="form-control"
//               value={formData.personalInfo.address}
//               onChange={(e) => handleChange('personalInfo', 'address', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>City</label>
//             <input
//               type="text"
//               className="form-control"
//               value={formData.personalInfo.city}
//               onChange={(e) => handleChange('personalInfo', 'city', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>State</label>
//             <input
//               type="text"
//               className="form-control"
//               value={formData.personalInfo.state}
//               onChange={(e) => handleChange('personalInfo', 'state', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>PIN Code</label>
//             <input
//               type="text"
//               className={`form-control ${errors.pin && 'is-invalid'}`}
//               value={formData.personalInfo.pin}
//               onChange={(e) => handleChange('personalInfo', 'pin', e.target.value)}
//             />
//             {errors.pin && <div className="invalid-feedback">{errors.pin}</div>}
//           </div>
//           <div className="form-group">
//             <label>Employer Category</label>
//             <select
//               className="form-control"
//               value={formData.personalInfo.employerCategory}
//               onChange={(e) => handleChange('personalInfo', 'employerCategory', e.target.value)}
//             >
//               <option value="CGOV">Central Government</option>
//               <option value="SGOV">State Government</option>
//               <option value="PSU">PSU</option>
//               <option value="OTH">Others</option>
//             </select>
//           </div>
//         </section>

//         {/* Filing Status Section */}
//         <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
//           <h2>Filing Status</h2>
//           <div className="form-group">
//             <label>Return Filing Section</label>
//             <select
//               className="form-control"
//               value={formData.filingStatus.returnFileSection}
//               onChange={(e) => handleChange('filingStatus', 'returnFileSection', e.target.value)}
//             >
//               <option value="11">On or before due date (139(1))</option>
//               <option value="12">After due date (139(4))</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Opt-Out of New Tax Regime</label>
//             <select
//               className="form-control"
//               value={formData.filingStatus.newTaxRegimeOptOut}
//               onChange={(e) => handleChange('filingStatus', 'newTaxRegimeOptOut', e.target.value)}
//             >
//               <option value="Y">Yes</option>
//               <option value="N">No</option>
//             </select>
//           </div>
//         </section>

//         {/* Income Details Section */}
//         <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
//           <h2>Income Details</h2>
//           <div className="form-group">
//             <label>Gross Salary</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.incomeDetails.grossSalary}
//               onChange={(e) => handleChange('incomeDetails', 'grossSalary', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Income from House Property</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.incomeDetails.houseIncome}
//               onChange={(e) => handleChange('incomeDetails', 'houseIncome', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Income from Other Sources</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.incomeDetails.otherIncome}
//               onChange={(e) => handleChange('incomeDetails', 'otherIncome', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Exempt Income</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.incomeDetails.exemptIncome}
//               onChange={(e) => handleChange('incomeDetails', 'exemptIncome', e.target.value)}
//             />
//           </div>
//         </section>

//         {/* Deductions Section */}
//         <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
//           <h2>Deductions</h2>
//           <div className="form-group">
//             <label>Section 80C(Investments)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.deductions.section80C}
//               onChange={(e) => handleChange('deductions', 'section80C', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Section 80D(Medical Insurance)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.deductions.section80D}
//               onChange={(e) => handleChange('deductions', 'section80D', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Section 80G(Donations)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.deductions.section80G}
//               onChange={(e) => handleChange('deductions', 'section80G', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Section 80TTA (Savings Account Interest)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.deductions.section80TTA}
//               onChange={(e) => handleChange('deductions', 'section80TTA', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Section 80E (Education Loan Interest)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.deductions.section80E}
//               onChange={(e) => handleChange('deductions', 'section80E', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Section 80CCD (Pension Contribution)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.deductions.section80CCD}
//               onChange={(e) => handleChange('deductions', 'section80CCD', e.target.value)}
//             />
//           </div>
//         </section>

//         {/* Tax Paid Section */}
//         <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
//           <h2>Tax Paid</h2>
//           <div className="form-group">
//             <label>TDS</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.taxPaid.tds}
//               onChange={(e) => handleChange('taxPaid', 'tds', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Advance Tax</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.taxPaid.advanceTax}
//               onChange={(e) => handleChange('taxPaid', 'advanceTax', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Self-Assessment Tax</label>
//             <input
//               type="number"
//               className="form-control"
//               value={formData.taxPaid.selfAssessmentTax}
//               onChange={(e) => handleChange('taxPaid', 'selfAssessmentTax', e.target.value)}
//             />
//           </div>
//         </section>

//         {/* Bank Details Section */}
//         <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
//           <h2>Bank Details</h2>
//           <div className="form-group">
//             <label>Bank Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={formData.bankDetails.bankName}
//               onChange={(e) => handleChange('bankDetails', 'bankName', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Account Number</label>
//             <input
//               type="text"
//               className="form-control"
//               value={formData.bankDetails.accountNumber}
//               onChange={(e) => handleChange('bankDetails', 'accountNumber', e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>IFSC Code</label>
//             <input
//               type="text"
//               className={`form-control ${errors.ifsc && 'is-invalid'}`}
//               value={formData.bankDetails.ifsc}
//               onChange={(e) => handleChange('bankDetails', 'ifsc', e.target.value)}
//             />
//             {errors.ifsc && <div className="invalid-feedback">{errors.ifsc}</div>}
//           </div>
//         </section>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary my-3">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ITR1Form;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/itr.css';
import { jsPDF } from 'jspdf'; // Import jsPDF

const ITR1Form = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      middleName: '',
      surname: '',
      pan: '',
      dob: '',
      aadhaar: '',
      gender: 'M', // M for Male, F for Female
      email: '',
      mobile: '',
      address: '',
      city: '',
      state: '',
      pin: '',
      employerCategory: 'OTH',
    },
    filingStatus: {
      returnFileSection: '11',
      newTaxRegimeOptOut: 'N',
    },
    incomeDetails: {
      grossSalary: '',
      houseIncome: '',
      otherIncome: '',
      exemptIncome: '',
    },
    deductions: {
      section80C: '',
      section80D: '',
      section80G: '',
      section80TTA: '',
      section80E: '',
      section80CCD: '', // Pension Contribution
    },
    taxPaid: {
      tds: '',
      advanceTax: '',
      selfAssessmentTax: '',
    },
    bankDetails: {
      bankName: '',
      accountNumber: '',
      ifsc: '',
    },
  });

  const [errors, setErrors] = useState({});

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const validateForm = () => {
    const newErrors = {};
    // Personal Info Validation
    if (!formData.personalInfo.firstName) newErrors.firstName = 'First name is required';
    if (!formData.personalInfo.pan || !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.personalInfo.pan)) {
      newErrors.pan = 'Valid PAN is required';
    }
    if (!formData.personalInfo.dob || !/\d{4}-\d{2}-\d{2}/.test(formData.personalInfo.dob)) {
      newErrors.dob = 'Date of Birth is required in YYYY-MM-DD format';
    }
    if (!formData.personalInfo.mobile || !/^\d{10}$/.test(formData.personalInfo.mobile)) {
      newErrors.mobile = 'Valid mobile number is required';
    }
    if (!formData.personalInfo.email || !/\S+@\S+\.\S+/.test(formData.personalInfo.email)) {
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.personalInfo.pin || !/^\d{6}$/.test(formData.personalInfo.pin)) {
      newErrors.pin = 'Valid PIN code is required';
    }
    if (!formData.bankDetails.ifsc || !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.bankDetails.ifsc)) {
      newErrors.ifsc = 'Valid IFSC is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('ITR-1 Form Details', 10, 10);
    
    // Personal Info Section
    doc.setFontSize(12);
    doc.text('Personal Information:', 10, 20);
    doc.text(`First Name: ${formData.personalInfo.firstName}`, 10, 30);
    doc.text(`Middle Name: ${formData.personalInfo.middleName}`, 10, 40);
    doc.text(`Surname: ${formData.personalInfo.surname}`, 10, 50);
    doc.text(`PAN: ${formData.personalInfo.pan}`, 10, 60);
    doc.text(`DOB: ${formData.personalInfo.dob}`, 10, 70);
    doc.text(`Aadhaar: ${formData.personalInfo.aadhaar}`, 10, 80);
    doc.text(`Gender: ${formData.personalInfo.gender}`, 10, 90);
    doc.text(`Email: ${formData.personalInfo.email}`, 10, 100);
    doc.text(`Mobile: ${formData.personalInfo.mobile}`, 10, 110);
    doc.text(`Address: ${formData.personalInfo.address}`, 10, 120);
    doc.text(`City: ${formData.personalInfo.city}`, 10, 130);
    doc.text(`State: ${formData.personalInfo.state}`, 10, 140);
    doc.text(`PIN: ${formData.personalInfo.pin}`, 10, 150);
    doc.text(`Employer Category: ${formData.personalInfo.employerCategory}`, 10, 160);

    // Filing Status Section
    doc.text('Filing Status:', 10, 170);
    doc.text(`Return File Section: ${formData.filingStatus.returnFileSection}`, 10, 180);
    doc.text(`Opt-Out of New Tax Regime: ${formData.filingStatus.newTaxRegimeOptOut}`, 10, 190);

    // Income Details Section
    doc.text('Income Details:', 10, 200);
    doc.text(`Gross Salary: ${formData.incomeDetails.grossSalary}`, 10, 210);
    doc.text(`Income from House Property: ${formData.incomeDetails.houseIncome}`, 10, 220);
    doc.text(`Income from Other Sources: ${formData.incomeDetails.otherIncome}`, 10, 230);
    doc.text(`Exempt Income: ${formData.incomeDetails.exemptIncome}`, 10, 240);

    // Save the PDF
    doc.save('ITR1_Form.pdf');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      generatePDF(); // Generate PDF on successful validation
      alert('Form submitted successfully! PDF generated.');
    } else {
      alert('Please correct the errors.');
    }
  };

  return (
    <div className="container" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px' }}>
      <h1 className="my-4">Enhanced ITR-1 Form</h1>
      <form onSubmit={handleSubmit}>

     
        {/* Personal Information Section */}
        <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
          <h2>Personal Information</h2>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className={`form-control ${errors.firstName && 'is-invalid'}`}
              value={formData.personalInfo.firstName}
              onChange={(e) => handleChange('personalInfo', 'firstName', e.target.value)}
            />
            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
          </div>
          <div className="form-group">
            <label>Middle Name</label>
            <input
              type="text"
              className="form-control"
              value={formData.personalInfo.middleName}
              onChange={(e) => handleChange('personalInfo', 'middleName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              value={formData.personalInfo.surname}
              onChange={(e) => handleChange('personalInfo', 'surname', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>PAN</label>
            <input
              type="text"
              className={`form-control ${errors.pan && 'is-invalid'}`}
              value={formData.personalInfo.pan}
              onChange={(e) => handleChange('personalInfo', 'pan', e.target.value)}
            />
            {errors.pan && <div className="invalid-feedback">{errors.pan}</div>}
          </div>
          <div className="form-group">
            <label>Date of Birth (YYYY-MM-DD)</label>
            <input
              type="text"
              className={`form-control ${errors.dob && 'is-invalid'}`}
              value={formData.personalInfo.dob}
              onChange={(e) => handleChange('personalInfo', 'dob', e.target.value)}
            />
            {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
          </div>
          <div className="form-group">
            <label>Aadhar Number</label>
            <input
              type="text"
              className="form-control"
              value={formData.personalInfo.aadhaar}
              onChange={(e) => handleChange('personalInfo', 'aadhaar', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              className="form-control"
              value={formData.personalInfo.gender}
              onChange={(e) => handleChange('personalInfo', 'gender', e.target.value)}
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className={`form-control ${errors.email && 'is-invalid'}`}
              value={formData.personalInfo.email}
              onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              className={`form-control ${errors.mobile && 'is-invalid'}`}
              value={formData.personalInfo.mobile}
              onChange={(e) => handleChange('personalInfo', 'mobile', e.target.value)}
            />
            {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              className="form-control"
              value={formData.personalInfo.address}
              onChange={(e) => handleChange('personalInfo', 'address', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              value={formData.personalInfo.city}
              onChange={(e) => handleChange('personalInfo', 'city', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              className="form-control"
              value={formData.personalInfo.state}
              onChange={(e) => handleChange('personalInfo', 'state', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>PIN Code</label>
            <input
              type="text"
              className={`form-control ${errors.pin && 'is-invalid'}`}
              value={formData.personalInfo.pin}
              onChange={(e) => handleChange('personalInfo', 'pin', e.target.value)}
            />
            {errors.pin && <div className="invalid-feedback">{errors.pin}</div>}
          </div>
          <div className="form-group">
            <label>Employer Category</label>
            <select
              className="form-control"
              value={formData.personalInfo.employerCategory}
              onChange={(e) => handleChange('personalInfo', 'employerCategory', e.target.value)}
            >
              <option value="CGOV">Central Government</option>
              <option value="SGOV">State Government</option>
              <option value="PSU">PSU</option>
              <option value="OTH">Others</option>
            </select>
          </div>
        </section>

        {/* Filing Status Section */}
        <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
          <h2>Filing Status</h2>
          <div className="form-group">
            <label>Return Filing Section</label>
            <select
              className="form-control"
              value={formData.filingStatus.returnFileSection}
              onChange={(e) => handleChange('filingStatus', 'returnFileSection', e.target.value)}
            >
              <option value="11">On or before due date (139(1))</option>
              <option value="12">After due date (139(4))</option>
            </select>
          </div>
          <div className="form-group">
            <label>Opt-Out of New Tax Regime</label>
            <select
              className="form-control"
              value={formData.filingStatus.newTaxRegimeOptOut}
              onChange={(e) => handleChange('filingStatus', 'newTaxRegimeOptOut', e.target.value)}
            >
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>
        </section>

        {/* Income Details Section */}
        <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
          <h2>Income Details</h2>
          <div className="form-group">
            <label>Gross Salary</label>
            <input
              type="number"
              className="form-control"
              value={formData.incomeDetails.grossSalary}
              onChange={(e) => handleChange('incomeDetails', 'grossSalary', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Income from House Property</label>
            <input
              type="number"
              className="form-control"
              value={formData.incomeDetails.houseIncome}
              onChange={(e) => handleChange('incomeDetails', 'houseIncome', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Income from Other Sources</label>
            <input
              type="number"
              className="form-control"
              value={formData.incomeDetails.otherIncome}
              onChange={(e) => handleChange('incomeDetails', 'otherIncome', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Exempt Income</label>
            <input
              type="number"
              className="form-control"
              value={formData.incomeDetails.exemptIncome}
              onChange={(e) => handleChange('incomeDetails', 'exemptIncome', e.target.value)}
            />
          </div>
        </section>

        {/* Deductions Section */}
        <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
          <h2>Deductions</h2>
          <div className="form-group">
            <label>Section 80C(Investments)</label>
            <input
              type="number"
              className="form-control"
              value={formData.deductions.section80C}
              onChange={(e) => handleChange('deductions', 'section80C', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80D(Medical Insurance)</label>
            <input
              type="number"
              className="form-control"
              value={formData.deductions.section80D}
              onChange={(e) => handleChange('deductions', 'section80D', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80G(Donations)</label>
            <input
              type="number"
              className="form-control"
              value={formData.deductions.section80G}
              onChange={(e) => handleChange('deductions', 'section80G', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80TTA (Savings Account Interest)</label>
            <input
              type="number"
              className="form-control"
              value={formData.deductions.section80TTA}
              onChange={(e) => handleChange('deductions', 'section80TTA', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80E (Education Loan Interest)</label>
            <input
              type="number"
              className="form-control"
              value={formData.deductions.section80E}
              onChange={(e) => handleChange('deductions', 'section80E', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section 80CCD (Pension Contribution)</label>
            <input
              type="number"
              className="form-control"
              value={formData.deductions.section80CCD}
              onChange={(e) => handleChange('deductions', 'section80CCD', e.target.value)}
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
              value={formData.taxPaid.tds}
              onChange={(e) => handleChange('taxPaid', 'tds', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Advance Tax</label>
            <input
              type="number"
              className="form-control"
              value={formData.taxPaid.advanceTax}
              onChange={(e) => handleChange('taxPaid', 'advanceTax', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Self-Assessment Tax</label>
            <input
              type="number"
              className="form-control"
              value={formData.taxPaid.selfAssessmentTax}
              onChange={(e) => handleChange('taxPaid', 'selfAssessmentTax', e.target.value)}
            />
          </div>
        </section>

        {/* Bank Details Section */}
        <section className="mb-4" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
          <h2>Bank Details</h2>
          <div className="form-group">
            <label>Bank Name</label>
            <input
              type="text"
              className="form-control"
              value={formData.bankDetails.bankName}
              onChange={(e) => handleChange('bankDetails', 'bankName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              className="form-control"
              value={formData.bankDetails.accountNumber}
              onChange={(e) => handleChange('bankDetails', 'accountNumber', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>IFSC Code</label>
            <input
              type="text"
              className={`form-control ${errors.ifsc && 'is-invalid'}`}
              value={formData.bankDetails.ifsc}
              onChange={(e) => handleChange('bankDetails', 'ifsc', e.target.value)}
            />
            {errors.ifsc && <div className="invalid-feedback">{errors.ifsc}</div>}
          </div>
        </section>

        {/* Submit Button */}
       

        <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>
    </div>
  );
};

export default ITR1Form;

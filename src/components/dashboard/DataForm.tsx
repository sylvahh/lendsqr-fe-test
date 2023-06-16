import React from 'react';

interface FormProps {
  organizations: string[];
  formData: any;
  handleFilter: (formData: any) => void;
  handleReset: () => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const DataForm: React.FC<FormProps> = ({
  organizations,
  formData,
  handleFilter,
  handleReset,
  setFormData,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };

  const handleOrganizationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevFormData: any) => ({ ...prevFormData, orgName: event.target.value }));
  };

  return (
    <div id='data-form'>
      <div className='data-form_wraper'>
        <form action=''>
          <div className='form-input_wraper'>
            <label htmlFor='organization'>organization</label>
            <select
              name='organization'
              id='organization'
              value={formData.orgName}
              onChange={handleOrganizationChange}
            >
              <option value=''>Select organization</option>
              {organizations.map((organization, index) => {
                return (
                  <option key={index} value={organization}>
                    {organization}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='userName'>user name</label>
            <input
              type='text'
              name='userName'
              id='userName'
              placeholder='User'
              value={formData.userName}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              name='createdAt'
              id='date'
              placeholder='Date'
              value={formData.createdAt}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='phoneNumber'>phone number</label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Phone Number'
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='status'>status</label>
            <select name='status' id='status'>
              <option value=''>Select Status</option>
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
              <option value='pending'>Pending</option>
              <option value='blacklisted'>Blacklisted</option>
            </select>
          </div>

          <div className='data-form_btn'>
            <button type='button' onClick={handleReset} className='reset_btn'>
              reset
            </button>
            <button type='button' onClick={() => handleFilter(formData)}>
              filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataForm;

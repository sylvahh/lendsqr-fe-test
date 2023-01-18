import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserInfo from '../components/dashboard/UserInfo';

describe('UserInfo', () => {
  let mockedUserInfo: any;
  const userInfo: any =  localStorage.getItem('userInfo');

  beforeEach(() => {
    // Arrange
    mockedUserInfo = {
      email: userInfo.email,
      profile: {
        firstName: userInfo.profile.firstName,
        lastName: userInfo.profile.lastName,
        phoneNumber: userInfo.profile.phoneNumber,
        bvn: userInfo.profile.bvn,
        gender: userInfo.profile.gender,
      },
      guarantor: {
        firstName: userInfo.guarantor.firstName,
        lastName: userInfo.guarantor.lastName,
        phoneNumber: userInfo.guarantor.phoneNumber,
        email: userInfo.guarantor.email,
        gender: userInfo.guarantor.gender,
      },
      education: {
        level: userInfo.education.level,
        employmentStatus: userInfo.education.employmentStatus,
        sector: userInfo.education.sector,
        officeEmail: userInfo.education.officeEmail,
        duration: userInfo.education.duration,
        monthlyIncome: [userInfo.education.monthlyIncome[0], userInfo.education.monthlyIncome[1]],
        loanRepayment: userInfo.education.loanRepayment,
      },
      socials: {
        twitter: userInfo.socials.twitter,
        facebook: userInfo.socials.facebook,
        instagram: userInfo.socials.instagram,
      },
    };
    localStorage.setItem('userInfo', JSON.stringify(mockedUserInfo));
  });

  afterEach(() => {
    // Clean up
    localStorage.clear();
  });

  it('should render the user information', () => {
    // Act
    render(<UserInfo />);

    // Assert
    expect(
      screen.getByText(`${mockedUserInfo.profile.firstName}  ${mockedUserInfo.profile.lastName}`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.profile.phoneNumber)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.email)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.profile.bvn)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.profile.gender)).toBeInTheDocument();
    expect(screen.getByText('Single')).toBeInTheDocument();
    expect(screen.getByText('none')).toBeInTheDocument();
    expect(screen.getByText('Parent’s Apartment')).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.education.level)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.education.employmentStatus)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.education.sector)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.education.officeEmail)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.education.duration)).toBeInTheDocument();
    expect(
      screen.getByText(
        `₦${mockedUserInfo.education.monthlyIncome[0]}- ₦${mockedUserInfo.education.monthlyIncome[1]}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.education.loanRepayment)).toBeInTheDocument();

    expect(screen.getByText(mockedUserInfo.socials.twitter)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.socials.facebook)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.socials.instagram)).toBeInTheDocument();

    expect(
      screen.getByText(
        `${mockedUserInfo.guarantor.firstName}  ${mockedUserInfo.guarantor.lastName}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.guarantor.phoneNumber)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.guarantor.email)).toBeInTheDocument();
    expect(screen.getByText(mockedUserInfo.guarantor.gender)).toBeInTheDocument();

    // Clean up
    afterEach(() => {
      localStorage.clear();
    });
  });
});

// This test case would check that all of the fields in the mocked user info object are correctly displayed in the UserInfo component.
// The test case first sets up a mocked user info object with all of the necessary fields, and then it uses the render method from the @testing-library/react to render the component.
// Then it uses the expect and toBeInTheDocument() method to check that each field is correctly displayed in the component.
// The test case also includes a cleanup step that clears local storage after each test is run.

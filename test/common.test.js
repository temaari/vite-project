const isValidEmailAddress = (email) => {
    if (!email || !email.includes('@')) return false;

    const fullEmailAddress = email.split('@');
    if (fullEmailAddress.length > 2) return false;

    const domain = fullEmailAddress[1];
    if (!domain.includes('.')) return false;

    const provider = domain.split('.');

    return provider[0] !== ''
};

test('Empty string email address returns false', () => {
    const response = isValidEmailAddress('');
    expect(response).toBeFalsy();
});

test('Null email address returns false', () => {
    const response = isValidEmailAddress(null);
    expect(response).toBeFalsy();
});

test('Undefined email address returns false', () => {
    const response = isValidEmailAddress(undefined);
    expect(response).toBeFalsy();
});

test('0 email address returns false', () => {
    const response = isValidEmailAddress(0);
    expect(response).toBeFalsy();
});

test('Email address without @ and .co returns false', () => {
    const response = isValidEmailAddress('christian');
    expect(response).toBeFalsy();
});

test('Email address without @ returns false', () => {
    const response = isValidEmailAddress('christian.temaarigmail.com');
    expect(response).toBeFalsy();
});

test('Email address without .co returns false', () => {
    const response = isValidEmailAddress('christian.temaari@gmail');
    expect(response).toBeFalsy();
});

test('Email address without @[provide].co returns false', () => {
    const response = isValidEmailAddress('christian.temaari@.com');
    expect(response).toBeFalsy();
});

test('Valid email address returns true', () => {
    const response = isValidEmailAddress('christian.temaari@gmail.com');
    expect(response).toBeTruthy();
});
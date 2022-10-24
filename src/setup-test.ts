import '@testing-library/jest-dom';

jest.mock('firebase/database', () => ({
  get: jest.fn(),
  getDatabase: jest.fn(),
  push: jest.fn(),
  ref: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
})

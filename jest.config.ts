export default {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        "preprocess": true
      }
    ],
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setup-test.ts'],
  verbose: true,
};

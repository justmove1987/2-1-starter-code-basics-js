module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-empty': [2, 'never'],
        'type-enum': [
          2,
          'always',
          [
            'build',   // Changes that affect the build system or external dependencies
            'feat',    // A new feature
            'fix',     // A bug fix
            'docs',    // Documentation only changes
            'style',   // Changes that do not affect the meaning of the code
            'refactor',// A code change that neither fixes a bug nor adds a feature
            'test',    // Adding missing tests or correcting existing tests
            'chore',   // Other changes that don't modify src or test files
          ]
        ],
        'subject-empty': [2, 'never'],
        'subject-case': [
          2,
          'never',
          ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        ]
    },
    helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
    prompter: (cz) => {
      return {
        types: [
          { value: 'feat', name: 'feat:     ✨  A new feature', emoji: '✨' },
          { value: 'fix', name: 'fix:      🐛  A bug fix', emoji: '🐛' },
          { value: 'docs', name: 'docs:     📚  Documentation only changes', emoji: '📚' },
          { value: 'style', name: 'style:    💎  Changes that do not affect the meaning of the code', emoji: '💎' },
          { value: 'refactor', name: 'refactor: 📦  A code change that neither fixes a bug nor adds a feature', emoji: '📦' },
          { value: 'test', name: 'test:     🚨  Adding missing tests or correcting existing tests', emoji: '🚨' },
          { value: 'chore', name: 'chore:    🔨  Other changes that do not modify src or test files', emoji: '🔨' }
        ]
      };
    }
  };
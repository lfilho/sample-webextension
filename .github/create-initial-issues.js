// Helper file to create the initial issues based on the design doc
// Run it like so: `node create-initial-issues.js`
// GitHub cli is required.
// It doesn't support programmatic milestones creation yet so we have to create them manually before running this file

import { execSync } from 'child_process';

function exec(cmd) {
  return execSync(cmd, { encoding: 'utf8' });
}

const milestones = [
  {
    milestone: 'Environment setup',
    issues: ['Set up github actions for automatic releases'],
  },
  {
    milestone: 'Project scaffolding',
    issues: [
      'Go over initial set of issues and give them a description as applicable',
      'Minimal "hello world" extension',
      'Automate generating/packaging the extension for continuous testing',
      'Decide which testing framework to use and set it up',
    ],
  },
  {
    milestone: 'Essential functionality',
    issues: [
      'Requests matching against the deny list are blocked',
      'Requests matching against the allow list pass',
      'Requests not matching either of the lists pass',
      'Requests matching against both lists take the allow list as precedence and are not blocked',
      'Metric is emitted upon blocking a request',
      'User can provide feedback via extension (bug reports, feature requests…)',
    ],
  },
  {
    milestone: `Extension's lifecycle`,
    issues: [
      'Installing the extension asks for required permissions',
      'Basic functionality works the same across browser restarts',
      'Basic functionality works the same across different profiles',
      'Test extension automatic update mechanism works',
    ],
  },
  {
    milestone: 'Interactive functionality',
    issues: [
      'User can add entries to the allow list',
      'User can add entries to deny list',
      'Upon adding entries to allow or deny list, offer to reload current tab, all tabs, or none',
      'Metric is emitted upon adding a new entry to the allow or deny lists',
      'Custom additions to the lists are persisted across browser restarts (for the profile only)',
      'User can disable/enable the extension for the current tab',
      'Metric is emitted upon disabling/enabling the extension for a tab',
    ],
  },
  {
    milestone: 'Advanced functionality',
    issues: [
      'The extension is able to update the local deny list from DDG’s servers',
      'The extension is able to sync custom entries to the lists to the user’s account (Google’s, Mozilla’s, etc) so they persit across devices/browser installations.',
      'Ensure compatibility with Google Chrome (desktop)',
      'Ensure compatibility with Microsoft Edge (desktop)',
      'Ensure compatibility with Apple Safari (desktop)',
      'Ensure compatibility with Google Chrome (mobile)',
      'Ensure compatibility with Microsoft Edge (mobile)',
      'Ensure compatibility with Apple Safari (mobile)',
    ],
  },
  {
    milestone: 'Reporting functionality',
    issues: [
      'Extension can show a simple report with “top hitters” and “total requests blocked over time” – local',
      'Extension can show a simple report with “top hitters” and “total requests blocked over time” – worldwide',
    ],
  },
];

for (const milestone of milestones) {
  const milestoneLabel = milestone.milestone;
  for (const title of milestone.issues) {
    const createCmd = `gh issue create -t "${title}" -m "${milestoneLabel}" -b ""`;
    console.log(`\nCreating issue: ${title}`);
    // console.log(createCmd);
    exec(createCmd);
  }
}

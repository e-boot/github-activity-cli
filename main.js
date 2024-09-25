
import getUserActivity from './fetchAPI.js';
import displayActivity from './view.js';

const userName =process.argv[2];


if(!userName) {
    console.error('Please provide a GitHub username.');
    process.exit(1);
}

  // Main function to fetch and display activity
  (async () => {
    // Get the username from command line arguments
    const username = process.argv[2];

    if (!username) {
      console.error('Please provide a GitHub username.');
      process.exit(1);
    }

    const events = await getUserActivity(username);
    displayActivity(events);
  })();